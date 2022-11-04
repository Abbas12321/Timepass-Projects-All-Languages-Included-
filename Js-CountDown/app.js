const endDate ="04 November 2022 09:29 PM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    // console.log(diff);

    if(diff < 0) return; 

    // convert into days
    inputs[0].value = Math.floor(diff/3600/24);

    // convert into 
    inputs[1].value = Math.floor(diff/3600) % 24;

    inputs[2].value = Math.floor(diff/60) % 60;

    inputs[3].value = Math.floor(diff) % 60;

    // convert into days
}

clock();

setInterval(
    () => {
        clock()
    },
    1000
)