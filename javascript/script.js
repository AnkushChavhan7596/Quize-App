
const questions_container = document.querySelector(".questions-container");



//


// General knowledge
const general_knowledge = [
    {
        question : "Who is the Prime Minister of India ? ",
        option1 : " Rahul Gandhi ",
        option2 : " Arvind Kejrival ",
        option3 : " Narendra Modi ",
        option4 : " Amit Shah ",
        correctAns : "3",
    },

    {
        question : "Who established Mahabalipuram? ",
        option1 : " Pallava ",
        option2 : " Pandya ",
        option3 : " Chola ",
        option4 : " Chalukya ",
        correctAns : "1",
    },

    {
        question : '"Milind Panho" explaining the Buddhist doctrines in the form of a dialogue between Milind and his teacher Nagsena (the great Buddhist philosopher ) is in : ',
        option1 : " Sanskrit ",
        option2 : " Pali Language ",
        option3 : "  Hindi ",
        option4 : " Santhali ",
        correctAns : "2",
        
    },

    {
        question : "In 1724 the state of Hyderabad was founded by : ",
        option1 : " Nizam-ul-Mulk Asaf-Jah ",
        option2 : " Azim Jah Bahadur ",
        option3 : " Osman Ali Khan ",
        option4 : " Qamaruddin Khan ",
        correctAns : "3",
    },

    {
        question : "Mahatma Gandhi laid down four preconditions for a Satyagrahi (Passive Resistor) to fulfill - namely : ",
        option1 : " Observe perfect Chastity, Adopt Poverty, Follow truth and Cultivated Fearlessness. ",
        option2 : " Observe perfect Chastity, Gain Money, Follow truth and Cultivated Fearlessness. ",
        option3 : " Observe perfect Chastity, Adopt Poverty, Follow truth and Cultivated Power. ",
        option4 : " Observe perfect Chastity, Gain Money, Follow truth and Cultivated Power. ",
        correctAns : "4",
    }
];



for(let i=0; i<general_knowledge.length; i++)
{

    const Question = `<div class="question-container">
                            <h3 class="question">
                                <span class="question-number">
                                    ${i+1}]
                                </span> 
    
                                <span>
                                    ${general_knowledge[i].question}
                                </span>
                                
                            </h3>
    
                            <div class="options-container">
                                <button class="option1 optns"><span class="optns-mark">A]</span>${general_knowledge[i].option1}</button>
                                <button class="option2 optns"><span class="optns-mark">B]</span>${general_knowledge[i].option2}</button>
                                <button class="option3 optns"><span class="optns-mark">C]</span>${general_knowledge[i].option3}</button>
                                <button class="option4 optns"><span class="optns-mark">D]</span>${general_knowledge[i].option4}</button>
                            </div>
                     </div>`;
                     
                     
                     
                     questions_container.insertAdjacentHTML("beforeend",Question);

                     const options = document.querySelectorAll(".optns");
                     console.log(options)
                     for(let op=0; op<options.length; op++)
                     {
                         options[op].addEventListener('click',()=>{
                            options[op].classList.toggle("check");
                            console.log("btn clicked")
                            
                            if(general_knowledge[i].correctAns == op+1)
                            {
                                options[op].classList.toggle("wrong");
                            }
                            else{
                                options[op].classList.toggle("correct");
                            }
                         });
                     }
}


// for(let j=0; j<options.length; j++)
// {
//     options[j].addEventListener('click',()=>{
//         options[j].classList.toggle("check");
//     })
// }
        