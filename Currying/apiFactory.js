/**
 * Production-Level API Wrapper using Currying
 * Layer 1: Base Configuration (URL, Global Headers)
 */

const apiactory = (baseUrl , globalConfig = {})  => {

    return (endpoint) => {
        const request  =  async (method, body=null,customOptions = {}) =>{
            const url = `${baseUrl}${endpoint}`;

            const options = {
                method,
                headers:{
                    'Content-Type' : 'application/json',
                    ...globalConfig.headers,
                    ...customOptions.headers,
                },
                ...globalConfig,
                ...customOptions,
            };


            if(body){
                options.body = JSON.stringify(body);
            }

            try {
                const response = await fetch(urk,options);
                    if(!response.ok){
                        const errorData = await response.json().catch(() => {});

                        throw new Error(errorData.message || `HTTP ERROR: ${response.status}`);
                    }

                    return await response.json();
            } catch (error) {
                console.error(`[API Error] ${method} ${url}:`, error.message);
                throw error;
            }
        };

        return {
            get:(options)=> request('GET',null,options),
            post:(body,options) =>request('POST',body,options),
            put: (body, options) => request('PUT', body, options),
            patch: (body, options) => request('PATCH', body, options),
            delete: (options) => request('DELETE', null, options),
        }
    }
}