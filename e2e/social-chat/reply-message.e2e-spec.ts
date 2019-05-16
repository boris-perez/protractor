/**
 * Created by bperez 04/25/2019.
 */
import {Chat} from './chat.po';
import {DATA_CONSTANT} from './chat.constant';

const chat = new Chat();
const message = DATA_CONSTANT.MESSAGE1;
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Protractor reply Message', () => {

  it('Should select the options of message', () => {
    chat.clickOptionsMessage2();
    chat.sleepPageObject()
  });

  it('Should Select reply option', () => {
    chat.clickReplyMessage();
    chat.writeMessageInput(message);
    chat.clickSendMessage();
    chat.sleepPageObject();
  // expect(chat.getContentAlert()).toBe(alertEdit);
  });
});
