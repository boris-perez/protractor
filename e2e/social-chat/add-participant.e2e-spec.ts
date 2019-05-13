/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();
const message = DATA_CONSTANT.MESSAGE1;

describe('Protractor add participant', () => {

  it('Should select a conversation', () => {
    chat.clickSelectConversation();
    chat.sleepPageObject()
  });

  it('Should select the name of conversation', () => {
    chat.clickNameConversation();
    chat.sleepPageObject()
  });

  it('Should select add participant option', () => {
    chat.clickAddParticipant();
    chat.sleepPageObject()
  });

  it('Should select a contact', () => {
    chat.clickSelectContact();
    chat.sleepPageObject()
  });

  it('Should select add option', () => {
    chat.clickAdd();
    chat.sleepPageObject()
  });

  it('Should go to list conversation', () => {
    chat.clickBackChat();
    chat.sleepPageObject()
  });
});
