// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// pAequor factory function
function pAequorFactory (num, DNA_array) {
    return {
        idNum: num,
        DNA: DNA_array,
        mutate: function (){
            randNum = Math.random() * 16;
            randBase = this.DNA[randNum];

            switch  (randBase) {
                case 'A':
                    this.DNA[randNum] = 'C'
                case 'C':
                    this.DNA[randNum] = 'T'
                case 'G':
                    this.DNA[randNum] = 'A'
                case 'T':
                    this.DNA[randNum] = 'G'
            }
        },
        compareDNA: function (otherPAequor) {
            numMatching = 0;
            for (let i = 0; this.DNA.length; i++) {
                if (this.DNA[i] === otherPAequor[i]) {
                    numMatching++
                }
            }
            percentage = (numMatching/15) * 100
            console.log(`These two pAequors have ${percentage}% of DNA in common`);
        },
        willLikelySurvive: function () {
            numOfCorG = 0;
            for (let j = 0; this.DNA.length; j++) {
                if (this.DNA[j] === 'C' || this.DNA[j] === 'G') {
                    numOfCorG++;
                }
            }
            percentage = (numOfCorG/15) * 100;
            return percentage >= 60;
        }
    }
}

let pAequorArray = [];

for (let k = 0; k < 30; k++) {
    pAequorArray.push(pAequorFactory(k, mockUpStrand()))
}

console.log(pAequorArray[1].willLikelySurvive());