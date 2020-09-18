if (document.querySelectorAll('div')[25].innerText === 'There are no documents to display.') {
  throw new Error("No documents to display.")
}
else {
  return true
}
