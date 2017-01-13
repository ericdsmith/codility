function solution(N) {
  let longest = 0;
  let current = -1;
  let i = N;
  while(i > 0){
      if(i & 1 === 1){
          longest = current > longest ? current : longest;
          current = 0;
      }else if(current !== -1){
        current++;
      }
      i >>= 1;
  }
  return longest;
}
