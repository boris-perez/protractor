/**
 * Created by bperez 04/25/2019.
 */

import {Explanation} from './explanation.po';
import {EXPLANATION_CONSTANT} from "./explanation.constant";

const login = new Explanation();
const email = EXPLANATION_CONSTANT.EMAIL;
const password = EXPLANATION_CONSTANT.PASSWORD;

describe('Login option', () => {

  it('should fill credentials', () => {
    login.get();
    login.setUserName(email);
    login.setPasswordName(password);
    login.sleepPageObecjt();
  });

  it('should select login option', async () => {
    login.sendLoginButton();
    login.sleepPageObecjt();
  });
});
