/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();
const titleChat =  DATA_CONSTANT.TITLE_CHAT;

describe('Mute conversation', () => {

  it('Should conversation options', () => {
    chat.clickArrow();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should mute the conversation', () => {
    chat.clickMute();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

  it('Should close conversation options', () => {
    chat.clickArrow();
    chat.sleepPageObject();
    expect(chat.getTitleChat()).toBe(titleChat);
  });

});
