/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();
const message = DATA_CONSTANT.MESSAGE1;

describe('Protractor left conversation', () => {

  it('Should conversation options', () => {
    chat.clickArrowRight();
    chat.sleepPageObject()
  });

  it('Should left conversation', () => {
    chat.clickLeftOption();
    chat.sleepPageObject()
  });

});
