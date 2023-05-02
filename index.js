const url = 'https://odds.p.rapidapi.com/v4/sports?all=true';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8057ff8a3emshc186199dcb7098bp19548fjsn69e1fe31e6db',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
};
fetch(url, options).then(response => response.json()).then(response=> console.log(response))

    
