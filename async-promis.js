
// Requirement
// get customer name & id 
//check customer is premium or not if yes do somthing or not do others
//if customer is premium give him all top movies also send email with all movies 


// Async wrapper function
async function getCustomers(){
    const Customer = await getCustomer(1);
    console.log(Customer);
    if(Customer.isPremium){
     const getAllMovies = await getTopMovies();
     console.log(`Dear ${Customer.name} here is your all Movies : ${getAllMovies}`);
     const SendEmail = await sendEmail(Customer.email,getAllMovies);
        if(sendEmail){     
         console.log(` Dear ${Customer.name} Email has been sent to this  ${Customer.email} With your all Top Movies ${getAllMovies}`)
        }
        else{
            console.log('Email Send Failed!');
        }
    }
}

// invoke function
getCustomers();

//customer promise  
function  getCustomer(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const CustomerData = {
               id: 1,
              name: 'Iqbal',
              isPremium: true,
              email: 'email@gmail.com'
            };
            resolve(CustomerData);
          }, 2000);
    })
}


//movies promise
function getTopMovies() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const movies = ['movie1', 'movie2'];
            resolve(movies);
          }, 3000)
    })

}

// Email promise
function sendEmail(email, movies) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(1);
          }, 4000)
    })

 }