// let i = 10;
// console.log(i);

// const pi = 3.14;
// console.log(pi);

// let i = "Hriday";
//  i = "Jadhav";
//  console.log(i);

//  const j = "Hriday";
//  j = "Jadhav";
//  console.log(j);

 function modJS(love){              //We pass parameters to allows the value of local variable to be accessed , update and used within anywhere without creating or using a global variables. 
    if(love){
        let name = 'Hriday';
        const sname = 'Jadhav';
        console.log("My name is"+ " " + name + " " + sname);
    } 

 }
 modJS(true);