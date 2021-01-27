const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

// parseInt(), parseFloat()
const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
console.log(totalBadges);

// +
const totalBadges = +HTMLBadges + +CSSBadges;
console.log(totalBadges);

const pi = '3.14';
console.log(+pi === 3.14)