import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import confirm from './confirm';

class App extends Component{
  async componentDidMount(){
    let res = await confirm("确定删除吗")
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}

export default App;
