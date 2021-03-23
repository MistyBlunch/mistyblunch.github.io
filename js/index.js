/**********************************************/
/*  English Language default
/**********************************************/
(function enDefLang() {
  let esOpt = document.getElementsByClassName('es-opt')
  for (let i = 0; i < esOpt.length; i++) {
    esOpt[i].style.display = 'none'
  }
}())

/**********************************************/
/*  Loader
/**********************************************/
let section = document.getElementsByTagName("section")
let loader_ctn = document.getElementById("loader_ctn")

for(let i=0; i<section.length; i++) {
  section[i].style.display = 'none'
}
window.addEventListener("load", () => {
  for(let i=0; i<section.length; i++) {
    section[i].style.display = 'flex'
  }
  loader_ctn.style.display = 'none'
})

/**********************************************/
/*  Select Language
/**********************************************/
function selectLan(el) {
  let lang = el.selectedIndex
  let esOpt = document.getElementsByClassName('es-opt')
  let enOpt = document.getElementsByClassName('en-opt')

  // english
  if (lang === 0) {
    for (let i = 0; i < esOpt.length; i++) {
      esOpt[i].style.display = 'none'
      enOpt[i].style.display = 'block'
    }
    console.log('Hello!')
  // spanish
  } else {
    for (let i = 0; i < enOpt.length; i++) {
      enOpt[i].style.display = 'none'
      esOpt[i].style.display = 'block'
    }
    console.log('Hola!')
  }
}

/**********************************************/
/*  Main Hero 
/**********************************************/
function toContact() {
  let heroContact = document.getElementsByClassName('hero-contact')
  let heroContact_0 = heroContact[0]

  let contactEl = document.documentElement.offsetHeight - heroContact_0.offsetHeight

  window.scroll({
    top: contactEl,
    left: 0,
    behavior: 'smooth'
  })
}

/**********************************************/
/*  Footer Year
/**********************************************/
let anhio = new Date()
let curr_year =  document.getElementById("current_year")
curr_year.innerText = anhio.getFullYear() 
/**********************************************/

/**********************************************/
/*  Function on Scroll of About Section
/**********************************************/
function onScroll() {
  let heroContact = document.getElementsByClassName('hero-contact')
  let heroContact_0 = heroContact[0]
  
  let docElScroll = document.documentElement.scrollTop

  if (docElScroll + 1 >= document.documentElement.offsetHeight - heroContact_0.offsetHeight) {
    heroContact_0.style.zIndex = '0'
    console.log('Do you want to get in touch? 🖤')
  } else {
    heroContact_0.style.zIndex = '-1'
  }
}

/* Show Read More */
function openReadMore(id) {
  let readMoreTXT = document.getElementById(id)
  let readMoreSection = document.getElementById(id + '-section')
  console.log("You're curious 👀")
  readMoreTXT.style.display = 'none'
  readMoreSection.style.display = 'block'
}

/**********************************************/
/*  Skills Progrees
/**********************************************/
function seeMoreSkills() {
  let moreSkills = document.getElementsByClassName('more-skills')
  let moreSkills_0 = moreSkills[0]
  let moreSkillsBtn = document.getElementsByClassName('skills-more-btn')
  let moreSkillsBtn_0 = moreSkillsBtn[0]

  moreSkills_0.classList.replace('d-none', 'd-block')
  moreSkillsBtn_0.style.display = 'none'
  console.log('There are the technologies that I saw 🐶')
}

/**********************************************/
/*  Work Projects
/**********************************************/
function showProject(project) {
  /* Descriptions and Titles */
  let title = project.dataset.title
  let image = project.children[0].src
  let link = project.dataset.link
  let desc = project.dataset.desc
  let tools = project.dataset.tools.split(',')

  let toolsSize = tools.length

  /* Components of pop up Project */
  let popup = document.getElementById('project-popup')
  let projectTitle = document.getElementById('project-name')
  let projectImage = document.getElementById('project-img')
  let projectLink = document.getElementById('project-link')
  let projectDesc = document.getElementById('project-desc')
  let projectList = document.getElementById('project-list')
  
  /* Metiendo los datos de data-* en el pop up */
  projectTitle.textContent = title
  projectImage.src = image
  projectLink.href = link
  projectDesc.textContent = desc

  /* Iterando sobre un array, mientras esto pasa también se crea una lista */
  for (let i = 0; i < toolsSize; i++) {  
    let li = document.createElement('li')
    projectList.appendChild(li)
    li.textContent = tools[i]
    li.setAttribute('id', 'project-tool')
  }
  popup.style.display = 'flex'
  popup.classList.replace('d-none', 'popup')
}

function closeProject() {
  let popup = document.getElementById('project-popup')
  let projectList = document.getElementById('project-list')

  let projectListSize = projectList.childElementCount

  for (let i = 0; i < projectListSize; i++) {  
    projectList.removeChild(projectList.children[0])
  }
  popup.style.display = 'none'
}

function seeMoreProjects() {
  let moreProjects = document.getElementsByClassName('container more-projects')
  let moreProjects_0 = moreProjects[0]
  let moreProjectsBtn = document.getElementsByClassName('projects-more-btn')
  let moreProjectsBtn_0 = moreProjectsBtn[0]

  moreProjects_0.style.display = 'block'
  moreProjectsBtn_0.style.display = 'none'
  console.log('There are the projects that I\'ve done 🐶')
}

/**********************************************/
/*  Set a Functions when window scrolls
/**********************************************/
document.addEventListener("scroll", function() {
  onScroll()
})
