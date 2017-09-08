// destructuring (it is coming from structure)

let foo = {
	bar: 1,
	barz: 3
};

let { bar, barz } = foo; // very useful for large objects

// also with arrays
let firstNames = ['Mandy', 'Rick', 'Nick'];
let [ hulleMulle ] = firstNames;	// this gives us the first entry of the array

// creates an object from 2 variables 
let name = 'Willi';
let age = 34;

let obj = { name, age };
console.log(obj);

function doSomeThing({ foo, max = 20, callback }) {
	if (foo) {
		console.log(foo);
	}

	if (max > 20) {
		console.log('the limit of 20 was reached!');
	}

	if (callback) {
		callback();
	}
}

doSomeThing({callback: () => { console.log('it\'s called'); }, max:23});



document.write(hulleMulle);