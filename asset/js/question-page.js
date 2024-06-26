let reactBtn = document.getElementById("react-btn");
let reactBox = document.querySelector(".react-box");

// show react box
reactBtn.addEventListener("mouseover", () => {
  reactBox.classList.add("show-react");
  reactBox.classList.remove("d-none");
});

// show react box
reactBtn.addEventListener("mouseleave", () => {
  reactBox.classList.remove("show-react");
});

// show when we select reaction
reactBox.addEventListener("mouseover", () => {
  reactBox.classList.add("show-react");
});

// remove when we select reaction
reactBox.addEventListener("mouseleave", () => {
  reactBox.classList.remove("show-react");
});

function getReact(item) {
  console.log(item);
  let itemImg = item.querySelector("img");
  reactBtn.innerHTML = itemImg.outerHTML;
  console.log(itemImg);
  reactBox.classList.add("d-none");
  reactBtn.style.paddingRight = "10px";
}



// copy text function new
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let text = e.target.closest(".code-box").innerText;
    navigator.clipboard.writeText(text);
    e.target.innerHTML = '<i class="fa-solid fa-check"></i> copied';
    setTimeout(() => {
      e.target.innerHTML = `<a class="d-flex align-items-center column-gap-2 w-fit-content font-ubuntu" href="#"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2V8C3 8.26522 3.10536 8.51957 3.29289 8.70711C3.48043 8.89464 3.73478 9 4 9H8C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V3.621C8.99998 3.48778 8.97335 3.35591 8.92166 3.23312C8.86997 3.11034 8.79427 2.99912 8.699 2.906L7.0415 1.285C6.85468 1.10233 6.60379 1.00003 6.3425 1H4C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2Z" stroke="#0066FF" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 9V10C7 10.2652 6.89464 10.5196 6.70711 10.7071C6.51957 10.8946 6.26522 11 6 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V4.5C1 4.23478 1.10536 3.98043 1.29289 3.79289C1.48043 3.60536 1.73478 3.5 2 3.5H3" stroke="#0066FF" stroke-linecap="round" stroke-linejoin="round"/></svg>Copy</a>`;
    }, 1000);
  });
});


// add comment 

let commentBtn = document.querySelector('.comment-btn');
let commentBox = document.querySelector('.comment-box');

commentBtn.addEventListener('click', () => {
    if (!commentBtn.classList.contains('show-comment')) {
        commentBtn.classList.add('show-comment');
        commentBox.classList.add('show-comment');
        commentBox.style.height = commentBox.scrollHeight + 'px';
    } else {
        commentBtn.classList.remove('show-comment');
        commentBox.classList.remove('show-comment');
        commentBox.style.height = '0px';
    }
});
