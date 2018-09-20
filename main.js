var form = document.querySelector('form')
form.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault()
    var item = document.getElementById('textarea')
    var activity = item.value
    console.log(activity)

    var person = document.getElementById('who')
    var who = person.value
    console.log(who)

    var when = document.getElementById('event')
    var date = when.value
    if (date === "") {
        date = 'Whenever'
    }
    console.log(date)

    var cost = document.getElementById('textbox')
    var price = cost.value
    console.log(price)
    
    var tbody = document.querySelector('tbody')
  	var tr = document.createElement('tr')
    var td = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')

    tbody.appendChild(tr)
    tr.appendChild(td)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    td.className += " stuff"
    td2.className += " stuff"
    td3.className += " stuff"
    td4.className += " stuff"

    td.innerHTML = date
    td2.innerHTML = activity
    td3.innerHTML = '$' + price
    td4.innerHTML = who

}