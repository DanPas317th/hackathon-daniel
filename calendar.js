var today = new Date();

var year = today.getFullYear();
var month = today.getMonth();
var week = today.getDay();
var day = today.getDate();

var theWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var theMonth = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
var monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];

var busyDays = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1];

var eventData = 
[
    {
      day: 23,
      title: "Festiwal Kulinarny 'Smakowite Miasto'",
      description: "Przyłącz się do tego festiwalu kulinarnego, który odbędzie się w różnych restauracjach i kawiarniach w mieście. Będzie to okazja do spróbowania różnorodnych potraw, od lokalnych specjałów po dania kuchni międzynarodowej. W trakcie festiwalu będą również organizowane warsztaty kulinarne i prezentacje mistrzów kuchni.",
      image: "1.jpg"
    },
    {
      day: 25,
      endDate: 27,
      title: "Targi Innowacji i Technologii 'Miasto Przyszłości'",
      description: "Ta trzydniowa wystawa będzie skupiała się na nowych innowacjach i technologiach, które mają wpływ na rozwój miasta. Od inteligentnych rozwiązań w dziedzinie transportu i energii odnawialnej po projekty dotyczące zrównoważonego rozwoju urbanistycznego. Będą dostępne stoiska wystawców, panele dyskusyjne z ekspertami i pokazy nowych technologii.",
      image: "2.jpg"
    },
    {
      day: 28,
      title: "Noc Muzeów i Galerii",
      description: "Weź udział w wyjątkowym wydarzeniu, podczas którego muzea i galerie w całym mieście będą otwarte do późnych godzin nocnych. To doskonała okazja, aby zwiedzić różnorodne kolekcje sztuki, zobaczyć wystawy tymczasowe i wziąć udział w specjalnych prelekcjach i warsztatach.",
      image: "3.jpg"
    },
    {
      day: 30,
      title: "Bieg dla Dobrej Przyczyny",
      description: "Dołącz do społeczności miasta w tym charytatywnym biegu, mającym na celu wsparcie lokalnych organizacji charytatywnych. Trasa biegu przebiega przez najpiękniejsze miejsca w mieście, a każda opłata startowa idzie na rzecz wybranej organizacji charytatywnej. Niezależnie od tego, czy jesteś doświadczonym biegaczem czy dopiero zaczynasz swoją przygodę z bieganiem, to wydarzenie jest dla wszystkich.",
      image:"4.png"
    },
    {
      day: 31,
      title: "Piknik Filmowy w Parku",
      description: "Przygotuj swoje kocyki i przekąski, aby wziąć udział w pikniku filmowym w jednym z najpiękniejszych parków w mieście. Na dużym ekranie zostaną wyświetlone klasyczne filmy, a Ty będziesz mógł spędzić czas na świeżym powietrzu w otoczeniu zieleni.",
      image: "5.jpg"
    }
  ];
  

var dayFirst = 1+week-day%7;
var monthName = theMonth[month];

var div = document.getElementById("calendar");
var monthL = monthLength[month];

var inHtml = `
<div style="display: flex;">
  <div id="cols1">
  <h1 id="title">ResPlan</h1>
  <p>Odkryj tętniące życiem wydarzenia w Rzeszowie! Przejrzyj nasz kalendarz, aby być na bieżąco z lokalnymi festiwalami, koncertami i innymi atrakcjami. 
    A jeśli masz własne wydarzenie, dodaj je samodzielnie i podziel się z innymi entuzjastami kultury i rozrywki w naszym pięknym mieście!</p>
  </div>
<div id="cols2">
<h1 style="color:aliceblue;">Aktualny miesiąc: </h1>
<h1 id = "month">`+monthName+`</h1>
</div>
</div>
<table >
    <tr style="color:aliceblue;">
        <th>Pn</th>
        <th>Wt</th>
        <th>Śr</th>
        <th>Czw</th>
        <th>Pt</th>
        <th>Sb</th>
        <th>Ndz</th>
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
        row += `<td><button type="button" class="btn btn-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#busyModal` +num +
          `" id="cell" disabled>` +num +`</button></td>`;
      } else {
        buttonId = i;
        console.log(i);
        if (event) {
          row += `<td>
            <div>
              <button type="button" class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#busyModal` +num +`" id="cell">` +num +`</button>
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
            <img src="${event.image}" style="max-width: 100%;">
                      <p>(Ta data jest zajęta)</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Zamknij</button>
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
                      <h1 class="modal-title fs-5" id="exampleModalLabel${num}">Nic ciekawego...</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p>Jeśli chcesz dodać wydarzenie miejskie do kalendarza, proszę kliknij "Dodaj Wydarzenie".</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Zamknij</button>
                      <button type="button" class="btn btn-primary" id="addEvent" onclick="openNewEventPage(${num})">Dodaj Wydarzenie</button>
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

// Instead of export let eventData = [];
window.eventData = [];

  
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

  function loginPage(){
    window.open('login.html', '_blank');
  }

  