
// --------------------------------------Ex7---------------------------------------------

//   4. Creating Lookup Maps from Arrays
const users = [
  { id: 101, name: 'Alice', email: 'alice@example.com' },
  { id: 102, name: 'Bob', email: 'bob@example.com' },
  { id: 103, name: 'Charlie', email: 'charlie@example.com' }
];

const userMap = users.reduce((map, user) => {
  map[user.id] = {
    name:user.name,
    email:user.email,
  }
  return map;
}, {});
// console.log(userMap);
// Result: { 101: {...}, 102: {...}, 103: {...} }

// Why: O(1) lookups instead of O(n) with find(), critical for performance with larg

// --------------------------------------------------------------------------------------------
// 5. Counting Occurrences (Inventory Management)
const inventory = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = inventory.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// Result: { apple: 3, banana: 2, orange: 1 }

// Why: Single pass through data, creates frequency map useful for charts and repor

// -----------------------------------------------------------------------------------------------

// 8. Calculating Aggregated Statistics
const salesData = [
  { month: 'Jan', revenue: 50000, expenses: 30000 },
  { month: 'Feb', revenue: 60000, expenses: 35000 },
  { month: 'Mar', revenue: 55000, expenses: 32000 }
];

const summary = salesData.reduce((acc, data) => {
  acc.totalRevenue += data.revenue;
  acc.totalExpenses += data.expenses;
  acc.profit = acc.totalRevenue - acc.totalExpenses;
  acc.monthCount++;
  acc.avgRevenue = acc.totalRevenue / acc.monthCount;
  return acc;
}, {
  totalRevenue: 0,
  totalExpenses: 0,
  profit: 0,
  monthCount: 0,
  avgRevenue: 0
});

// Why: Single pass for multiple calculations, avoids separate loops for each metric

// ------------------------------------------------------------------------------------------------------

// 9. Transforming API Responses (Normalization)
const apiResponse = [
  { 
    id: 1, 
    author: { id: 'a1', name: 'John' },
    comments: [{ id: 'c1', text: 'Great!' }]
  },
  { 
    id: 2, 
    author: { id: 'a2', name: 'Jane' },
    comments: [{ id: 'c2', text: 'Nice' }]
  }
];

const normalized = apiResponse.reduce((acc, post) => {
  acc.posts[post.id] = { id: post.id, authorId: post.author.id };
  acc.authors[post.author.id] = post.author;
  post.comments.forEach(comment => {
    acc.comments[comment.id] = comment;
  });
  return acc;
}, { posts: {}, authors: {}, comments: {} });

console.log(normalized);

// Why: Normalizes nested data for state management (Redux, Zustand), prevents data duplication

// -------------------------------------------------------------------------------------------------------------

// 10. Implementing Deep Object Merging
const defaultConfig = { 
  theme: 'dark', 
  notifications: { email: true, sms: false },
  limits: { maxUsers: 100 }
};

const userConfig = { 
  notifications: { sms: true },
  limits: { maxProjects: 50 }
};

const mergeDeep = (target, source) => {
  return Object.keys(source).reduce((acc, key) => {
    const targetValue = target[key];
    const sourceValue = source[key];
    
    if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
      acc[key] = mergeDeep(targetValue || {}, sourceValue);
    } else {
      acc[key] = sourceValue;
    }
    return acc;
  }, { ...target });
};

const finalConfig = mergeDeep(defaultConfig, userConfig);
// Result: Deep merge preserving nested structures

// Why: Configuration management, theme customization, avoiding shallow merge pitfalls
// -----------------------------------------------------------------------------------------------------------
// 6. Parsing URL Query Strings
const queryString = "page=2&sort=desc&filter=active";

const queryParams = queryString.split('&').reduce((acc, current) => {
  const [key, value] = current.split('=');
  acc[key] = value;
  return acc;
}, {});

// Result: { page: "2", sort: "desc", filter: "active" }

// --------------------------------------------------------------------------------------------------------------

// 7. Safely Accessing Deeply Nested Properties
// The Scenario: You need to access user.profile.settings.theme but some users might have missing data (e.g., user.profile is null), causing a crash. The Code:

const user = { profile: { settings: { theme: 'dark' } } };
const path = ['profile', 'settings', 'theme'];

const value = path.reduce((currentObject, key) => {
  return (currentObject && currentObject[key] !== undefined) ? currentObject[key] : null;
}, user);

// Result: 'dark'. If any step fails, it returns null safely.