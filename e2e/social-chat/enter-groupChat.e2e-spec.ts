/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from './chat.constant';

const chat = new Chat();
const message = DATA_CONSTANT.MESSAGE2;

describe('Protractor Enter group chat', () => {

  it('Should select a field', () => {
    chat.selectField();
    chat.sleepPageObject();
  });

  it('Should open chat icon', () => {
    chat.openChat();
    chat.sleepPageObject();
  });

  it('Should select a conversation', () => {
    chat.sleepPageObject();
    chat.clickSelectConversation();
    chat.sleepPageObject();
  });

  it('Should write a message', () => {
    chat.writeMessageInput(message);
    chat.sleepPageObject()
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
