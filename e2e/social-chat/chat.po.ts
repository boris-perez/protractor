/**
 * @author Boris Perez
 */

import {browser, by, element} from 'protractor';
import {DATA_CONSTANT, HTML_ELEMENT} from './chat.constant';

export class Chat {

  /* FIELD SHORTCUT */
  private _field = element(by.id(HTML_ELEMENT.FIELD_SHORTCUT.FIRST_FIELD));
  private _chatOpen = element(by.id(HTML_ELEMENT.FIELD_SHORTCUT.CHAT_ICON));

  /* CHAT POPOVER */
  private _chatNew = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_NEW));
  private _chatSkip = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_SKIP));
  private _chatSelectContact = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_SELECT_CONTACT));
  private _chatSelectContact1 = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_SELECT_CONTACT1));
  private _chatCreate = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_CREATE));
  private _chatBack = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_BACK));
  private _nameChat = element(by.className(HTML_ELEMENT.CHAT_POPOVER.CHAT_NAME));
  private _messageInput = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_MESSAGE_INPUT));
  private _messageInputFile = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_INPUT));
  private _selectConversation = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_SELECT_CONVERSATION));
  private _searchContactChat = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_SEARCH_INPUT));
  private _sendMessage = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_SEND_MESSAGE));
  private _optionsMessage = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_MESSAGE_OPTIONS));
  private _optionsMessage3 = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_MESSAGE_OPTIONS3));
  private _editMessage = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_EDIT_OPTIONS));
  private _deleteMessage = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_DELETE_OPTION));
  private _replyMessage = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_REPLY_OPTION));
  private _arrowMenu = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_MENU_ARROW));
  private _arrowMenuOption = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_SELECT_ARROW));
  private _privacy = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_PRIVACY));
  private _mute = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_MUTE));
  private _addParticipantListConversation = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_ADD_PARTICIPANT));
  private _addParticipant = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_ADD_PARTICIPANT1));
  private _addOption = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_ADD));
  private _leftOption = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_LEFT));
  private _removeOption = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_SELECT_PARTICIPANT));
  private _removeUser = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_REMOVE_PARTICIPANT));
  private _chatName = element(by.id(HTML_ELEMENT.CHAT_POPOVER.TITLE_CHAT));

  public sleepPageObject(): void {
    browser.sleep(DATA_CONSTANT.SLEEP_NAVIGATION);
  }

  public clickOptionsMessage(): void {
    browser.actions().mouseDown(this._optionsMessage).perform();
    browser.sleep(3000);
    browser.actions().mouseUp().perform();
  }

  public clickOptionsMessage2(): void {
    browser.actions().mouseDown(this._optionsMessage3).perform();
    browser.sleep(3000);
    browser.actions().mouseUp().perform();
  }

  public clickOptionsMessage3(): void {
    browser.actions().mouseDown(this._optionsMessage3).perform();
    browser.sleep(3000);
    browser.actions().mouseUp().perform();
  }

  public selectField(): void {
    this._field.click();
  }

  public openChat(): void {
    this._chatOpen.click();
  }

  public clickNewChat(): void {
    this._chatNew.click();
  }

  public clickSkipChat(): void {
    this._chatSkip.click();
  }

  public clickBackChat(): void {
    this._chatBack.click();
  }

  public clickCreateChat(): void {
    this._chatCreate.click();
  }

  public clickSelectContact(): void {
    this._chatSelectContact.click();
  };

  public clickSelectContact1(): void {
    this._chatSelectContact1.click();
  };

  public clickNextChat(): void {
    this._chatSkip.click();
  };

  public clickSelectConversation(): void {
    this._selectConversation.click();
  };

  public clickSendMessage(): void {
    this._sendMessage.click();
  }

  public clickEditMessage(): void {
    this._editMessage.click();
    this._messageInput.clear();
  }

  public clickArrow(): void{
    browser.actions().mouseMove(this._selectConversation).perform();
    this._arrowMenu.click();
  }

  public clickArrowRightRemove(): void{
    browser.actions().mouseMove(this._removeOption).perform();
    this._arrowMenuOption.click();
  }

  public clickRemoveOption(): void{
   this._removeUser.click();
  }

  public clickPrivacy(): void {
    this._privacy.click();
  }

  public clickMute(): void {
    this._mute.click();
  }

  public clickAddParticipantListConversation(): void {
    this._addParticipantListConversation.click();
  }

  public clickAdd(): void {
    this._addOption.click();
  }

  public clickLeftOption(): void {
    this._leftOption.click();
  }

  public clickNameConversation(): void {
    this._chatName.click();
  }

  public clickAddParticipant(): void {
    this._addParticipant.click();
  }

  public clickDeleteMessage(): void {
    this._deleteMessage.click();
  }

  public clickReplyMessage(): void {
    this._replyMessage.click();
  }

  public searchContactChat(text: string): void {
    this._searchContactChat.sendKeys(text);
  }

  public nameChat(text: string): void {
    this._nameChat.sendKeys(text);
  }

  public writeMessageInput(text: string): void {
    this._messageInput.sendKeys(text);
  }

  public messageFile(file):void{
    this._messageInputFile.sendKeys(file);
  }

  public messageInput () : any {
    return this._messageInput.getText();
  }

  public getInfoGroup () : any {
    return this._chatName.getText();
  }

  public getTitleChat () : any {
    return this._chatName.getText();
  }

}


