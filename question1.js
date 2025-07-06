Array.prototype.groupBy = function (keySelector) {
    //Handle null or non-array context
    if(!Array.isArray(this) || this.length === 0) return {};

    return this.reduce((acc, curr) => {
        //Handle null or undefined elements
        const key = curr == null ? null : keySelector(curr);

        if(!acc.hasOwnProperty(key)) {
            acc[key] = [];
        }

        acc[key].push(curr);
        return acc;
    },{} );
};

// Example usage
const numbers = [1,2,3,4,5,6,7,8,9, 10, 11, 12];

const groupByEvenOdd = numbers.groupBy(X => X % 2 === 0 ? 'Even' : 'Odd');
console.log(groupByEvenOdd);

// Output: { Odd: [ 1, 3, 5, 7, 9, 11 ], Even: [ 2, 4, 6, 8, 10, 12 ] }

const groupByFirstDigit = numbers.groupBy(X => String(X)[0]);
console.log(groupByFirstDigit);

// Output:
// {
//   '1': [ 1, 10, 11, 12 ],
//   '2': [ 2 ],
//   '3': [ 3 ],
//   '4': [ 4 ],
//   '5': [ 5 ],
//   '6': [ 6 ],
//   '7': [ 7 ],
//   '8': [ 8 ],
//   '9': [ 9 ]
// }