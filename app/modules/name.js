define(['underscore'], function(_) {
  var names = ['John', 'Jim', 'Mike', 'Jane', 'Sarah', 'Claire'];

  var module = {
    randomName: function(){
      return _.sample(names);
    }
  };

  return module;
});
