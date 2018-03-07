

if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
    // c cannot be reassigned, it's a constant
    //c = 4;
}

// a is defined, no problem
console.log('a is', a);
// b and c are NOT defined anymore, its scope is gone
//console.log('b is',b);
//console.log('c is',c);
