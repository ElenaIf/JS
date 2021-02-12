const band = {
  members: {
    current: [
      { name: "Sascha", age: 59, plays: ["vocals", "synth", "guitar", "bass"] },
      { name: "Lucia", age: 49, plays: ["vocals", "synth"] },
      { name: "Jules", age: 53, plays: ["guitar", "bass", "synth"] },
      { name: "Steve", age: 55, plays: ["guitar"] },
    ],
    past: [
      { name: "Raymond", age: 57, plays: ["vocals", "synth"] },
      { name: "En", age: 52, plays: ["vocals", "drums", "guitar", "synth"] },
      { name: "Gunter", age: 57, plays: ["guitar", "synth"] },
    ],
  },
};

const expected = {
  members: {
    // current: no changes
    current: [
      { name: "Sascha", age: 59, plays: ["vocals", "synth", "guitar", "bass"] },
      { name: "Lucia", age: 49, plays: ["vocals", "synth"] },
      { name: "Jules", age: 53, plays: ["guitar", "bass", "synth"] },
      { name: "Steve", age: 55, plays: ["guitar"] },
    ],
    // past: no changes
    past: [
      { name: "Raymond", age: 57, plays: ["vocals", "synth"] },
      { name: "En", age: 52, plays: ["vocals", "drums", "guitar", "synth"] },
      { name: "Gunter", age: 57, plays: ["guitar", "synth"] },
    ],
    // ORDER MATTERS!
    // 1. Sort age first by DESC
    // 2. then sort name by ASC
    // 3. lowercase all the names
    all: ["sascha", "gunter", "raymond", "steve", "jules", "en", "lucia"],
  },
  // plays order doesn't matter
  plays: {
    // name order doesn't matter
    // but show the name in lowercase
    vocals: ["sascha", "lucia", "raymond", "en"],
    synth: ["sascha", "lucia", "jules", "raymond", "en", "gunter"],
    guitar: ["sascha", "jules", "steve", "en", "gunter"],
    bass: ["sascha", "jules"],
    drums: ["en"],
  },
};

// I connected two arrays - Current and Past into one array to get all the members all together
let arrayOfAllMembers = band.members.current.concat(band.members.past);

/*If returns 0 then the elements are treated as equal
If returns 1 then b is sorted before a
If returns -1 then a is sorted before b */
// Then I sort them by age. If the age is the same, then I sort according to the name. Other cases I sort by age only
let arrayOfAllMembersSortedByAgeAndName = arrayOfAllMembers.sort((a, b) => {
  if (a.age == b.age) {
    if (a.name < b.name) return -1;
  }
  if (a.age > b.age) return -1;
  return 0;
});

// Prepare the empty array to store the lower cased names
let arrayOfOnlyNames = [];

// Make all the names I sorted earlier lower cased
for (i = 0; i < arrayOfAllMembersSortedByAgeAndName.length; i++) {
  let lowercased = arrayOfAllMembersSortedByAgeAndName[i].name.toLowerCase();
  arrayOfOnlyNames.push(lowercased);
}

// Then I add the array of names as an object into the band object
band.members.all = arrayOfOnlyNames;

// Prepare an emply array to save all the instruments I found in all the objects and arrays
let arrayOfInstruments = [];

// Search for all the instruments inside the objects and arrays
for (i = 0; i < arrayOfAllMembers.length; i++) {
  let instruments = arrayOfAllMembers[i].plays;
  arrayOfInstruments.push(instruments);
}

// Sort out all the unique instruments from the ones I found earlier
let arrayOfUniqueInstruments = Array.from(new Set(arrayOfInstruments.flat()));

// Create a new empty object for the future arrays
band.members.plays = [];

// Loop through unique instruments
for (j = 0; j < arrayOfUniqueInstruments.length; j++) {
  //  Create a new objects with the names of every instrument that I can find
  // Note for myself: the dot notation does not work when creating a new object. I have to use [] brackets
  band.members.plays[arrayOfUniqueInstruments[j]] = [];
  // Loop through all the members
  for (i = 0; i < arrayOfAllMembers.length; i++) {
    // If I find a member who plays this instrument, then I add the name into the array inside the object with the instrument name. So basically I check if the member with the index i plays the instrument with the index j
    if (arrayOfAllMembers[i].plays.includes(arrayOfUniqueInstruments[j])) {
      // While I add the name into array, I also make it lower cased
      band.members.plays[arrayOfUniqueInstruments[j]].push(
        arrayOfAllMembers[i].name.toLowerCase()
      );
    }
  }
}

console.log(band);
