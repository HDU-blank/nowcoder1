function maxSum(arr){
    var a = 0,
        b = 0,
        maxA = 0, 
        maxB = 0,
        len = arr.length,
        status = true;
    for (var i=len;i>0;i--){
        if(status){
            a = arr[1]>arr[arr.length-1]?arr[1]:arr[arr.length-1];
            b = arr[0]>arr[arr.length-2]?arr[0]:arr[arr.length-2];
            maxA += arr[0]-a>arr[arr.length-1]-b?arr.shift():arr.pop();
            console.log(arr);
            status = !status;
        }
        else if(!status){
            a = arr[1]>arr[arr.length-1]?arr[1]:arr[arr.length-1];
            b = arr[0]>arr[arr.length-2]?arr[0]:arr[arr.length-2];
            maxB += arr[0]-a>arr[arr.length-1]-b?arr.shift():arr.pop();
            status = !status;
        }
    }
    return maxA>maxB?maxA:maxB;
}
maxSum([5,2,3,4,9,5,1,8,4]);