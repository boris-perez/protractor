/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Protractor create an individual chat', () => {

  it('Should select a field', () => {
    chat.sleepPageObject();
    chat.selectField();
  });

  it('Should open chat icon', () => {
    chat.openChat();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should select new chat', () => {
    chat.clickNewChat();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should create individual conversation', () => {
    chat.clickSkipChat();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should select the create option', () => {
    chat.clickCreateChat();
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  it('Should go to list conversation', () => {
    chat.clickBackChat();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });
});
