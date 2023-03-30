//nav bar-------------------->>>>

  function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


//accordion---------------->>>
  const OurItemDiv=document.getElementsByClassName("item")
  const iconOpen=document.getElementsByClassName("iconOpen")
  const iconClose=document.getElementsByClassName("iconClose")
//console.log(OurItemDiv)

  for (let i = 0; i <  OurItemDiv.length; i++){
    iconClose[i].style.display="none"
    OurItemDiv[i].addEventListener('click',()=>{

     const result= OurItemDiv[i].classList.toggle("active");

      if(result){
        iconClose[i].style.display="block"
        iconOpen[i].style.display="none"
      }
      else{
        iconClose[i].style.display="none"
        iconOpen[i].style.display="block"

      }
    });
  }

//welcome song-------------------->>>>

    let x=document.getElementById("welcome")
    function WelcomeSong(){
      x.play()
    }

    function WelcomeSongOut(){
      x.pause()
    }

    //////---------------------
   var a=new Audio("audio/TM.mp3")
    function DemoSong(){
      a.play()
    }
    
    function DSout(){
      a.pause()
    }


    var b=document.getElementById('bkh')
    function DemoSong2(){
      b.play()
    }
     function DS2out(){
      b.pause()
    }
    
var honey=document.getElementById("HS1")
 function DemoSong3(){
  honey.play()
 }
function DemoSong3out(){
  honey.pause()
}

    var c=document.getElementById('HS2')
    function DemoSong4(){
      c.play()
    }
    function DemoSong4out(){
      c.pause()
    }


    var d=document.getElementById('US1')
    function DemoSong5(){
      d.play()
    }
    function DemoSong5out(){
      d.pause()
    }

    var e=document.getElementById('US2')
    function DemoSong6(){
      e.play()
    }
    function DemoSong6out(){
      e.pause()
    }

    var f=document.getElementById('US3')
    function DemoSong7(){
      f.play()
    }
    function DemoSong7out(){
      f.pause()
    }





   


//counter-------------------------------------
    
     let counts1=setInterval(update);
        let upto1=0;
        function update(){
            let count1= document.getElementById("Counter1");
            count1.innerHTML=++upto1 +"K+";
            if(upto1 === 300) {
                clearInterval(counts1);
            }
        }

     let counts2=setInterval(update2);
     let upto2=0;
        function update2(){
            let count2= document.getElementById("Counter2");
            count2.innerHTML=++upto2+"K+";
            if(upto2 === 500) {
                clearInterval(counts2);
            }
        }

    let counts3=setInterval(update3);
    let upto3=0;
        function update3(){
            let count3= document.getElementById("Counter3");
            count3.innerHTML=++upto3+"K+";
            if(upto3 === 100) {
                clearInterval(counts3);
            }
        }






