Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of nesting functions, each taking a single argument.


1. Middleware and Configuration (Logging)
# In large applications, you ofte$n need a logger that includes specific metadata (like the environment or a specific module name) without passing that metadata every single time you log a message.

// Curried Logger
const logger = (env) => (module) => (message) => {
  console.log(`[${env}] [${module}]: ${message} (at ${new Date().toISOString()})`);
};

// Create specialized logging functions
const prodAuthLogger = logger('PROD')('AUTH_SERVICE');
const devPaymentLogger = logger('DEV')('PAYMENT_GATEWAY');

// Usage
prodAuthLogger('User login successful'); 
// Output: [PROD] [AUTH_SERVICE]: User login successful (at ...)


2. Event Handling in React/UI Frameworks
# Currying is incredibly useful in UI development when you need to pass an identifier (like a row ID) to an event handler without creating a new inline arrow function inside the render method, which can help with performance.

const handleUpdate = (userId) => (event) => {
  console.log(`Updating user ${userId} with value: ${event.target.value}`);
};

// In a React component:
// <input onChange={handleUpdate(user.id)} />

3. API Request Customization
# If your application hits different API endpoints but shares the same base logic (like headers or auth tokens), currying helps you build a clean, reusable request utility.

const apiRequest = (baseUrl) => (endpoint) => (options) => {
  return fetch(`${baseUrl}${endpoint}`, options)
        .then(res => res.json());
};

const myAppApi = apiRequest('https://api.myapp.com/v1');

// Specialized endpoints
const getUser = myAppApi('/users');
const getOrders = myAppApi('/orders');

// Usage
getUser({ method: 'GET' });

