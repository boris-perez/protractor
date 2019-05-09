/**
 * @author Boris Perez
 */

import {browser, by, element} from 'protractor';
import {HTML_ELEMENT} from './login.constant';

export class Login {

  /* LOGIN PAGE */
  private _username = element(by.id(HTML_ELEMENT.LOGIN.USERNAME_FIELD));
  private _password = element(by.id(HTML_ELEMENT.LOGIN.PASSWORD_FIELD));
  private _loginButton = element(by.buttonText(HTML_ELEMENT.LOGIN.SUBMIT_BUTTON));
  private _logoutButton = element(by.buttonText(HTML_ELEMENT.LOGOUT));

  public get(): any {
    return browser.get('/');
  }

  public sendLoginButton(): void {
    this._loginButton.click();
  }

  public setUserName(user: string): void {
    this._username.sendKeys(user);
  }

  public setPasswordName(passwordUser: string): void {
    this._password.sendKeys(passwordUser);
  }
  public clickLogoutButton(): void {
    this._logoutButton.click();
  }
}


