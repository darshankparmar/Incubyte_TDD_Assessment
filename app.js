function Add(str) {
    if(str === "") return 0;
 
    // check negative number or not
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === '-') return "negative number not allowed";
    }
    
    if(str.includes("\n,") === true || str.includes(",\n") === true)
        return "The following input is not okay";

    let delimiter = [];
    delimiter[0] = ',';

    var indDelimiter = 0;
    if(str[0] === '/' && str[1] === '/') 
    {
        let ind = 2;
        while(str[ind] === '[')
        {
            let i = ind+1;
            delimiter[indDelimiter] = "";
            while(str[i] !== ']')
            {
                delimiter[indDelimiter] += str[i];
                i++;
            }
            ind = i + 1;
            indDelimiter++;
        }
        if(str[2] !== '[')
            delimiter[0] = str[2];
    }

    str = str.replace("\n", delimiter[0]);

    let temp_str = str;
    for(let i = 1; i < delimiter.length; i++)
        temp_str = temp_str.replaceAll(delimiter[i], delimiter[0]);

    console.log(temp_str);
    let strArr = temp_str.split(delimiter[0]);
    
    if(str[0] === '/' && str[1] === '/') strArr = strArr.slice(1);
    if(str[2] === '[')
    {
        for(let i = 0; i < delimiter.length; i++)
            strArr = strArr.slice(1);
    } 

    for(let i = 0; i < strArr.length; i++) {
        if(parseInt(strArr[i]) >= 1000) strArr[i] = '0';
    }

    return strArr.reduce((total, sum) => { return parseFloat(total) + parseFloat(sum) }, 0);
}

module.exports = Add;
