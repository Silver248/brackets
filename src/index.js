module.exports = function check(str, bracketsConfig) {
    let k=0;
    let l=0;
    let m=0;
    let n=0;
    for (let i=0; i<str.length; i++) {
        if (str[i]=='(') {
            k++;
        } else if (str[i]=='{') {
            l++;
        } else if (str[i]=='[') {
            m++;
        } else if (str[i]=='|') {
            n++;
        } else if (str[i]==')') {
            k--;
        } else if (str[i]=='}') {
            l--;
        } else if (str[i]==']') {
            m--;
        }
    }

    if ((k==0)||(l==0)||(m==0)||(n%2 == 0)){
        return true;
    } else {
        return false;
    }
}


/*||str.indexOf('(')<str.indexOf(')')||str.indexOf('{')<str.indexOf('}')||str.indexOf('[')<str.indexOf(']')*/

