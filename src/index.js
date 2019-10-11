module.exports = function check(str, bracketsConfig) {
let n = 0;
let m = 0;
for (let i=0; i<str.length; i++) {
    if (i='('||'['){
        n=n+1;
    } else if (i=')'||']'){
        n=n-1;
    } else if (i='|') {
        m=m+1;
    }
  }
  if ((n=0) && (m%2 == 0)) {
      return true;
  } else {
      return false;
  }
}
