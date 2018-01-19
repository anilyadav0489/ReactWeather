function customPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else {
      reject('Both arguments should be numbers');
    }
  });
}

customPromise(2, 3).then(function (sum){
  console.log('success', sum);
}, function (err){
  console.log('error occurred', err);
});


customPromise(2).then(function (sum){
  console.log('success', sum);
}, function (err){
  console.log('error occurred', err);
});
