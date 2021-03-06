import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Search from './component/Search';
import Home from './component/Home';
import { BrowserRouter, HashRouter,Routes,Route } from 'react-router-dom';
import axios from 'axios';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Detail from './component/Detail';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      User:false,
      searchText:'',
      popup:false,
      number:50,
    }
  }
  componentDidMount(){
    console.log(this.state.searchText)
  }
  selectChange=(e)=>{
    this.setState({
      select:e.target.value
    })
  }
    searchClick=()=>{
      const {searchText,number}=this.state
      if(searchText===''){
        alert("no")
      }else{
        window.location.hash="#/search?bookName="+searchText+"&display="+number
      }
    }
    search=(evt)=>{
      if(evt.key==="Enter"){
        this.searchClick()
      }
      console.log(keyboard)
    }
    handleChange=(e)=>{
      const {searchText}=this.state

      this.setState({
        [e.target.name]:e.target.value
      })
      console.log(searchText)
    }
    detail=()=>{
      this.setState({
        popup:!this.state.popup
      })
      }
    
  render(){
    
    return(
      <>

      <div id="app">
 
        <div id="search-top">
          <div className='logo'>
            <a href="https://guswls1788.github.io/naverbook/"><img className='naver' src="https://ssl.pstatic.net/static/header/h1/bi_naver.gif"></img></a>
            <img className='naver' src="https://ssl.pstatic.net/static/book/image/h_book.gif"></img>
            <span></span>
            <img className='ebook' src="https://ssl.pstatic.net/static/book/image/h_ebook.gif"></img>
            <span></span>
            <img className='audiobook' src="https://ssl.pstatic.net/static/book/img/2018/h_audio.png"></img>
            </div>
          <div id="search-bor">
          <select onChange={this.selectChange}>
            <option key="book" value='book' selected="selected">???</option>
            <option key="movie" value='movie'>??????</option>
          </select>
          <input type="text" placeholder='search...' 
          onChange={this.handleChange} name='searchText'
          onKeyPress={this.search}
          ></input>
          <button onClick={this.searchClick}></button>
          <img className='all' src="https://ssl.pstatic.net/static/book/image/btn_united_search.gif"></img>
          <a href="#" className={this.state.popup===true?'detail active':'detail'} onClick={this.detail}></a>
        </div>
        </div>
        {this.state.popup===true?<Detail AlllSearch={this.AlllSearch} detail={this.detail}/>:<></>}
        <div className='gnb'>
          <ul>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
        </div>
      <HashRouter>

        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/search"  element={<Search searchText={this.state.searchText} getdetail={this.getdetail} get={this.get}/>} />
        </Routes>
      </ HashRouter>
      </>
    )
  }
}

export default App;
