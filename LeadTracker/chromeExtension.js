
let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)  
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})

//todo  Need to understand tabBtn again

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow : true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


function render(leads){
    let listItems = ""

    for(let i=0; i < leads.length; i++){

        //ulEl.innerHTML = "<li>" + myLeads[i] + "</li>"; ( WE CAN USE THIS OR THE BELOW ONE)

        //listItems += "<li><a target = '_blank' href='#'>" + myLeads[i] + "</a></li>";  // console.log(listItems)

        //MAKING ABOVE EXPRESSION SIMPLER USING TEMPLATE STRINGS

        listItems += `
        <li>
            <a target = '_blank' href='#'>
               ${leads[i]}
            </a>
        </li>`;
        
    }
    ulEl.innerHTML = listItems
}

//*problem:  PERSISTING DATA ACROSS PAGE REFRESH
//* solution: Local Storage ( API which allows to store data on user's device locally). For reference: check out, https://youtu.be/5o8krh_Qduk.
//* LOCAL STORAGE STORES EVERYTHING IN STRINGS

/*
localStorage.setItem("naam","Ajay") 

todo After commenting out setItem line above and 
todo try to console the value of "naam" it will log out "Ajay" beacuse data has been stored locally.

console.log(localStorage.getItem(naam)) 

*/

//*For us to store myLeads array so that data is not lost even after page refresh we need store data locally using  Local Storage
//*For that we need to convert array to string . JSON.stringify converts array to string and JSON.parse for other way around. 

/* 

let myLeads = `["www.lead.com"]`

myLeads = JSON.parse(myLeads)

myLeads.push("www.copper.com")

myLeads = JSON.stringify(myLeads)

console.log(typeof myLeads) 

*/
