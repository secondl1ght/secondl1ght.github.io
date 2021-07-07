const contact = document.querySelector("#contact");

contact.onclick = function swapContentContact() {
  document.querySelector(".about").hidden = true;
  document.querySelector(".projects").hidden = true;
  document.querySelector(".skills").hidden = true;
  document.querySelector(".learning").hidden = true;
  document.querySelector(".contact").hidden = false;
};

const about = document.querySelector("#about");

about.onclick = function swapContentAbout() {
  document.querySelector(".about").hidden = false;
  document.querySelector(".projects").hidden = true;
  document.querySelector(".skills").hidden = true;
  document.querySelector(".learning").hidden = true;
  document.querySelector(".contact").hidden = true;
};

const projects = document.querySelector("#projects");

projects.onclick = function swapContentProjects() {
  document.querySelector(".about").hidden = true;
  document.querySelector(".projects").hidden = false;
  document.querySelector(".skills").hidden = true;
  document.querySelector(".learning").hidden = true;
  document.querySelector(".contact").hidden = true;
};

const skills = document.querySelector("#skills");

skills.onclick = function swapContentSkills() {
  document.querySelector(".about").hidden = true;
  document.querySelector(".projects").hidden = true;
  document.querySelector(".skills").hidden = false;
  document.querySelector(".learning").hidden = true;
  document.querySelector(".contact").hidden = true;
};

const learning = document.querySelector("#learning");

learning.onclick = function swapContentLearning() {
  document.querySelector(".about").hidden = true;
  document.querySelector(".projects").hidden = true;
  document.querySelector(".skills").hidden = true;
  document.querySelector(".learning").hidden = false;
  document.querySelector(".contact").hidden = true;
};

const home = document.querySelector("#home");

home.onclick = function swapContentHome() {
  document.querySelector(".about").hidden = false;
  document.querySelector(".projects").hidden = false;
  document.querySelector(".skills").hidden = false;
  document.querySelector(".learning").hidden = false;
  document.querySelector(".contact").hidden = false;
};

const cert1link = document.querySelector("#cert1link");
const certificate1 = document.querySelector("#certificate1");

cert1link.onclick = function showCert1() {
  certificate1.style.display = "block";
};

certificate1.onclick = function hideCert1() {
  certificate1.style.display = "none";
};