function pCreation(input){
    let name = input[0];
    let projects = Number (input[1]);
    let houers = projects * 3 ;
    console.log(`The architect ${name} will need ${houers} hours to complete ${projects} project/s.`);
}

pCreation(["Jhon", 4]);