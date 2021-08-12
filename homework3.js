//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

//not sure need to review this subject

function person(name, age){
    let person = {}
    person.name = name
    person.age = age
    
    }
    person.firstPerson = function(first){
        console.log('${this.name} is {this.age}');
        
      }
      person.subtractAge = function(length){
        this.age -= length
      }
     
     
     const diamond = person( 'Diamond', 50)
     console.log(diamond);
     









// =============Exercise #2 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small word"
*/
//not sure need to review this

const createPromise = (num) => {
    return new promise 
}