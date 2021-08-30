// import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
// creating counter variables

// Lines 7-10: Counts how many quarters, dimes, nickels, and pennies

// const coinCounterOld = (amount, q = 0, d = 0, n = 0, p = 0) => {
//   if (amount <= 0 || amount === undefined) {
//     console.log(`
//       Quarters: ${q}
//       Dimes: ${d}
//       Nickels: ${n}
//       Pennies: ${p} 
//     `)
//   } else {
//     if (amount >= 0.25) {
//       q++
//       return coinCounter(amount-0.25, q, d, n, p);
//     } else if (amount < 0.25 && amount > 0.05) {
//       d++;
//       return coinCounter((amount-0.10).toFixed(2), q, d, n, p);
//     } else if (amount <= 0.04 && amount >= 0.01) {
//       p++;
//       return coinCounter((amount-0.01).toFixed(2), q, d, n, p);
//     } else {
//       n++;
//       return coinCounter((amount-0.05).toFixed(2), q, d, n, p);
//     }
//   }
// }

// coinCounterOld(1.00)

function coinCounterNew(amount1) {
  return function quarterCounter() {
    const q = Math.floor(amount1/0.25)
    const amount2 = (amount1 - (0.25*q)).toFixed(2);
    return function dimeCounter() {
      const d = Math.floor(amount2/0.10)
      const amount3 = (amount2 - (0.10*d)).toFixed(2);
      return function nickelCounter() {
        const n = Math.floor(amount3/0.05)
        const amount4 = (amount3 - (0.05*n)).toFixed(2)
        return function pennyCounter() {
          const p = Math.floor(amount4/0.01)
          // amount -= (0.01*p)
          console.log(`
          Quarters: ${q}
          Dimes: ${d}
          Nickels: ${n}
          Pennies: ${p} 
        `)
        }
      }
    }
  }
}

function Count(a, b) {
  return a - b;
}
function cointCounter(convert, a, b) {
  return convert(a, b);
}

cointCounter(Count, 2.75, 0.25)

//const coin = coinCounterNew(0.99)

// const quarterCounter = CoinCounter();
// console.log(quarterCounter(11.01))


// $("section").text("TEST TEXT INPUT")