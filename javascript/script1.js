// ----------------------------Contact form firebase-----------------------------------------
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDQz0iU8z206VkNMjUJrb-RiGc9xADLRYQ",
    authDomain: "quize-app-contact.firebaseapp.com",
    projectId: "quize-app-contact",
    storageBucket: "quize-app-contact.appspot.com",
    messagingSenderId: "153798459018",
    appId: "1:153798459018:web:eeb7b4d4f806a175cbf773"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   Creating the reference 
const messageRef = firebase.database().ref('messages');

//   Contact Form
const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit',(e)=>
{
   e.preventDefault();

//    Getting the inputed values
      const name = getInputValue('name');
      const mobile = getInputValue('mobile');
      const email = getInputValue('email');

    
      saveMessages(name,mobile,email);

    // after submit messeage
    const afterSend_Mesg = document.querySelector('.after-send-msg p');
    afterSend_Mesg.style.display = 'block';

    setTimeout(()=>{
    afterSend_Mesg.style.display = 'none';
    },3000);

     
});
  
const getInputValue = (id)=>{
    return document.querySelector(`#${id}`).value;
}

const saveMessages = (name,mobile,email)=>{
   const newMessageRef = messageRef.push();

   newMessageRef.set({
       name:name,
       mobile:mobile,
       email:email
   }
   );
}







// --------------------------End Contact form firebnase---------------------------------------







// Loader
const loader = document.querySelector(".loader");
window.addEventListener('load',()=>{
    loader.style.display="none";
})


// const show_more_btn = document.querySelector(".show-more-btn-container button");
// const show_more_div = document.querySelector('.show-more-div');
// show_more_div.style.display="none";
// const show_less_btn = document.querySelector(".show-less-btn-container button")

// show_more_btn.addEventListener('click',()=>{
//     show_more_div.style.display="block";
//     show_more_btn.style.display="none";
//     show_less_btn.style.display="block";
// })

// show_less_btn.addEventListener('click',()=>{
//     show_more_div.style.display="none";
//     show_more_btn.style.display="block";
//     show_less_btn.style.display="none"
// })



// Hambergur bar functionality
const hambergur = document.querySelector(".hambergur");
const bars = document.querySelectorAll('.bar');

// selecting menu container
const menu_container = document.querySelector(".menu--container");
const overlay = document.querySelector(".overlay");
const hambergur_overlay = document.querySelector(".hamberger-overlay");


hambergur.addEventListener('click',()=>{
    bars.forEach((bar)=>{
        bar.classList.toggle("active");
    });
    menu_container.classList.toggle("menu-hamb");
    hambergur_overlay.classList.toggle('hamb-overlay');
});





// Overlay functionality
overlay.addEventListener('click',()=>{
    score_window.style.display="none";
    overlay.style.display = "none";
    quize_questions_section.style.display = "none";

    // bars.forEach((bar)=>{
    //     bar.classList.toggle("active");
    // });
    
    // menu_container.classList.toggle("menu-hamb");
});


// Hambergur overlay
hambergur_overlay.addEventListener('click',()=>{
    hambergur_overlay.classList.toggle('hamb-overlay');
    bars.forEach((bar)=>{
        bar.classList.toggle("active");
    });
    menu_container.classList.toggle("menu-hamb");

});

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link)=>{
        link.addEventListener("click", ()=>{
            menu_container.classList.toggle("menu-hamb");
            hambergur_overlay.classList.remove('hamb-overlay');

            bars.forEach((bar)=>{
                bar.classList.toggle("active");
        });
    });
})






const score_window = document.querySelector(".score-window");
const cross = document.querySelector(".fa-times");


// year
const year = document.querySelector('#year');
const date = new Date();
year.textContent = date.getUTCFullYear();


// Selecting the questions container stuff
const questions_container = document.querySelector(".questions-container");
const score_btn = document.querySelector(".submit-test-button");
const score_txt = document.querySelector(".score-txt");
const quize_questions_section = document.querySelector(".quize-questions-section");
const moreQuizesButton = document.querySelector(".more-quizes");

moreQuizesButton.addEventListener("click", ()=>{
    quize_questions_section.style.display = "none";

})


// Initailly questions section display none
quize_questions_section.style.display = 'none';

// Various Categories Links
const Mathematics_category = document.querySelector(".mathematics");
const General_knowledge_category = document.querySelector(".general-knowledge");





// General knowledge
const general_knowledge = [
    {
        question : "Who is the Prime Minister of India ? ",
        option1 : "<span class=\"optns-mark\">A]</span> Rahul Gandhi ",
        option2 : "<span class=\"optns-mark\">B]</span> Arvind Kejrival ",
        option3 : "<span class=\"optns-mark\">C]</span> Narendra Modi",
        option4 : "<span class=\"optns-mark\">D]</span> Amit Shah ",
        correctAns : "<span class=\"optns-mark\">C]</span> Narendra Modi",
    },

    {
        question : "Who established Mahabalipuram? ",
        option1 : "<span class=\"optns-mark\">A]</span> Pallava ",
        option2 : "<span class=\"optns-mark\">B]</span> Pandya ",
        option3 : "<span class=\"optns-mark\">C]</span> Chola ",
        option4 : "<span class=\"optns-mark\">D]</span> Chalukya ",
        correctAns : "<span class=\"optns-mark\">A]</span> Pallava ",
    },

    {
        question : '"Milind Panho" explaining the Buddhist doctrines in the form of a dialogue between Milind and his teacher Nagsena (the great Buddhist philosopher ) is in : ',
        option1 : "<span class=\"optns-mark\">A]</span> Sanskrit ",
        option2 : "<span class=\"optns-mark\">B]</span> Pali Language",
        option3 : "<span class=\"optns-mark\">C]</span> Hindi ",
        option4 : "<span class=\"optns-mark\">D]</span> Santhali ",
        correctAns :"<span class=\"optns-mark\">B]</span> Pali Language",
        
    },

    {
        question : "In 1724 the state of Hyderabad was founded by : ",
        option1 : "<span class=\"optns-mark\">A]</span> Nizam-ul-Mulk Asaf-Jah ",
        option2 : "<span class=\"optns-mark\">B]</span> Azim Jah Bahadur ",
        option3 : "<span class=\"optns-mark\">C]</span> Osman Ali Khan",
        option4 : "<span class=\"optns-mark\">D]</span> Qamaruddin Khan ",
        correctAns : "<span class=\"optns-mark\">C]</span> Osman Ali Khan",
    },

    {
        question : "Mahatma Gandhi laid down four preconditions for a Satyagrahi (Passive Resistor) to fulfill - namely : ",
        option1 : "<span class=\"optns-mark\">A]</span> Observe perfect Chastity, Adopt Poverty, Follow truth and Cultivated Fearlessness",
        option2 : "<span class=\"optns-mark\">B]</span>Observe perfect Chastity, Gain Money, Follow truth and Cultivated Fearlessness",
        option3 : "<span class=\"optns-mark\">C]</span> Observe perfect Chastity, Adopt Poverty, Follow truth and Cultivated Power",
        option4 : "<span class=\"optns-mark\">D]</span> Observe perfect Chastity, Gain Money, Follow truth and Cultivated Power",
        correctAns : "<span class=\"optns-mark\">D]</span> Observe perfect Chastity, Gain Money, Follow truth and Cultivated Power",
    }
];


// Maths Category
const mathematics = [
    {
        question : "A line which cuts a pair of parallel lines is called ",
        option1 : "<span class=\"optns-mark\">A]</span> tangent ",
        option2 : "<span class=\"optns-mark\">B]</span> chord ",
        option3 : "<span class=\"optns-mark\">C]</span> traversal",
        option4 : "<span class=\"optns-mark\">D]</span> intersector ",
        correctAns : "<span class=\"optns-mark\">C]</span> traversal",
    },

    {
        question : "An angle whose value is ____, is called complete angle. ",
        option1 : "<span class=\"optns-mark\">A]</span> 180° ",
        option2 : "<span class=\"optns-mark\">B]</span>  240° ",
        option3 : "<span class=\"optns-mark\">C]</span> 360° ",
        option4 : "<span class=\"optns-mark\">D]</span>  none of the above ",
        correctAns : "<span class=\"optns-mark\">C]</span> 360° ",
    },

    {
        question : 'The areas of two similar triangles are 81 sq. cm and 49 sq. cm. Find the ratio of their corresponding heights. ',
        option1 : "<span class=\"optns-mark\">A]</span>  9:7 ",
        option2 : "<span class=\"optns-mark\">B]</span>  7:9",
        option3 : "<span class=\"optns-mark\">C]</span>  6:5 ",
        option4 : "<span class=\"optns-mark\">D]</span> 81:49 ",
        correctAns :"<span class=\"optns-mark\">C]</span>  6:5 ",
        
    },

    {
        question : "In 1724 the state of Hyderabad was founded by : ",
        option1 : "<span class=\"optns-mark\">A]</span> Nizam-ul-Mulk Asaf-Jah ",
        option2 : "<span class=\"optns-mark\">B]</span> Azim Jah Bahadur ",
        option3 : "<span class=\"optns-mark\">C]</span> Osman Ali Khan",
        option4 : "<span class=\"optns-mark\">D]</span> Qamaruddin Khan ",
        correctAns : "<span class=\"optns-mark\">C]</span> Osman Ali Khan",
    },

    {
        question : "Mahatma Gandhi laid down four preconditions for a Satyagrahi (Passive Resistor) to fulfill - namely : ",
        option1 : "<span class=\"optns-mark\">A]</span> Observe perfect Chastity, Adopt Poverty, Follow truth and Cultivated Fearlessness",
        option2 : "<span class=\"optns-mark\">B]</span>Observe perfect Chastity, Gain Money, Follow truth and Cultivated Fearlessness",
        option3 : "<span class=\"optns-mark\">C]</span> Observe perfect Chastity, Adopt Poverty, Follow truth and Cultivated Power",
        option4 : "<span class=\"optns-mark\">D]</span> Observe perfect Chastity, Gain Money, Follow truth and Cultivated Power",
        correctAns : "<span class=\"optns-mark\">D]</span> Observe perfect Chastity, Gain Money, Follow truth and Cultivated Power",
    }
];





// Main logic 
function  mainLogicFunction(category_name)
{
    quize_questions_section.style.display = 'block';

        for(let i=0; i<category_name.length; i++)
        {
            let Question = `<div class="question-container">
                                    <h3 class="question">
                                        <span class="question-number">
                                            ${i+1}]
                                        </span> 
            
                                        <span>
                                            ${category_name[i].question}
                                            </span>
                                            
                                            </h3>
                                            <div class="options-container">
                                                <button class="option1 optns" data-value="${i}">${category_name[i].option1}</button>
                                                <button class="option2 optns" data-value="${i}">${category_name[i].option2}</button>
                                                <button class="option3 optns" data-value="${i}">${category_name[i].option3}</button>
                                                <button class="option4 optns" data-value="${i}">${category_name[i].option4}</button>
                                            </div>
                            </div>`;
        
                            
                            questions_container.insertAdjacentHTML("beforeend",Question);
        }
        
        
        let count = 0;
        let score = 0;
        const all_btns = document.querySelectorAll('.optns');
        
        all_btns.forEach((btn) =>
        {
            btn.addEventListener('click',() =>
            {
                    if(btn.innerHTML == category_name[btn.getAttribute('data-value')].correctAns)
                    {
                        // btn.style.background = 'green';
                        score++;
                        btn.classList.add('correct');
                    }
                    else
                    {
                        all_btns.forEach((btn_click) =>
                        {
                            if(btn_click.getAttribute('data-value') == btn.getAttribute('data-value'))
                                {
                                    if(btn.innerHTML !== btn_click.innerHTML)
                                    {
                                        if(btn_click.innerHTML == category_name[btn_click.getAttribute('data-value')].correctAns)
                                        {
                                            btn_click.classList.add('correct');
                                        }
                                    }
                                    else
                                    {
                                        btn.classList.add('wrong');
        
                                    }
                                            
                                }
                        }) 
                    }
        
            })
        
        })


        score_btn.addEventListener('click',()=>{
            score_window.classList.add('window');
            overlay.style.display = "block";
            const score_window_text = document.querySelector(".score-window-text");
            score_window.style.display="block";
            score_window_text.innerHTML = `Your Score is 🏆: ${score} `;
            score = 0;
        });

        cross.addEventListener('click',()=>{
            score_window.classList.remove('window');
            overlay.style.display = "none";

            quize_questions_section.style.display = "none";
         });
        
      
}



// Quizes Categories 

General_knowledge_category.addEventListener('click', ()=>{
    overlay.style.display="none";
    const section_heading = document.querySelector(".quize-heading");
    section_heading.textContent = "General Knowledge";
    const quize_heading_text = document.querySelector(".quize-heading-text");
    quize_heading_text.textContent = "Here are the different questions on General Knowledge. ";
    questions_container.textContent="";

    mainLogicFunction(general_knowledge);
});


Mathematics_category.addEventListener('click', ()=>{
    overlay.style.display="none";
    const section_heading = document.querySelector(".quize-heading");
    section_heading.textContent = "Mathematics";
    const quize_heading_text = document.querySelector(".quize-heading-text");
    quize_heading_text.textContent = "Here are the different questions on Mathematics. ";
    questions_container.textContent="";

    mainLogicFunction(mathematics);
});





// more-div
const showMoreDiv = document.querySelector("#more-div ");
showMoreDiv.style.display = "none";
const showMoreBtn = document.querySelector("#show__more__btn button");
const showlessBtn = document.querySelector("#show__less__btn button");

console.log(showMoreBtn, showlessBtn, showMoreDiv);

showMoreBtn.addEventListener("click", ()=>{
    showMoreDiv.classList.toggle("flex");
    showlessBtn.classList.add("show__div");
    showMoreBtn.classList.add("hide__div");

});

showlessBtn.addEventListener("click", ()=>{
    showMoreDiv.classList.toggle("flex");
    showlessBtn.classList.remove("show__div");
    showMoreBtn.classList.remove("hide__div");

});