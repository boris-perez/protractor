/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();
const message = DATA_CONSTANT.MESSAGE1;

describe('Protractor send a message', () => {

  it('Should select a conversation', () => {
    chat.clickSelectConversation();
  });

  it('Should write a message', () => {
    chat.writeMessageInput(message);
  });

  it('Should send a message', () => {
    chat.clickSendMessage();
    chat.sleepPageObject()
  });

  it('Should go to list conversation', () => {
    chat.clickBackChat();
    chat.sleepPageObject()
  });
});
