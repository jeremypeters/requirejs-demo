require.config({
  paths: {
    'jquery'     : '../bower_components/jquery/dist/jquery',
    'underscore' : '../bower_components/underscore/underscore',
    'greeting'   : 'modules/greeting',
    'name'       : 'modules/name'
  },
  shim : {
    underscore : {
      exports : "_"
    }
  }
});

require(['jquery', 'greeting', 'name'], function($, greeting, name){
  var message = greeting.randomGreeting() + ', ' + name.randomName() + '!';

  $('body').append('<h1>' + message + '</h1>');
});
