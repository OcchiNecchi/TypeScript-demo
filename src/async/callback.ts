export default function callbackSample() {
  const url = 'https://api.github.com/users/OcchiNecchi';

  // コールバックで呼び出す非同期処理(コールバックが多く大変)
  const fetchProfile = () => {
    fetch(url)
      .then((res) => {
        // レスポンスのBodyをJsonで読み取った結果を返す
        res.json().then((json) => {
          console.log('Async Callback Sample 1:', json);
          return json;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // 非同期処理なので、profileにjsonは入ってこない
  const profile = fetchProfile();
  console.log('Async Callback Sample 2:', profile);
}
