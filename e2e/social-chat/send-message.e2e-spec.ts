/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();
const message = DATA_CONSTANT.MESSAGE1;
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Protractor send a message', () => {

  it('Should select a conversation', () => {
    chat.clickSelectConversation();
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  it('Should write a message', () => {
    chat.writeMessageInput(message);
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  it('Should send a message', () => {
    chat.clickSendMessage();
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  it('Should go to list conversation', () => {
    chat.clickBackChat();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });
});
