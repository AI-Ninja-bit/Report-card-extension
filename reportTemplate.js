function createReportCardHTML(data){
return `

<style>

.header{
background:#2F5D82;
color:white;
padding:16px;
border-bottom:5px solid #F2B705;
text-align:center;
}

.header h1{
margin:0;
font-size:24px;
}

.header h2{
margin:4px 0;
font-size:14px;
font-weight:normal;
color:#E6EEF6;
}

.header h3{
margin:6px 0;
font-size:18px;
}

.school-meta{
font-size:13px;
color:#E6EEF6;
}

.section-title{
color:#1F4E79;
margin:14px 0 8px 0;
font-weight:bold;
border-bottom:2px solid #F2B705;
padding-bottom:4px;
margin:18px 0 10px 0;
font-size:16px;
}

.info-grid{
display:grid;
padding:10px;
grid-template-columns:1fr 1fr;
gap:8px 20px;
background:#F4F7FB;
padding:12px;
border:1px solid #D6DCE5;
font-size:13px;
}

table{
width:100%;
border-collapse:collapse;

font-size:11px;
margin-top:10px;
}

thead th{
background:#2F5D82;
color:white;
padding:8px;
border:1px solid #D6DCE5;
}

td{
border:1px solid #E2E6EC;
padding:8px;
text-align:center;
}

.subject{
text-align:left;
font-weight:600;
}

.subject div{
font-size:11px;
color:#666;
}

.result-panel{

background:#FFF4D6;
border:2px solid #F2B705;

display:flex;
justify-content:space-around;
text-align:center;
margin-top:14px;
padding:10px;
}

.result-panel div{
font-size:14px;
}
.attendance-panel{
margin-top:18px;
background:#FFF8E5;
border:2px solid #F2B705;
padding:16px 20px;
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:20px;
align-items:center;
font-size:14px;
color:#8A6D00;
}

.attendance-box{
display:flex;
flex-direction:column;
gap:6px;
font-weight:600;
}

.attendance-fill{
display:block;
width:100%;
border-bottom:2px solid #444;
height:18px;
}

/* Teacher remarks */

.remarks-box{
margin-top:20px;
padding:12px 14px;
border:1px solid #D6DCE5;
background:#FAFBFD;
font-size:14px;
line-height:24px;
min-height:60px;
}
/* Signatures */
.footer{
margin-top:28px;
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
padding:10px 40px;
}

.signature{
text-align:center;
}

.signature-line{
margin-top:45px;
border-top:1px solid #999;
padding-top:8px;
font-size:13px;
color:#333;
}
</style>


<div id="report-card">

<div class="header">

<h1>Basic Education Department</h1>
<h2>Government of Uttar Pradesh</h2>

<h3>Primary School ${data.schoolName}</h3>

<div class="school-meta">
UDISE Code: ${data.udise} • Academic Session 2025-26
</div>

<div style="margin-top:6px;font-weight:bold">
Student Report Card
</div>

</div>


<div class="section-title">Student Information</div>

<div class="info-grid">

<div><b>Student Name:</b> ${data.studentName}</div>
<div><b>Father Name:</b> ${data.fatherName}</div>

<div><b>Admission No:</b> ${data.admission}</div>
<div><b>PEN No:</b> ${data.pen}</div>

<div><b>DOB:</b> ${data.dob}</div>
<div><b>Class:</b> 5</div>

<div><b>District:</b> ${data.district}</div>
<div><b>Block / Town:</b> Ghorawal</div>

</div>


<div class="section-title">Academic Performance</div>

<table>

<thead>

<tr>
<th rowspan="2">Subject</th>

<th colspan="2">प्रथम सत्र परीक्षा</th>
<th colspan="2">अर्धवार्षिक परीक्षा</th>
<th colspan="2">द्वितीय परीक्षा</th>
<th colspan="2">वार्षिक परीक्षा</th>
<th colspan="2">कुल योग</th>
</tr>

<tr>

<th>पूर्णांक</th>
<th>प्राप्तांक</th>

<th>पूर्णांक</th>
<th>प्राप्तांक</th>

<th>पूर्णांक</th>
<th>प्राप्तांक</th>

<th>पूर्णांक</th>
<th>प्राप्तांक</th>

<th>पूर्णांक</th>
<th>प्राप्तांक</th>

</tr>

</thead>

<tbody>

${data.subjectRows}

</tbody>

</table>


<div class="result-panel">

<div>
<b>Total Marks</b><br>
${data.total}/700
</div>

<div>
<b>Percentage</b><br>
${data.percentage}%
</div>

<div>
<b>Result</b><br>
Pass
</div>


</div>

<div class="attendance-panel">

<div class="attendance-box">
Total Working Days:
<div class="attendance-fill"></div>
</div>

<div class="attendance-box">
Days Present:
<div class="attendance-fill"></div>
</div>

<div class="attendance-box">
Attendance %:
<div class="attendance-fill"></div>
</div>

</div>

<div class="remarks-box">
Teacher Remarks:
</div>

<div class="footer">

<div class="signature">
<div class="signature-line">Class Teacher</div>
</div>

<div class="signature">
<div class="signature-line">Headmaster / Principal</div>
</div>

</div>

</div>

`;
}