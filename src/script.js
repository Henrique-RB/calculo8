// Referências do DOM - HTML
const inpNumber = document.getElementById('inpNumber');
const btnAdd = document.getElementById('btnAdd');
const btnM5 = document.getElementById('btnM5');
const msg = document.getElementById('msg');
const result = document.getElementById('result');

// Lógica do programa

let numbers = [];


function addNumber(){
    if (numbers.length == 8){
        alert('Você atingiu o limite de números');
        return;
    }
    numbers.push(inpNumber.value);
    inpNumber.value = '';
    inpNumber.focus();
}

function showStatus(){
    msg.textContent = `Você já adicionou ${numbers.length} de 8 números.`;
    if( numbers.length == 8){
        btnM5.disabled = false;
    }
    
}

btnAdd.onclick = ()=>{
    addNumber();
    showStatus();
};