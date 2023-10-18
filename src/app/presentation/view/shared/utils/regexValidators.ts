const regexLetterNumber = /[\-'`´¨¬~!£@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/çÇ]/gi
const regexEmail = /[ '`´~!#$%^&*()|+=?;:'",<>\{\}\[\]\\\/çÇ]/gi
const regexOnlyNumber = /[ \-'`´~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/a-zA-Z]/gi
const regexOnlyNumberAndXx = /[\ \-'`´~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/a-zA-Z]^X/gi
const regexOnlyLetterWithSpace = /[-'`´~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/0-9]/gi
const regexOnlyLetter = /[ -'`´~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/0-9]/gi

const regexTelephoneNumber = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/


export {
  regexLetterNumber,
  regexOnlyNumber,
  regexOnlyLetterWithSpace,
  regexEmail,
  regexTelephoneNumber,
  regexOnlyNumberAndXx,
  regexOnlyLetter
}
