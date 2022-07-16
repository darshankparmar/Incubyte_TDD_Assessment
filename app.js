function Add(str) {
    if(str === "") return 0;
 
    // check negative number or not
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === '-') return "negative number not allowed";
    }
    
    if(str.includes("\n,") === true || str.includes(",\n") === true)
        return "The following input is not okay";

    var delimiter = ',';

    if(str[0] === '/' && str[1] === '/') 
    {
        if(str[2] === '[')
        {
            var i = 3;
            delimiter = "";
            while(str[i] !== ']')
            {
                delimiter += str[i];
                i++;
            }
        }
        else
            delimiter = str[2];
    }

    str = str.replace("\n", delimiter);
    
    let strArr = str.split(delimiter);

    if(str[0] === '/' && str[1] === '/') strArr = strArr.slice(1);
    if(str[2] === '[') strArr = strArr.slice(1);

    for(let i = 0; i < strArr.length; i++) {
        if(parseInt(strArr[i]) >= 1000) strArr[i] = '0';
    }

    return strArr.reduce((total, sum) => { return parseFloat(total) + parseFloat(sum) }, 0);
}

module.exports = Add;
