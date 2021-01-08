jQuery(document).ready(function () {
    $.ajax({
        url:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=15295b7aed2d4d5eb0621298e4fc6653",
        type: "GET",
        dataType : "json",
        success: function (data) {
            console.log(data.articles);
            for(i=0; i<data.articles.length; i++){
                $("#news").append("<div class=\"item\"><img src ="+ data.articles[i].urlToImage +"></img>"+ data.articles[i].title +"<h2>" + data.articles[i].description + "</h2><a href="+ data.articles[i].url +"><button type=\"button\" onclick>Lire l'article</button></a></div>");
            }
            
        },
        error : function(error, message){
            alert("Echec");

        }
    });
});
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/ServiceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }