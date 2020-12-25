const uuidv5 = require("./node_modules/uuid/dist/v5");

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Declaring empty specimen
class SpecimenObject{};

// Formula for creating new specimen
const pAequorFactory = () => {
  SpecimenObject.specimenNum = uuidv5.default.DNS;
  SpecimenObject.dna = mockUpStrand();
  return {SpecimenObject}
}

// DNA mutate
SpecimenObject.prototype.mutate = function() {
  randomIndex = Math.floor(Math.random() * 14);
  randomBase = returnRandBase();

  if (SpecimenObject.dna[randomIndex] !== randomBase) {
    return SpecimenObject.dna[randomIndex] = randomBase;
  } else {
    newRandomBase = returnRandBase();
    return SpecimenObject.dna[randomIndex] = newRandomBase;
  }
}

// DNA comparison
SpecimenObject.prototype.compareDNA = function(pAequor) {
  for (i = 0; i <= SpecimenObject.dna.length; i ++) {
    if (SpecimenObject.dna[i] === pAequorFactory.SpecimenObject.dna)
      return true;
 }
}

// Reassigning Object
const newSpecimenObject = new SpecimenObject;


// Function Calls
pAequorFactory();
newSpecimenObject.mutate();
newSpecimenObject.compareDNA();