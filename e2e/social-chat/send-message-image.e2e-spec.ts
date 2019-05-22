/**
 * Created by bperez 04/24/2019.
 */

import {Chat} from './chat.po';
import {DATA_CONSTANT} from "./chat.constant";

const path = require ('path');
const fileToUpload = '../resources/image.png';
const absolutePath = path.resolve(__dirname, fileToUpload);

const chat = new Chat();
const message = DATA_CONSTANT.MESSAGE1;

describe('Protractor send a message image type', () => {

  it('Should select a conversation', () => {
    chat.clickSelectConversation();
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  it('Should write a message', () => {
  //  chat.clickInput();
    chat.sleepPageObject();
    chat.sleepPageObject();
    chat.messageFile(absolutePath);
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  it('Should send a message', () => {
    chat.clickSendMessage();
    chat.sleepPageObject();
    expect(chat.messageInput()).toBe("");
  });

  // it('Should go to list conversation', () => {
  //   chat.clickBackChat();
  //   chat.sleepPageObject();
  //   //expect(chat.getTitleChat()).toBe(titleChat);
  // });
});
