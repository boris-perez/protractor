/**
 * Created by bperez 04/25/2019.
 */

import {Explanation} from './explanation.po';
import {DATA_CONSTANT} from './explanation.constant';

const explanation = new Explanation();
const newExplanation = DATA_CONSTANT.NEW_EXPLANATION;
const createAlert = DATA_CONSTANT.CREATE_EXPLANATION;


describe('Protractor Navigate between cards', () => {

  it('Should created new explanation', () => {
    explanation.getContent().getText().then((text) => {
      if (text !== '') {
        explanation.clickNewExplanations();
      }
      explanation.writeNewExplanations(newExplanation);
      explanation.clickSaveExplanations();
    });
    explanation.sleepPageObject();
    expect(explanation.getContentAlert()).toBe(createAlert);
  });

  it('Should explanation to next explanation', () => {
    explanation.clickNextExplanations();
    explanation.sleepPageObject();
  });

  it('Should explanation previous explanation', () => {
    explanation.clickPreviousExplanations();
    explanation.sleepPageObject();
    expect(explanation.getContent()).toBe(newExplanation);
  });
});
