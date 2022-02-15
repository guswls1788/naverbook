
import { Component } from 'react/cjs/react.production.min';
import '../css/BookList.css'


class BookList extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
     var title = document.getElementsByClassName('title');
     var description = document.getElementsByClassName('description');
     var author = document.getElementsByClassName('author');
    //  var ele = document.getElementById('img');
      for(var i=0;i<this.props.postsPerPage;i++){
        var titleText = title[i].innerText;  // 아래와 같은 문자열이 저장됨
        var descriptionText = description[i].innerText;  // 아래와 같은 문자열이 저장됨
        var authorText = author[i].innerText;  // 아래와 같은 문자열이 저장됨
        var Newtitle = titleText.replace(/(<([^>]+)>)/ig,"");
        var Newdescription = descriptionText.replace(/(<([^>]+)>)/ig,"");
        var Newauthor = authorText.replace(/(<([^>]+)>)/ig,"");
        document.getElementsByClassName("title")[i].innerText=Newtitle
        document.getElementsByClassName("description")[i].innerText=Newdescription
        document.getElementsByClassName("author")[i].innerText=Newauthor
        // console.log(document.getElementsByClassName("description")[i].innerText=Newdescription)
      }
      
      // var oriText = ele[2].innerText;  // 아래와 같은 문자열이 저장됨
    //  console.log(oriText) 
    // console.log(ele[0].innerText)
    }
  render(){

      return(
          <div className={this.props.Look=='left'?'list':'list right'}>
            <div id="img_wrap">
              <div id="img"><img src={this.props.image}></img></div>
            </div>
              <div className='text'>
                <p className="title">{this.props.title}</p>
                <div className='txt'>
                  <p className="author">{this.props.author} 저</p>
                  <p className="publisher">{this.props.publisher}</p>
                  <p className="pubdate">{this.props.pubdate}</p>

                </div>
                <p className="description">{this.props.description}</p>
                <a className='buy' href={this.props.link} target='_blank'>구매</a>
              </div>
          </div>
      )
  
  }
}

export default BookList;
