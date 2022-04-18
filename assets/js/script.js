const firstFetch = document.querySelector('.firstFetch')
const firstFetchTitle = document.querySelector('.firstFetchTitle')

const secondFetch = document.querySelector('.secondFetch')
const secondFetchTitle = document.querySelector('.secondFetchTitle')

const thirdFetch = document.querySelector('.thirdFetch')
const thirdFetchTitle = document.querySelector('.thirdFetchTitle')

const fourthFetch = document.querySelector('.fourthFetch')
const fourthFetchTitle = document.querySelector('.fourthFetchTitle')

const fifthFetch = document.querySelector('.fifthFetch')
const fifthFetchTitle = document.querySelector('.fifthFetchTitle')






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
                console.log('hey')
            }






            // const displayPosterAndTitle = (fetch, fetchTitle, y) => {
            //     let newPic = document.createElement('img')
            //     newPic.src = "https://image.tmdb.org/t/p/w1280/" + data.results[y].poster_path
            
            //     fetch.textContent = ""
            //     fetch.appendChild(newPic)
            //     fetchTitle.textContent = data.results[y].original_title
            
            //   }

            //     displayPosterAndTitle(firstFetch, firstFetchTitle, 0)
            //     displayPosterAndTitle(secondFetch, secondFetchTitle, 1)
            //     displayPosterAndTitle(thirdFetch, thirdFetchTitle, 2)
            //     displayPosterAndTitle(fourthFetch, fourthFetchTitle, 3)
            //     displayPosterAndTitle(fifthFetch, fifthFetchTitle, 4)


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