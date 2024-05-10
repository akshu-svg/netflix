const cl = console.log;

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = `84e4c9efc5a9c0e1ee3f422b834a18f1`
const IMG_URL = `https://image.tmdb.org/t/p`
const TRENDING_URL = `${BASE_URL}/trending/all/week?api_key=${API_KEY}`



const initSlider = () => {
    $('#trendingMovies').owlCarousel({
        loop:false,
        margin:40,
        nav:true,
        dots : false,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
}

initSlider()


const makeApiCall = async (apiUrl, methodName, msgBody) => {
    msgBody = msgBody ? JSON.stringify(msgBody) : null
    let res= await fetch(apiUrl,{
        method : methodName,
        body : msgBody
    })

    return res.json()
}

makeApiCall(TRENDING_URL, "GET")
    .then(res => {
       cl(res)
    })


