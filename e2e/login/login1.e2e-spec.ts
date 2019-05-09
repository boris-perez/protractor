/**
 * Created by bperez 04/25/2019.
 */

import {Login} from './login.po';
import {DATA_CONSTANT} from './login.constant';

const login = new Login();
const email = DATA_CONSTANT.EMAIL1;
const password = DATA_CONSTANT.PASSWORD;

describe('Logout showcase ', () => {

  it('should fill credentials', () => {
    login.clickLogoutButton();
  });
});


describe('Login showcase ', () => {

  it('should fill credentials', () => {
    login.setUserName(email);
    login.setPasswordName(password);
  });

  it('should select login option', () => {
    login.sendLoginButton();
  });
});
