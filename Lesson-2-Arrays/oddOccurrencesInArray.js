function solution(A) {
    return A.reduce((answer, curr) => curr ^= answer );
}
