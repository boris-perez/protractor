/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from './chat.constant';


const chat = new Chat();
const chatContact = DATA_CONSTANT.EMAIL1;
const nameChat = DATA_CONSTANT.NAME_CHAT;
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Protractor create group conversation', () => {

  it('Should select new chat', () => {
    chat.clickNewChat();
    // chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should search a contact', () => {
    chat.searchContactChat(chatContact);
    // chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should select a contact', () => {
    chat.clickSelectContact();
    // chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should select next option', () => {
    chat.clickNextChat();
    // chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should put a name of conversation', () => {
    chat.nameChat(nameChat);
    // chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should select the create option', () => {
    chat.clickCreateChat();
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
