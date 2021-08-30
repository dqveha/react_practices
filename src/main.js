// import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
// creating counter variables

// Lines 7-10: Counts how many quarters, dimes, nickels, and pennies

const coinCounter = (amount, q = 0, d = 0, n = 0, p = 0) => {
  if (amount <= 0 || amount === undefined) {
    console.log(`
      Quarters: ${q}
      Dimes: ${d}
      Nickels: ${n}
      Pennies: ${p}
    `)
  } else {
    if (amount >= 0.25) {
      q++
      return coinCounter(amount-0.25, q, d, n, p);
    } else if (amount < 0.25 && amount > 0.05) {
      d++;
      return coinCounter((amount-0.10).toFixed(2), q, d, n, p);
    } else if (amount <= 0.04 && amount >= 0.01) {
      p++;
      return coinCounter((amount-0.01).toFixed(2), q, d, n, p);
    } else {
      n++;
      return coinCounter((amount-0.05).toFixed(2), q, d, n, p);
    }
  }
}
coinCounter("5")




// $("section").text("TEST TEXT INPUT")