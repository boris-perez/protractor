/**
 * Created by bperez 04/25/2019.
 */
import {Explanation} from './explanation.po';
import {EXPLANATION_CONSTANT} from "./explanation.constant";

describe('Delete Explanations', () => {

  const deletedExplanation = new Explanation();
  const deleteAlert = EXPLANATION_CONSTANT.REMOVE_EXPLANATION;

  it('Should delete the explanation', () => {
    deletedExplanation.clickDeleteExplanations();
    expect(deletedExplanation.getContentAlert()).toBe(deleteAlert);
  });
});
