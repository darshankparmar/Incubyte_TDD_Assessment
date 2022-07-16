function Add(str) {
    if(str === "") return 0;
    
    if(str.includes("\n,") === true || str.includes(",\n") === true)
        return "The following input is not okay";

    str = str.replace("\n", ",");

    let strArr = str.split(",");

    return strArr.reduce((total, sum) => { return parseFloat(total) + parseFloat(sum) }, 0);
}

module.exports = Add;
