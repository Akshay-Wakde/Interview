// 1. Dynamic Routing (Single Page Applications)
// The Scenario: You have a URL path (e.g., /dashboard/settings) and need to find the matching route definition object to render the correct component.

const routes = [
  { path: '/home', component: 'Home' },
  { path: '/dashboard', component: 'Dashboard' },
  { path: '/dashboard/settings', component: 'Settings' } // Specific match
];

const currentPath = '/dashboard/settings';

// Find the exact route object
const activeRoute = routes.find(route => route.path === currentPath);

if (activeRoute) {
//   render(activeRoute.component);
} else {
//   render('404Page');
}

// ---------------------------------------------------------------------------------------------------

// 2. Updating Shopping Cart Quantity
// The Scenario: A user clicks "Add to Cart." If the item is already in the cart, you want to increment the quantity, not add a duplicate row. 

const cart = [
  { productId: 101, qty: 1 },
  { productId: 102, qty: 5 }
];

const newItem = { productId: 101 };

// Check if it exists
const existingItem = cart.find(item => item.productId === newItem.productId);

if (existingItem) {
  // Production Tip: Mutating the found object updates the array reference!
  existingItem.qty += 1; 
} else {
  cart.push({ ...newItem, qty: 1 });
}
// -----------------------------------------------------------------------------------------------------------

// 4. Selecting an Active Configuration
// The Scenario: Your app supports multiple environments (Dev, Stage, Prod), and you need to load the config for the current one. 

const configs = [
  { env: 'development', apiUrl: 'http://localhost:3000' },
  { env: 'staging', apiUrl: 'https://api-stage.company.com' },
  { env: 'production', apiUrl: 'https://api.company.com' }
];

const currentEnv = process.env.NODE_ENV || 'development';

const config = configs.find(c => c.env === currentEnv);

// Fallback is critical in production
const apiUrl = config ? config.apiUrl : 'http://localhost:3000';


// Method	        Returns	                            UseCase	                                    PerformanceNote
// .find()          The Item (or undefined)             You need the data of the first match.       Stops immediately after finding. Fast O(k)
// .filter()        An Array []You need all matches.    Always iterates the whole array.            Slower O(N)
// .some()          Boolean true/false.                 You just need to know if it exists.         Stops immediately. Fast.
// .map()           An Array []                         You need to transform data.                 Always iterates the whole array.


// -----------------------------------------------------------------------------------------------------------------------

// 2. Global Permissions Check
// The Scenario: A user has multiple "Permission Groups." You want to see if they have "Admin" access in any of those groups. The Code:

const userGroups = [
  { name: 'Editor', permissions: ['read', 'write'] },
  { name: 'Billing', permissions: ['read', 'pay'] },
  { name: 'SuperUser', permissions: ['admin', 'delete'] }
];

const hasAdminAccess = userGroups.some(group => 
  group.permissions.includes('admin')
);

console.log(hasAdminAccess);
// true

// -------------------------------------------------------------------------------------------------------------
// Diffrence between find and filter

// Feature	            find()	                                    filter()
// Return Value	    The first element that matches.	            A new array containing all matches.
// No Match Found	    Returns undefined.	                        Returns an empty array [].
// Execution	        Stops immediately after finding a match.	Iterates through the entire array, every time.
// Purpose	            To locate a specific, unique object.        To narrow down a list based on criteria

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Charlie' }
];

// FIND: Give me the SPECIFIC person
const findBob = users.find(u => u.name === 'Bob');
// Output: { id: 2, name: 'Bob' } 
// (It found the first one and stopped. It doesn't know ID 3 exists.)

// FILTER: Give me a LIST of all Bobs
const filterBobs = users.filter(u => u.name === 'Bob');
// Output: [{ id: 2, name: 'Bob' }, { id: 3, name: 'Bob' }]


// 3. Production Selection: Which one to use?
// Use find() when:
// IDs are involved: You have a unique ID and you want the object associated with it.

// Performance matters: You are searching a massive array (e.g., 100,000 items) and you know there is only one match. find() is significantly faster because it doesn't check the remaining 99,999 items once it finds the target.

// Direct Access: You want to modify a property of the object directly (e.g., user.isActive = true).

// Use filter() when:
// Multiple results are possible: You want all "Active" users or all "Red" products.

// Deleting/Removing items: You want to create a new list that excludes certain items (e.g., users.filter(u => u.id !== deletedId)).

// Chaining: You want to perform further operations like .map() or .sort() on the resulting list.


// 4. The "Empty" Trap
// One of the biggest causes of production bugs is how these two handle "no results":

const result1 = users.filter(u => u.name === 'Zelda'); 
if (result1) { /* This will ALWAYS run because an empty array [] is truthy */ }

const result2 = users.find(u => u.name === 'Zelda');
if (result2) { /* This will NOT run because undefined is falsy. This is safer. */ }