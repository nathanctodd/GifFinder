
const url = "https://api.giphy.com/v1/gifs/random?api_key=hMzye4GhIeP6PZUSocNO7cwJAU2o9kZU&tag=&rating=pg-13";
fetch(url)
    .then(function(response) {  
        // console.log(response.formData);
        return response.json();
    }).then(function(json){
        let results = "";
        results = "<img class=\"gif2\" src=\"" + json.data.images.fixed_height.url + "\"/>";
        document.getElementById("innerTitle").innerHTML += results;

});

document.getElementById("submit").addEventListener("click", function(event) {

    event.preventDefault();
    document.getElementById("forecastResults").innerHTML = "";
    const value = document.getElementById("gifInput").value;
    searchKey = value;
    const totalGifs = document.getElementById("number").value;
    document.getElementById("forecastResults").innerHTML += "<div class=\"resul\">" + "Search results for keyword \"" + searchKey + "\" is: " + totalGifs + "</div>";

    console.log(searchKey, totalGifs);
    for (let x = 1; x <= totalGifs; x++ ) {
        console.log("X: " + x);
        console.log("Mod: " + x % 3);
        addedResult = "";
        const url = "https://api.giphy.com/v1/gifs/random?api_key=hMzye4GhIeP6PZUSocNO7cwJAU2o9kZU&tag=" + searchKey + "&rating=pg-13";
        fetch(url)
            .then(function(response) {  
                // console.log(response.formData);
                return response.json();
            }).then(function(json){
                let results = "";
                addedResult = "<img class=\"gif\" src=\"" + json.data.images.fixed_height.url + "\"/>";
                console.log(x)
                
                document.getElementById("forecastResults").innerHTML += addedResult;

        });

    }


});






