// Retrieve the dayNumber from localStorage
let dayNumber = localStorage.getItem('day');
let monthName = localStorage.getItem('monthName');
let year = localStorage.getItem('year');

console.log(monthName);
console.log(year);

// Now generate the UI
document.body.innerHTML = 
/* <div class="video-container">
        <video autoplay loop muted class="video-background">
          <source src="rzeszow.mp4" type="video/mp4">
        </video>
        <div class="content"> */`
            <div><h1>Właśnie tworzysz wydarzenie na dzień:</h1>  
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
                <span class="input-group-text">Opis</span>
                <textarea class="form-control" aria-label="Opis"></textarea>
                <div class="valid-tooltip">
                  Bardzo ciekawe...
                </div>
              </div>
              <div class="col-md-4 position-relative">
                <label for="validationTooltipUsername" class="form-label">Email</label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="validationTooltipUsernamePrepend">Email</span>
                  <input type="email" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
                  <div class="invalid-tooltip">
                    Wprowadź prawidłowy email
                  </div>
                </div>
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