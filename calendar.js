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
      "title": "Międzynarodowy Dzień Kotów",
      "description": "Zapraszamy wszystkich miłośników kotów na nasze coroczne świętowanie Dnia Kotów. Przyjdźcie i dołączcie do zabawy, przynosząc ze sobą swoje futrzane przyjaciół. Będzie wiele aktywności, gier i zabaw z kotami, a także konkursy z nagrodami. Miejsce: Centralny Park Miejski, godzina: 10:00."
    },
    {
      "day": 26,
      "title": "Koncert Rockowy w Amfiteatrze",
      "description": "Cieszymy się, że możemy zaprosić wszystkich miłośników muzyki rockowej na koncert na żywo w naszym lokalnym amfiteatrze. Na scenie zagrają znane zespoły rockowe. Przyjdźcie i doświadczcie mocy prawdziwego rocka! Miejsce: Amfiteatr Miejski, godzina: 20:00."
    },
    {
      "day": 30,
      "title": "Festiwal Kulinarny",
      "description": "Zapraszamy na Festiwal Kulinarny! Będzie to doskonała okazja, aby spróbować różnych smaków z całego świata. Czeka na was wiele stoisk z jedzeniem, pokazy gotowania na żywo, a także konkursy kulinarne. Miejsce: Rynek Główny, godzina: 11:00."
    },
    {
        "day": 28,
        "title": "Koncert Rockowy w Amfiteatrze",
        "description": "Cieszymy się, że możemy zaprosić wszystkich miłośników muzyki rockowej na koncert na żywo w naszym lokalnym amfiteatrze. Na scenie zagrają znane zespoły rockowe. Przyjdźcie i doświadczcie mocy prawdziwego rocka! Miejsce: Amfiteatr Miejski, godzina: 20:00."
      },
      {
        "day": 22,
        "title": "Festiwal",
        "description": "Zapraszamy na Festiwal Kulinarny! Będzie to doskonała okazja, aby spróbować różnych smaków z całego świata. Czeka na was wiele stoisk z jedzeniem, pokazy gotowania na żywo, a także konkursy kulinarne. Miejsce: Rynek Główny, godzina: 11:00."
      }
];
  

var dayFirst = 1+week-day%7;
var monthName = theMonth[month];

var div = document.getElementById("calendar");
var monthL = monthLength[month];

var inHtml = `
<h1 style="color:aliceblue;">Current month: `+monthName+`</h1>
<table >
    <tr style="color:aliceblue;">
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

var buttonId = null;
var num = null;

var tableHTML = "";
var row = "";
var weekLimit = 1;
for (var i = 1; i <= monthL; i++) {
    num = i;
    if (i === 1 || (i - 1) % 7 === 0) {
      row += "<tr>";
    }
  
    event = null;
  
    for (var j = 0; j < eventData.length; j++) {
      if (eventData[j].day == i) {
        event = eventData[j];
      }
    }
  
    if (i < dayFirst) {
      row += "<td></td>";
    } else {
      if (i < day) {
        row += `<td><button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#busyModal` +num +
          `" id="cell" disabled>` +num +`</button></td>`;
      } else {
        buttonId = i;
        console.log(i);
        if (event) {
          row += `<td>
            <div>
              <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#busyModal` +num +`" id="cell">` +num +`</button>
              <div class="modal fade" id="busyModal` +num +`" tabindex="-1" aria-labelledby="exampleModalLabel${num}" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel${num}">${event.title} (` +num +" " +monthName +" " +year +`)</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p>` +
            event.description +
            `</p>
                      <p>Sorry for the inconvenience.</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>`;
        } else {
          row += `<td>
            <div>
              <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#busyModal${num}" id="cell">` +num +`</button>
              <div class="modal fade" id="busyModal${num}" tabindex="-1" aria-labelledby="exampleModalLabel${num}" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel${num}">Oops... nothing interesting. (` +num +" " +monthName +" " +year +`)</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p>Maybe you want to add a city event there?</p>
                      <p>If yes, click Add Event.</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" id="addEvent" onclick="openNewEventPage(${num})">Add Event</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>`;
        }
      }
    }
  
    if (i % 7 === 0 || i === monthL) {
      row += "</tr>";
    }
  }
   
  
tableHTML += row;
daydiv.innerHTML = tableHTML;




    

  
  // Modyfikujemy funkcję openNewEventPage, aby mogła przyjmować numer dnia
  function openNewEventPage(dayNumber) {
    // Pobieranie aktualnej daty
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var monthName = theMonth[month];
  
    localStorage.setItem('day', dayNumber);
    localStorage.setItem('monthName', monthName);
    localStorage.setItem('year', year);
  
    window.open('event.html', '_blank');
  }  