/**
 * Created by bperez 04/24/2019.
 */

import {Explanation} from './explanation.po';
import {DATA_CONSTANT} from './explanation.constant';

const explanation = new Explanation();
const newExplanation = DATA_CONSTANT.NEW_EXPLANATION;
const titleExplanation = DATA_CONSTANT.TITLE_EXPLANATION;
const createAlert = DATA_CONSTANT.CREATE_EXPLANATION;

describe('Protractor Write and Save an Explanation', () => {

  it('Should select a field', () => {
    explanation.selectField();
  });

  it('Should open an explanation', () => {
    explanation.openExplanations();
    expect(explanation.getTitleExplanation()).toBe(titleExplanation);
  });

  it('Should write an explanation', () => {
    explanation.getContent().getText().then((text) => {
      if (text !== '') {
        explanation.clickNewExplanations();
      }
      explanation.writeNewExplanations(newExplanation);
    });
  });

  it('Should save explanation', () => {
    explanation.clickSaveExplanations();
    expect(explanation.getContentAlert()).toBe(createAlert);
  });
});

describe('Protractor Write and Cancel an Explanation', () => {

  it('Should write an explanation', () => {
    explanation.getContent().getText().then((text) => {
      if (text !== '') {
        explanation.clickNewExplanations();
      }
      explanation.writeNewExplanations(newExplanation);
    });
  });

  it('Should cancel explanation', () => {
    explanation.clickCancelExplanations();
    expect(explanation.getContent()).toEqual(explanation.getContent());
  });
});
