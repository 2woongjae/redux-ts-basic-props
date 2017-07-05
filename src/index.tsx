import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// yarn add redux @types/redux
import {createStore} from 'redux';

// 타입 정의
const ADD_AGE = 'ADD_AGE';

// 타입 생성 함수
export function addAge(): { type: string; } {
  return {
    type: ADD_AGE
  };
}

// 리듀서
function ageApp(state: { age: number; } = {age: 35}, action: { type: string; }): { age: number; } {
  if (action.type === ADD_AGE) {
    return {age: state.age + 1};
  }
  return state;
}

// 스토어 만들기
const store = createStore<{ age: number; }>(ageApp);
/*
function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root') as HTMLElement
  );
}

store.subscribe(render);
render();
*/
ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
);