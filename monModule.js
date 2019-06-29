// creé un fichier pour tester les module js
var sayHelllow = function(){
    console.log('Helow ! ');
};

var sayGoodBye = function(){
    console.log('Good By : This is the end ');
};

exports.sayHelllow = sayHelllow;
exports.sayGoodBye = sayGoodBye;