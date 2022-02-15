
import { Component } from 'react/cjs/react.production.min';
import '../css/Detail.css'


class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
          ttl:'',
            author:'',
            company:'',
            isbn:'',
            mockcha:'',
            theme:'',
            category:'',
            StartYear:'',
            StartDay:'',
            LastYear:'',
            LastDay:''
        }
    }

    ttlHandle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    AlllSearch=()=>{
      alert("아직 사용이 불가합니다")
      // const {ttl,author,company,isbn,mockcha,theme,category,StartYear,StartDay,LastYear,LastDay}=this.state
      // this.props.AlllSearch(ttl,author,company,isbn,mockcha,theme,category,StartYear,StartDay,LastYear,LastDay)
    //   if(StartYear+StartDay>LastYear+LastDay){
    //     alert("no")
    //     return
    //   }else if(StartYear+StartDay<LastYear+LastDay){
    //       this.props.AlllSearch(ttl,author,company,isbn,mockcha,theme,category,StartYear,StartDay,LastYear,LastDay)
    //     }
    }
    detail=()=>{
      this.props.detail()
    }
    StartDay=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
  render(){
    return(
        <div className='popup'>
          <div className='header'>
            <h5>상세검색</h5>
            <span>두 가지 이상의 정보를 입력하시면 더 정확한 검색결과를 보실 수 있습니다.</span>
          </div>
          <div className='layer'>
            <form>
              <div className='box ttl'>
                <span>책제목</span><input type="text" name="ttl" onChange={this.ttlHandle}></input>
              </div>
              <div className='box author'>
                <span>저자 및 역자명</span><input type="text" name="author"  onChange={this.ttlHandle}></input>
              </div>
              <div className='box company'>
                <span>출판사</span><input type="text" name="company"  onChange={this.ttlHandle}></input>
              </div>
              <div className='box isbn'>
                <span>ISBN</span><input type="text" name="isbn"  onChange={this.ttlHandle}></input>
              </div>
              <div className='box mockcha'>
                <span>목차</span><input type="text" name="mockcha"  onChange={this.ttlHandle}></input>
              </div>
              <div className='box theme'>
                <span>주제어</span><input type="text" name="theme"  onChange={this.ttlHandle}></input>
              </div>
              <div className='box se'>
                <span>분야</span>
                <select name='category' onChange={this.StartDay}>
                  <option>----------------</option>
                  <option value="소설">소설</option>
                  <option value="시/에세이">시/에세이</option>
                  <option value="인문">인문</option>
                  <option value="가정/생활/요리">가정/생활/요리</option>
                  <option value="건강">건강</option>
                  <option value="취미/레저">취미/레저</option>
                  <option value="경제/경영">경제/경영</option>
                  <option value="자기계발">자기계발</option>
                  <option value="사회">사회</option>
                  <option value="역사/문화">역사/문화</option>
                  <option value="종교">종교</option>
                  <option value="예술/대중문화">예술/대중문화</option>
                  <option value="학습/참고서">학습/참고서</option>
                  <option value="국어/외국어">국어/외국어</option>
                  <option value="사전">사전</option>
                  <option value="과학/공학">과학/공학</option>
                  <option value="취업/수험서">취업/수험서</option>
                  <option value="여행/지도">여행/지도</option>
                  <option value="컴퓨터/IT">컴퓨터/IT</option>
                  <option value="잡지">잡지</option>
                  <option value="청소년">청소년</option>
                  <option value="유아">유아</option>
                  <option value="어린이">어린이</option>
                  <option value="만화">만화</option>
                  <option value="해외도서">해외도서</option>
                </select>
              </div>
              <div className='box se date'>
              <span>출간일</span>
                <select title="출간 연도" name='StartYear' onChange={this.StartDay}>
                  <option value="">----년</option>
                  <option value="2022">2022 년</option>
                  <option value="2021">2021 년</option>
                  <option value="2020">2020 년</option>
                  <option value="2019">2019 년</option>
                  <option value="2018">2018 년</option>
                  <option value="2017">2017 년</option>
                  <option value="2016">2016 년</option>
                  <option value="2015">2015 년</option>
                  <option value="2014">2014 년</option>
                  <option value="2013">2013 년</option>
                  <option value="2012">2012 년</option>
                  <option value="2011">2011 년</option>
                  <option value="2010">2010 년</option>
                  <option value="2009">2009 년</option>
                  <option value="2008">2008 년</option>
                  <option value="2007">2007 년</option>
                  <option value="2006">2006 년</option>
                  <option value="2005">2005 년</option>
                  <option value="2004">2004 년</option>
                  <option value="2003">2003 년</option>
                  <option value="2002">2002 년</option>
                  <option value="2001">2001 년</option>
                  <option value="2000">2000 년</option>
                  <option value="1999">1999 년</option>
                  <option value="1998">1998 년</option>
                  <option value="1997">1997 년</option>
                  <option value="1996">1996 년</option>
                  <option value="1995">1995 년</option>
                  <option value="1994">1994 년</option>
                  <option value="1993">1993 년</option>
                  <option value="1992">1992 년</option>
                  <option value="1991">1991 년</option>
                  <option value="1990">1990 년</option>
                  <option value="1989">1989 년</option>
                  <option value="1988">1988 년</option>
                  <option value="1987">1987 년</option>
                  <option value="1986">1986 년</option>
                  <option value="1985">1985 년</option>
                  <option value="1984">1984 년</option>
                  <option value="1983">1983 년</option>
                  <option value="1982">1982 년</option>
                  <option value="1981">1981 년</option>
                  <option value="1980">1980 년</option>
                </select>
                <select title="출간 월" name='StartDay' onChange={this.StartDay}> 
                  <option value="">--월</option>
                  <option value="01">1 월</option>
                  <option value="02">2 월</option>
                  <option value="03">3 월</option>
                  <option value="04">4 월</option>
                  <option value="05">5 월</option>
                  <option value="06">6 월</option>
                  <option value="07">7 월</option>
                  <option value="08">8 월</option>
                  <option value="09">9 월</option>
                  <option value="10">10 월</option>
                  <option value="11">11 월</option>
                  <option value="12">12 월</option>
                </select>
                <span>부터</span>
                <select title="출간 연도" name='LastYear' onChange={this.StartDay}>
                  <option value="">----년</option>
                  <option value="2022">2022 년</option>
                  <option value="2021">2021 년</option>
                  <option value="2020">2020 년</option>
                  <option value="2019">2019 년</option>
                  <option value="2018">2018 년</option>
                  <option value="2017">2017 년</option>
                  <option value="2016">2016 년</option>
                  <option value="2015">2015 년</option>
                  <option value="2014">2014 년</option>
                  <option value="2013">2013 년</option>
                  <option value="2012">2012 년</option>
                  <option value="2011">2011 년</option>
                  <option value="2010">2010 년</option>
                  <option value="2009">2009 년</option>
                  <option value="2008">2008 년</option>
                  <option value="2007">2007 년</option>
                  <option value="2006">2006 년</option>
                  <option value="2005">2005 년</option>
                  <option value="2004">2004 년</option>
                  <option value="2003">2003 년</option>
                  <option value="2002">2002 년</option>
                  <option value="2001">2001 년</option>
                  <option value="2000">2000 년</option>
                  <option value="1999">1999 년</option>
                  <option value="1998">1998 년</option>
                  <option value="1997">1997 년</option>
                  <option value="1996">1996 년</option>
                  <option value="1995">1995 년</option>
                  <option value="1994">1994 년</option>
                  <option value="1993">1993 년</option>
                  <option value="1992">1992 년</option>
                  <option value="1991">1991 년</option>
                  <option value="1990">1990 년</option>
                  <option value="1989">1989 년</option>
                  <option value="1988">1988 년</option>
                  <option value="1987">1987 년</option>
                  <option value="1986">1986 년</option>
                  <option value="1985">1985 년</option>
                  <option value="1984">1984 년</option>
                  <option value="1983">1983 년</option>
                  <option value="1982">1982 년</option>
                  <option value="1981">1981 년</option>
                  <option value="1980">1980 년</option>
                </select>
                <select title="출간 월" name='LastDay' onChange={this.StartDay}> 
                  <option value="">--월</option>
                  <option value="01">1 월</option>
                  <option value="02">2 월</option>
                  <option value="03">3 월</option>
                  <option value="04">4 월</option>
                  <option value="05">5 월</option>
                  <option value="06">6 월</option>
                  <option value="07">7 월</option>
                  <option value="08">8 월</option>
                  <option value="09">9 월</option>
                  <option value="10">10 월</option>
                  <option value="11">11 월</option>
                  <option value="12">12 월</option>
                </select>
                <span>까지</span>
              </div>
            </form>
            <div className='btn_wrap'>
              <div className='search'><a onClick={this.AlllSearch}></a></div>
              <div className='close'><a onClick={this.detail}></a></div>
              <a className='clearall'></a>
            </div>
          <div className='bottom'>
            <div className='bottom_left'>
              <h4>책 제목 및 저자명, 출판사</h4>
              <p>원하는 검색 결과가 나오지 않을 경우 띄어쓰기를 하거나 외래어의 한글 표기 방식을<br/>
                변경해 보세요.</p>
            </div>
            <div className='bottom_right'>
              <h4>ISBN/ISSN</h4>
              <p>책표지의 바코드 아래쪽에 표기된 번호로, "-"기호없이 책에 표시된 숫자를 그대로 입력해 주시면<br/>
                  됩니다. (ISBN은 10/13자리, ISSN은 8자리입니다)</p>
            </div>
          </div>
          </div>
        </div>
      
    )
  }
}

export default Detail;
