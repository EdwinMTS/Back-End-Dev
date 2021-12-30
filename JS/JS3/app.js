class Media {
    constructor (title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title () {
        return this._title;
    }

    get isCheckedOut () {
        return this._isCheckedOut;
    }

    get ratings () {
        return this._ratings;
    }

    set isCheckedOut(trueOrFalse) {
        this._isCheckedOut = trueOrFalse;
    }

    toggleCheckoutStatus() {
        if (this._isCheckedOut === false) {
            this._isCheckedOut = true;
        } else {
            this._isCheckedOut = false;
        }
    }

    getAverageRating () {
        let sum = 0;
        sum = this.ratings.reduce((previousValue, currentValue) => previousValue + currentValue);
        return sum / this.ratings.length;
    }

    addRating (rating) {
        for (let i = 0; i < rating.length; i++) {
            this._ratings.push(rating[i]);
        }
    }
}

class Book extends Media {
    constructor (author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author () {
        return this._author;
    }

    get pages () {
        return this.pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director () {
        return this._director;
    }

    get runTime () {
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A short History of Nearly Everything', 544);
historyOfEverything.toggleCheckoutStatus();
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating([4, 5, 5]);
// console.log(historyOfEverything.ratings);
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckoutStatus();
console.log(speed.isCheckedOut);

speed.addRating([1, 1, 5]);
console.log(speed.getAverageRating())