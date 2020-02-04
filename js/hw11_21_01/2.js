function nod(n, m) {
  if(m > 0) { 
    let k = n%m;
    return nod(m, k); 
  } 
  else { 
    return Math.abs(n);  
  }
}

function fraction (nominator,denominator) {
    return {nominator:nominator, denominator:denominator};
}


function reduct (objFract) {
	let resNod = nod(objFract.nominator, objFract.denominator);
	let resNom = objFract.nominator / resNod;
	let resDenom = objFract.denominator / resNod;
	return fraction (resNom, resDenom);
}

let obj1 = fraction (1,8);
let obj2 = fraction (1,4);


function plus (obj1, obj2) {
	let nom_obj1 = obj1.nominator * obj2.denominator;
	let nom_obj2 = obj2.nominator * obj1.denominator;
	let nom = nom_obj1+nom_obj2;
	let denom = obj1.denominator * obj2.denominator;
	let preRes = fraction (nom, denom);
	return reduct(preRes);
}
console.log(plus(obj1, obj2));



function minus (obj1, obj2) {
	let nom_obj1 = obj1.nominator * obj2.denominator;
	let nom_obj2 = obj2.nominator * obj1.denominator;
	let nom = nom_obj1-nom_obj2;
	let denom = obj1.denominator * obj2.denominator;
	let preRes = fraction (nom, denom);
	return reduct(preRes);
}
console.log(minus(obj1, obj2));



function multiply (obj1, obj2) {
	let nom = obj1.nominator * obj2.nominator;
	let denom = obj1.denominator * obj2.denominator;
	let preRes = fraction (nom, denom);
	return reduct(preRes);
}
console.log(multiply(obj1, obj2));


function division (obj1, obj2) {
	let nom = obj1.nominator * obj2.denominator;
	let denom = obj1.denominator * obj2.nominator;
	let preRes = fraction (nom, denom);
	return reduct(preRes);
}
console.log(division(obj1, obj2));