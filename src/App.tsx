import * as React from 'react';
import './App.css';

import {Store, Unsubscribe} from 'redux';
import {addAge} from './index';

const logo = require('./logo.svg');

interface AppProps {
  store: Store<{ age: number; }>;
}

class App extends React.Component<AppProps, {}> {
  private _unsubscribe: Unsubscribe;
  constructor(props: AppProps) {
    super(props);

    this._addAge = this._addAge.bind(this);
  }
  componentDidMount() {
    const store = this.props.store;
    this._unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    if (this._unsubscribe !== null) {
      this._unsubscribe();
    }
  }
  render() {
    const state = this.props.store.getState();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          나이가 {state.age}
          <button onClick={this._addAge}>한해가 지났다.</button>
        </p>
      </div>
    );
  }
  private _addAge(): void {
    const store = this.props.store;
    const action = addAge();
    store.dispatch(action);
  }
}

export default App;
