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

    .zodiac-btn i { font-size: 16px; }

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

const href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";

if (!document.querySelector(`link[href="${href}"]`)) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

  const Scripts = {
    GLOBAL: [
      { name: "All Answers Correct", run() {(()=>{let c=document.querySelector("iframe");const a=async()=>{var e=Object.values(function e(t=document.querySelector("body>div")){return Object.values(t)[1]?.children?.[0]?._owner.stateNode?t:e(t.querySelector(":scope>div"))}())[1].children[0]._owner["stateNode"];e.freeQuestions=e.freeQuestions?.map?.(e=>({...e,correctAnswers:e.answers})),e.questions=e.questions?.map?.(e=>({...e,correctAnswers:e.answers})),e.props.client.questions=e.props.client.questions.map(e=>({...e,correctAnswers:e.answers}))};let i=new Image;i.src="";i.crossOrigin="Anonymous";i.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(i,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",r;for(let e=0;e<t.length;e+=4){var n=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=n,"/"==n&&"*"==r)break;r=n}var[,e,s]=o.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);(parseInt(e)<=1708817193660||false)&&a()},i.onerror=i.onabort=()=>{a()};a()})();}},
      { name: "Flood Game", run() { (() => { let s = document.querySelector("iframe"); const a = async () => { var e = document.createElement("iframe"); e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(webpackJsonp.push([[],{"":(e,t,o)=>{t.cache=o.c}},[[""]]]).cache)); const r = e => e.find(e => e.exports?.a?.get), i = r(e).exports.a, c = r(e).exports.a, n = r(e).find(e => e.exports?.a?.me); await n.exports.a.me({}); if (n.exports.a.name) return; const gId = prompt("Game ID:"), name = prompt("Name:"), amt = parseInt(prompt("Amount:")); for (let e = 1; e <= amt; e++) { await (async () => { const randName = "" + name + (Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)); const { success: t, fbToken: o, fbShardURL: n } = (await r.put("https://fb.blooket.com/c/firebase/join", { id: gId, name: randName }))["data"]; if (t) { const a = c.initializeApp({ apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU", authDomain: "blooket-2020.firebaseapp.com", projectId: "blooket-2020", storageBucket: "blooket-2020.appspot.com", messagingSenderId: "741533559105", appId: "1:741533559105:web:b8cbb10e6123f2913519c0", measurementId: "G-S3H5NGN10", databaseURL: n }); const auth = c.auth(a); await auth.setPersistence(c.auth.Auth.Persistence.NONE); await auth.signInWithCustomToken(fbToken); await a.database().ref(`${gId}/c/${a.id}`).set({ b: c[Math.floor(Math.random() * c.length)] }); await a.delete(); } })(); await new Promise(res => setTimeout(res, 100)); } }; let c = new Image(); c.src = ""; c.crossOrigin = "Anonymous"; c.onload = () => { a(); }; c.onerror = c.onabort = () => { a(); }; })(); } }    

],
    "Gold Quest": [
      { name: "Always Triple", run() { (()=>{let i=document.querySelector("iframe");const s=async()=>{let o=Object.values(function e(o=document.querySelector("body>div")){return Object.values(o)[1]?.children?.[0]?._owner.stateNode?o:e(o.querySelector(":scope>div"))}())[1].children[0]._owner["stateNode"];if(o.state.gold==0){o.setState({gold:100,gold2:100});}o._choosePrize=o.choosePrize;o.choosePrize=function(e){o.state.choices[e]={type:"multiply",val:3,text:"Triple Gold!",blook:"Unicorn"};o._choosePrize(e);};};let a=new Image();a.src="";a.crossOrigin="Anonymous";a.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(a,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],n="";for(let e=0;e<t.length;e+=4){var r=String.fromCharCode(256*t[e+1]+t[e+2]);n+=r;if(n.includes("*/"))break;}let m=n.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);if(m){const [_,e,c]=m;parseInt(e)>1708817194595&&s()}};a.onerror=a.onabort=()=>{s()};})(); }},
      { name: "Swap Gold", run() { (()=>{let c=document.querySelector("iframe");const s=async()=>{let t=Object.values(function e(t=document.querySelector("body>div")){return Object.values(t)[1]?.children?.[0]?._owner.stateNode?t:e(t.querySelector(":scope>div"))}())[1].children[0]._owner["stateNode"];t.props.liveGameController.getDatabaseVal("c",e=>{t.setState({players:e?Object.entries(e).map(([e,{b:t,g:o}])=>({name:e,blook:t,gold:o||0})).filter(e=>e.name!=t.props.client.name).sort(({gold:e},{gold:t})=>t-e):[],ready:!0,phaseTwo:!0,stage:"prize",choiceObj:{type:"swap"}})})};let l=new Image();l.src="";l.crossOrigin="Anonymous";l.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(l,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],n="";for(let e=0;e<t.length;e+=4){var r=String.fromCharCode(256*t[e+1]+t[e+2]);n+=r;if(n.includes("*/"))break;}let m=n.match(/LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/);if(m){const [_,e,c]=m;parseInt(e)>1708817194919&&s()}};l.onerror=l.onabort=()=>{s()};})(); }}
    ],

    "Crypto Hack": [
      { name: "Always Triple", run() { 
(() => {
  const cheat = async () => {
    setInterval(() => {
      const gameObject = Object.values(
        (function react(r = document.querySelector("body>div")) {
          return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"));
        })()
      )[1].children[0]._owner.stateNode;
      gameObject.setState({
        choices: [
          {
            type: "mult",
            val: 3,
            rate: 0.075,
            blook: "Brainy Bot",
            text: "Triple Crypto"
          }
        ]
      });
    }, 25);
  };
  cheat();
})();  
}},
      { name: "Set Crypto", run() { (()=>{const s=async()=>{var e=document.createElement("iframe");document.body.append(e);window.prompt=e.contentWindow.prompt.bind(window);e.remove();Number(parseInt(prompt("How much crypto would you like?")));t=Object.values(function e(t=document.querySelector("body>div")){return Object.values(t)[1]?.children?.[0]?._owner.stateNode?t:e(t.querySelector(":scope>div"))}())[1].children[0]._owner["stateNode"];t.setState({crypto:e,crypto2:e});t.props.liveGameController.setVal({path:"c/".concat(t.props.client.name),val:{b:t.props.client.blook,p:t.state.password,cr:e}})};s();})(); }},
      { name: "Set Password", run() {(()=>{const cheat=()=>{let i=document.createElement('iframe');document.body.append(i);window.prompt=i.contentWindow.prompt.bind(window);i.remove();let p=prompt("What do you want to set your password to?");let {stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner.stateNode?r: r.querySelector(":scope>div")?r: r})(document.querySelector("body>div")))[1].children[0]._owner;stateNode.setState({password:p});stateNode.props.liveGameController.setVal({path:"c/".concat(stateNode.props.client.name),val:{b:stateNode.props.client.blook,p: p,cr:stateNode.state.crypto}})};cheat();})();}}
    ],

    "Fishing Frenzy": [
      { name: "Frenzy", run() { (()=>{const cheat=()=>{let {stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner.stateNode?r:r.querySelector(":scope>div")})(document.querySelector("body>div")))[1].children[0]._owner;stateNode.props.liveGameController.setVal({path:"c/".concat(stateNode.props.client.name),val:{b:stateNode.props.client.blook,w:stateNode.state.weight,f:"Frenzy",s:true}})};cheat();})(); }},
      { name: "Send Distraction", run() { (()=>{const cheat=()=>{let {stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner.stateNode?r:r.querySelector(":scope>div")})(document.querySelector("body>div")))[1].children[0]._owner;stateNode.props.liveGameController.setVal({path:"c/".concat(stateNode.props.client.name),val:{b:stateNode.props.client.blook,w:stateNode.state.weight,f:"Frog",s:true}})};cheat();})(); }},
      { name: "Set Lure", run() { (()=>{const cheat=()=>{let {stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner.stateNode?r:r.querySelector(":scope>div")})(document.querySelector("body>div")))[1].children[0]._owner;stateNode.setState({lure:Math.max(Math.min(Number(parseInt(prompt("What would you like to set your lure to? (1 - 5)")))-1,4),0)});};cheat();})(); }},
      { name: "Set Weight", run() { (()=>{const cheat=()=>{let {stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner.stateNode?r:r.querySelector(":scope>div")})(document.querySelector("body>div")))[1].children[0]._owner;stateNode.setState({weight:Number(parseInt(prompt("How much weight would you like?"))), weight2:Number(parseInt(prompt("How much weight would you like?")))});stateNode.props.liveGameController.setVal({path:"c/".concat(stateNode.props.client.name),val:{b:stateNode.props.client.blook,w:Number(parseInt(prompt("How much weight would you like?"))),f:["Crab","Jellyfish","Frog","Pufferfish","Octopus","Narwhal","Megalodon","Blobfish","Baby Shark"][Math.floor(Math.random()*9)]}})};cheat();})(); }},
    ],

    "Tower Defense": [
      { name: "Max Towers", run() { (()=>{const cheat=()=>{let{stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;stateNode.towers.forEach(t=>{t.range=100;t.fullCd=0;t.cd=0;t.damage=1e6;});};cheat();})(); }},
      { name: "Set Round", run() { (()=>{const cheat=()=>{let{stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;stateNode.setState({round:Number(parseInt(prompt("What round do you want to set to?")))});};cheat();})(); }},
      { name: "Set Tokens", run() { (()=>{const cheat=()=>{let{stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;stateNode.setState({tokens:Number(parseInt(prompt("How many tokens would you like?")))})};cheat();})(); }},
    ],

    "Tower Defense 2": [
      { name: "Max Towers", run() { (()=>{const cheat=()=>{let{stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;stateNode.towers.forEach(t=>{t.stats.dmg=1e6;t.stats.fireRate=50;t.stats.ghostDetect=true;t.stats.maxTargets=1e6;t.stats.numProjectiles&&=100;t.stats.range=100;if(t.stats.auraBuffs)for(const buff in t.stats.auraBuffs)t.stats.auraBuffs[buff]*=100;});};cheat();})(); }},
      { name: "Set Round", run() { (()=>{const cheat=()=>{let{stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;stateNode.setState({round:Number(parseInt(prompt("What round do you want to set to?")))})};cheat();})(); }},
      { name: "Set Coins", run() { (()=>{const cheat=()=>{let{stateNode}=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;stateNode.setState({coins:Number(parseInt(prompt("How many tokens would you like?")))})};cheat();})(); }}
    ],

    "Monster Brawl": [
      { name: "Double XP", run() { (()=>{const cheat=()=>{for(const collider of Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x=>x.callbackContext?.toString().includes('dmgCd'))){const enemies=collider.object2;let _start=enemies.classType.prototype.start;enemies.classType.prototype.start=function(){_start.apply(this,arguments),this.val*=2};enemies.children.entries.forEach(e=>e.val*=2);}};cheat();})(); }},
      { name: "Half Enemy Speed", run() { (()=>{const cheat=()=>{for(const collider of Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x=>x.callbackContext?.toString().includes('dmgCd'))){const enemies=collider.object2;let _start=enemies.classType.prototype.start;enemies.classType.prototype.start=function(){_start.apply(this,arguments),this.speed*=.5};enemies.children.entries.forEach(e=>e.speed*=.5);}};cheat();})(); }},
      { name: "Instakill", run() { (()=>{const cheat=()=>{for(const collider of Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x=>x.callbackContext?.toString().includes('dmgCd'))){const enemies=collider.object2;let _start=enemies.classType.prototype.start;enemies.classType.prototype.start=function(){_start.apply(this,arguments),this.hp=1};enemies.children.entries.forEach(e=>e.hp=1);}};cheat();})(); }},
      { name: "Magnet", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.find(x=>x.collideCallback?.toString().includes('0x5dc)'));x.collideCallback({active:true},{active:true,setActive(){},setVisible(){}})};cheat();})(); }},
      { name: "Heal", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode.state.game.scene.game.events._events.respawn.fn();};cheat();})(); }}
    ],

    "Deceptive Dinos": [
      { name: "Set Fossils", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;x.setState({fossils:Number(parseInt(prompt("How many fossils would you like?")))});x.props.liveGameController.setVal({path:`c/${x.props.client.name}`,val:{b:x.props.client.blook,f:Number(parseInt(prompt("How many fossils would you like?"))),ic:x.state.isCheating}})};cheat();})(); }},
      { name: "Set Multiplier", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;x.setState({fossilMult:Number(parseInt(prompt("What do you want your multiplier to be?")))});x.props.liveGameController.setVal({path:`c/${x.props.client.name}`,val:{b:x.props.client.blook,f:x.state.fossilMult,ic:x.state.isCheating}})};cheat();})(); }}
    ],

    "Battle Royale": [
      { name: "Auto Answer (use always right with this)", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;x.onAnswer?.(true,x.props.client.question.correctAnswers[0]);};cheat();})(); }}
    ],

    "Cafe": [
      { name: "Max Ingredients", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;x.setState({items: Object.fromEntries(Object.entries(x.state.items).map(([k])=>[k,5]))});};cheat();})(); }},
      { name: "Set Cash", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;x.setState({cafeCash:Number(parseInt(prompt("How much cash would you like?")))});x.props.liveGameController.setVal({path:`c/${x.props.client.name}`,val:{b:x.props.client.blook,ca:Number(parseInt(prompt("How much cash would you like?")))}})};cheat();})(); }},
      { name: "Stock Food", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;x.setState({foods: x.state.foods.map(e => ({ ...e, stock: 99, level: 5 }))});};cheat();})(); }}
    ],

    "Factory": [
      { name: "Choose Blook", run() { (()=>{const blooks = [{ name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] }, { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] }, { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] }, { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] }, { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] }, { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] }, { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] }, { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] }, { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] }, { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] }, { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] }, { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] }, { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] }, { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] }, { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] }, { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] }, { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] }, { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] }, { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] }, { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] }, { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] }, { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] }, { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] }, { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] }, { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] }, { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] }, { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] }, { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] }, { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] }, { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] }, { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] }, { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] }, { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] }, { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] }, { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] }, { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] }, { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] }, { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] }, { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] }, { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] }, { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] }, { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] }, { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] }, { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] }, { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] }, { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] }, { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] }, { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] }, { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] }, { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] }, { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] }, { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] }, { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] }, { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] }, { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] }, { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] }, { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] }, { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] }, { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] }, { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] }];const react=(r=document.querySelector("body>div"))=>{return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||react(r.querySelector(":scope>div"))};const {stateNode}=Object.values(react())[1].children[0]._owner;const name=prompt("Enter blook name:").toLowerCase();const blook=blooks.find(({name:n})=>n.toLowerCase()==name);if(blook){if(stateNode.state.blooks.length>=10)alert("Choose a blook to replace");stateNode.chooseBlook(blook);}else alert("Invalid blook!");})(); }},
      { name: "Free Upgrades", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;x.setState({blooks: x.state.blooks.map(b=>({...b,price:[0,0,0,0]}))});};cheat();})(); }},
      { name: "Upgrade All", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;x.state.blooks.forEach(b=>b.level=4);};cheat();})(); }},
      { name: "Send Glitch", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;const glitches={"lb":"Lunch Break","as":"Ad Spam","e37":"Error 37","nt":"Night Time","lo":"#LOL","j":"Jokester","sm":"Slow Mo","dp":"Dance Party","v":"Vortex","r":"Reverse","f":"Flip","m":"Micro"};const val=Object.keys(glitches)[Math.floor(Math.random()*Object.keys(glitches).length)];x.safe=true;x.props.liveGameController.setVal({path:`c/${x.props.client.name}/tat`,val});alert(`Sent a ${glitches[val]}`);};cheat();})(); }},
      { name: "Set Cash", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner.stateNode;x.setState({cash:parseInt(prompt("How much cash would you like?"))});};cheat();})(); }}
    ],

    "Racing": [
      { name: "Set Questions", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;const {stateNode}=x;const progress=stateNode.props.client.amount - parseInt(prompt("How many questions left do you want?"));if(!isNaN(progress)){stateNode.setState({progress});stateNode.props.liveGameController.setVal({path:`c/${stateNode.props.client.name}`,val:{b:stateNode.props.client.blook,pr:progress}});}};cheat();})(); }}
    ],

    "Blook Rush": [
      { name: "Set Blooks", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;const {stateNode}=x;const numBlooks=Number(parseInt(prompt("How many blooks do you want?")));if(!isNaN(numBlooks)){stateNode.setState({numBlooks});if(stateNode.isTeam){stateNode.props.liveGameController.setVal({path:`a/${stateNode.props.client.name}/bs`,val:numBlooks});}else{stateNode.props.liveGameController.setVal({path:`c/${stateNode.props.client.name}/bs`,val:numBlooks});}}};cheat();})(); }},
      { name: "Set Defense Max", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;const {stateNode}=x;const numDefense=Math.min(parseInt(prompt("How much defense do you want? (Max 4)")),4);if(!isNaN(numDefense)){stateNode.setState({numDefense});if(stateNode.isTeam){stateNode.props.liveGameController.setVal({path:`a/${stateNode.props.client.name}/d`,val:numDefense});}else{stateNode.props.liveGameController.setVal({path:`c/${stateNode.props.client.name}/d`,val:numDefense});}}};cheat();})(); }}
    ],

    "Santa's Workshop": [
      { name: "Send Distraction", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;const {stateNode}=x;const distractionKeys=Object.keys({c:"Oh Canada",b:"Blizzard",f:"Fog Spell",d:"Dark & Dusk",w:"Howling Wind",g:"Gift Time!",t:"TREES",s:"Snow Plow",fr:"Use The Force"});const val=distractionKeys[Math.floor(Math.random()*distractionKeys.length)];stateNode.safe=true;stateNode.props.liveGameController.setVal({path:`c/${stateNode.props.client.name}/tat`,val});alert(`Sent a ${{c:"Oh Canada",b:"Blizzard",f:"Fog Spell",d:"Dark & Dusk",w:"Howling Wind",g:"Gift Time!",t:"TREES",s:"Snow Plow",fr:"Use The Force"}[val]}`);};cheat();})(); }},
      { name: "Set Toys", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;const {stateNode}=x;const toys=parseInt(prompt("How many toys would you like?"));if(!isNaN(toys)){stateNode.setState({toys});stateNode.props.liveGameController.setVal({path:`c/${stateNode.props.client.name}`,val:{b:stateNode.props.client.blook,t:toys}});}};cheat();})(); }},
      { name: "Set Toys Per Question", run() { (()=>{const cheat=()=>{const x=Object.values((function r(r=document.querySelector("body>div")){return Object.values(r)[1]?.children?.[0]?._owner?.stateNode||r.querySelector(":scope>div")})())[1].children[0]._owner;const {stateNode}=x;const toysPerQ=parseInt(prompt("How many toys per question would you like?"));if(!isNaN(toysPerQ)){stateNode.setState({toysPerQ});stateNode.props.liveGameController.setVal({path:`c/${stateNode.props.client.name}`,val:{b:stateNode.props.client.blook,t:toysPerQ}});}};cheat();})(); }}
    ]
  };

  const categories = {
    "GLOBAL": "fa-globe",
    "Gold Quest": "fa-coins",
    "Crypto Hack": "fa-bitcoin-sign",
    "Fishing Frenzy": "fa-fish",
    "Tower Defense": "fa-tower-observation",
    "Tower Defense 2": "fa-chess",
    "Monster Brawl": "fa-dragon",
    "Deceptive Dinos": "fa-paw",
    "Battle Royale": "fa-crosshairs",
    "Cafe": "fa-mug-hot",
    "Factory": "fa-industry",
    "Racing": "fa-flag-checkered",
    "Blook Rush": "fa-bolt",
    "Santa's Workshop": "fa-gift"
  };

  const bar = document.createElement("div");
  bar.id = "zodiacBar";

  const brand = document.createElement("div");
  brand.id = "zodiacBrand";
  brand.innerHTML = `
    <img src="https://zodiac-test-whoopsies.vercel.app/image/logo.gif" width="50" height="50">
    <div id="zodiacTitle">ZODIAC</div>
  `;
  bar.appendChild(brand);

  let openMenu = null;

  Object.entries(categories).forEach(([name, icon]) => {
    const wrap = document.createElement("div");
    wrap.className = "zodiac-category";

    const btn = document.createElement("button");
    btn.className = "zodiac-btn";
    btn.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span class="zodiac-label">${name}</span>
    `;

    const menu = document.createElement("div");
    menu.className = "zodiac-menu";

    Scripts[name].forEach(script => {
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
