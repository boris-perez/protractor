/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";


const chat = new Chat();
const title = DATA_CONSTANT.TITLE;

describe('Protractor remove participant', () => {

  it('Should select a conversation', () => {
    chat.clickSelectConversation();
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  it('Should select the name of conversation', () => {
    chat.clickNameConversation();
    chat.sleepPageObject();
    expect(chat.getInfoGroup()).toBe(title);
  });

  it('Should select participant to remove', () => {
    chat.clickArrowRightRemove();
    chat.sleepPageObject();
    expect(chat.getInfoGroup()).toBe(title);
  });

  it('Should select remove option', () => {
    chat.clickRemoveOption();
    chat.sleepPageObject();
    expect(chat.getInfoGroup()).toBe(title);
  });
});
