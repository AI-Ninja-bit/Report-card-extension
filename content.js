

function addButton(){

if(document.getElementById("reportcard-btn")) return;

const btn=document.createElement("button");

btn.id="reportcard-btn";
btn.innerText="Download Report Card";

btn.style.position="fixed";
btn.style.bottom="20px";
btn.style.right="20px";
btn.style.padding="10px 16px";
btn.style.background="#1F4E79";
btn.style.color="white";
btn.style.border="none";
btn.style.borderRadius="6px";
btn.style.cursor="pointer";

btn.onclick=generateReportCard;

document.body.appendChild(btn);

}

setTimeout(addButton,2000);



function findValueByLabel(labelText){

const elements = [...document.querySelectorAll("[class*='col-sm']")]
    .map(el => el.innerText.trim())
    .filter(text => text.length > 0 && text.length < 100); // 🔥 critical fix

for(const text of elements){

if(text.toLowerCase().includes(labelText.toLowerCase())){

let parts = text.split(":");

if(parts.length > 1 && parts[1].trim()){
return parts[1].trim();
}

}

}

return "";
}

function capitalizeWords(str){
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function extractStudentData(){
const dob = 
    findValueByLabel("DOB") ||
    findValueByLabel("Date of Birth") ||
    findValueByLabel("जन्म तिथि");

const studentName = findValueByLabel("Student Name");
const fatherName = findValueByLabel("Father name");
const udise = findValueByLabel("UDiseCode");
let schoolName = findValueByLabel("SchoolName");
schoolName = capitalizeWords(schoolName);
let district = findValueByLabel("District Name");
district = capitalizeWords(district);
const admission="";
const pen="";



if(!udise){

const match=document.body.innerText.match(/\b\d{11}\b/);

if(match){
udise=match[0];
}

}


const tables=document.querySelectorAll("table");

let marksTable=null;

tables.forEach(table=>{

const header=table.querySelector("thead");

if(header && header.innerText.includes("प्रथम सत्र परीक्षा")){
marksTable=table;
}

});


if(!marksTable){

alert("Marks table not found");
return;

}



const rows=marksTable.querySelectorAll("tbody tr");

let subjectRows="";
let total=0;


rows.forEach(row=>{

const cols=row.querySelectorAll("td");

if(cols.length<11) return;

const subject=cols[0].innerText.trim();

if(subject.includes("कुल")) return;

const values=[];

for(let i=1;i<11;i++){
values.push(cols[i].innerText.trim());
}

const subjectTotal=parseInt(values[9]) || 0;

total+=subjectTotal;


subjectRows+=`
<tr>

<td class="subject">${subject}</td>

<td>${values[0]}</td>
<td>${values[1]}</td>

<td>${values[2]}</td>
<td>${values[3]}</td>

<td>${values[4]}</td>
<td>${values[5]}</td>

<td>${values[6]}</td>
<td>${values[7]}</td>

<td>${values[8]}</td>
<td>${values[9]}</td>

</tr>
`;

});


const percentage=((total/700)*100).toFixed(1);

console.log({
studentName,
fatherName,
udise,dob
});

return{

studentName,
fatherName,
admission,
pen,
dob,
udise,
subjectRows,
total,
schoolName,
percentage,
district

};

}



function generateReportCard(){

const data=extractStudentData();

if(!data) return;

const html=createReportCardHTML(data);

const container=document.createElement("div");
container.innerHTML=html;

document.body.appendChild(container);

const element=container.querySelector("#report-card");

html2pdf().set({

margin: [5,5,5,5],
filename: `${data.studentName}_${data.class || "Class"}_ReportCard.pdf`,

html2canvas:{
scale:3,
useCORS:true,
scrollY:0
},

jsPDF:{
unit:"mm",
format:"a4",
orientation:"portrait"
}

}).from(element).save();

}