export default function promiseSample() {
  const url = 'https://api.github.com/users/OcchiNecchi';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          // レスポンスのBodyをJsonで読み取った結果を返す
          res.json().then((json) => {
            console.log('Async Promise Sample 1:', json);
            resolve(json);
          });
        })
        .catch((error) => {
          console.error(error);
          reject(null);
        });
    });
  };

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log('Async Promise Sample 2:', profile);
      }
    })
    .catch((e) => {
      console.error(e);
    });
}
