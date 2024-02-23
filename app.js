// Xarajatlar dollarda $
let borishKleishBileti$ = 500;
let mehmonxonaTolovi$ = 250; 
// Xarajatlar euroda 
let aylanishUchunEuro = 120;

// Kurs 
// 1$ = 11000.34 so'm
let dollar = 11000.34
// 1 euro = 12354.03 so'm
let euro = 12354.03

// Xarajatlarni so'mga o'tqazish
borishKleishBileti$ *= dollar;
mehmonxonaTolovi$ *= dollar;
aylanishUchunEuro *= euro;

// Jami xarajat
let jamiXarajat = borishKleishBileti$ + mehmonxonaTolovi$ + aylanishUchunEuro;

// Malumot olish
let malumot = prompt('Sayoxat uchun jami qancha pulingiz bor');

// Malumot chiqarish
if (jamiXarajat <= malumot) {
    alert('OQ YO\'L !!!')
}else{
    alert("Ozgina sabr qilishingiz kerak")
}