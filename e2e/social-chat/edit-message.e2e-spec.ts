/**
 * Created by bperez 04/25/2019.
 */
import {Chat} from './chat.po';
import {DATA_CONSTANT} from './chat.constant';

const chat = new Chat();
const message = DATA_CONSTANT.MESSAGE2;
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Protractor Edit Message', () => {

  it('Should select the options of message', () => {
    chat.clickOptionsMessage();
    chat.sleepPageObject()
  });

  it('Should Select edit option', () => {
    chat.clickEditMessage();
    chat.writeMessageInput(message);
    chat.clickSendMessage();
    chat.sleepPageObject();
  // expect(chat.getContentAlert()).toBe(alertEdit);
  });

  it('Should go to list conversation', () => {
    chat.clickBackChat();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });
});
