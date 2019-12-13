import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './component/NameCard';
import LikesButton from './component/LikesButton';
import DigitalClock from './component/DigitalClock';
import CommentBox from './component/CommentBox';
import CommentList from './component/CommentList';
import ThemeContext from './component/theme-context';
import ThemedBar from './component/ThemedBar';
let a = require('./module/initWeb3');
const tags = ['打篮球', '跑步'];
const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  },
}
/*
function App() {  
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

      {/* <NameCard name="Jackluo" number="13228291831" isHuman="true" tags={['打篮球','跑步']}/> }
      {/* <LikesButton /> }
      {/* <DigitalClock /> }
      <CommentBox />
    </div>
  );
}
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ['this is my first reply'],
      theme: 'light',
    }
    this.addComment = this.addComment.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  }
  changeTheme(theme) {
    this.setState({
      theme,
    });
    console.log(1212);
  }
  render() {
    const { comments } = this.state;
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <a
              href="#theme-switcher"
              className="btn btn-light"
              onClick={() => { this.changeTheme('light') }}
            >
              浅色主题
        </a>
            <a
              href="#theme-switcher"
              className="btn btn-secondary"
              onClick={() => { this.changeTheme('dark') }}
            >
              深色主题
        </a>
          </header>
          <ThemedBar />
        </div>
      </ThemeContext.Provider>
      /*
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
        <CommentList comments={comments} />
        <CommentBox
          commentsLength={comments.length}
          onAddComment={this.addComment}
        />
      </div>*/
    );
  }
}
export default App;
