// 1. Security & Permissions
// Permission-Based Content Masking

// The Goal: Prevent unauthorized users from even seeing options they can't access.

// The Code:

// JavaScript
const menuItems = [
  { label: 'Dashboard', role: 'user' },
  { label: 'Settings', role: 'user' },
  { label: 'User Management', role: 'admin' }, // Sensitive
];

const currentUserRole = 'user';

// Only show items where the user's role matches or exceeds requirements
const visibleMenu = menuItems.filter(item => 
  item.role === currentUserRole || currentUserRole === 'admin'
);

//----------------------------------------------Ex2--------------------------------
const rawApiData = [
  { id: 1, name: 'Alice' },
  null,
  { id: 3, name: undefined },
  { id: 4, name: 'Bob' }
];

// Boolean is a shorthand for x => Boolean(x)
// We also check that the specific field 'name' exists
const cleanData = rawApiData
  .filter(Boolean) 
  .filter(user => user.name);

  console.log(cleanData);

  //----------------------------------Ex3---------------------------------

//   3. State Management
// Active Session Management

// The Goal: Keep the "Active Room" array strictly accurate.

// The Code:

let activeSockets = [
  { id: 'socket_A', status: true },
  { id: 'socket_B', status: false }
];

// On cleanup interval or disconnect event
activeSockets = activeSockets.filter(socket => socket.status);
// let mapSocket = activeSockets.map(item =>item.status)

// console.log(activeSockets);
// console.log(mapSocket);
// ----------------------------------Ex4-------------------------------------------------

// 4. Search & Discovery
// Search and Multi-Factor Faceting
// The Goal: Apply multiple conditional filters dynamically.

const products = [
  { id: 1, color: 'red', price: 50 },
  { id: 2, color: 'blue', price: 80 },
  { id: 3, color: 'red', price: 100 },
];

const userFilters = { color: 'red', maxPrice: 100 };

const results = products.filter(product => {
  // Check all conditions; if one fails, the product is excluded
  const matchesColor = product.color === userFilters.color;
  const matchesPrice = product.price <= userFilters.maxPrice;
  return matchesColor && matchesPrice;
});

// console.log(results);
// ----------------------------------------------------Ex5-------------------------------------------------


// 5. Data Integrity
// Soft-Delete Logic

// The Goal: Hide "deleted" data without losing the historical record.

const dbRecords = [
  { id: 1, content: 'Post A', deleted_at: null },
  { id: 2, content: 'Post B', deleted_at: '2023-10-01T10:00:00Z' },
];

// Only keep records where deleted_at is null
const activeRecords = dbRecords.filter(record => !record.deleted_at);
// console.log(activeRecords);

// --------------------------------------Ex6---------------------------------------------

// 8. Async Error Handling
// Handling Batch Processing Errors

// The Goal: Separate the winners from the losers after parallel execution.

// const result = await Promise.allSettled([apiCallA(), apiCallB(), apiCallC()]);

// results looks like: [{status: 'fulfilled', value: ...}, {status: 'rejected', reason: ...}]

// const successData = result
//   .filter(r => r.status === 'fulfilled')
//   .map(r => r.value); // Extract the data

// const errorLogs = result
//   .filter(r => r.status === 'rejected')
//   .map(r => r.reason); // Extract the error
