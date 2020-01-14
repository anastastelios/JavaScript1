const tellFortune = (numOfChildren, partnerName, geoLoc, job) => {
    console.log(`You will be a ${job} in ${geoLoc}, and married to ${partnerName} with ${numOfChildren} kids!`);
}

const numChildren = [0, 1, 2, 3, 4];
const partnerNames = ['Mary', 'Iro', 'Feli', 'Sophie', 'Anna'];
const locations = ['Heraklion', 'Athens', 'Berlin', 'San Francisco', 'Amsterdam'];
const jobs = ['Web Developer', 'Teacher', 'DJ', 'Data Analyst', 'Stage Builder'];

let id1 = Math.floor(Math.random() * 5);
let id2 = Math.floor(Math.random() * 5);
let id3 = Math.floor(Math.random() * 5);
let id4 = Math.floor(Math.random() * 5);

tellFortune(numChildren[id1], partnerNames[id2], locations[id3], jobs[id4]);