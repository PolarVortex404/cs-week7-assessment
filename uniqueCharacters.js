const uniChar = (word) => {
    for(let i = 0; i < word.length -1; i++){
        if(word.substring( i + 1 ).includes(word.charAt(i))){
            return false
        }
    }
    return true
}
//On^2

console.log(uniChar('day'))