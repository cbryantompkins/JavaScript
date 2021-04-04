function checkbox(){
var all = document.getElementById('mat-option-0')
var list = document.getElementsByTagName('mat-option')

for (var i = 0; i < list.length; i++) {
    if (list[i].ariaSelected==="false" && all.ariaSelected==="true") {
      throw new Error("Checkboxes malfunctioning")
    } else return true;
  }
}
