/**
 * Created by bperez 04/25/2019.
 */
import {Explanation} from './explanation.po';
import {DATA_CONSTANT} from './explanation.constant';

describe('Delete Explanation', () => {

  const explanation = new Explanation();
  const deleteAlert = DATA_CONSTANT.REMOVE_EXPLANATION;

  it('Should delete the explanation', () => {
    explanation.clickDeleteExplanations();
    explanation.sleepPageObject();
    expect(explanation.getContentAlert()).toBe(deleteAlert);
  });
});
