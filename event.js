// Retrieve the dayNumber from localStorage
let dayNumber = localStorage.getItem('day');
let monthName = localStorage.getItem('monthName');
let year = localStorage.getItem('year');

console.log(monthName);
console.log(year);

// Now generate the UI
document.body.innerHTML = `
            <div><div style="display:flex;">
            <img src="logo.png" style="width:48px;height:48px;">
            <h1>Właśnie tworzysz wydarzenie na dzień:</h1>
            </div>
                <h1>`+ dayNumber+" "+monthName+" "+year+`</h1></div>
                <p>Proszę o podanie informacji o nim.</p></div>
                <div class="col-md-4 position-relative">
                <label for="validationTooltip01" class="form-label">Temat</label>
                <input type="text" class="form-control" id="validationTooltip01">
                <div class="valid-tooltip">
                  Ciekawe...
                </div>
              </div>
              <div class="col-md-4 position-relative">
                <label for="validationTooltip02" class="form-label">Opis</label>
                <textarea class="form-control" aria-label="Opis"></textarea>
                <div class="valid-tooltip">
                  Bardzo ciekawe...
                </div>
              </div>

              <div class="input-group">
              <label>Zdjęcie</label>
              <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Załaduj">
              <button class="btn btn-outline-primary" type="button" id="inputGroupFileAddon04">Załaduj</button>
              </div>

              <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
              </div>

              <div id="card">
              <div class="mb-0">
              <label for="formGroupExampleInput" class="form-label">Numer Karty</label>
              <input type="number" class="form-control" placeholder="---- ---- ---- ----" id="number">
              </div>
              <div class="mb-0">
              <label for="formGroupExampleInput" class="form-label">CVC</label>
              <input type="number" class="form-control" id="formGroupExampleInput" placeholder="---">
              </div>
              <div class="mb-0">
                <label for="formGroupExampleInput" class="form-label">Wygaśnięcie</label>
              <input type="datetime" class="form-control" id="formGroupExampleInput" id="card" placeholder="MM / YY">
              </div>

              <h1>3zł</h1>

              </div>
              <div class="col-12">
                <button class="btn btn-success" type="submit">Podtwierdź</button>
          </div>
        </div>
      </div>
`;

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();  // To prevent form from submitting normally
  
    // Get topic
    let topic = document.getElementById('validationTooltip01').value;
  
    // Get description
    let description = document.querySelector('textarea').value;
  
    // Save the new event data to localStorage
    localStorage.setItem('dayEVENT', dayNumber);
    localStorage.setItem('topicEVENT', topic);
    localStorage.setItem('desEVENT', description);
  
    // Log saved items for confirmation
    console.log(localStorage.getItem('dayEVENT'));
    console.log(localStorage.getItem('topicEVENT'));
    console.log(localStorage.getItem('desEVENT'));

    window.open('index.html');

    window.close();
});