console.log('Jai swaminarayan');

let ham=document.getElementById('ham');
let to=document.getElementById('left');
ham.addEventListener('click',()=>{
    // console.log('ham clicked');
    to.classList.toggle('releft');
    to.classList.toggle('left')
})


 let s1=new Audio("script1.mp3");
 let s2=new Audio("script2.mp3");
 let s3=new Audio("script3.mp3");
 let s4=new Audio("script4.mp3");
 let s5=new Audio("script5.mp3");
 let play=document.getElementById('play');
 let ra=document.getElementById('range');
 let plplay=document.getElementById('just2');

 play.addEventListener('click',()=>{
        if(s1.paused || s1.currentTime<=0)
        {
            s1.play();
            play.classList.remove('fa-play');
            play.classList.add('fa-pause'); 
            s1.currentTime=0;
        }
        else
        {
            s1.pause();
            play.classList.remove('fa-pause');
            play.classList.add('fa-play');
            s1.currentTime=0;
        }
 })

 s1.addEventListener('timeupdate',()=>{
    pro=parseInt((s1.currentTime/s1.duration)*100);
    ra.value=pro;
    
 })

 ra.addEventListener('change',()=>{
    s1.currentTime=((ra.value*s1.duration)/100);
 })


 plplay.addEventListener('click',()=>{
    if(s2.paused || s2.currentTime<=0)
    {
        s2.play();
        s1.pause();
        play.classList.add('fa-play-circle');
        play.classList.remove('fa-pause-circle');
        plplay.classList.add('fa-pause-circle');
        s2.currentTime=0;
        s1.currentTime=0;

    }
    else
    {
        s2.pause();
        s1.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        plplay.classList.remove('fa-pause-circle');
        plplay.classList.add('fa-play-circle');
        s2.currentTime=0;
    }
 })

 s2.addEventListener('timeupdate',()=>{
    pro=((s2.currentTime/s2.duration)*100);
    ra.value=pro;
 })

 ra.addEventListener('change',()=>{
    s2.currentTime=((ra.value*s2.duration)/100);
 })



 
