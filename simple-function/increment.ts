
// 型強制による誤作動
// 型が異なる2つの値を処理するとき、暗黙的に別の型へ変換される

// numberは型注釈
function increment(num: number) {
  return num + 1
}

console.log(increment(999))