function displayJSON(){
  fetch("lien")
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    document.getElementById("my_p").textContent = JSON.stringify(json["main"]["temp"])
  })
  .catch(function(error){
    console.log("Probleme")
  });

}