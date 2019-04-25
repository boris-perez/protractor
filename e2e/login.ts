/**
 * Created by bperez 04/25/2019.
 */

import {Explanation} from './explanation.po';
import {DATA_CONSTANT} from "./explanation.constant";

const login = new Explanation();
const email = DATA_CONSTANT.EMAIL;
const password = DATA_CONSTANT.PASSWORD;

describe('Login option', () => {

  it('should fill credentials', () => {
    login.get();
    login.setUserName(email);
    login.setPasswordName(password);
  });

  it('should select login option', async () => {
    login.sendLoginButton();
  });
});
