const getClassRow = document.querySelector('.row')

const getFetchedMovie = function() {
    // format the github api url
    const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=ea5d9628271045a5427bbed438e233c5&language=en-US&page=1";
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
        //   console.log(response);
          response.json().then(function(data) {
            // console.log(data);

            console.log(data.results[0])

            for(let i = 0; i< data.results.length; i++){
                console.log(data.results[i].poster_path)
                let firstDiv = document.createElement('div')
                firstDiv.className = "card my-2 mx-2";
                firstDiv.setAttribute("style","width: 18rem");

                let secondDiv = document.createElement('div')
                secondDiv.className = "card"
                let newPic = document.createElement('img')
                newPic.src = "https://image.tmdb.org/t/p/w1280/" + data.results[i].poster_path
                secondDiv.appendChild(newPic)

                firstDiv.appendChild(secondDiv)

                let thirdDiv = document.createElement('div')
                thirdDiv.className = "card-body bg-danger";
                let paragraph = document.createElement('p')
                paragraph.textContent = data.results[i].original_title
                thirdDiv.appendChild(paragraph)

                firstDiv.appendChild(thirdDiv)

                getClassRow.appendChild(firstDiv)

                
            }


          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) {
        alert("Unable to connect");
      });
  };





  getFetchedMovie()