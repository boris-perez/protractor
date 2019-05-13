/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';


const chat = new Chat();

describe('Protractor remove participant', () => {

  it('Should select a conversation', () => {
    chat.clickSelectConversation();
    chat.sleepPageObject()
  });

  it('Should select the name of conversation', () => {
    chat.clickNameConversation();
    chat.sleepPageObject()
  });

  it('Should select participant to remove', () => {
    chat.clickArrowRightRemove();
    chat.sleepPageObject()
  });

  it('Should select remove option', () => {
    chat.clickRemoveOption();
    chat.sleepPageObject()
  });
});
