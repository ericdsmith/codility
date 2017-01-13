function solution(S) {
    if(S.length % 2 !== 0){ return 0; }
    let stack = [];
    let mapping = {
        '}': '{',
        ')': '(',
        ']': '['
    };

    for(let i = 0; i < S.length; i++){
        let char = S[i];
        if(!mapping[char]){
            stack.push(char);
        }else{
            if(mapping[char] !== stack.pop()){
                return 0;
            }
        }
    }
    return stack.length === 0 ? 1 : 0;
}
