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
});

const image = document.getElementsByClassName('card-img-top');
for(const images of image){
    images.addEventListener('mouseenter',function(e){
       e.target.style.transform = 'rotate(20deg)';
       setTimeout(function() {
        e.target.style.transform = "rotate(0deg)";
      }, 400);
    },false);  
}

//double click event
document.getElementById('Subscribe').addEventListener('dblclick',function() {
    document.getElementById('subscribe-section').style.backgroundColor = 'green';
})
