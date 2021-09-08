import { anySample } from 'basic';

export default function objectSample() {
  // const a: object = {
  //   name: 'abc',
  //   age: 28
  // }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string;
    name: string;
  } = {
    language: 'Japanese',
    name: 'Japan',
  };

  console.log('Object object sample1:', country);

  country = {
    language: 'English',
    name: 'United States of America',
  };

  console.log('Object object sample2:', country);

  // オプショナルとreadonly
  const objectSample: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Tarou',
  };

  objectSample.gender = 'male';
  objectSample.lastName = 'kamado';
  // readonlyがあるためエラーが出る
  // objectSample.firstName = 'error';
  console.log('Object object sample3:', objectSample);

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };

  capitals.China = 'Beijing';
  capitals.Canada = 'Otawa';
  console.log('Object object sample4:', capitals);
}
