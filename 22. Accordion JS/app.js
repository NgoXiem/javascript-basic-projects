const questions = [
  {
    id: 1,
    title: "Do I have to allow the use of cookies?",
    info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "What is BankID?",
    info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Whose birth number can I use?",
    info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    title: "When do I recieve a password ordered by letter?",
    info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
  },
];
const container = document.querySelector(".container");
questions.forEach((question) => {
  let html = `
    <div class="question">
        <header>
            <h4>${question.title}</h4>
            <button class="btn">
            <i class="fas fa-plus-circle"></i>
            </button>
        </header>
        <p class="info hide-content">${question.info}</p>
    </div>
  `;
  container.innerHTML += html;
});

const btns = document.querySelectorAll("button");
const paras = document.querySelectorAll(".info");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //check if the info p contains class "hide-content" or not. If not, add "hide-content"
    const check = e.target.parentElement.parentElement.nextElementSibling;

    if (e.target.tagName === "I" && check.classList.contains("hide-content")) {
      paras.forEach((para) => {
        para.classList.add("hide-content");
      });

      check.classList.remove("hide-content");
      e.target.parentElement.innerHTML = ` <i class="fas fa-minus-circle"></i>`;
    } else if (
      e.target.tagName === "I" &&
      !check.classList.contains("hide-content")
    ) {
      check.classList.add("hide-content");
      e.target.parentElement.innerHTML = ` <i class="fas fa-plus-circle"></i>`;
    }
  });
});
