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