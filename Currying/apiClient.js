const authorizedAPI = apiFactory('https://api/example.com/v1',{
    headers:{
        'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        'X-Client-ID' : 'Web-App-01',
    }
});

export default authorizedAPI;