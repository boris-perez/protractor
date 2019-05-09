/**
 * @author Boris Perez
 */

import {browser, by, element} from 'protractor';
import {DATA_CONSTANT, HTML_ELEMENT} from './chat.constant';

export class Chat {

  /* FIELD SHORTCUT */
  private _field = element(by.css(HTML_ELEMENT.FIELD_SHORTCUT.FIRST_FIELD));
  private _openChat = element(by.css(HTML_ELEMENT.FIELD_SHORTCUT.CHAT_ICON));

  /* CHAT POPOVER */
  private _newChat = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_NEW));
  private _skipChat = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_SKIP));
  private _selectContact = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_SELECT_CONTACT));
  private _createChat = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_CREATE));
  private _backChat = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_BACK));
  private _nextChat = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_NEXT));
  private _nameChat = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_NAME));
  private _messageInput = element(by.id(HTML_ELEMENT.CHAT_POPOVER.CHAT_MESSAGE_INPUT));
  private _selectConversation = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_SELECT_CONVERSATION));
  private _searchContactChat = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_SEARCH_INPUT));
  private _sendMessage = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_SEND_MESSAGE));
  private _optionsMessage = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_MESSAGE_OPTIONS));
  private _editMessage = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_EDIT_OPTIONS));
  private _deleteMessage = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_DELETE_OPTION));
  private _replyMessage = element(by.css(HTML_ELEMENT.CHAT_POPOVER.CHAT_REPLY_OPTION));



  /* LUCY ALERT */
  private _alert = element(by.css(HTML_ELEMENT.LUCY_ALERT));

  public sleepPageObject(): void {
    browser.sleep(DATA_CONSTANT.SLEEP_NAVIGATION);
  }

  public selectField(): void {
    this._field.click();
  }

  public openChat(): void {
    this._openChat.click();
  }

  public clickNewChat(): void {
    this._newChat.click();
  }

  public clickSkipChat(): void {
    this._skipChat.click();
  }

  public clickBackChat(): void {
    this._backChat.click();
  }

  public clickCreateChat(): void {
    this._createChat.click();
  }

  public clickSelectContact(): void {
    this._selectContact.click();
  };

  public clickNextChat(): void {
    this._nextChat.click();
  };

  public clickSelectConversation(): void {
    this._selectConversation.click();
  };

  public clickSendMessage(): void {
    this._sendMessage.click();
  }

  public clickOptionsMessage(): void {
    this._optionsMessage.click();
  }

  public clickEditMessage(): void {
    this._editMessage.click();
    this._messageInput.clear();
  }

  public clickDeleteMessage(): void {
    this._deleteMessage.click();
  }

  public clickReplyMessage(): void {
    this._replyMessage.click();
  }

  public clickSearchContact(): void {
    this._searchContactChat.sendKeys();
  }

  public clickNameChat(): void {
      this._searchContactChat.sendKeys();
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

  public getContentAlert(): any {
    return this._alert.getText();
  }
}


