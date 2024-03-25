window.addEventListener("load",()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // page loader
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display="none";
    }, 1000);
})


//togle navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling")
})
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}


//active section
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash!==""){
        //active overlay
        document.querySelector(".overlay").classList.add("active");
        document.body.classList.add("hide");
        const hash = e.target.hash;
        // console.log(hash)
        if (e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            document.body.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
});


//about tab
const tabContainer = document.querySelector('.about-taps'),
aboutSection = document.querySelector('.about-section');
tabContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('tab-item') && !e.target.classList.contains('active')){
        tabContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const target = e.target.getAttribute('data-target');
        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        aboutSection.querySelector(target).classList.add('active');
    }
});

// detail  pop up
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portofolioDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})

function portofolioDetails(portofolioItem){
    // console.log(portofolioItem);
    document.querySelector(".pp-thumbnail img").src = 
    portofolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portofolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portofolioItem.querySelector(".portfolio-item-detail").innerHTML;
}











document.addEventListener('DOMContentLoaded', function() {
    fetchData();
  });
  
  function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true); // Ganti 'data.json' dengan URL sumber data Anda
    xhr.onload = function() {
        if(this.status === 200) {
            const data = JSON.parse(this.responseText);
            profile(data);
            displayEperiences(data);
            displayEducations(data);
            displaySkills(data);
            displaySocialMedia(data);
            displayProject(data);
        } else {
            console.error('Failed to fetch data');
        }
    }
    xhr.send();
  }
 // display prifile
 function profile(data) {
  home(data);
  about(data);
  contact(data);
  

  function contact(data){
    const profileContainer = document.getElementById('contact-data');
    let html = '';
    data.forEach(item => {
      if (item.Abouts) {
        item.Abouts.forEach(about => {
          html += `
          <div class="contact-info-item">
            <h3>Email</h3>
            <p>${about.email}</p>
          </div>
          <div class="contact-info-item">
            <h3>Phone</h3>
            <p>${about.phone} </p>
          </div>`
          });
        }
    });
    profileContainer.innerHTML = html;

  }

  function about(data){
    Pabout(data);
    IMGabout(data);
    function Pabout(data){
      const profileContainer = document.getElementById('P-about');
      let html = '';
      data.forEach(item => {
        if (item.Abouts) {
          item.Abouts.forEach(about => {
            html += `${about.Aboutme}`
            });
          }
      });
      profileContainer.innerHTML = html;
    }

    function IMGabout(data){
      const profileContainer = document.getElementById('IMG-about');
      let html = '';
      data.forEach(item => {
        if (item.Abouts) {
          item.Abouts.forEach(about => {
            html += `<img src="${about.aboutImg}" alt="${about.nama} imag">`
            });
          }
      });
      profileContainer.innerHTML = html;
    }
  }

  function home(data){
    const profileContainer = document.getElementById('homepageContainer');
    let html = '';
    data.forEach(item => {
      if (item.Abouts) {
        item.Abouts.forEach(about => {
          html += `
            <div class="row align-items-center">
              <div class="home-text" >
                <p>Hello I'm </p>
                <h1>${about.nama}</h1>
                <h2>${about.whatMe}</h2>
                <a href="#about" class="btn link-item">more about me</a>
                <a href="#portfolio" class="btn link-item">portfolio</a>
              </div>
              <div class="home-img">
                <div class="img-box">
                  <img src="${about.homeImg}" alt="${about.nama} image">
                </div>
              </div>
            </div>`
          });
        }
    });
    profileContainer.innerHTML = html;
  }
  }
  // display skisll
  function displaySkills(data) {
    const skillsContainer = document.getElementById('skills-items');
    let html = '';
    data.forEach(item => {
        if (item.skills) {
            item.skills.forEach(skill => {
                html += `<div class="skill-item">${skill}</div>`
            });
        }
    });
    skillsContainer.innerHTML = html;
  }
  
  // sosiial media
  function displaySocialMedia(data) {
    const socialMediaContainer = document.getElementById('sociallinks');
    let html = '';
    data.forEach(item => {
        if (item.social) {
            item.social.forEach(social => {
                html += `<a href="${social.link}"><i class="${social.icon}"></i></a>`
            });
        }
    });
    socialMediaContainer.innerHTML = html;
  }
  
  // portofolio details
  function displayProject(data) {
    const dataContainer = document.getElementById('dataContainer');
    let html = '';
    data.forEach(item => {
        if (item.project) {
            item.project.forEach(project => {
                html += `
                <div class="portfolio-item">
                    <div class="portfolio-item-thumbnail">
                      <img src="${project.imglokasi}" alt="${project.namaproject}-thumb">
                    </div>
                    <h3 class="portfolio-item-title">${project.namaproject}</h3>
                    <button type="button" class="btn view-project-btn">View Project</button>
                    <div class="portfolio-item-detail">
                      <div class="description">
                        <p>
                        ${project.deskripsi}
                        </p>
                      </div>
                      <div class="general-info">
                        <ul>
                          <li>Create - <span>${project.dibuatpada}</span></li>
                          <li>tecnologi used - <span>${project.teknologi}</span></li>
                          <li>Role - <span>${project.role}</span></li>
                          <li>View Link- <span><a href="${project.link}">${project.namaproject}</a></span></li>
                        </ul>
                      </div>
                    </div>
                  </div>`;
            });
        }
    });
    dataContainer.innerHTML = html;
  }
  // education display
  function displayEducations(data) {
    const educationsContainer = document.getElementById('education-item');
    let html = '';
    data.forEach(item => {
        if (item.educations) {
            item.educations.forEach(education => {
              html += `
                <div class="timeline-item">
                <span class="date">${education.tahun}</span>
                <h4>${education.jurusan} - <span> ${education.instansi}</span> </h4>
                <p>
                  ${education.deskripsi}
                  <br>
                  ${education.nilaiAkhir} 
              `;
              if (education.list && education.list.length > 0) {
                html += '<ul>';
                education.list.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += '</ul>';
            }
              html += `
                </p>
              </div>
            </div>`;
            });
        }
    });
    educationsContainer.innerHTML = html;
  }
  
  function displayEperiences(data) {
    const educationsContainer = document.getElementById('experience-item');
    let html = '';
    data.forEach(item => {
        if (item.eperiences) {
            item.eperiences.forEach(eperience => {
              html += `
                <div class="timeline-item">
                <span class="date">${eperience.tahun}</span>
                <h4>${eperience.posisi} -<span> ${eperience.instansi}</span></h4>
                <p>
                  ${eperience.deskripsi}
              `;
              if (eperience.list && eperience.list.length > 0) {
                html += '<ul>';
                eperience.list.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += '</ul>';
            }
              html += `
                </p>
              </div>
            </div>`;
            });
        }
    });
    educationsContainer.innerHTML = html;
  }