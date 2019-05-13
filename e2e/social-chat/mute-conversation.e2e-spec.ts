/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();

describe('Mute conversation', () => {

  it('Should conversation options', () => {
    chat.clickArrowRight();
  });

  it('Should mute the conversation', () => {
    chat.clickMute();
    chat.sleepPageObject()
  });

  it('Should close conversation options', () => {
    chat.clickArrowLeft();
  });

});
