import {TweetsController} from './tweets.controller';

export const tweetsComponent = {
  template:
    '<div style="max-width: 800px; margin: auto;">' +
      '<tweet-form on-submit="$ctrl.submit(tweet)"></tweet-form>' +
      '<div>' +
        '<div class="panel panel-default">' +
          '<div class="panel-body" ng-repeat="tweet in $ctrl.tweets | orderBy:\'-id\'">' +
            '<tweet tweet="tweet"></tweet>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>',

  controller: TweetsController,
  bindings: {
    tweets: '<',
  },
};
