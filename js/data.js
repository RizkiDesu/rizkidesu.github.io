document.addEventListener('DOMContentLoaded', function() {
  fetchData();
});

function fetchData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true); // Ganti 'data.json' dengan URL sumber data Anda
  xhr.onload = function() {
      if(this.status === 200) {
          const data = JSON.parse(this.responseText);
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