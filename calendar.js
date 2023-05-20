var today = new Date();

var year = today.getFullYear();
var month = today.getMonth();
var week = today.getDay();
var day = today.getDate();

var theWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var theMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

var dayFirst = 1+week-day%7;
var monthName = theMonth[month];

var div = document.getElementById("calendar");
var monthL = monthLength[month];

var inHtml = `
<h1>Current month:`+monthName+`</h1>
<table>
    <tr>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
    </tr>
    <td colspan="7">
        <table id="days">
        </table>
    </td>
</table>
`;
div.innerHTML = inHtml;

var daydiv = document.getElementById("days");

var tableHTML = "";
var row = "";
var weekLimit = 1;
for (var i = 1; i <= monthL; i++) {
    if (i === 1 || (i - 1) % 7 === 0) {
      row += "<tr>";
    }
  
    if (i < dayFirst) {
      row += "<td></td>";
    } else {
      row += `<td><button class="cell">` + i + "</button></td>";
    }
  
    if (i % 7 === 0 || i === monthL) {
      row += "</tr>";
    }
}

tableHTML += row;
daydiv.innerHTML = tableHTML;

var eventForm = `
<form id="eventForm" style="display:none">
    <div id="modal">
        <label for="eventName">Event Name:</label><br>
        <input type="text" id="eventName" name="eventName"><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        <button type="button" id="saveEventButton">Save Event</button>
    </div>
</form>
`;
document.body.insertAdjacentHTML('beforeend', eventForm);
var modal = document.getElementById("eventForm");
var saveEventButton = document.getElementById("saveEventButton");
var cells = document.querySelectorAll(".cell");

// Function to save the event
window.saveEvent = function(day) {
    var name = document.getElementById("eventName").value;
    var email = document.getElementById("email").value;

    // Create a full date string in the format YYYY-MM-DD
    var dateString = year + "-" + (month+1) + "-" + day;
    
    // Create an event object
    var event = {
        date: dateString,
        name: name,
        email: email
    };

    // Save the event to localStorage
    localStorage.setItem('event-' + dateString, JSON.stringify(event));
    
    // Close the modal when done
    modal.style.display = "none";

    // Load an event from localStorage
    var storedEvent = localStorage.getItem('event-' + dateString);
    if (storedEvent) {
        var event = JSON.parse(storedEvent);
        console.log('Loaded event:', event);
        console.log('Date of event:', event.date);
    }
};

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        var day = this.textContent;
        console.log("Button clicked for day: " + day);

        // Set the modal to display with the correct event info
        modal.style.display = "block";

        // Pass the day to the saveEvent function when the button is clicked
        saveEventButton.onclick = function() { saveEvent(day); };
    });
});
