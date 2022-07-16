function Add(str) {
    if(str === "") return 0;
    
    let strArr = str.split(",");

    return strArr.reduce((total, sum) => { return parseFloat(total) + parseFloat(sum) }, 0);
}

module.exports = Add;
