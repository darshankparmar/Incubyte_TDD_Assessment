function Add(str) {
    if(str === "") return 0;
 
    // check negative number or not
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === '-') return "negative number not allowed";
    }
    
    if(str.includes("\n,") === true || str.includes(",\n") === true)
        return "The following input is not okay";

    str = str.replace("\n", ",");

    var delimiter = ',';

    if(str[0] == '/' && str[1] == '/') delimiter = str[2];

    let strArr = str.split(delimiter);

    if(str[0] === '/' && str[1] === '/') strArr = strArr.slice(1);

    for(let i = 0; i < strArr.length; i++) {
        if(parseInt(strArr[i]) >= 1000) strArr[i] = '0';
    }

    return strArr.reduce((total, sum) => { return parseFloat(total) + parseFloat(sum) }, 0);
}

module.exports = Add;
