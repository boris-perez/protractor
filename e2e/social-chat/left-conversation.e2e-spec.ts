/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Protractor left conversation', () => {

  it('Should conversation options', () => {
    chat.clickArrowRight();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should left conversation', () => {
    chat.clickLeftOption();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

});
