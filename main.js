"use strict";

const dollarExchangeRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  const cost = dollars * dollarExchangeRate;
  console.log(`${dollars} dollars = ${cost} hryvnias`);
}
