for (const prop in statistics) {
    if(statistics[prop]%2 == 1 || prop[0] == 'r') {
        console.log(statistics[prop]);   
    }
}