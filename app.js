function Add(str) {
    if(str === "") return 0;
    
    if(str.includes("\n,") === true || str.includes(",\n") === true)
        return "The following input is not okay";

    str = str.replace("\n", ",");

    var delimiter = ',';

    if(str[0] == '/' && str[1] == '/') delimiter = str[2];

    let strArr = str.split(delimiter);

    if(str[0] === '/' && str[1] === '/') strArr = strArr.slice(1);

    return strArr.reduce((total, sum) => { return parseFloat(total) + parseFloat(sum) }, 0);
}

module.exports = Add;
