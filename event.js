// Retrieve the dayNumber from localStorage
let dayNumber = localStorage.getItem('day');
let monthName = localStorage.getItem('monthName');
let year = localStorage.getItem('year');

console.log(monthName);
console.log(year);

// Now generate the UI
document.body.innerHTML = `
<div><h1>Creating a city event for:</h1>  
<h1>`+ dayNumber+" "+monthName+" "+year+`</h1></div>
<p>Please, provide informations about your event.</p></div>
<div class="mb-1" style="width: 25%;">
<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Topic">
</div>
<div class="mb-1" style="width: 25%;">
<div class="input-group">
  <span class="input-group-text">Describe</span>
  <textarea class="form-control" aria-label="Describe"></textarea>
</div>
</div>
<div><button type="submit" class="btn btn-success mb-3">Confirm</button></div>
`;