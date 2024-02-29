let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

let url = "http://universities.hipolabs.com/search?name=";

btn.addEventListener("click" , ()=>{
    console.log("button clicked");
    ul.innerText = "";
    printColleges();
});

async function printColleges(){
    let country = inp.value;
    let res = await axios.get(url+country);
    data = res.data;
    for(college of data)
    {
        let li = document.createElement("li");
        li.innerText = college.name;
        ul.appendChild(li)
        console.log(college.name);
    }
    inp.value = ""
}