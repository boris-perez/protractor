/**
 * Created by bperez 04/25/2019.
 */
import {Explanation} from './explanation.po';
import {DATA_CONSTANT} from './explanation.constant';

const explanation = new Explanation();
const editExplanation = DATA_CONSTANT.EDIT_EXPLANATION;
const alertEdit = DATA_CONSTANT.UPDATE_EXPLANATION;

describe('Protractor Edit Explanation', () => {

  it('Should select Edit Explanation option', () => {
    explanation.clickEditExplanations();
  });

  it('Should Edit the Explanation', () => {
    explanation.editExplanations(editExplanation);
    explanation.clickSaveExplanations();
    explanation.sleepPageObject();
    expect(explanation.getContentAlert()).toBe(alertEdit);
  });
});
