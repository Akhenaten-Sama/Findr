

const apiKey = 'QnHmZDESR98UpAN6hsphzJO4mESiIkmikoX9QHEihXYwuQ5CVxlXK6qe0-91Y-WTrcw2QfAdx2PuEOIrWl1CvHnDaGSE98FtGkPbYnvDnCGJVsZQ632Ur41v6xbIXnYx';
const Yelp = {
    search(term, location , sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {
        Authorization: `Bearer ${apiKey}` 
  }
    }).then(response =>{
        
        return response.json();
    })
    
    .then(jsonResponse =>{
        if(jsonResponse.businesses){
            console.log(jsonResponse)
            return jsonResponse.businesses.map(business => ({
                  
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipcode: business.location.zip_code,
                    rating: business.rating,
                    category: business.categories[0].title,
                    reviewCount: business.review_count,
                    Longitude: business.coordinates.longitude,
                    Latitude: business.coordinates.latitude
                
            }))
        }
    })

}
}


export default Yelp