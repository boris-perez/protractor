/**
 * Created by bperez 04/24/2019.
 */

import {Explanation} from './explanation.po';
import {EXPLANATION_CONSTANT} from "./explanation.constant";

const createExplanation = new Explanation();
const newExplanation = EXPLANATION_CONSTANT.NEW_EXPLANATION;
const titleExplanation = EXPLANATION_CONSTANT.TITLE_EXPLANATION;
const createAlert = EXPLANATION_CONSTANT.CREATE_EXPLANATION;

describe('Protractor Write and Save and Explanations', () => {

  it('Should select a field', () => {
    createExplanation.selectField();
  });

  it('Should open an explanations', () => {
    createExplanation.openExplanations();
    expect(createExplanation.getTitleExplanation()).toBe(titleExplanation);
  });

  it('Should write an explanation', () => {
    createExplanation.getContent().getText().then((text) => {
      if (text !== '') {
        createExplanation.clickNewExplanations();
      }
      createExplanation.writteNewExplanations(newExplanation);
    });
  });

  it('Should save explanation', () => {
    createExplanation.clickSaveExplanations();
    expect(createExplanation.getContentAlert()).toBe(createAlert);
  });
});

describe('Protractor Write and Cancel an Explanations', () => {

  it('Should write an explanation', () => {
    createExplanation.getContent().getText().then((text) => {
      if (text !== '') {
        createExplanation.clickNewExplanations();
      }
      createExplanation.writteNewExplanations(newExplanation);
    });
  });

  it('Should cancel explanation', () => {
    createExplanation.clickCancelExplanations();
    expect(createExplanation.getContent()).toEqual(createExplanation.getContent())
  });
});
