/**
 * Created by bperez 04/25/2019.
 */

import {Explanation} from './explanation.po';
import {DATA_CONSTANT} from "./explanation.constant";

const navigate = new Explanation();
const newExplanation = DATA_CONSTANT.NEW_EXPLANATION;
const createAlert = DATA_CONSTANT.CREATE_EXPLANATION;


describe('Protractor Navigate Explanations', () => {

  it('Should created new explanation', () => {
    navigate.getContent().getText().then((text) => {
      if (text !== '') {
        navigate.clickNewExplanations();
      }
      navigate.writteNewExplanations(newExplanation);
      navigate.clickSaveExplanations();
    });
    navigate.sleepPageObecjt();
    expect(navigate.getContentAlert()).toBe(createAlert);
  });

  it('Should navigate to next explanation', () => {
    navigate.clickNextExplanations();
    navigate.sleepPageObecjt();
  });

  it('Should navigate previous explanation', () => {
    navigate.clickPreviosExplanations();
    navigate.sleepPageObecjt();
    expect(navigate.getContent()).toBe(newExplanation);
  });
});
