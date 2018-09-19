var form = document.querySelector('form')
form.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault()
    var item = document.getElementById('textarea')
    var activity = item.value
    console.log(activity)

    var cost = document.getElementById('textbox')
    var price = cost.value
    console.log(price)
    
    var tbody = document.querySelector('tbody')
  	var tr = document.createElement('tr')
    var td = document.createElement('td')
    var td2 = document.createElement('td')

    tbody.appendChild(tr)
    tr.appendChild(td)
    tr.appendChild(td2)

    td.innerHTML = activity
    td2.innerHTML = '$' + price
}