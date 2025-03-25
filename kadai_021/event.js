const btn=document.getElementById('btn');
const text=document.getElementById('text');

btn.addEventListener('click',()=>{
    //クリックされたら2秒後にメッセージを変更
    setTimeout(()=>{
        text.textContent='ボタンをクリックしました';
    },2000);
 });

