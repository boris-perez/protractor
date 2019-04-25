import {browser, by, element} from 'protractor';
import {EXPLANATION_CONSTANT} from "./explanation.constant";

export class Explanation {

  /* LOGIN PAGE */
  private username = element(by.id('username'));
  private password = element(by.id('password'));
  private loginButton = element(by.buttonText('Login'));

  /* FIELD SHORTCUT */
  private field = element(by.css('body > app-root > showcase-form > article > section > div:nth-child(1) > section > div.showcase-form-input-container.showcase-form-line-input-group > input'));
  private openExplanation = element(by.id('explanation-icon'));

  /* EXPLANATION POPOVER */
  private newExplanation = element(by.id('explanation-new'));
  private explanationContent = element(by.id('explanation-content'));
  private cancelExplanation = element(by.id('explanation-cancel'));
  private saveExplanation = element(by.id('explanation-save'));
  private editExplanation = element(by.id('explanation-edit'));
  private deleteExplanation = element(by.id('explanation-delete'));
  private previousExplanation = element(by.id('explanation-previous'));
  private nextExplanation = element(by.id('explanation-next'));
  private titleExplanation = element(by.id('Explanations'));

  /* LUCY ALERT */
  private alert = element(by.css('section > scc-alert-lucy > article > section.scc-alert-lucy-center-section.scc-ui-scroll-container > p'));


  public get(): any {
    return browser.get('/');
  }

  public setUserName (user: string): void {
    this.username.sendKeys(user);
  }

  public setPasswordName (passwordUser: string): void {
    this.password.sendKeys(passwordUser);
  }

  public sendLoginButton (): void {
    this.loginButton.click();
  }

  public selectField (): void {
    this.field.click ();
  }

  public openExplanations (): void {
    this.openExplanation.click();
  }

  public clickNewExplanations (): void {
    this.newExplanation.click();
  }

  public clickSaveExplanations (): void {
    this.saveExplanation.click();
  }

  public clickEditExplanations (): void {
    this.editExplanation.click();
    this.explanationContent.clear();
  }

  public clickDeleteExplanations (): void {
    this.deleteExplanation.click();
  }

  public clickNextExplanations (): void {
    this.nextExplanation.click();
  }

  public clickPreviosExplanations (): void {
    this.previousExplanation.click();
  }

  public clickCancelExplanations (): void {
    this.cancelExplanation.click();
  }

  public writteNewExplanations (textExplanations: string): void {
    this.explanationContent.sendKeys(textExplanations);
  }

  public editExplanations (textExplanations: string): void {
    this.explanationContent.sendKeys(textExplanations);
  }

  public sleepPageObecjt (): void {
    browser.sleep(EXPLANATION_CONSTANT.SLEEP);
  }

  public getTitleExplanation (): any {
    return this.titleExplanation.getText();
  }

  public getContent (): any {
    return this.explanationContent.getText();
  }

  public getContentAlert (): any {
    return this.alert.getText();
  }
}


