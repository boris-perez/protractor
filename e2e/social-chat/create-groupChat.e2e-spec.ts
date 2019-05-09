/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from './chat.constant';


const chat = new Chat();
const chatContact = DATA_CONSTANT.EMAIL1;
const nameChat = DATA_CONSTANT.NAME_CHAT;

describe('Protractor create group conversation', () => {

  it('Should select new chat', () => {
    chat.clickNewChat();
  });

  it('Should search a contact', () => {
    chat.searchContactChat(chatContact);
  });

  it('Should select a contact', () => {
    chat.clickSelectContact();
  });

  it('Should create group conversation', () => {
    chat.clickNextChat();
    // expect(chat.getTitleExplanation()).toBe(titleExplanation);
  });

  it('Should put a name of conversation', () => {
    chat.nameChat(nameChat);
    // expect(chat.getTitleExplanation()).toBe(titleExplanation);
  });

  it('Should select the create option', () => {
    chat.clickCreateChat();
    chat.sleepPageObject()
     // expect(chat.getTitleExplanation()).toBe(titleExplanation);
  });
  it('Should go to list conversation', () => {
    chat.clickBackChat();
    chat.sleepPageObject()
  });

});
