/**
 * Created by bperez 04/25/2019.
 */

import {Explanation} from './explanation.po';
import {DATA_CONSTANT} from './explanation.constant';

const explanation = new Explanation();
const email = DATA_CONSTANT.EMAIL;
const password = DATA_CONSTANT.PASSWORD;

describe('Protractor Login showcase ', () => {

  it('should fill credentials', () => {
    explanation.get();
    explanation.setUserName(email);
    explanation.setPasswordName(password);
  });

  it('should select explanation option', () => {
    explanation.sendLoginButton();
  });
});
