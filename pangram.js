const isPangram = (sentence) =>{
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i = 0; i < alpha.length; i++){
        if(!sentence.toLowerCase().includes(alpha[i])){
            return false
        }
    } 
    return true
}
console.log(isPangram('"The quick brown fox jumps over the lazy dog!"'))

//O(n)