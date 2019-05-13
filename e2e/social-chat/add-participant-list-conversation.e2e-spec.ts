/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';

const chat = new Chat();

describe('Protractor Add participant', () => {

  it('Should conversation options', () => {
    chat.clickArrowRight();
    chat.sleepPageObject()
  });

  it('Should Select add participant', () => {
    chat.clickAddParticipantListConversation();
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
