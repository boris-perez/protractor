/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';

const chat = new Chat();

describe('Protractor create an individual chat', () => {

  it('Should select a field', () => {
    chat.selectField();
  });

  it('Should open chat icon', () => {
    chat.openChat();
  });

  it('Should select new chat', () => {
    chat.clickNewChat();
  });

  it('Should create individual conversation', () => {
    chat.clickSkipChat();
  });

  it('Should select the create option', () => {
    chat.clickCreateChat();
    chat.sleepPageObject()
  });

  it('Should go to list conversation', () => {
    chat.clickBackChat();
    chat.sleepPageObject()
  });
});
