/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const chat = new Chat();

describe('Change of privacy', () => {

  it('Should conversation options', () => {
    chat.clickArrowRight();
    chat.sleepPageObject()
  });

  it('Should change the privacy', () => {
    chat.clickPrivacy();
    chat.sleepPageObject()
  });

  it('Should close conversation options', () => {
    chat.clickArrowLeft();
    chat.sleepPageObject()
  });
});
