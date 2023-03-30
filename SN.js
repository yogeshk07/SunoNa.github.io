

const music=new Audio("audio/1.mp3")


const songs=[
{
id:"1",
songName:`Perfect<br><div class="subtitle">Ed Sheeran </div>`,
poster:"img/img1.jpg"
},

{
id:"2",
songName:`Suno Na <br><div class="subtitle">Abhijeet </div>`,
poster:"img/img2.jpg"
},

{
id:"3",
songName:`Tum se hi<br><div class="subtitle">Preetam</div>`,
poster:"img/img3.jpg"
},

{
id:"4",
songName:`Soniyo<br><div class="subtitle">Sonu nigam</div>`,
poster:"img/img4.jpg"
},

{
id:"5",
songName:`Main Koi Aisa Geet Gaaun<br><div class="subtitle">Abhijeet </div>`,
poster:"img/img5.jpg"
},

{
id:"6",
songName:`Kalank<br><div class="subtitle">Arijit</div>`,
poster:"img/img6"
},

{
id:"7",
songName:`Bewafa <br><div class="subtitle">Imran Khan </div>`,
poster:"img/img7.jpg"
},

{
id:"8",
songName:`2002<br><div class="subtitle">Annie Marie </div>`,
poster:"img/img8.jpg"
},

{
id:"9",
songName:`Summer High<br><div class="subtitle">AP Dhillon</div>`,
poster:"img/img9.jpg"
},

{
id:"10",
songName:`Heer Ranjha<br><div class="subtitle">Ritu</div>`,
poster:"img/img10.jpg"
},

{
id:"11",
songName:`Maan Meri Jaan<br><div class="subtitle">King</div>`,
poster:"img/img11.jpg"
},

{
id:"12",
songName:`Main nahi to kaun be<br><div class="subtitle">Shrushti</div>`,
poster:"img/img12.jpg",
},

]


Array.from(document.getElementsByClassName('songName')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName
})



var masterPlay=document.getElementById("masterPlay")
var wave=document.getElementById("wave")

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0){
        music.play();
        let a=document.getElementById('wave').classList
        a.add('active1')
        let b=document.getElementById('masterPlay').classList
        b.remove("bi-play-fill")
        b.add("bi-pause-fill")
      
        
    }else{
        let a=document.getElementById('wave').classList
        a.remove('active1')
        let b=document.getElementById('masterPlay').classList
        b.remove("bi-pause-fill")
        b.add("bi-play-fill")
        music.pause(); 
    }
})




let index=0
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title')
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
    e.addEventListener('click',(el)=>{
        let index=el.target.id
        console.log(index)
        music.src=`audio/${index}.mp3`
        poster_master_play.src =`img/img${index}.jpg`
        music.play()


        let b=document.getElementById('masterPlay').classList
        b.remove("bi-play-fill")
        b.add("bi-pause-fill")
        let a=document.getElementById('wave').classList
        a.add('active1')

        let songTitle=songs.filter((els)=>{
            return els.id==index

        })
        songTitle.forEach(elss =>{
            let {songName}=elss
            title.innerHTML=songName
        })
    })
})




let currentTime=document.getElementById('currentStart')
let currentEnd=document.getElementById('currentEnd')

music.addEventListener('timeupdate',()=>{

let music_curr=music.currentTime;
let music_dur=music.duration
//console.log(music_dur)

let min1=Math.floor(music_dur / 60);
let sec1=Math.floor(music_dur % 60);

//console.log(min1)

   currentEnd.innerText=`${min1}:${sec1}`


   let min2=Math.floor(music_curr / 60);
  let sec2=Math.floor(music_curr % 60);
currentTime.innerText=`${min2}:${sec2}`

})


