document.addEventListener('DOMContentLoaded', ()=>{
  introEffect()
  skillsEffect()
})

// function introEffect():void{
//   const introWrap=document.querySelector('#intro_wrap')
//   const introLi=document.querySelector('#intro_inner>li')

  

// }


function skillsEffect():void{
  const aboutWrap = document.querySelector('#about_wrap')
  const aboutBox = document.querySelector('#about_box')
  const skillsInner = document.querySelector('#skills_inner')

  let endX = skillsInner.offsetWidth-document.documentElement.clientWidth

  gsap.to(skillsInner, {x:-endX, duration:10, ease:"power1.out", scrollTrigger:{
    trigger:aboutWrap,
    markers:true,
    start:`${aboutBox.offsetHeight} 0%`,
    end:`${endX} 0%`,
    scrub:1,
    pin:true,
}})
}