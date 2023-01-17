const list = document.querySelector('ul');
const p = document.querySelector('p');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const btn = document.getElementById('btn');
const dialog = document.getElementById('create');
const btn_open = document.getElementById('open'); 
const btn_close = document.getElementById('close');
const btn_change = document.getElementById('change');

btn.onclick = function(){
    let value = input.value;
    let value2 = textarea.value;
    input.value = '';
    textarea.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listText2 = document.createElement('p');
    const listBtn = document.createElement('button');
    const listBtn2 = document.createElement('button');
    const listBtn3 = document.createElement('button');


    if(value == ''){
        value = 'タイトル未設定';
    }
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    listItem.appendChild(listBtn2);
    listItem.appendChild(listBtn3);
    listText.textContent = value;
    listText2.textContent = value2;
    listBtn.textContent = '確認';
    listBtn2.textContent = '変更';
    listBtn3.textContent = '消去';
    list.appendChild(listItem);

    listBtn.onclick = function(){
        btn_close.textContent = '閉じる';
        btn_close.style.visibility = 'visible';
        btn.style.visibility='hidden';
        input.value = listText.textContent;
        textarea.value = listText2.textContent;
        dialog.showModal();
    }

    listBtn2.onclick = function(){
        btn.textContent = '変更';
        btn.style.visibility = 'visible';
        btn_close.style.visibility="hidden";
        input.value = listText.textContent;
        textarea.value = listText2.textContent;
        dialog.showModal();
        list.removeChild(listItem);
    }

    listBtn3.onclick = function(){
        dialog.close();
        list.removeChild(listItem);
    }

    dialog.close();
    input.focus();
}



btn_open.addEventListener('click', function() {
    btn.style.visibility='visible';
    btn_change.style.visibility='hidden';
    btn_close.style.visibility='visible';
    btn.textContent = '追加';
    btn_close.textContent ='キャンセル'; 
    input.value = '';
    textarea.value = '';
  dialog.showModal();
}, false);

btn_close.addEventListener('click', function() {
  dialog.close();
}, false);

