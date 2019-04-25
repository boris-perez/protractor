/**
 * Created by bperez 04/25/2019.
 */
import {Explanation} from './explanation.po';
import {EXPLANATION_CONSTANT} from "./explanation.constant";

const editExplanation = new Explanation();
const editExplanations = EXPLANATION_CONSTANT.EDIT_EXPLANATION;
const alertEdit = EXPLANATION_CONSTANT.UPDATE_EXPLANATION;

describe('Protractor Edit Explanations', () => {

  it('Should select Edit Explanation option', () => {
    editExplanation.clickEditExplanations();
  });

  it('Should Edit the Explanation', () => {
    editExplanation.editExplanations(editExplanations);
    editExplanation.clickSaveExplanations();
    expect(editExplanation.getContentAlert()).toBe(alertEdit);
  });
});
