let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");
let url="http://universities.hipolabs.com/search?country=";
button.addEventListener("click", async ()=>{
  let colleges= await getUniversities();
  console.log(colleges);

  ShowName(colleges);
 
     
})

async function getUniversities()
{
    let userI=input.value;
    let fullurl=url+userI;
     try{
    let res= await axios.get(fullurl);
     return res.data;
     
    }
    catch(e){
        console.log(e);
    }
}
function ShowName(colleges){
    ul.innerText=""
    for(college of colleges){
        let nameColl=college.name;
        
      const newItem=document.createElement("li");
      newItem.innerText=nameColl;
      ul.appendChild(newItem);
    }
}
