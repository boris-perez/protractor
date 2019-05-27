/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();
const title = DATA_CONSTANT.TITLE;
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Protractor add participant', () => {

  it('Should select a conversation', () => {
    chat.clickSelectConversation();
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  it('Should select the name of conversation', () => {
    chat.sleepPageObject();
    chat.clickNameConversation();
    chat.sleepPageObject();
    expect(chat.getInfoGroup()).toBe(title);
  });

  it('Should select add participant option', () => {
    chat.clickAddParticipant();
    chat.sleepPageObject();
    expect(chat.getInfoGroup()).toBe(title);
  });

  it('Should select a contact', () => {
    chat.clickSelectContact();
    chat.sleepPageObject();
    expect(chat.getInfoGroup()).toBe(title);
  });

  it('Should select add option', () => {
    chat.clickAdd();
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  it('Should go to list conversation', () => {
    chat.clickBackChat();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });
});
