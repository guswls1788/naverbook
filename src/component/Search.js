
import { Component } from 'react/cjs/react.production.min';
// import XMLParser from 'react-xml-parser'
import axios from 'axios';
import BookList from './BookList';
import Pagination from './Pagination';
import '../css/Search.css'
import queryString from 'query-string'



class Search extends Component{
      constructor(props){
        super(props)
        this.state={
          bookName:this.props.searchText,
          list:[],
          totalList:[],
          currentPage:1,
          postsPerPage:20,
          Look:'left',
          display:'',
        }
        
      }
      componentDidMount(){
        // this.getdetail()  
        this.setState({
          bookName:this.props.searchText
        })
        this.searchClick()
      }
      
      searchClick=async()=>{
        const bookName=this.state.bookName
        console.log(bookName)
        const axios_list
        =await axios({
          method:'get',
          url:'/v1/search/book.json?query='+bookName+'&display='+100,
          dataType:'json',
          headers:{
            "X-Naver-Client-Id":'dk5NO5HCDAe8zW27qxzb',
            "X-Naver-Client-Secret":'5wdm4XnX7X'
          }
        })
        console.log(axios_list.data)
        this.setState({
          list:axios_list.data.items,
          // bookName:bookName
        })
      }
      selectHandleChange=(e)=>{
        this.setState({
          postsPerPage:e.target.value
        })
      }
      currentPosts=(totalPosts)=>{
         const {list,postsPerPage,currentPage}=this.state
        const indexLast=currentPage*postsPerPage
        const indexFirst=indexLast-postsPerPage
        const slicePosts=totalPosts.slice(indexFirst,indexLast)
        this.setState({
          list:slicePosts
        })

        return slicePosts
      }
      pageClick=(page)=>{
        this.setState({
          currentPage:page
        })
      }
      rightClick=()=>{
          document.getElementById("left").style.backgroundPosition="top"
          document.getElementById("right").style.backgroundPosition="bottom"
        this.setState({
          Look:'right'
        })
      }
      leftClick=()=>{
        this.setState({
          Look:'left'
        })
          document.getElementById("right").style.backgroundPosition="top"
          document.getElementById("left").style.backgroundPosition="bottom"
      }
      
  render(){

        const {ttl,author,company,isbn,mockcha,theme,category,StartYear,StartDay,LastYear,LastDay}=this.state
        const {list,postsPerPage,currentPage,Look}=this.state
        const indexLast=currentPage*postsPerPage
        const indexFirst=indexLast-postsPerPage
    const booksearch=this.state.list.slice(indexFirst,indexLast).map(
      (data)=>(<BookList postsPerPage={postsPerPage} description={data.description} Look={Look} key={data.title} publisher={data.publisher} pubdate={data.pubdate} author={data.author} link={data.link} price={data.price} title={data.title} image={data.image}>{this.props.data}</BookList>) 
    )


    return(
      
        <div id="search">
          <div className='top'>
          <span><h2>'{this.state.bookName}'</h2>에 대한 검색결과</span>
          </div>
          <div className='midle_bar'></div>
          
          <div className='asid'>
            <ul>
              <li><a>전체</a></li>
              <li>
              <a>화제의 책</a>
                <ul>
                  <li><a>신간</a></li>
                  <li><a>베스트셀러</a></li>
                  <li><a>스테디셀러</a></li>
                </ul>
              </li>
              <li>
              <a>분야별</a>
                <ul>
                  <li><a>시/에세이</a></li>
                  <li><a>학습/참고서</a></li>
                  <li><a>어린이</a></li>
                  <li><a>소설</a></li>
                  <li><a>종교</a></li>
                </ul>
              </li>
              <li>
              <a>추천 책</a>
                <ul>
                  <li><a>오늘의 책</a></li>
                  <li><a>지서재</a></li>
                  <li><a>서울대 권장도서</a></li>
                  <li><a>TV책을 말하다</a></li>
                </ul>
              </li>
            </ul>
       
             </div>
             <div className='content'>
               <div className='top_area'>
                 <span className='tit'></span>
                 <span className='num'>(1-20 / )</span>
                 <span className='field'>전체</span>
               </div>
               <div className='option'>
                   <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                   </ul>
                    <a id="left" onClick={this.leftClick}></a>
                    <a id="right" onClick={this.rightClick}></a>

               </div>
             {booksearch}
            <Pagination pageClick={this.pageClick}totalPosts={list.length} currentPage={currentPage} postsPerPage={postsPerPage}></Pagination>

             </div>
             {this.state.totalList.innerTEXT}
        </div>
    )
  }
}

export default Search;
