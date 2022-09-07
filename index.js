function myEach(collection, callback){
   Object.values(collection).forEach(e => callback(e))
    return collection
};

function myMap(collection, callback){
    const newArray = [];
    Object.values(collection).forEach(e => newArray.push(callback(e)));
     return newArray
 };

 function myReduce(collection, callback, acc){
    let accumulator;
    if(acc){
        accumulator = acc
    }else{
        accumulator = 0 - Object.values(collection)[1]
        //kinda confused, this is because its already starting from
        //the first value of the array as the accumulator?
        //but then why is it [1] and not [0]?
    }
    return Object.values(collection).reduce(callback, accumulator)
 };

 function myFind(collection, predicate){
    return Object.values(collection).find(e => predicate(e));
 }

 function myFilter(collection, predicate){
    return Object.values(collection).filter(e => predicate(e))
 }

 function mySize(collection){
    return Object.values(collection).length
 }

 function myFirst(collection, n){
    if (n){
        return collection.slice(0, n);
    }
    return collection[0]
 }

 function myLast(collection, n){
    if (n){
        return collection.slice(collection.length - n, collection.length);
    }
    return collection[collection.length - 1]
 }

function mySortBy(array, callback){
    return array.sort((a, b) => {callback(a) - callback(b)})
}

function myFlatten(array, boolVal, newArr = []){
    if (boolVal === true){
        newArr.push(Object.values(array))
    }else{

            newArr.push(Object.values(array))
        }
    return newArr
}

 function myKeys(object){
    return Object.keys(object);
 }

 function myValues(object){
    return Object.values(object);
 }