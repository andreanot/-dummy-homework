function getVariableType (value){
    let parametar = typeof value;
    console.log(`The parametar type is ${parametar}`);
}

getVariableType(1);
getVariableType('No');
getVariableType(false);
getVariableType({});
getVariableType()