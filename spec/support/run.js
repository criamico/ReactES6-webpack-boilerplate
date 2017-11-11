import Jasmine from 'jasmine';

let jasmine = new Jasmine();
// this line to point to your jasmine.json
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();
