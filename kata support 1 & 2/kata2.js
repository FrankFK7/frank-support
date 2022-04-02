Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |




--------------------------------------
function getIssuer(number) {

  // Code your solution here
  if(/^3(4|7)[0-9]{13}$/g.test(number)) return 'AMEX';
  if(/^6011[0-9]{12}$/g.test(number)) return 'Discover';
  if(/^5[1-5][0-9]{14}$/g.test(number)) return 'Mastercard';
  if(/^4([0-9]{12}|[0-9]{15})$/g.test(number)) return 'VISA';
  return 'Unknown';
}