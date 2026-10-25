const axios = require('axios');

// 1. GET request with Bearer Authentication
const getData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data', {
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'  // Add your Bearer token here
      }
    });
    console.log('GET Response:', response.data);
  } catch (error) {
    console.error('Error in GET request:', error);
  }
};

// 2. POST request with Bearer Authentication and data
const postData = async () => {
  try {
    const response = await axios.post('https://api.example.com/data', 
      {
        name: 'John Doe', 
        email: 'johndoe@example.com'
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN',  // Bearer token
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('POST Response:', response.data);
  } catch (error) {
    console.error('Error in POST request:', error);
  }
};

// Call the functions
getData();
postData();















const axios = require('axios');


const getAx = async () => {
    try {
            const output = axios.post('www.api.com',
                {
                    name:"Akshay"
                },
                {
                headers:{
                    'Authorization' : 'Bearer TOKEN_VALUE',
                    'Content-Type':'application/json'
                }
            });

            console.log(output.data);

    } catch (error) {
        console.log(error);
        
    }
}

getAx();


