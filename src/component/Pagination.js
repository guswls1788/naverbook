
import { Component } from 'react/cjs/react.production.min';
import '../css/Pagination.css'


class Pagination extends Component{
    componentDidMount() {
        // this.hi(1)
        // document.getElementById("page1").style.border="1px solid #e9e9e9";
        // document.getElementById("page1").style.color="#e85028";
      }
      hi=(e)=>{
        var pageClass=document.getElementsByClassName("page")
            for(var i=0;i<pageClass.length;i++){
                pageClass[i].style.border="0"
                pageClass[i].style.color="#000"
            }
            document.getElementById("page"+e).style.border="1px solid #e9e9e9";
            document.getElementById("page"+e).style.color="#e85028";
        
      }
    pageClick=(page)=>{
        this.props.pageClick(page)
            this.hi(page)
    }

  render(){
      const {totalPosts,postsPerPage}=this.props
      let pageNumbers=[]
      for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
          pageNumbers.push(i)
      }
      const pageButton=pageNumbers.map(
          (page)=>(<span key={page} id={"page"+page} className='page' onClick={()=>this.pageClick(page)}>{page}</span>)
      )
    return(
        <div id="pagination">
            {pageButton}
        </div>
    )
  }
}

export default Pagination;
