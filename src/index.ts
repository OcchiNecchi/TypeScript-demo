// import World from './world';

// const root = document.getElementById('root');
// const world = new World('Hello World!');

// world.sayHello(root);

// 基本の型定義
// import { primitiveSample, anySample, unknownSample } from './basic';
// primitiveSample();
// anySample();
// unknownSample();

// 関数の型定義について
import { logMessage } from './function/basic';
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters';
logMessage('Hello TypeScript');
isUserSignedIn('ABC', 'aaa');
isUserSignedIn('DEF');

isUserSignedIn2('ABC');

const sum = sumProductsPrice(100, 200, 300, 400);
console.log('Function parameters sample 5:', sum);
