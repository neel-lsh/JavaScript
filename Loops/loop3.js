 const mynums=[1,2,3,4,5,9,7,4,6,8]
//  const num1=mynums.filter((num) => num>4)
//  console.log(num1); // Logs: [5]
 const newnum=[]
 mynums.forEach((num) => {
    if(num > 4) {
        newnum.push(num);
    }
 }); 
    // Using forEach to log each object's properties
     console.log(newnum); // Logs: [5]

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
];
const userBooks= books.filter((book) => book.genre === 'Fiction' && book.publish < 2000)
console.log(userBooks);
const name=books.filter((bk)=>{
    if(bk.edition > 2007){
        return bk.title;
    }
})
console.log(name); // Logs books with edition > 2007
