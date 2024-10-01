var e,t,n=document.querySelectorAll("th"),r=Array.from(document.querySelectorAll("tbody tr")),a=document.querySelector("body"),o=document.querySelector("tbody"),l=null,c=!0,i=((e=document.createElement("form")).classList.add("new-employee-form"),[{label:"Name: ",name:"name",type:"text",required:!0},{label:"Position: ",name:"position",type:"text",required:!0},{label:"Office: ",name:"office",type:"select",options:["Tokyo","Singapore","London","New-York","Edinburg","San Francisco"],required:!0},{label:"Age: ",name:"age",type:"number",required:!0},{label:"Salary: ",name:"salary",type:"number",required:!0}].forEach(function(t){var n,r=document.createElement("div");r.style.display="flex",r.style.alignItems="center",r.style.marginBottom="10px";var a=document.createElement("label");a.textContent=t.label,a.setAttribute("for",t.name),a.style.marginRight="10px",a.style.width="100px","select"===t.type?(n=document.createElement("select"),t.options.forEach(function(e){var t=document.createElement("option");t.value=e,t.textContent=e,n.appendChild(t)})):(n=document.createElement("input")).type=t.type,n.name=t.name,n.id=t.name,n.dataset.qa=t.name,t.required&&(n.required=!0),n.style.flex="1",r.appendChild(a),r.appendChild(n),e.appendChild(r)}),(t=document.createElement("button")).textContent="Save to table",e.appendChild(t),{form:e,formButton:t}),d=i.form,u=i.formButton;a.appendChild(d),r.forEach(function(e){e.addEventListener("click",function(){r.forEach(function(e){return e.classList.remove("active")}),e.classList.add("active")})}),n.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.cellIndex;c=l!==t||!c,l=t,function(e,t){e.sort(function(e,n){var r=e.querySelectorAll("td")[t].textContent,a=n.querySelectorAll("td")[t].textContent;if(0===t||1===t||2===t)return c?r.localeCompare(a):a.localeCompare(r);if(3===t||4===t){var o=parseFloat(r.replace(/[^0-9.-]+/g,"")),l=parseFloat(a.replace(/[^0-9.-]+/g,""));return c?o-l:l-o}});var n=document.querySelector("tbody");n.innerHTML="",e.forEach(function(e){n.appendChild(e)})}(r,t)})}),u.addEventListener("click",function(e){if(e.preventDefault(),!d.checkValidity()){m(500,10,"Form Error","Please fill out all required fields.","error");return}var t=d.querySelector('[name="name"]').value,n=d.querySelector('[name="position"]').value,a=d.querySelector('[name="office"]').value,l=d.querySelector('[name="age"]').value,c=parseFloat(d.querySelector('[name="salary"]').value).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});if(t.length<4){m(500,10,"Wrong name","Name must be longer than 3 symbols","error");return}if(l<18||l>90){m(500,10,"Wrong age","Age must be more than 18 and less than 90","error");return}var i=document.createElement("tr"),u=document.createElement("td"),p=document.createElement("td"),s=document.createElement("td"),y=document.createElement("td"),f=document.createElement("td");u.textContent=t,p.textContent=n,s.textContent=a,y.textContent=l,f.textContent=c,i.appendChild(u),i.appendChild(p),i.appendChild(s),i.appendChild(y),i.appendChild(f),o.appendChild(i),r.push(i),m(500,10,"Great!","Employee add to the table","success"),d.reset()});var m=function(e,t,n,r,o){var l=document.createElement("div");l.style.top=e+"px",l.style.right=t+"px",l.classList.add("notification",o),l.setAttribute("data-qa","notification");var c=document.createElement("h2");c.classList.add("title"),c.textContent=n;var i=document.createElement("p");i.textContent=r,l.appendChild(c),l.appendChild(i),a.appendChild(l),setTimeout(function(){l.style.display="none"},2e3)};
//# sourceMappingURL=index.5ab5cca4.js.map