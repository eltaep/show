let addonecard=document.querySelector('.addonecard')
let a=1;
let answer=document.querySelectorAll('input')[1]
let question=document.querySelectorAll('input')[0]
let childern=document.querySelector('.childern')
let removebtns=document.querySelectorAll('.remove');
removebtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.parentElement.parentElement.remove()
        console.log(12)
    })
})
let deleteallcards=document.querySelector('.deleteallcards')
let main=document.querySelector('.main')
addonecard.onclick=()=>{
    if(a==1){
        a=2;
    main.style.display='block';
    
question.focus()


    }
    else if(a==2){
        a=1;
    main.style.display='none'

    }



}
deleteallcards.addEventListener('click',()=>{
    main.style.display='none';
    childern.innerHTML=''
    localStorage.childernoo=''


})


question.onkeyup=(char)=>{
    if(char.key=='Enter'){
        answer.focus()
    }

}

answer.onkeyup=(char)=>{
    if(char.key=='Enter'&& answer.value!=''&& question.value!=''){

        addonecardee()

    }

}
document.querySelector('.savee').addEventListener('click',()=>{

    if( answer.value!=''&& question.value!=''){

        addonecardee()

    }
})
function addonecardee(){
    let child=document.createElement('div')
    child.classList.add('child')
    let removeshow=document.createElement('div')
    removeshow.classList.add('removeshow')
    let remove=document.createElement('div')
    remove.classList.add('remove')
    remove.addEventListener('click',()=>{
        remove.parentElement.parentElement.remove()
    })
    let show=document.createElement('div')
    show.classList.add('show')
    show.innerHTML='Show Ans'
    remove.innerHTML='Remove flash'
    removeshow.appendChild(show)
    removeshow.appendChild(remove)
    let qquestion=document.createElement('div')
    qquestion.classList.add('qquestion')
    let aanswer=document.createElement('div')
    aanswer.classList.add('aanswer')
    aanswer.innerHTML=answer.value;
    qquestion.innerHTML=question.value;
    aanswer.style.visibility='hidden'
    show.addEventListener('click',()=>{
        aanswer.style.visibility='visible'
    })
    child.appendChild(qquestion)
    child.appendChild(aanswer)
    child.appendChild(removeshow)
    childern.appendChild(child)
    answer.value=''
    question.value=''
    question.focus()
    localStorage.childernoo=childern.innerHTML;


}
if(localStorage.childernoo){
    let childernoo2=localStorage.childernoo;
    childern.innerHTML=childernoo2
    let allremovebtns=document.querySelectorAll('.remove');
    allremovebtns.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            btn.parentElement.parentElement.remove()
            localStorage.childernoo=childern.innerHTML
        })
    })

    let allshow=document.querySelectorAll('.show');
    let sdf=document.querySelectorAll('.aanswer')
    allshow.forEach((btn,indo)=>{
        btn.addEventListener('click',()=>{
            // btn.parentElement.parentElement.remove()
            sdf.forEach((aa,index)=>{
                sdf[indo].style.visibility='visible'

            })
            localStorage.childernoo=childern.innerHTML
        })
    })
    
}
document.querySelector('.close').addEventListener('click',()=>{
    main.style.display='none'
    answer.value=''
    question.value=''
})