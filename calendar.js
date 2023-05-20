var today = new Date();

var year = today.getFullYear();
var month = today.getMonth();
var week = today.getDay();
var day = today.getDate();

var theWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var theMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

var busyDays = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1];

var eventData = 
[
    {
      "day": 25,
      "title": "Event 1",
      "description": "Description of Event 1"
    },
    {
      "day": 26,
      "title": "Event 2",
      "description": "Description of Event 2"
    },
    {
      "day": 30,
      "title": "Event 3",
      "description": "Description of Event 3"
    }
];
  

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
var isEvent = true;

var tableHTML = "";
var row = "";
var weekLimit = 1;
for (var i = 1; i <= monthL; i++) {
    if (i === 1 || (i - 1) % 7 === 0) {
        row += "<tr>";
    }

    event = null;

    for (var j = 0; j < eventData.length; j++) {
        if(eventData[j].day == i){
            event = eventData[j];
            break;
        }
    }

    if (i < dayFirst) {
        row += "<td></td>";
    } else {
        if(i < day){
            row += `<td><button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#busyModal`+i+`" id="cell" disabled>` + i + `</button></td>`;
        } else {
            if (event) {
                row += `<td>
                            <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#busyModal`+i+`" id="cell">` + i + `</button>
                        </td>
                        <div class="modal fade" id="busyModal`+i+`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">`+event.title+`</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>`+event.description+`</p>
                                        <p>Sorry for the inconvenience.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            } else {
            row += `<td>
            <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal" id="cell">` + i + `</button>
          </td>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Oops... nothing interesting.</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>Maybe you want to add a city event there?</p>
                  <p>If yes, click Add Event.</p>
                </div>
                <div class="modal-footer">
                  <button type="button"
                  button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Add Event</button>
                      </div>
                    </div>
                  </div>
                </div>`;
      }
    }
  }

  if (i % 7 === 0 || i === monthL) {
    row += "</tr>";
  }
}
tableHTML += row;
daydiv.innerHTML = tableHTML;