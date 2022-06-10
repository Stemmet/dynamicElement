
let newUl = document.createElement("ul");
    let smartPeoples =
    ['Mikhail', 'Jesse', 'Muda', 'King', 'Cassidy'];
    function smartPeople(){
    let ul = document.body.appendChild(newUl);
    smartPeoples.forEach( (item )=>{
        ul.innerHTML +=
        `<li>${item}</li>`;
        });
    }
    smartPeople();

// for (var key in smartPeople) {
//   document.write(smartPeople[key] + "<br>");
// }
