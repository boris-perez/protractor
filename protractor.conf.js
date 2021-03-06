// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  specs: [
    //------>FLOW OF EXECUTION<------
    //login
    './e2e/login/login.e2e-spec.ts',

    //social-chat
    './e2e/social-chat/create-individualChat.e2e-spec.ts',
    './e2e/social-chat/send-message-image.e2e-spec.ts',
    './e2e/social-chat/send-message-docx.e2e-spec.ts',
    './e2e/social-chat/send-message-pdf.e2e-spec.ts',
    './e2e/social-chat/create-groupChat.e2e-spec.ts',
    './e2e/social-chat/send-message.e2e-spec.ts',


    './e2e/social-chat/edit-message.e2e-spec.ts',
    './e2e/social-chat/change-privacy.e2e-spec.ts',
    './e2e/social-chat/add-participant.e2e-spec.ts',
    './e2e/social-chat/remove-participant.e2e-spec.ts',
    './e2e/social-chat/edit-message.e2e-spec.ts',

    //logout and login
    './e2e/login/login1.e2e-spec.ts',

    //social-chat
    './e2e/social-chat/enter-groupChat.e2e-spec.ts',
    './e2e/social-chat/reply-message.e2e-spec.ts',
    './e2e/social-chat/delete-message.e2e-spec.ts',
    './e2e/social-chat/mute-conversation.e2e-spec.ts',
    './e2e/social-chat/add-participant-list-conversation.e2e-spec.ts',

    './e2e/social-chat/left-conversation.e2e-spec.ts'

    //social-explanation
    // './e2e/social-explanation/createExplanations.e2e-spec.ts',
    // './e2e/social-explanation/editExplanations.e2e-spec.ts',
    // './e2e/social-explanation/navigateExplanations.e2e-spec.ts',
    // './e2e/social-explanation/deleteExplanations.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        'start-maximized'
      ]
    }
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  //baseUrl: 'http://172.16.4.88:8000/',
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',

  onPrepare: function () {
    browser.manage().timeouts().implicitlyWait(6000);
    browser.ignoreSynchronization = true;
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  }
};
