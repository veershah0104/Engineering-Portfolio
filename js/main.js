/* ===== EDIT YOUR DETAILS HERE (name, contact, footer update on every page) ===== */
const SITE={name:"Veer Shah",email:"veershah0104@gmail.com",linkedin:"https://www.linkedin.com/in/veer-shah-7979a6227"};
document.addEventListener('DOMContentLoaded',()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$$('[data-site]').forEach(e=>e.textContent=SITE[e.dataset.site]);
$$('[data-href]').forEach(e=>e.href=(e.dataset.href=='email'?'mailto:':'')+SITE[e.dataset.href]);
const nav=$('#nav');if(nav)nav.innerHTML=`<a href="index.html"><b>${SITE.name}</b></a><ul>${[['About','index.html#about'],['Work','index.html#work'],['Skills','index.html#skills'],['Upcoming','upcoming.html'],['Contact','index.html#contact']].map(l=>`<li><a class="l" href="${l[1]}">${l[0]}</a></li>`).join('')}</ul>`;
const ft=$('#foot');if(ft)ft.innerHTML=`<span class="mono">© ${new Date().getFullYear()} ${SITE.name}</span>`;
const cur=document.createElement('div');cur.id='cur';cur.innerHTML='<span></span>';document.body.append(cur);
let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;document.body.style.setProperty('--mx',mx+'px');document.body.style.setProperty('--my',my+'px');cur.firstChild.textContent=`x ${String(mx).padStart(4,'0')}  y ${String(my).padStart(4,'0')}`});
(function f(){cx+=(mx-cx)*.2;cy+=(my-cy)*.2;cur.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(f)})();
const h=$('.hero h1');if(h){h.innerHTML=h.textContent.trim().split(' ').map((w,i)=>`<span style="animation-delay:${.15+i*.12}s">${w}</span>`).join(' ')}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);
if(e.target.dataset.n){const n=+e.target.dataset.n;let t=0;const id=setInterval(()=>{t+=n/40;e.target.textContent=Math.min(n,Math.round(t))+(e.target.dataset.s||'');if(t>=n)clearInterval(id)},30)}}}),{threshold:.2});
$$('.rv,[data-n],.skills').forEach(e=>io.observe(e));
$$('.card').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
$$('.big,.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.2}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
/* ===== HERO: meshing gears that react to the cursor ===== */
const cv=$('#hero-canvas');if(!cv)return;const g=cv.getContext('2d');let W,H,a=0,ent=0;
const rs=()=>{const d=devicePixelRatio||1;W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;g.setTransform(d,0,0,d,0,0)};rs();addEventListener('resize',rs);
function gear(x,y,r,n,ang,sp){const T=r*.16,s=Math.PI*2/n;g.beginPath();
for(let i=0;i<n;i++){const b=ang+i*s;[[0,r],[.2,r+T],[.5,r+T],[.7,r]].forEach((p,k)=>{const q=b+p[0]*s;g[i+k?'lineTo':'moveTo'](x+Math.cos(q)*p[1],y+Math.sin(q)*p[1])})}g.closePath();g.stroke();
g.beginPath();g.arc(x,y,r*.82,0,7);g.moveTo(x+r*.2,y);g.arc(x,y,r*.2,0,7);g.stroke();
for(let i=0;i<sp;i++){const q=ang+i*Math.PI*2/sp;g.beginPath();g.moveTo(x+Math.cos(q)*r*.2,y+Math.sin(q)*r*.2);g.lineTo(x+Math.cos(q)*r*.82,y+Math.sin(q)*r*.82);g.stroke()}}
function draw(){ent=Math.min(1,ent+.012);const e=1-Math.pow(1-ent,3),px=mx/innerWidth-.5,py=my/innerHeight-.5;
a+=.004+px*.012;g.clearRect(0,0,W,H);g.lineWidth=1.2;
const R=Math.min(W,H)*(W<820?.2:.26),X=W*(W<820?.5:.74)-px*30,Y=H*.52-py*30,n1=26,n2=13,r2=R/2,D=R+r2+R*.09,an=-.7;
g.strokeStyle='rgba(214,228,245,'+.55*e+')';gear(X,Y,R*e,n1,a,6);
g.strokeStyle='rgba(255,178,31,'+.9*e+')';gear(X+Math.cos(an)*D,Y+Math.sin(an)*D,r2*e,n2,-a*n1/n2+Math.PI/n2,5);
g.strokeStyle='rgba(214,228,245,'+.3*e+')';gear(X-R*1.05,Y+R*1.05,R*.34*e,10,a*2.4+px*3,4);
g.setLineDash([4,6]);g.beginPath();g.arc(X,Y,R*1.22,a*.3,a*.3+Math.PI*1.4);g.stroke();g.setLineDash([]);
g.fillStyle='rgba(131,147,173,.9)';g.font='11px IBM Plex Mono';g.fillText('Ø '+(R*2|0)+'  ratio 2:1  '+((a*57.3)%360|0)+'°',X-R,Y+R*1.45);
requestAnimationFrame(draw)}draw();
});
