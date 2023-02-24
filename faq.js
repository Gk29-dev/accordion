const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq(icon) {

        let faq_header = icon.parentElement; //faq_header
        let answer = faq_header.nextElementSibling; //<p> tag

        if(answer.classList.contains("hidden")){
          answer.classList.remove("hidden");
          btnStatusUpdate(icon, plusIcon = false);
        }else{
          answer.classList.add("hidden");
          btnStatusUpdate(icon, plusIcon = true);
        }
 
}

function createFaq() {

  for(let data of faqData){

    const faq = document.createElement("div");
    faq.classList.add("faq");
  
    const faqHeader = document.createElement("div");
    faqHeader.classList.add("faq_header");
  
    faq.appendChild(faqHeader);
  
    const question = document.createElement("h3");
    const questionText = document.createTextNode(data.question);
    question.appendChild(questionText);
  
    const plusIcon = document.createElement("i");
    plusIcon.classList.add("fa-solid", "fa-plus", "show_btn");

    const answer = document.createElement("p");
    answer.classList.add("hidden");
    const answerText = document.createTextNode(data.answer);
    answer.appendChild(answerText);
    faq.appendChild(answer);

    faqHeader.appendChild(question);
    faqHeader.appendChild(plusIcon);  //plusIcon
    accordianBody.appendChild(faq);
  
  
  }
}

function btnStatusUpdate(icon, plusIcon) {
  if(plusIcon){
      icon.classList.add("fa-plus");
      icon.classList.remove("fa-minus");
  }else{
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  }
}

createFaq();

const icons = document.querySelectorAll(".show_btn");
icons.forEach((icon) => {
   icon.addEventListener("click", () => {
        showFaq(icon);
   });
});


