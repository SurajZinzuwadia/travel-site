var $ = require('jquery');
import Person from './modules/Person';
class Adult extends Person{
	payTaxes(){
		console.log(this.name + " he owes $0 in taxes");
	}
}

alert("Hello bro");

var john = new Person("John" , "blue");
john.greet();


var jane = new Adult("jane Smith" , "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();
 