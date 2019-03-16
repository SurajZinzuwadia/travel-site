class Person{
	constructor(fullname,favcolor){
			this.name = fullname;
			this.favcolor = favcolor;
	}
	greet(){
		console.log("Hi there abc, my name is " + this.name + "and fav color is " + this.favcolor)
	}
}

export default Person;