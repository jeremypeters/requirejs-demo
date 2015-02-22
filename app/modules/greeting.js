define(['underscore'], function(_) {
  var greetings = ['Hi', 'Hello', 'Hey', 'Sup', 'Yo'];

  var module = {
    randomGreeting: function(){
      return _.sample(greetings);
    }
  };

  return module;
});
