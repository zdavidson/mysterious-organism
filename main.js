const uuidv = require("./node_modules/uuid/dist/v5");
const uuidv5 = uuidv.default.DNS;

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


// Formula for creating new specimen
function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,

      mutate() {
        randomIndex = Math.floor(Math.random() * 14);
        randomBase = returnRandBase();

          if (specimenObject.dna[randomIndex] !== randomBase) {
            return specimenObject.dna[randomIndex] = randomBase;
          } else {
            newRandomBase = returnRandBase();
            return specimenObject.dna[randomIndex] = newRandomBase;
          }
      },

      compareDNA(pAequorFactory) {
        let total = 0;
        for (let i = 0; i <= this.dna.length; i++) {
          if (this.dna[i] === pAequorFactory.dna[i]) {
              total++;
          }
      }
      console.log(`The specimen have ${((total/15) * 100).toFixed(2)}% of their total DNA in common.`)
    },

      willLikelySurvive() {
        total = 0;
        for (let i = 0; i <= this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            total++;
          }
        }
        if ((total/15) >= 0.6) {
          return true;
        } else {
          return false;
        }
      }
  }
}

//Creating first specimen
const specimenObject = pAequorFactory(uuidv5, mockUpStrand());


const massProduce = (num) => {
  const specimens = [];
  let specimensLeft = num - specimens.length;
  
  for (i = 0; specimens.length < num; i++) {
    let newDna = pAequorFactory(i, mockUpStrand());
    let survival = newDna.willLikelySurvive();
    if (survival === true) {
      specimens.push(newDna);
    }
  }
  console.log(specimens);
  console.log(specimens.length);
  return specimens;
}


massProduce(30);