/**
 * Created by bperez 04/25/2019.
 */
import {Chat} from './chat.po';
import {DATA_CONSTANT} from './chat.constant';

const chat = new Chat();
const message = DATA_CONSTANT.MESSAGE2;
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Protractor delete Message', () => {

  it('Should select the options of message', () => {
    chat.clickOptionsMessage3();
    chat.sleepPageObject()
  });

  it('Should Select delete option', () => {
    chat.clickDeleteMessage();
    chat.sleepPageObject();
  });

  it('Should go to list conversation', () => {
    chat.clickBackChat();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });
});
