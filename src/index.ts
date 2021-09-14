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

// オブジェクトの型定義
import objectSample from './object/object';
import typeAliasSample from './object/alias';
objectSample();
typeAliasSample();

// 配列とタプルの型定義
import arraySample from './array/array';
import tupleSample from './array/tuple';
arraySample();
tupleSample();

// ジェネリック型とポリモーフィズム
import genericsBasicSample from './generics/basic';
import genericsAdvancedSample from './generics/advanced';
genericsBasicSample();
genericsAdvancedSample();

// 非同期処理
import callbackSample from './async/callback';
import promiseSample from './async/promise';
import asyncAwaitSample from './async/asyncAwait';
callbackSample();
promiseSample();
asyncAwaitSample();
