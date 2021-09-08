export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK'];
  // response = [400, "Bad", "Email"];
  // response = ["400", "bad"];
  console.log('Array tuple sample 1:', response);

  // 可変超引数を使ったタプル
  const women: [string, ...string[]] = ['kana', 'miku', 'keiko'];
  women.push('misa');
  console.log('Array tuple sample 2:', women);
}
