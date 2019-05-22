/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Protractor Add participant from list conversation', () => {

  it('Should conversation options', () => {
    chat.clickArrowRight();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should Select add participant from list conversation', () => {
    chat.clickAddParticipantListConversation();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should select a contact', () => {
    chat.clickSelectContact();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
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
