var name=document.getElementById('nameV');
var mob_no=document.getElementById('mob_no');
var email_id=document.getElementById('email_id');

function check(){
	if(name.value=='' || mob_no.value=='' || email_id.value=='')
	{
		alert("Please do not leave any field empty");
	}
	document.getElementById('result').innerHTML+=`
     <tr>
     <td class="t_value">${name.value}</td>
     <td class="t_value">${mob_no.value}</td>
     <td class="t_value">${email_id.value}</td>
     <td><button id="delete">Delete</button></td>
     </tr>
     
	`;
}