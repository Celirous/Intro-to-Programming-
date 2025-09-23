var areArraysSame = function (array1 , array2){
    if (array1.length !== array2.length){
        return false;
    }

for (var i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]) {
        return false;
    }
 } return true
}

areArraysSame([1, 2, 3], [4, 5, 6]);
// Came back false

areArraysSame([1, 2, 3], [1, 2, 3]);
// Came back true

areArraysSame([1, 2, 3], [1, 2, 3, 4]);
// Came back false
