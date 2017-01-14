function solution(A) {
    let expected = ((A.length + 1) * (A.length + 2)) / 2;
    return expected - A.reduce((sum, item) => item + sum, 0);
}
