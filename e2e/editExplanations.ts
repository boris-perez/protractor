/**
 * Created by bperez 04/25/2019.
 */
import {Explanation} from './explanation.po';
import {DATA_CONSTANT} from "./explanation.constant";

const editExplanation = new Explanation();
const editExplanations = DATA_CONSTANT.EDIT_EXPLANATION;
const alertEdit = DATA_CONSTANT.UPDATE_EXPLANATION;

describe('Protractor Edit Explanations', () => {

  it('Should select Edit Explanation option', () => {
    editExplanation.clickEditExplanations();
  });

  it('Should Edit the Explanation', () => {
    editExplanation.editExplanations(editExplanations);
    editExplanation.clickSaveExplanations();
    editExplanation.sleepPageObecjt();
    expect(editExplanation.getContentAlert()).toBe(alertEdit);
  });
});
