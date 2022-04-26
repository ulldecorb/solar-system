const planetRadius = [ 
    { ua: 0.39, name: 'mercury', radius: 2439.7, color: ['grey'], nom: 'mercuri' }, 
    { ua: 0.72, name: 'venus',  radius: 6051.8, color: [ 'brown', 'grey'] , nom: 'venus' },
    { ua: 1, name: 'earth',  radius: 6371, color: [ 'blue', 'brown', 'green', 'white'] , nom: 'terra' },
    { ua: 1.52, name: 'mars', radius: 3389.5, color: [ 'red', 'brown', 'tan'] , nom: 'mart' },
    { ua: 5.2, name: 'jupiter', radius: 69911, color: [ 'brown', 'orange', 'tan'], nom: 'júpiter' },    
    { ua: 9.54, name: 'saturn', radius: 58232, color: ['golden', 'brown', 'blue-grey'], nom: 'saturn' },
    { ua: 19.22, name: 'uranus', radius: 25362, color: ['blue-green'], nom: 'urà' },
    { ua: 30.06, name: 'neptune', radius: 24622, color: ['blue'], nom: 'neptú' },
];

const sunRadius = { sun: { radius: 696340, color: ['yellow'], name: 'sol'} };

const size = planetRadius.map((planet) => (planet.ua * 150000000 /2 /100000).toFixed(2));
console.log(size)