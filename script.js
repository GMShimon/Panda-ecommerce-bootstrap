document.getElementById('h2').style.color = 'red';
document.getElementById('bag-container').style.backgroundColor = 'tomato';
document.getElementById('bag-container').style.paddingBottom = '20px';
const card = document.getElementsByClassName('card');
for(const C of card) {
    C.style.borderRadius = '30px';
}
document.getElementById('input').addEventListener('keyup',function(event){
    if(event.target.value == 'email'){
        document.getElementById('submit-btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('submit-btn').setAttribute('disabled',true);
    }
})