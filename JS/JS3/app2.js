class School {
    constructor (name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name () {
        return this._name;
    }

    get level () {
        return this._level;
    }

    get numberOfStudents () {
        return this._numberOfStudents;
    }

    set numberOfStudents (num) {
        if (typeof(num) === 'number') {
            this._numberOfStudents = num;
        } else {
            console.log('Invalid input: the number of students must be set to a number');
        }
    }

    quickfacts () {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher (substituteTeachers) {
        let randInt = Math.floor(Math.random() * (substituteTeachers.length - 1));
        return substituteTeachers[randInt];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }

    get pickUpPolicy () {
        return this._pickUpPolicy;
    }
}

class HighSchool extends School {
    constructor (name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams () {
        return this._sportsTeams;
    }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by parent, guardian, or a family member over the age of 13');
lorraineHansbury.quickfacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);