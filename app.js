(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const el = (tag, className, text) => { const node = document.createElement(tag); if(className)node.className=className; if(text!==undefined)node.textContent=text; return node; };
  const data = window.SITE_CONTENT;
  const extra = {
    zh: {researcherName:'李沛言 · Peiyan Li',sideRole:'软件工程本科 · 2027 届',sideAffiliation:'科研实习 @ CASIA · NLPR',sideStatus:'机器人学习 · 研究进行中',navEducation:'教育与技能',introTitle:'你好，我是金天乐。',currentPosition:'目前科研实习',currentShort:'近期主要研究 Agentic Policy 加速。',moreWork:'其他探索',fanNote:'研究有时漫长，热爱一直在场。',footerShort:'持续探索，保持好奇。'},
    en: {researcherName:'Peiyan Li',sideRole:'B.Eng. Software Engineering · 2027',sideAffiliation:'Research Intern @ CASIA · NLPR',sideStatus:'Exploring robot learning',navEducation:'Education & Skills',introTitle:"Hello, I'm Tianle.",currentPosition:'Research intern',currentShort:'My recent research focuses on accelerating Agentic Policy.',moreWork:'More explorations',fanNote:'Curiosity in the lab. A red at heart.',footerShort:'Stay curious. Keep exploring.'}
  };
  Object.keys(extra).forEach(lang => Object.assign(data[lang], extra[lang]));
  let language = 'zh', theme = 'light', paused = false;
  try { language=localStorage.getItem('tianle-language')==='en'?'en':'zh'; theme=localStorage.getItem('tianle-theme')==='dark'?'dark':'light'; paused=localStorage.getItem('tianle-motion-paused')==='true'; } catch {}
  const orgMarks=['CASIA','北航','Byte','达升'];
  const revealObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.06});
  const watchReveals=()=>{
    $$('.section-header').forEach(node=>node.classList.add('reveal'));
    $$('#project-list, #extra-projects, #skills, #timeline').forEach(group=>{
      $$('.reveal',group).forEach((node,index)=>node.style.setProperty('--reveal-delay',`${Math.min(index,3)*65}ms`));
    });
    $$('.reveal:not(.visible)').forEach(node=>revealObserver.observe(node));
  };
  let toastTimer;
  function render() {
    const content=data[language];
    document.documentElement.lang=language==='zh'?'zh-CN':'en';
    $$('[data-i18n]').forEach(node=>{const value=content[node.dataset.i18n];if(typeof value==='string')node.textContent=value;});
    $$('[data-alt]').forEach(node=>node.alt=content[node.dataset.alt]);
    $('#language-toggle').replaceChildren(document.createTextNode(language==='zh'?'EN':'中文'),el('span','','↗'));
    $('#language-toggle').setAttribute('aria-label',language==='zh'?'Switch to English':'切换到中文');
    const opened=new Set($$('.project-more[aria-expanded="true"]').map(node=>node.getAttribute('aria-controls')));
    const list=$('#project-list'); list.replaceChildren();
    content.projects.forEach(project=>{
      const article=el('article','project reveal');article.id=project.id;
      const number=el('span','project-number',project.number);number.setAttribute('aria-hidden','true');
      const body=el('div','project-content');body.append(el('span','project-status',project.status),el('h3','',project.title),el('p','project-subtitle',project.subtitle),el('p','project-summary',project.summary));
      const tags=el('div','project-tags');project.tags.forEach(tag=>tags.append(el('span','',tag)));body.append(tags);
      if(project.details?.length){
        const details=el('div','project-details');details.id=`details-${project.id}`;details.hidden=!opened.has(details.id);project.details.forEach(detail=>details.append(el('p','',detail)));
        const more=el('button','project-more');more.type='button';more.setAttribute('aria-controls',details.id);more.setAttribute('aria-expanded',String(!details.hidden));more.append(el('span','',details.hidden?content.projectMore:content.projectLess),el('span','','+'));
        more.addEventListener('click',()=>{details.hidden=!details.hidden;more.setAttribute('aria-expanded',String(!details.hidden));more.firstChild.textContent=data[language][details.hidden?'projectMore':'projectLess'];});
        body.append(more,details);
      }
      article.append(number,body);list.append(article);
    });
    const extras=$('#extra-projects');extras.replaceChildren();
    content.extras.forEach((item,index)=>{const article=el('article','extra-project reveal');article.append(el('span','extra-project-index',`0${index+1} / EXPLORATION`),el('h3','',item.title),el('p','',item.body));extras.append(article);});
    const skills=$('#skills');skills.replaceChildren();
    content.skills.forEach(skill=>{const group=el('div','skill-group reveal');group.append(el('h3','',skill.title),el('p','',skill.items.join(' · ')));skills.append(group);});
    const timeline=$('#timeline');timeline.replaceChildren();
    content.experiences.forEach((experience,index)=>{
      const item=el('article',`timeline-item reveal${experience.current?' is-current':''}`);
      const mark=el('span','institution-monogram',language==='en'&&index===1?'BUAA':language==='en'&&index===3?'DS':orgMarks[index]);mark.setAttribute('aria-hidden','true');
      const body=el('div','timeline-main'),head=el('div','timeline-head');head.append(el('h3','',experience.org),el('span','timeline-time',experience.time));body.append(head,el('span','timeline-role',experience.role),el('p','',experience.body));
      if(experience.current){const link=el('a','timeline-researcher',language==='zh'?'李沛言 · Peiyan Li ↗':'Peiyan Li ↗');link.href='https://lpy1219.github.io/';link.target='_blank';link.rel='noopener noreferrer';body.append(link);}
      item.append(mark,body);timeline.append(item);
    });
    updateMotionLabel();watchReveals();updateScroll();
  }
  function setTheme(next){theme=next;document.documentElement.dataset.theme=theme;$('#theme-toggle').setAttribute('aria-label',language==='zh'?(theme==='dark'?'切换浅色主题':'切换深色主题'):(theme==='dark'?'Switch to light theme':'Switch to dark theme'));$('#theme-toggle').setAttribute('aria-pressed',String(theme==='dark'));try{localStorage.setItem('tianle-theme',theme);}catch{}}
  function updateMotionLabel(){const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;$('#motion-toggle').setAttribute('aria-pressed',String(paused));$('#motion-toggle').setAttribute('aria-label',language==='zh'?(paused?'播放动画':'暂停动画'):(paused?'Play animations':'Pause animations'));$('#motion-toggle .motion-symbol').textContent=paused?'▷':'Ⅱ';$('#motion-toggle').title=reduced?(language==='zh'?'已遵循系统减少动态效果设置':'System reduced-motion preference is respected'):'';}
  function setPaused(value){paused=value;document.documentElement.classList.toggle('motion-paused',paused);updateMotionLabel();try{localStorage.setItem('tianle-motion-paused',String(paused));}catch{}}
  $('#language-toggle').addEventListener('click',()=>{language=language==='zh'?'en':'zh';try{localStorage.setItem('tianle-language',language);}catch{}render();setTheme(theme);});
  $('#theme-toggle').addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
  $('#motion-toggle').addEventListener('click',()=>setPaused(!paused));
  function showToast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('show');toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2500);}
  $('#copy-email').addEventListener('click',async()=>{
    let copied=false;try{await navigator.clipboard.writeText('2319546842@qq.com');copied=true;}catch{const area=el('textarea','','2319546842@qq.com');area.style.cssText='position:fixed;left:-9999px';document.body.append(area);area.select();try{copied=document.execCommand('copy');}catch{}area.remove();}
    showToast(language==='zh'?(copied?'邮箱已复制':'请复制：2319546842@qq.com'):(copied?'Email copied':'Please copy: 2319546842@qq.com'));
  });
  const sections=$$('main section[id]');let scrollQueued=false;
  const nav=$('.side-nav'),navIndicator=el('span','nav-indicator');
  navIndicator.setAttribute('aria-hidden','true');nav.append(navIndicator);
  function moveNavIndicator(link){
    if(!link)return;
    const horizontal=window.innerWidth<=760;
    navIndicator.style.width=`${horizontal?link.offsetWidth:2}px`;
    navIndicator.style.height=`${horizontal?2:Math.max(8,link.offsetHeight-8)}px`;
    navIndicator.style.transform=`translate3d(${horizontal?link.offsetLeft:-1}px,${horizontal?nav.clientHeight-2:link.offsetTop+4}px,0)`;
  }
  function updateScroll(){scrollQueued=false;const range=document.documentElement.scrollHeight-window.innerHeight;$('.reading-progress').style.width=`${range>0?Math.min(100,window.scrollY/range*100):0}%`;let current='about';sections.forEach(section=>{if(section.getBoundingClientRect().top<window.innerHeight*.33)current=section.id;});$$('.side-nav a').forEach(link=>{const active=link.getAttribute('href')==='#'+current;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});moveNavIndicator($('.side-nav a.active'));}
  window.addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateScroll);}},{passive:true});
  window.addEventListener('resize',updateScroll,{passive:true});
  document.fonts?.ready.then(updateScroll);
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',updateMotionLabel);
  render();setTheme(theme);setPaused(paused);
})();
