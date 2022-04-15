const find_longest_word = (word1, word2) =>{
    if(word1.length > word2.length){
        return word1.length
    } else {
        return word2.length
    }
}
console.log(find_longest_word('pickle','person'))

//O(1)