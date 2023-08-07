import Github from './img/social/github-mark.svg';
import Discord from './img/social/discord-mark-blue.svg';
import Email from './img/social/email.svg';

export default function contact(){
  let contact = document.createElement("div");
  contact.classList.add("contact");
  let contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact";

  let contactMain = document.createElement("div");

  let contactForm = document.createElement("form");
  let formMsg = document.createElement("label");
  formMsg.textContent = "Leave Us A Message"

  let msgContent = document.createElement("textarea");
  msgContent.rows = 5;
  msgContent.cols = 50;

  let formBtn = document.createElement("button");
  formBtn.textContent = "Submit";
  formBtn.type = "submit";

  contactForm.appendChild(formMsg);
  contactForm.appendChild(msgContent);
  contactForm.appendChild(formBtn);

  let dividingLine = document.createElement("div");
  dividingLine.classList.add("line");

  let socials = document.createElement("div");
  let socialsMsg = document.createElement("p");
  socialsMsg.textContent = "Connect To Our Social Media";

  let socialsIcons = document.createElement("div");
  socialsIcons.classList.add("socials");
  let githubIcon = document.createElement("img");
  githubIcon.src = Github;

  let discordIcon = document.createElement("img");
  discordIcon.src = Discord;

  let emailIcon = document.createElement("img");
  emailIcon.src = Email;

  socialsIcons.appendChild(githubIcon);
  socialsIcons.appendChild(discordIcon);
  socialsIcons.appendChild(emailIcon);
  socials.appendChild(socialsMsg);
  socials.appendChild(socialsIcons);

  contactMain.appendChild(contactForm);
  contactMain.appendChild(dividingLine);
  contactMain.appendChild(socials);

  contact.appendChild(contactTitle)
  contact.appendChild(contactMain);
  return contact;
}
