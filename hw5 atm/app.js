function atMachine (withdraw){
    let balance = 3000;
    if (withdraw <= balance ){
       console.log(`you can withdraw ${withdraw}€`);
       prompt(`you can withdraw ${withdraw} €`);
    }
    else {
        console.log("user doesn't have enough money");
        prompt("user doesn't have enough money");
    }
}
atMachine(32)