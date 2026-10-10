const DB_KEY='niixo_market_shared_demo_v1';
function loadDB(){try{return JSON.parse(localStorage.getItem(DB_KEY))||{orders:[],payments:[],expenses:[]}}catch{return{orders:[],payments:[],expenses:[]}}}
function saveDB(db){localStorage.setItem(DB_KEY,JSON.stringify(db))}
function newId(prefix){return prefix+'-'+Date.now().toString(36).toUpperCase().slice(-6)+'-'+Math.random().toString(36).slice(2,5).toUpperCase()}
function cash(n){return 'Rs '+Number(n||0).toLocaleString('en-PK',{maximumFractionDigits:2})}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function dateToday(){return new Date().toISOString().slice(0,10)}
function dateLabel(s){return s?new Date(s+'T12:00:00').toLocaleDateString('en-PK',{day:'2-digit',month:'short',year:'numeric'}):'—'}
