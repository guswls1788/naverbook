
import { Component } from 'react/cjs/react.production.min';
import jquery from 'jquery';
import $ from 'jquery';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Home.css'



class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      novel:[
        {title:"회색 여인",author:"엘리자베스 개르켈",publisher:"휴머니스트",url:"https://bookthumb-phinf.pstatic.net/cover/214/746/21474655.jpg?type=m5&udate=20220207"},
        {title:"한국 남자",author:"강성암",publisher:"재미니즘",url:"https://bookthumb-phinf.pstatic.net/cover/214/727/21472705.jpg?type=m5&udate=20220207"},
        {title:"살면서 꼭 읽어야 할 톨스토이 단편선",author:"레프 톨스토이",publisher:"버금",url:"https://bookthumb-phinf.pstatic.net/cover/214/027/21402797.jpg?type=m5&udate=20220207"},
        {title:"송병수 단편집",author:"송병수",publisher:"지식을만드는지식",url:"https://bookthumb-phinf.pstatic.net/cover/214/306/21430665.jpg?type=m5&udate=20220207"},
        {title:"호수의 일",author:"이현",publisher:"창비",url:"https://bookthumb-phinf.pstatic.net/cover/214/715/21471576.jpg?type=m5&udate=20220207"},
        {title:"잿빛극장",author:"온다 리쿠",publisher:"망고",url:"https://bookthumb-phinf.pstatic.net/cover/214/328/21432837.jpg?type=m5&udate=20220207"},
        {title:"붉은 실 끝의 아이들",author:"전삼혜",publisher:"퍼플레인(갈매나무)",url:"https://bookthumb-phinf.pstatic.net/cover/214/237/21423724.jpg?type=m5&udate=20220207"},
        {title:"더 울프 오브 월스트리트",author:"조던 벨포트",publisher:"여의도책방",url:"https://bookthumb-phinf.pstatic.net/cover/214/306/21430667.jpg?type=m5&udate=20220207"},
        {title:"어서 오세요, 휴남동 서점입니다",author:"황보름",publisher:"클레이하우스",url:"https://bookthumb-phinf.pstatic.net/cover/214/141/21414116.jpg?type=m5&udate=20220207"},
        {title:"밀레니엄 피플",author:"J. G. 밸러드",publisher:"현대문학",url:"https://bookthumb-phinf.pstatic.net/cover/214/319/21431945.jpg?type=m5&udate=20220207"},
        {title:"유령이야기",author:"기 드 모파상",publisher:"미메시스",url:"https://bookthumb-phinf.pstatic.net/cover/214/258/21425861.jpg?type=m5&udate=20220207"},
        {title:"당신 옆을 스쳐간 그 소녀의 이름은",author:"최진영",publisher:"한겨레출판사",url:"https://bookthumb-phinf.pstatic.net/cover/214/139/21413961.jpg?type=m5&udate=20220207"},
      ],
      poetry:[
        {title:"덜컹거리는 삶",author:"김정숙",publisher:"행복에너지",url:"https://bookthumb-phinf.pstatic.net/cover/214/330/21433007.jpg?type=m5&udate=20220207"},
        {title:"송일준의 나주 수첩",author:"송일준",publisher:"스타북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/727/21472781.jpg?type=m5&udate=20220207"},
        {title:"제주에서 길을 묻다",author:"김영삼",publisher:"시우",url:"https://bookthumb-phinf.pstatic.net/cover/214/336/21433649.jpg?type=m5&udate=20220207"},
        {title:"제가 변호사가 되어보니 말입니다",author:"오광균",publisher:"문학수첩",url:"https://bookthumb-phinf.pstatic.net/cover/214/326/21432662.jpg?type=m5&udate=20220207"},
        {title:"나의 친애하는 여행자들",author:"추효정",publisher:"책과이음",url:"https://bookthumb-phinf.pstatic.net/cover/214/716/21471635.jpg?type=m5&udate=20220207"},
        {title:"비혼이고 아이를 키웁니다",author:"백지선",publisher:"또다른우주",url:"https://bookthumb-phinf.pstatic.net/cover/214/257/21425799.jpg?type=m5&udate=20220207"},
        {title:"예스터데이",author:"조영남",publisher:"문학세계사",url:"https://bookthumb-phinf.pstatic.net/cover/214/689/21468953.jpg?type=m5&udate=20220207"},
        {title:"은퇴 해녀의 불면증",author:"문봉순",publisher:"한그루",url:"https://bookthumb-phinf.pstatic.net/cover/214/706/21470676.jpg?type=m5&udate=20220207"},
        {title:"대화의 희열",author:"KBS 대화의 희열 제작진, 송해, 한혜진, 서장훈",publisher:"포르체",url:"https://bookthumb-phinf.pstatic.net/cover/214/139/21413965.jpg?type=m5&udate=20220207"},
        {title:"거꾸로 보는 세상에 내가 있었다",author:"신규상",publisher:"스튜디오오드리",url:"https://bookthumb-phinf.pstatic.net/cover/214/734/21473493.jpg?type=m5&udate=20220207"},
        {title:"가슴에서 핏빛 꽃이",author:"강대선",publisher:"상상인",url:"https://bookthumb-phinf.pstatic.net/cover/214/716/21471611.jpg?type=m5&udate=20220207"},
        {title:"우리 따개비처럼 살아요",author:"장병길",publisher:"바른북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/734/21473496.jpg?type=m5&udate=20220207"},
      ],
      economy:[
        {title:"NFT 디지털 자산의 미래",author:"이임복",publisher:"천그루숲",url:"https://bookthumb-phinf.pstatic.net/cover/214/309/21430997.jpg?type=m5&udate=20220207"},
        {title:"친절한 효자손의 티스토리 사용설명서",author:"유길용",publisher:"e비즈북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/234/21423491.jpg?type=m5&udate=20220207"},
        {title:"경영경제통계학",author:"David P.Doane",publisher:"생능",url:"https://bookthumb-phinf.pstatic.net/cover/214/328/21432850.jpg?type=m5&udate=20220207"},
        {title:"NFT 투자의 정석",author:"유민호",publisher:"한스미디어",url:"https://bookthumb-phinf.pstatic.net/cover/214/259/21425931.jpg?type=m5&udate=20220207"},
        {title:"메타 페이스북",author:"스티븐 레비",publisher:"부키",url:"https://bookthumb-phinf.pstatic.net/cover/214/801/21480117.jpg?type=m5&udate=20220207"},
        {title:"다시 쓰는 경영학",author:"정인호",publisher:"파지트",url:"https://bookthumb-phinf.pstatic.net/cover/214/336/21433698.jpg?type=m5&udate=20220207"},
        {title:"읽으면 돈 되는 끝장 경제 상식",author:"김형진",publisher:"한국경제신문",url:"https://bookthumb-phinf.pstatic.net/cover/214/717/21471778.jpg?type=m5&udate=20220207"},
        {title:"리더는 어떻게 성장하는가",author:"맨프레드 케츠 드 브리스",publisher:"더블북",url:"https://bookthumb-phinf.pstatic.net/cover/214/735/21473532.jpg?type=m5&udate=20220207"},
        {title:"포춘으로 읽는 워런 버핏의 투자 철학",author:"캐럴 루미스",publisher:"비즈니스맵",url:"https://bookthumb-phinf.pstatic.net/cover/214/717/21471793.jpg?type=m5&udate=20220207"},
        {title:"그 회사의 브랜딩",author:"황조은",publisher:"한국경제신문",url:"https://bookthumb-phinf.pstatic.net/cover/214/235/21423556.jpg?type=m5&udate=20220207"},
        {title:"대한민국 재테크 트렌드",author:"조선일보 경제부",publisher:"아몬드B",url:"https://bookthumb-phinf.pstatic.net/cover/214/259/21425905.jpg?type=m5&udate=20220207"},
        {title:"경계를 넘어 통합을 보다",author:"서동석",publisher:"에머슨하우스 교육연구소",url:"	https://bookthumb-phinf.pstatic.net/cover/214/258/21425880.jpg?type=m5&udate=20220207"}, 
      ],
      develop:[
        {title:"가서 만나고 이야기하라",author:"배정환",publisher:"미디어숲",url:"https://bookthumb-phinf.pstatic.net/cover/214/728/21472850.jpg?type=m5&udate=20220207"},
        {title:"서 부장의 슬기로운 이중생활",author:"서성현",publisher:"바이북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/728/21472862.jpg?type=m5&udate=20220207"},
        {title:"새벽을 깨우는 여자들",author:"원효정",publisher:"더로드",url:"https://bookthumb-phinf.pstatic.net/cover/214/805/21480565.jpg?type=m5&udate=20220207"},
        {title:"어떻게 말해야 할까",author:"조성은",publisher:"트러스트북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/241/21424166.jpg?type=m5&udate=20220207"},
        {title:"다 내편이 되는 말하기",author:"황시투안",publisher:"미디어숲",url:"https://bookthumb-phinf.pstatic.net/cover/213/959/21395910.jpg?type=m5&udate=20220207"},
        {title:"내 아이의 마음 언어",author:"이은경",publisher:"치읓",url:"https://bookthumb-phinf.pstatic.net/cover/214/306/21430664.jpg?type=m5&udate=20220207"},
        {title:"100가지 아이디어 노하우",author:"하시구치 유키오",publisher:"시그마북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/135/21413573.jpg?type=m5&udate=20220207"},
        {title:"아주 작은 습관의 기적",author:"김정훈",publisher:"바이북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/336/21433657.jpg?type=m5&udate=20220207"},
        {title:"더 바이브",author:"이하영",publisher:"미다스북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/706/21470653.jpg?type=m5&udate=20220207"},
        {title:"인생을 운에 맡기지 마라",author:"애니 듀크",publisher:"청림출판",url:"https://bookthumb-phinf.pstatic.net/cover/214/060/21406094.jpg?type=m5&udate=20220207"},
        {title:"럭키 드로우",author:"드로우앤드류",publisher:"다산북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/336/21433662.jpg?type=m5&udate=20220207"},
        {title:"의기양양 설득심리술",author:"다고 아키라",publisher:"밀라그로",url:"https://bookthumb-phinf.pstatic.net/cover/214/139/21413989.jpg?type=m5&udate=20220207"},
      ],
      humanities:[
        {title:"미식가의 어원 사전",author:"앨버트 잭",publisher:"윌북",url:"https://bookthumb-phinf.pstatic.net/cover/213/932/21393297.jpg?type=m5&udate=20220207"},
        {title:"누구에게나 신이 필요한 순간이 있다",author:"에릭 와이너",publisher:"어크로스",url:"https://bookthumb-phinf.pstatic.net/cover/214/712/21471209.jpg?type=m5&udate=20220207"},
        {title:"용신론",author:"김문식",publisher:"려원",url:"https://bookthumb-phinf.pstatic.net/cover/214/327/21432785.jpg?type=m5&udate=20220207"},
        {title:"비판적 상상력을 위하여",author:"김종철",publisher:"녹색평론사",url:"https://bookthumb-phinf.pstatic.net/cover/214/717/21471787.jpg?type=m5&udate=20220207"},
        {title:"신춘문예 당선 평론집",author:"황유지",publisher:"정은출판",url:"https://bookthumb-phinf.pstatic.net/cover/214/728/21472856.jpg?type=m5&udate=20220207"},
        {title:"사이언스 픽션",author:"스튜어트 리치",publisher:"더난출판",url:"https://bookthumb-phinf.pstatic.net/cover/214/335/21433558.jpg?type=m5&udate=20220207"},
        {title:"왜 아이에게 마음공부를 가르치지 않는가",author:"김복현",publisher:"박영스토리",url:"https://bookthumb-phinf.pstatic.net/cover/213/769/21376952.jpg?type=m5&udate=20220207"},
        {title:"중국초서자보",author:"선다우룽",publisher:"다른생각",url:"https://bookthumb-phinf.pstatic.net/cover/214/315/21431566.jpg?type=m5&udate=20220207"},
        {title:"지금 시작하는 그리스 로마 신화",author:"양승욱",publisher:"탐나는책",url:"https://bookthumb-phinf.pstatic.net/cover/213/792/21379298.jpg?type=m5&udate=20220207"},
        {title:"나는 왜 그런 꿈을 꾸었을까",author:"아테나 리즈",publisher:"정신세계사",url:"https://bookthumb-phinf.pstatic.net/cover/213/985/21398582.jpg?type=m5&udate=20220207"},
        {title:"우리말 어감사전",author:"안상순",publisher:"유유",url:"https://bookthumb-phinf.pstatic.net/cover/213/811/21381107.jpg?type=m5&udate=20220207"},
        {title:"쉽게 풀어 쓴 생활 속 삼재",author:"도담",publisher:"문원복",url:"https://bookthumb-phinf.pstatic.net/cover/209/102/20910230.jpg?type=m5&udate=20220207"},
      ],
      history:[
        {title:"외식의 역사",author:"윌리엄 시트웰",publisher:"소소의책",url:"https://bookthumb-phinf.pstatic.net/cover/214/689/21468942.jpg?type=m5&udate=20220207"},
        {title:"동아시아, 해양과 대륙이 맞서다",author:"김시덕",publisher:"메디치미디어",url:"https://bookthumb-phinf.pstatic.net/cover/214/242/21424274.jpg?type=m5&udate=20220207"},
        {title:"방약합편과 어의 황도순",author:"한기춘",publisher:"퍼플",url:"https://bookthumb-phinf.pstatic.net/cover/214/734/21473404.jpg?type=m5&udate=20220207"},
        {title:"새로 쓰는 광개토왕과 장수왕",author:"이석연",publisher:"논형",url:"https://bookthumb-phinf.pstatic.net/cover/214/316/21431600.jpg?type=m5&udate=20220207"},
        {title:"왕의 언어",author:"김동섭",publisher:"청아출판사",url:"https://bookthumb-phinf.pstatic.net/cover/214/315/21431590.jpg?type=m5&udate=20220207"},
        {title:"한 권으로 읽는 세계사",author:"도마키 도시아키",publisher:"사람과나무사이",url:"https://bookthumb-phinf.pstatic.net/cover/214/315/21431565.jpg?type=m5&udate=20220207"},
        {title:"명화롤 보는 단테의 신곡",author:"단테 알리기에리",publisher:"미래타임즈",url:"https://bookthumb-phinf.pstatic.net/cover/214/242/21424227.jpg?type=m5&udate=20220207"},
        {title:"개경",author:"박종진",publisher:"놀와",url:"https://bookthumb-phinf.pstatic.net/cover/214/719/21471906.jpg?type=m5&udate=20220207"},
        {title:"아랍",author:"유진 로건",publisher:"까치",url:"https://bookthumb-phinf.pstatic.net/cover/214/737/21473784.jpg?type=m5&udate=20220207"},
        {title:"에도시대 도시를 걷다",author:"김경숙",publisher:"소명출판",url:"https://bookthumb-phinf.pstatic.net/cover/214/718/21471884.jpg?type=m5&udate=20220207"},
        {title:"밤의 일제 침략사",author:"임종국",publisher:"청년정신",url:"https://bookthumb-phinf.pstatic.net/cover/214/733/21473336.jpg?type=m5&udate=20220207"},
        {title:"우리가 몰랐던 동남아 이야기4",author:"신일용",publisher:"밥북",url:"https://bookthumb-phinf.pstatic.net/cover/214/340/21434034.jpg?type=m5&udate=20220207"},
      ],
      life:[
        {title:"엄마표 우리 아이 첫 미술놀이 150",author:"오승희",publisher:"티나",url:"https://bookthumb-phinf.pstatic.net/cover/214/257/21425779.jpg?type=m5&udate=20220207"},
        {title:"성조숙증과 바른성장",author:"윤정선",publisher:"처음",url:"https://bookthumb-phinf.pstatic.net/cover/214/028/21402814.jpg?type=m5&udate=20220207"},
        {title:"스스로 잘 자는 아기를 위한 스르륵 수면교육",author:"범은경",publisher:"더블엔",url:"https://bookthumb-phinf.pstatic.net/cover/214/746/21474600.jpg?type=m5&udate=20220207"},
        {title:"나를 담은 집-나를 닮은 인테리어",author:"HERS 편집부",publisher:"즐거운상상",url:"https://bookthumb-phinf.pstatic.net/cover/214/715/21471581.jpg?type=m5&udate=20220207"},
        {title:"예민한 부모를 위한 심리 수업",author:"일레인 N. 아론",publisher:"청림라이프",url:"https://bookthumb-phinf.pstatic.net/cover/214/690/21469003.jpg?type=m5&udate=20220207"},
        {title:"취향 육아",author:"이연진",publisher:"웨일북(whalebooks)",url:"https://bookthumb-phinf.pstatic.net/cover/214/321/21432143.jpg?type=m5&udate=20220207"},
        {title:"질문이랑 놀이랑",author:"김선미",publisher:"산지",url:"https://bookthumb-phinf.pstatic.net/cover/214/735/21473507.jpg?type=m5&udate=20220207"},
        {title:"다루기 힘든 아이 문제는 따로 있다",author:"미야구치 코지",publisher:"리드리드출판",url:"https://bookthumb-phinf.pstatic.net/cover/213/966/21396691.jpg?type=m5&udate=20220207"},
        {title:"초등학교 입학 전 학부모가 가장 알고 싶은 최다질문 TOP 90",author:"초등교사안쌤",publisher:"메이트북스",url:"https://bookthumb-phinf.pstatic.net/cover/214/715/21471596.jpg?type=m5&udate=20220207"},
        {title:"요즘x두부",author:"노애리",publisher:"수작거다",url:"https://bookthumb-phinf.pstatic.net/cover/213/541/21354186.jpg?type=m5&udate=20220207"},
        {title:"오늘 하루 행복한 혼밥",author:"하영아",publisher:"리스컴",url:"https://bookthumb-phinf.pstatic.net/cover/214/044/21404485.jpg?type=m5&udate=20220207"},
        {title:"THE 상남자 BBQ 레시피 77",author:"오카노 에이스케",publisher:"그린쿡",url:"https://bookthumb-phinf.pstatic.net/cover/214/879/21487998.jpg?type=m5&udate=20220207"},
      ],
    }
  }
  componentDidMount(){
    $(document).ready(function(){
      css()
      $("#home #right_home .home_nav ul li").click(function(){
        var idx=$(this).index()
        $("#home #right_home .home_slider .slider_wrap .slider_area").hide()
        $("#home #right_home .home_nav ul li").removeClass("on")
        $("#home #right_home .home_slider .slider_wrap .slider_area").eq(idx).show()
        $(this).addClass("on")
      })
      function css(){
        var lentgh=$(".bg_img").length
        for(var i=0;i<lentgh;i++){
          var re=i*-20
          $(".bg_img").eq(i).find("a").css("background-position-y",re+"px")
        }
      }
    });
  }
  render(){
    const settings={
      dots:true,
      infinite:false,
      slidesToScroll:4,
      slidesToShow:4,
      arrow:true
    }
    const novel_slider=this.state.novel.map(
      (data)=>(<div className='slick_box'><div className='slick'><div className='slick_img'><img src={data.url}/></div></div>
      <span className='book_title'>{data.title}</span>
      <div className='book_bottom'><span className='author'>{data.author}</span>
      <span className='bar'></span>
      <span className='publisher'>{data.publisher}</span></div></div>)
    )
    const poetry_slider=this.state.poetry.map(
      (data)=>(<div className='slick_box'><div className='slick'><div className='slick_img'><img src={data.url}/></div></div>
      <span className='book_title'>{data.title}</span>
      <div className='book_bottom'><span className='author'>{data.author}</span>
      <span className='bar'></span>
      <span className='publisher'>{data.publisher}</span></div></div>)
    )
    const economy_slider=this.state.economy.map(
      (data)=>(<div className='slick_box'><div className='slick'><div className='slick_img'><img src={data.url}/></div></div>
      <span className='book_title'>{data.title}</span>
      <div className='book_bottom'><span className='author'>{data.author}</span>
      <span className='bar'></span>
      <span className='publisher'>{data.publisher}</span></div></div>)
    )
    const develop_slider=this.state.develop.map(
      (data)=>(<div className='slick_box'><div className='slick'><div className='slick_img'><img src={data.url}/></div></div>
      <span className='book_title'>{data.title}</span>
      <div className='book_bottom'><span className='author'>{data.author}</span>
      <span className='bar'></span>
      <span className='publisher'>{data.publisher}</span></div></div>)
    )
    const humanities_slider=this.state.humanities.map(
      (data)=>(<div className='slick_box'><div className='slick'><div className='slick_img'><img src={data.url}/></div></div>
      <span className='book_title'>{data.title}</span>
      <div className='book_bottom'><span className='author'>{data.author}</span>
      <span className='bar'></span>
      <span className='publisher'>{data.publisher}</span></div></div>)
    )
    const history_slider=this.state.history.map(
      (data)=>(<div className='slick_box'><div className='slick'><div className='slick_img'><img src={data.url}/></div></div>
      <span className='book_title'>{data.title}</span>
      <div className='book_bottom'><span className='author'>{data.author}</span>
      <span className='bar'></span>
      <span className='publisher'>{data.publisher}</span></div></div>)
    )
    const life_slider=this.state.life.map(
      (data)=>(<div className='slick_box'><div className='slick'><div className='slick_img'><img src={data.url}/></div></div>
      <span className='book_title'>{data.title}</span>
      <div className='book_bottom'><span className='author'>{data.author}</span>
      <span className='bar'></span>
      <span className='publisher'>{data.publisher}</span></div></div>)
    )
    return(
        <div id="home">
            <div id="left_category">
              <div className='category'>
                <ul className='one'>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                </ul>
                <ul className='two'>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                </ul>
                <ul className='thr'>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                </ul>
                <ul className='fo'>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                </ul>
                <ul className='fiv'>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                </ul>
                <ul className='six'>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                </ul>
                <ul className='sev'>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                  <li className='bg_img'><a></a></li>
                </ul>
                <ul className='eig'>
                  <li className='bg_img'><a></a></li>
                </ul>
              </div>
              <div className='category_info'>
                <ul>
                  <li><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                </ul>
              </div>
            </div>
            <div id="right_home">
              <div className='home_title'>
                <img src="https://ssl.pstatic.net/static/book/tit_thesedays.png"></img>
              </div>
              <div className='home_nav'>
                <ul>
                  <li className='on'><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                  <li><a></a></li>
                </ul>
              </div>
              <div className='home_slider'>
                  <div className='slider_wrap'>
                    <div className='slider_area'>
                        <Slider {...settings}>
                          {novel_slider}
                        </Slider>
                    </div>
                    <div className='slider_area'>
                        <Slider {...settings}>
                          {poetry_slider}
                        </Slider>
                    </div>
                    <div className='slider_area'>
                        <Slider {...settings}>
                          {economy_slider}
                        </Slider>
                    </div>
                    <div className='slider_area'>
                        <Slider {...settings}>
                          {develop_slider}
                        </Slider>
                    </div>
                    <div className='slider_area'>
                        <Slider {...settings}>
                          {humanities_slider}
                        </Slider>
                    </div>
                    <div className='slider_area'>
                        <Slider {...settings}>
                          {history_slider}
                        </Slider>
                    </div>
                    <div className='slider_area'>
                        <Slider {...settings}>
                          {life_slider}
                        </Slider>
                    </div>
                 </div>
              </div>
            </div>
        </div>
    )
  }
}

export default Home;
