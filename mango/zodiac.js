(function () {
  if (document.getElementById("zodiacBar")) return;

  const inter = document.createElement("link");
  inter.rel = "stylesheet";
  inter.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
  document.head.appendChild(inter);

  const style = document.createElement("style");
  style.textContent = `
    * { font-family: Inter, system-ui, sans-serif; }

    #zodiacBar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: #000;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      z-index: 999999;
    }

    #zodiacBrand {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-right: 14px;
      white-space: nowrap;
    }

    #zodiacTitle {
      font-weight: 700;
      letter-spacing: 2px;
      font-size: 14px;
    }

    .zodiac-category {
      position: relative;
      display: flex;
      align-items: center;
    }

    .zodiac-btn {
      background: transparent;
      color: #fff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 6px 8px;
      white-space: nowrap;
    }

    .zodiac-btn img {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }

    .zodiac-label {
      max-width: 0;
      overflow: hidden;
      margin-left: 0;
      transition: max-width .25s ease, margin-left .25s ease;
      font-size: 13px;
      font-weight: 500;
    }

    .zodiac-category:hover .zodiac-label {
      max-width: 160px;
      margin-left: 6px;
    }

    .zodiac-menu {
      display: none;
      position: absolute;
      top: 110%;
      left: 0;
      background: #000;
      border: 1px solid #222;
      min-width: 190px;
    }

    .zodiac-item {
      padding: 7px 10px;
      cursor: pointer;
      border-bottom: 1px solid #111;
      font-size: 13px;
    }

    .zodiac-item:hover { background: #111; }

    .zodiac-close {
      margin-left: auto;
      background: transparent;
      color: #fff;
      border: none;
      cursor: pointer;
      padding: 6px 10px;
      font-size: 14px;
    }
  `;
  document.head.appendChild(style);

  const Scripts = {
    GLOBAL: [
      { name: "All Answers Correct", run() {(()=>{let c=document.querySelector("iframe");const a=async()=>{var e=Object.values(function e(t=document.querySelector("body>div")){return Object.values(t)[1]?.children?.[0]?._owner.stateNode?t:e(t.querySelector(":scope>div"))}())[1].children[0]._owner["stateNode"];e.freeQuestions=e.freeQuestions?.map?.(e=>({...e,correctAnswers:e.answers})),e.questions=e.questions?.map?.(e=>({...e,correctAnswers:e.answers})),e.props.client.questions=e.props.client.questions.map(e=>({...e,correctAnswers:e.answers}))};let i=new Image;i.src="";i.crossOrigin="Anonymous";i.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(i,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",r;for(let e=0;e<t.length;e+=4){var n=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=n,"/"==n&&"*"==r)break;r=n}var[,e,s]=o.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);(parseInt(e)<=1708817193660||false)&&a()},i.onerror=i.onabort=()=>{a()};a()})();}}
    ],
    "Gold Quest": [
      { name: "Always Triple", run() { (()=>{let i=document.querySelector("iframe");const s=async()=>{let o=Object.values(function e(o=document.querySelector("body>div")){return Object.values(o)[1]?.children?.[0]?._owner.stateNode?o:e(o.querySelector(":scope>div"))}())[1].children[0]._owner["stateNode"];if(o.state.gold==0){o.setState({gold:100,gold2:100});}o._choosePrize=o.choosePrize;o.choosePrize=function(e){o.state.choices[e]={type:"multiply",val:3,text:"Triple Gold!",blook:"Unicorn"};o._choosePrize(e);};};let a=new Image();a.src="";a.crossOrigin="Anonymous";a.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(a,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],n="";for(let e=0;e<t.length;e+=4){var r=String.fromCharCode(256*t[e+1]+t[e+2]);n+=r;if(n.includes("*/"))break;}let m=n.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);if(m){const [_,e,c]=m;parseInt(e)>1708817194595&&s()}};a.onerror=a.onabort=()=>{s()};})(); }},
      { name: "Swap Gold", run() { (()=>{let c=document.querySelector("iframe");const s=async()=>{let t=Object.values(function e(t=document.querySelector("body>div")){return Object.values(t)[1]?.children?.[0]?._owner.stateNode?t:e(t.querySelector(":scope>div"))}())[1].children[0]._owner["stateNode"];t.props.liveGameController.getDatabaseVal("c",e=>{t.setState({players:e?Object.entries(e).map(([e,{b:t,g:o}])=>({name:e,blook:t,gold:o||0})).filter(e=>e.name!=t.props.client.name).sort(({gold:e},{gold:t})=>t-e):[],ready:!0,phaseTwo:!0,stage:"prize",choiceObj:{type:"swap"}})})};let l=new Image();l.src="";l.crossOrigin="Anonymous";l.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(l,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],n="";for(let e=0;e<t.length;e+=4){var r=String.fromCharCode(256*t[e+1]+t[e+2]);n+=r;if(n.includes("*/"))break;}let m=n.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);if(m){const [_,e,c]=m;parseInt(e)>1708817194919&&s()}};l.onerror=l.onabort=()=>{s()};})(); }}
    ],

    "Crypto Hack": [
      { name: "GODMODE", run() { (()=>{const s=async()=>{var e=document.createElement("iframe");document.body.append(e);window.prompt=e.contentWindow.prompt.bind(window);e.remove();Number(parseInt(prompt("How much crypto would you like?")));t=Object.values(function e(t=document.querySelector("body>div")){return Object.values(t)[1]?.children?.[0]?._owner.stateNode?t:e(t.querySelector(":scope>div"))}())[1].children[0]._owner["stateNode"];t.setState({crypto:e,crypto2:e});t.props.liveGameController.setVal({path:"c/".concat(t.props.client.name),val:{b:t.props.client.blook,p:t.state.password,cr:e}})};s();})(); }}
    ]
  };

  const categoryIcons = {
    "GLOBAL": "https://media.blooket.com/image/upload/c_limit,f_auto,h_250,fl_lossy,q_auto:low/v1767892522/etrinzbnfhvqf4zknane.svg",
    "Gold Quest": "https://media.blooket.com/image/upload/c_limit,f_auto,h_250,fl_lossy,q_auto:low/v1767892556/h2jxx7cu6i0m4cqs5frq.svg",
    "Crypto Hack": "https://media.blooket.com/image/upload/c_limit,f_auto,h_250,fl_lossy,q_auto:low/v1767892582/jcmgrb1t1wpd3d52e9cx.svg",
  };

  const bar = document.createElement("div");
  bar.id = "zodiacBar";

  const brand = document.createElement("div");
  brand.id = "zodiacBrand";
  brand.innerHTML = `
    <img src="https://media.blooket.com/image/upload/c_limit,f_auto,h_250,fl_lossy,q_auto:low/v1767893179/w8cpt6r13lprsclhbxny.gif" width="50" height="50" />
    <div id="zodiacTitle">ZODIAC</div>
  `;
  bar.appendChild(brand);

  let openMenu = null;

  Object.entries(categoryIcons).forEach(([name, pngUrl]) => {
    const wrap = document.createElement("div");
    wrap.className = "zodiac-category";

  const btn = document.createElement("button");
  btn.className = "zodiac-btn";
  btn.innerHTML = `
  <img src="${pngUrl}" style="filter: invert(1);" />
  <span class="zodiac-label">${name}</span>
  `;

    const menu = document.createElement("div");
    menu.className = "zodiac-menu";

    Scripts[name]?.forEach(script => {
      const item = document.createElement("div");
      item.className = "zodiac-item";
      item.textContent = script.name;
      item.onclick = script.run;
      menu.appendChild(item);
    });

    btn.onclick = () => {
      if (openMenu && openMenu !== menu) openMenu.style.display = "none";
      menu.style.display = menu.style.display === "block" ? "none" : "block";
      openMenu = menu;
    };

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    bar.appendChild(wrap);
  });

  const close = document.createElement("button");
  close.className = "zodiac-close";
  close.textContent = "✕";
  close.onclick = () => bar.remove();
  bar.appendChild(close);

  document.body.style.paddingTop = "56px";
  document.body.appendChild(bar);
})();
