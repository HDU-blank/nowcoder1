function maxSubArr1(arr,k){
    var cur = 0,
        count = 0,
        max = 0;
    for (var i = 0;i<arr.length;i++){
        for (var j = i;j<arr.length;j++){
            cur += arr[j];
            count ++;
            if (cur == k) {
                max = count>max?count:max;
            }else if (cur>k) {
                count = 0;
                cur = 0;
                break;
            }
        }
    }
    return max;
}