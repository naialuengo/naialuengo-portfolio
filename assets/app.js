AOS.init({
    duration:2000
});

const header = document.querySelector('.header');
window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }

}
