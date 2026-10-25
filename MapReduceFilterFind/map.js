const rawUsers = [{ user_id: 1, email_addr: 'a@b.com' }];
const cleanUsers = rawUsers.map(u => ({
  id: u.user_id,
  email: u.email_addr,
  joinedAt: new Date()
}));

console.log(cleanUsers);

//-----------------------------------------------Example2------------------------------------------

const posts = [{ title: "Hello World" }];
const postsWithSlugs = posts.map(p => ({
  ...p,
  slug: p.title.toLowerCase().replace(/ /g, '-')
}));
console.log(postsWithSlugs);
//-----------------------------------------------Example3------------------------------------------
const products = [
    {name:"Apple",price:4},
    {name:"Apple",price:3},
    {name:"Apple",price:7},

]
const rate = 0.92;
const internationalPrices = products.map(p => ({
  ...p,
  localPrice: (p.price * rate).toFixed(2),
  currency: 'EUR'
}));

console.log(internationalPrices);