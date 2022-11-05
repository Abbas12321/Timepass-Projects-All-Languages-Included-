const Questions = [
    {
        que : 'which of the following is a markup language?',
        a : 'HTML',
        b : 'CSS',
        c : 'JavaScript',
        d : 'PHP',
        right : 'a'
    },
    {
        que : 'what year was JavaScript launched?',
        a : "1996",
        b : "1994",
        c : '1995',
        d : 'none of the above',
        right : "c",
    },
    {
        que : 'what does CSS stand for ?',
        a : "Hypertext markup language",
        b : "Cascading style sheet",
        c : "Jason object notation",
        d : 'Helicopter terminal language',
        right : "b",
    }
]

let index = 0;
let total = Questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll("input[type='radio']")
const loadque = () => {
    if(index === total) {
        return endquiz()
    }
    reset()
    const data = Questions[index]
    quesBox.innerHTML = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

document.querySelector("#submit").addEventListener(
    "click", 
    function () {
        const data = Questions[index]   
        const ans = getAnswer()
        if(ans === data.right){ 
            right++;
        }else{
            wrong++;
        }
        index++;
        loadque();
    }
)

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer =  input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endquiz = () =>{
    document.getElementsByClassName("container")[0].innerHTML = ` 
    <div class='col' style="text-align:center">
    <h3> Thank You for Playing the Quiz</h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}

loadque(index);