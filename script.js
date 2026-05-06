emailjs.init("yU9SQohYS6cVCtIty");

/* =========================
   STARS SYSTEM
========================= */

const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");

let selectedRating = 0;

stars.forEach((star, index) => {

star.addEventListener("click", () => {

selectedRating = index + 1;
ratingInput.value = selectedRating;

updateStars(selectedRating);

});

star.addEventListener("mouseover", () => {

updateStars(index + 1);

});

star.addEventListener("mouseleave", () => {

updateStars(selectedRating);

});

});

function updateStars(rating){

stars.forEach((star, i) => {

if(i < rating){
star.classList.add("active");
}else{
star.classList.remove("active");
}

});

}

/* =========================
   POPUP
========================= */

function showPopup(){

document.getElementById("popup").style.display = "flex";

}

function closePopup(){

document.getElementById("popup").style.display = "none";

}

/* =========================
   EMAIL SEND
========================= */

document.getElementById("reviewForm").addEventListener("submit", function(e){

e.preventDefault();

const templateParams = {

name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
age: document.getElementById("age").value,
hairType: document.getElementById("hairType").value,
product: document.getElementById("product").value,
rating: document.getElementById("rating").value,
improve: document.querySelector('input[name="improve"]:checked')?.value || "",
results: document.getElementById("results").value,
liked: document.getElementById("liked").value,
improve2: document.getElementById("improve2").value

};

emailjs.send(
  "service_1cacfjc",
  "template_nz4bkcn",
  templateParams,
  "yU9SQohYS6cVCtIty"
)

.then(() => {

showPopup();

document.getElementById("reviewForm").reset();

selectedRating = 0;
ratingInput.value = "";

stars.forEach(star => {
star.classList.remove("active");
});

})

.catch((error) => {

console.log(error);

alert("Error sending review");

});

});

/* =========================
   LANGUAGE SYSTEM
========================= */

const langBtn = document.getElementById("langToggle");

let currentLang = "en";

const translations = {

en: {

title: "Tell Us About Your Experience",
desc: "Your feedback helps us improve our products and create a better luxury hair care experience.",

nameLabel: "Full Name",
emailLabel: "Email Address",
phoneLabel: "Phone Number",
ageLabel: "Age Range",
hairLabel: "Hair Type",
productLabel: "Which Product Did You Use?",
rateLabel: "Rate Your Experience",
improveLabel: "Did you notice improvements?",
resultsLabel: "How long did it take to notice results?",
likedLabel: "What did you like the most?",
improve2Label: "What can we improve?",

submitBtn: "Submit Review",

popupTitle: "Thank You!",
popupText: "Your review has been received successfully.",
popupBtn: "Close",

yes: "Yes",
no: "No",

namePlaceholder: "Enter your name",
emailPlaceholder: "example@email.com",
phonePlaceholder: "01XXXXXXXXX",
resultsPlaceholder: "Example: 2 weeks",
likedPlaceholder: "Tell us your experience",
improvePlaceholder: "Your opinion matters",

select: "Select",
selectProduct: "Select Product",

langText: "AR"

},

ar: {

title: "احكيلنا عن تجربتك",
desc: "رأيك بيساعدنا نحسن منتجاتنا ونقدم تجربة أفضل للعناية بالشعر.",

nameLabel: "الاسم بالكامل",
emailLabel: "البريد الإلكتروني",
phoneLabel: "رقم الهاتف",
ageLabel: "الفئة العمرية",
hairLabel: "نوع الشعر",
productLabel: "ايه المنتج اللي استخدمته؟",
rateLabel: "قيّم تجربتك",
improveLabel: "هل لاحظت تحسن؟",
resultsLabel: "بعد قد ايه ظهرت النتيجة؟",
likedLabel: "ايه أكتر حاجة عجبتك؟",
improve2Label: "إيه اللي ممكن نحسنه؟",

submitBtn: "إرسال التقييم",

popupTitle: "شكراً ليك!",
popupText: "تم استلام تقييمك بنجاح.",
popupBtn: "إغلاق",

yes: "نعم",
no: "لا",

namePlaceholder: "اكتب اسمك",
emailPlaceholder: "example@email.com",
phonePlaceholder: "01XXXXXXXXX",
resultsPlaceholder: "مثال: أسبوعين",
likedPlaceholder: "احكيلنا عن تجربتك",
improvePlaceholder: "رأيك يهمنا",

select: "اختر",
selectProduct: "اختر المنتج",

langText: "EN"

}

};

function setLanguage(lang){

const t = translations[lang];

currentLang = lang;

if(lang === "ar"){

document.body.classList.add("ar");
document.documentElement.lang = "ar";
document.documentElement.dir = "rtl";

}else{

document.body.classList.remove("ar");
document.documentElement.lang = "en";
document.documentElement.dir = "ltr";

}

document.getElementById("title").innerText = t.title;
document.getElementById("desc").innerText = t.desc;

document.getElementById("nameLabel").innerText = t.nameLabel;
document.getElementById("emailLabel").innerText = t.emailLabel;
document.getElementById("phoneLabel").innerText = t.phoneLabel;
document.getElementById("ageLabel").innerText = t.ageLabel;
document.getElementById("hairLabel").innerText = t.hairLabel;
document.getElementById("productLabel").innerText = t.productLabel;
document.getElementById("rateLabel").innerText = t.rateLabel;
document.getElementById("improveLabel").innerText = t.improveLabel;
document.getElementById("resultsLabel").innerText = t.resultsLabel;
document.getElementById("likedLabel").innerText = t.likedLabel;
document.getElementById("improve2Label").innerText = t.improve2Label;

document.getElementById("submitBtn").innerText = t.submitBtn;

document.getElementById("popupTitle").innerText = t.popupTitle;
document.getElementById("popupText").innerText = t.popupText;
document.getElementById("popupBtn").innerText = t.popupBtn;

document.getElementById("yesText").innerText = t.yes;
document.getElementById("noText").innerText = t.no;

document.getElementById("name").placeholder = t.namePlaceholder;
document.getElementById("email").placeholder = t.emailPlaceholder;
document.getElementById("phone").placeholder = t.phonePlaceholder;
document.getElementById("results").placeholder = t.resultsPlaceholder;
document.getElementById("liked").placeholder = t.likedPlaceholder;
document.getElementById("improve2").placeholder = t.improvePlaceholder;

document.querySelector("#age option:first-child").textContent = t.select;
document.querySelector("#hairType option:first-child").textContent = t.select;
document.querySelector("#product option:first-child").textContent = t.selectProduct;

langBtn.innerHTML = `🌐 ${t.langText}`;

}

/* =========================
   LANGUAGE BUTTON
========================= */

langBtn.addEventListener("click", () => {

if(currentLang === "en"){

setLanguage("ar");

}else{

setLanguage("en");

}

});

/* =========================
   START
========================= */

setLanguage("en");