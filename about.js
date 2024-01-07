let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector("#sub").value = "Submitting...";
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbzcRRLUqv3OBZRuN1C4s1QxKd2zjc57VvnwTAjXVFteUpkCDcUUv0--PaxA-bnKEIDaZQ/exec', {
    method: "POST",
    body: data
  })
    .then(res => res.text())
    .then(data =>{
      document.querySelector("#msg").innerHTML = data;
      document.querySelector("#sub").value = "Submit";
    });
})