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