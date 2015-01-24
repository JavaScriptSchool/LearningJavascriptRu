function vars(text){
    var result = {};
    function resort(strFrom, strTo) {
        for(var i = 0; i < strFrom.length; i++) {
            var sChar = strFrom[i];
            var tmpStr = strFrom.slice(0, i) + strFrom.slice(i+1);
            var newText = strTo + sChar + tmpStr;
            result[newText]='';
            if(tmpStr.length > 1) resort(tmpStr, strTo + sChar);
        }
    }
    resort(text,'');
    return result;
}
var test = vars('RAAPD');
for(var key in test)
    console.log(key);