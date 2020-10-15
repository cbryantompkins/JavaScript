
var list = document.getElementsByClassName('list-group-item text-muted')

for (var i = 0; i < list.length; i++) {
  if (list[i].innerHTML.includes('a ')) {
    list[i].firstElementChild.firstElementChild.firstElementChild.click()
    break
  }
}


// UPDATED BY JOHN MEADE

var list = document.getElementsByTagName('app-indication-drug-assessment-link')

for (var i = 0; i < list.length; i++) {
  if (list[i].getElementsByTagName('a').length > 0) {
    list[i].getElementsByTagName('a')[0].click()
    break
  }
}{

}
