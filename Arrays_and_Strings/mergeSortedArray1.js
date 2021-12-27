function mergeSortedArray(array1,array2) {
    let i = 1, j = 1;
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];

    //Check test cases
    if (array1Item === undefined)
        return array2;
    if (array2Item === undefined)
        return array1;
    if (array1Item === undefined && array2Item === undefined)
        return "Both arrays are empty";
    
    while(array1Item || array2Item){
        if(array1Item < array2Item || !array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i++];
        }
        else{
            mergedArray.push(array2Item);
            array2Item = array2[j++];
        }
    }
    return mergedArray;
}
// Driver code
console.log(mergeSortedArray([0,3,4,6,7,8],[3,4,5,6]));