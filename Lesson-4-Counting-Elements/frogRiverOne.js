function solution(X, A) {
    let storage =  new Array(X).fill(0);
    let counter = 0;

    for(let i = 0; i < A.length; i++){
        if(storage[A[i] - 1] === 0){
            storage[A[i] - 1] = 1;
            counter++;
            if(counter === X){
                return i;
            }
        }
    }
    return -1;
}
