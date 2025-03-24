//buttonというidを持つhtmlの要素を取得、定数に代入
const btn=document.getElementById('btn');

//h2タグの要素を取得
const textElement=document.getElementById('text');

//html要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {
    //h2のテキストを「ボタンをクリックしました」に変更
    textElement.textContent='ボタンをクリックしました';
});