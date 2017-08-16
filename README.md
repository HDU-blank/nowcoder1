### 题目一
>###### 1、已知一个字符串都是由左括号(和右括号)组成，判断该字符串是否是有效的括号组合。 
例子： 
有效的括号组合:()(),(()),(()()) 
无效的括号组合:(,()),((),()(()。
###### 解题思路：
>读题：
###### code：
```
function isValid(str){
    if (str == null)
    {
        return false;
    }
    var chas = str.split("");
    var status = 0;
    for (var i = 0; i < chas.length; i++)
    {
        if (chas[i] != ')' && chas[i] != '(' && chas[i] != ',')
        {
            return false;
        }
        if (chas[i] == ')' && --status < 0)
        {
            return false;
        }
        if (chas[i] == '(')
        {
            status++;
        }
    }
    return status == 0;
}
var str = "()(),(()),(()())";
var str2 = "(,()),((),()(()";
isValid(str);
```
>######  2、题目进阶： 已知一个字符串都是由左括号(和右括号)组成，返回最长有效括号子串的长度。
###### 解题思路：
>读题：
###### code：
```
function maxLength(str){
    if (str == null)
    {
        return false;
    }
    var chas = str.split(""),
        status = 0,
        max = 0,
        cur = 0;
    for (var i = 0; i < chas.length; i++)
    {
        if (chas[i] != ')' && chas[i] != '(' && chas[i] != ',')
        {
            return false;
        }
        else if (chas[i] == '(')
        {
            status++;
            cur ++;
        }
        else if (chas[i] == ')' && status > 1){
            status--;
            cur ++;
        }
        else if (chas[i] == ')' && (status==1)){
            status--;
            cur ++;
            max = max>cur?max:cur;
        }
        else if (chas[i] == ')' && status < 1)
        {
            cur = 0;
            status = 0;
        }
    }
    return max;
}
```
### 题目二
###### 1、给定一个数组，值全是正数，请返回累加和为给定值k的最长子数组长度。   
###### 2、给定一个数组，值可以为正、负和0，请返回累加和为给定值k的最长子数组长度。   
###### 3、给定一个数组，值可以为正、负和0，请返回累加和小于等于k的最长子数组长度。
###### 解题思路：
>读题：
###### code：
```
//第一小题
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
maxSubArr1([1,1,1,1,1,5],5);

//第二小题
function maxSubArr2(arr,k){
    var cur = 0,
        count = 0,
        max = 0;
    for (var i = 0;i<arr.length;i++){
        count = 0;
        cur = 0;
        for (var j = i;j<arr.length;j++){
            cur += arr[j];
            count ++;
            if (cur == k) {
                max = count>max?count:max;
            }
        }
    }
    return max;
}
maxSubArr2([1,1,1,0,1,2,1,5,-5,-1],5);

//第三小题
function maxSubArr3(arr,k){
    var cur = 0,
        count = 0,
        max = 0;
    for (var i = 0;i<arr.length;i++){
        count = 0;
        cur = 0;
        for (var j = i;j<arr.length;j++){
            cur += arr[j];
            count ++;
            if (cur <= k) {
                max = count>max?count:max;
            }
        }
    }
    return max;
}
maxSubArr3([1,1,1,0,1,2,1,5,-5,-1,-10],5);
```
### 题目三
>######  有一排正数，玩家A和玩家B都可以看到。 每位玩家在拿走数字的时候，都只能从最左和最右的数中选择一个。 玩家A先拿，玩家B再拿，两人交替拿走所有的数字， 两人都力争自己拿到的数的总和比对方多。请返回最后获胜者的分数。
例如： 5,2,3,4 玩家A先拿，当前他只能拿走5或者4。 如果玩家A拿走5，那么剩下2，3，4。轮到玩家B，此时玩家B可以选择2或4中的一个，… 如果玩家A拿走4，那么剩下5，2，3。轮到玩家B，此时玩家B可以选择5或3中的一个，…
###### 解题思路：
>读题：
###### code：
```
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
```
