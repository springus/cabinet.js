document.addEventListener('DOMContentLoaded', () => {
  introEffect()
  drEffect()
  skillsEffect()
  projectEffect()
})

function introEffect() {
  const headerWrap = document.querySelector('#header_wrap')
  const introInner = document.querySelector('#intro_inner')
  const introLi = document.querySelectorAll('#intro_inner>li')

  let currentIndex = 0

  // console.log(endX)

  init()
  initEvent()


  function init() {
    gsap.set(introLi, { opacity: 0, scale: 0.8 })
    gsap.set(introLi[0], { y: -headerWrap.offsetHeight })
  }

  function initEvent() {
    gsap.to(introLi[currentIndex], {
      y: 0, scale: 1, opacity: 1, duration: 0.8, ease: "power1.out", onComplete: () => {
        gsap.to(introLi[currentIndex], {
          scale: 0.8, opacity: 0, duration: 1, ease: "power1.out", onComplete: () => {
            gsap.set(introLi[currentIndex + 1], { scale: 1.2, opacity: 1 })
          }
        })
      }
    })

    gsap.to(introLi[currentIndex + 1], {
      scale: 1.2, opacity: 1, duration: 1, ease: "power1.out", onComplete: () => {
        gsap.set(introLi[currentIndex + 2], { scale: 1.2, opacity: 1 })
        gsap.to(introLi[currentIndex + 1], {
          scale: 0, opacity: 0, duration: 1, ease: "power1.out", scrollTrigger: {
            trigger: introInner,
            markers: true,
            start: '0% 0%',
            end: '100%, 0%',
            scrub: 1,
            pin: true
          }
        })
      }
    })
  }
}


function drEffect() {
  const drWrap = document.querySelector('#directional_wrap')
  const drInner = document.querySelector('#directional_inner')
  const drLi = document.querySelectorAll('#directional_inner>li')
  const drText = document.querySelectorAll('.directional_text')
  const containerWrap = document.querySelector('#container_wrap')
  const aboutWrap = document.querySelector('#about_wrap')
  const aboutBox = document.querySelector('#about_box')

  // console.log(drInner.children[0].children[1])

  init()
  initEvent()


  function init() {
    gsap.set(drText, { y: 100, opacity: 0 })

  }

  function initEvent() {
    for (let i = 0; i < 4; i++) {

      gsap.to(drInner.children[i].children[1], {
        y: 0, opacity: 1, duration: 1.2, delay: i * 0.5, ease: "power1.out", scrollTrigger: {
          trigger: drWrap,
          markers: true,
          start: '-40% 0%',
          end: '0% 0%',
          //scrub: 1,
          // pin: true
        }
      })
    }

    // gsap.to(aboutWrap, {
    //   duration: 1, ease: "power1.out", scrollTrigger: {
    //     trigger: drInner,
    //     markers: true,
    //     start: '0% 0%',
    //     end: '100% 0%',
    //     scrub: 1,
    //     pin: true
    //   }
    // })

  }


}




function skillsEffect() {
  const aboutWrap = document.querySelector('#about_wrap')
  const aboutBox = document.querySelector('#about_box')
  const skillsWrap = document.querySelector('#about_skills')
  const skillsInner = document.querySelector('#skills_inner')

  let endX = skillsInner.offsetWidth - document.documentElement.clientWidth

  gsap.to(skillsInner, {
    x: -endX, duration: 3, ease: "power1.out", scrollTrigger: {
      trigger: aboutWrap,
      // markers: true,
      // start:'0% 0%',
      start: `${aboutBox.offsetHeight} 0%`,
      end: `${endX} 0%`,
      // end:`bottom center`,
      // end:'-skillsWrap.offsetHeight 0%',
      scrub: 1,
      pin: true
    }
  })
}




// function projectEffect() {
//   const body = document.querySelector('body')
//   const projectInner = document.querySelectorAll('#project_inner>li')

//   let grayLayer = document.createElement('div')
//   grayLayer.id = "grayLayer"


//   for (item of projectInner) {
//     item.addEventListener('click', clickProject)
//   }

//   grayLayer.addEventListener('click', hideModal)

//   function clickProject() {
//     let clickIndex = getIndex(this)
//     showProject(clickIndex)
//     console.log(getIndex(this))
//   }

//   function getIndex(turn) {
//     let selectedIndex = 0;
//     while ((turn = turn.previousElementSibling) != null) {
//       selectedIndex++
//     }
//     return selectedIndex
//   }


//   function showProject() {
//     body.append(grayLayer)
//     gsap.set(grayLayer, { display: "block" })

//     gsap.to(grayLayer, {
//       opacity: 0.9, duration: 0.2, ease: "power1.out", onComplete: () => {
//       }
//     })
//     gsap.set('body,html', { overflow: 'hidden' })

//   }

//   function hideModal() {
//     gsap.to(grayLayer, {
//       opacity: 0.9, duration: 0.2, ease: "power1.out", onComplete: () => {
//         gsap.set(grayLayer, { display: "none" })
//       }
//     })
//     gsap.set('body,html', { overflow: 'scroll' })
//   }

// }