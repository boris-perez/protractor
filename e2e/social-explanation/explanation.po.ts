/**
 * @author Boris Perez
 */

import {browser, by, element} from 'protractor';
import {DATA_CONSTANT, HTML_ELEMENT} from './explanation.constant';

export class Explanation {

  /* FIELD SHORTCUT */
  private _field = element(by.id(HTML_ELEMENT.FIELD_SHORTCUT.FIRST_FIELD));
  private _openExplanation = element(by.id(HTML_ELEMENT.FIELD_SHORTCUT.EXPLANATION_ICON));

  /* EXPLANATION POPOVER */
  private _newExplanation = element(by.id(HTML_ELEMENT.EXPLANATION_POPOVER.EXPLANATION_NEW));
  private _explanationContent = element(by.id(HTML_ELEMENT.EXPLANATION_POPOVER.EXPLANATION_CONTENT));
  private _cancelExplanation = element(by.id(HTML_ELEMENT.EXPLANATION_POPOVER.EXPLANATION_CANCEL));
  private _saveExplanation = element(by.id(HTML_ELEMENT.EXPLANATION_POPOVER.EXPLANATION_SAVE));
  private _editExplanation = element(by.id(HTML_ELEMENT.EXPLANATION_POPOVER.EXPLANATION_EDIT));
  private _deleteExplanation = element(by.id(HTML_ELEMENT.EXPLANATION_POPOVER.EXPLANATION_DELETE));
  private _previousExplanation = element(by.id(HTML_ELEMENT.EXPLANATION_POPOVER.EXPLANATION_PREVIOUS));
  private _nextExplanation = element(by.id(HTML_ELEMENT.EXPLANATION_POPOVER.EXPLANATION_NEXT));
  private _titleExplanation = element(by.id(HTML_ELEMENT.EXPLANATION_POPOVER.EXPLANATION_TITLE));

  /* LUCY ALERT */
  private _alert = element(by.css(HTML_ELEMENT.LUCY_ALERT));


  public sleepPageObject(): void {
    browser.sleep(DATA_CONSTANT.SLEEP_NAVIGATION);
  }

  public selectField(): void {
    this._field.click();
  }

  public openExplanations(): void {
    this._openExplanation.click();
  }

  public clickNewExplanations(): void {
    this._newExplanation.click();
  }

  public clickSaveExplanations(): void {
    this._saveExplanation.click();
  }

  public clickEditExplanations(): void {
    this._editExplanation.click();
    this._explanationContent.clear();
  }

  public clickDeleteExplanations(): void {
    this._deleteExplanation.click();
  }

  public clickNextExplanations(): void {
    this._nextExplanation.click();
  }

  public clickPreviousExplanations(): void {
    this._previousExplanation.click();
  }

  public clickCancelExplanations(): void {
    this._cancelExplanation.click();
  }

  public writeNewExplanations(textExplanations: string): void {
    this._explanationContent.sendKeys(textExplanations);
  }

  public editExplanations(textExplanations: string): void {
    this._explanationContent.sendKeys(textExplanations);
  }

  public getTitleExplanation(): any {
    return this._titleExplanation.getText();
  }

  public getContent(): any {
    return this._explanationContent.getText();
  }

  public getContentAlert(): any {
    return this._alert.getText();
  }
}


