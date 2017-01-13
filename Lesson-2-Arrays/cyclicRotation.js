function solution(A, K) {
    let result = [];
    let length = A.length;
    for(let i = 0; i < length; i++){
        result[(i + K) % length] = A[i];
    }
    return result;
}
