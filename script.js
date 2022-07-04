function table() {
  // declaring variables
  let num = document.getElementById('txtnum')
  let tab = document.getElementById('seltab')

  // Conditions
  if (num.value.length == 0) {
    window.alert('[ERROR] Please, enter a number!')
  } else {
    let n = Number(num.value)
    let c = 1

    tab.innerHTML = '' // "Before the next multiplication table, clear the select".

    // Creating the table
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item) // "Add child element"
      c++
    }
  }
}
