'use strict';
{
  // メニュー
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const menu = document.querySelector('.menu');
  const tran = document.querySelector('.tran');

  open.addEventListener('click',() => {
    menu.classList.add('show');
    tran.classList.add('show');
    open.classList.add('hide');
    close.classList.add('show');
  });

  close.addEventListener('click',() =>{
    menu.classList.remove('show');
    tran.classList.remove('show');
    open.classList.remove('hide');
    close.classList.remove('show');
  });
}
{
  // メイン
  function callback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('appear');
      }
    });
  };

  // const targets = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(callback,{
    threshold : 0.2,
  });

  document.querySelectorAll('.animate').forEach(target => {
    observer.observe(target);
  });
}
