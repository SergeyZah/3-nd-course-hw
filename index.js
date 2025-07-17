import {renderComments} from "./modules/renderComments.js";
import { commentInfo } from "./modules/commentInfo.js";

const button = document.querySelector(".add-form-button");
const nameEl = document.querySelector(".add-form-name");
const commentEl = document.querySelector(".add-form-text");
const listCommentEl = document.querySelector(".comments");

const clearHTML = (value) => {
  return value.replaceAll("<", "&lt").replaceAll(">", "&gt");
}

renderComments();

 button.addEventListener("click", () => {

      nameEl.style.backgroundColor = '#fff';
      commentEl.style.backgroundColor = '#fff';

      if (nameEl.value === '' && commentEl.value === '') {
        nameEl.style.backgroundColor = 'rgb(231, 67, 67)';
        commentEl.style.backgroundColor = 'rgb(231, 67, 67)';
        return;
      } else if (nameEl.value === '') {
        nameEl.style.backgroundColor = 'rgb(231, 67, 67)';
        return;
      } else if (commentEl.value === '') {
        commentEl.style.backgroundColor = 'rgb(231, 67, 67)';
        return;
      };
      const oldListCommentEl = listCommentEl.innerHTML;

      let timeEl = new Date();

      const newUsers = {name: clearHTML(nameEl.value), text: clearHTML(commentEl.value), data: `${timeEl.toLocaleDateString([], {year: '2-digit', month: 'numeric', day: 'numeric'})} ${timeEl.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}`, counter: 0, likeActive: false};

      commentInfo.push(newUsers);
      renderComments();

      nameEl.value = "";
      commentEl.value = "";
    })