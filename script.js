emailjs.init("yU9SQohYS6cVCtIty");

/* STARS */

const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");

let selectedRating = 0;

stars.forEach((star,index)=>{

star.addEventListener("click",()=>{

selectedRating = index + 1;

ratingInput.value = selectedRating;

updateStars(selectedRating);

});

star.addEventListener("mouseover",()=>{

updateStars(index + 1);

});

star.addEventListener("mouseleave",()=>{

updateStars(selectedRating);

});

});

function updateStars(rating){

stars.forEach((star,i)=>{

if(i < rating){

star.classList.add("active");

}else{

star.classList.remove("active");

}

});

}

/* POPUP */

function showPopup(){

document.getElementById("popup").style.display = "flex";

}

function closePopup(){

document.getElementById("popup").style.display = "none";

}

/* FORM */

document.getElementById("reviewForm").addEventListener("submit",function(e){

e.preventDefault();

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const phone =
document.getElementById("phone").value.trim();

const age =
document.getElementById("age").value;

const hairType =
document.getElementById("hairType").value;

const product =
document.getElementById("product").value;

const rating =
document.getElementById("rating").value;

const liked =
document.getElementById("liked").value.trim();

const improve2 =
document.getElementById("improve2").value.trim();

/* VALIDATION */

if(
!name ||
!email ||
!phone ||
!age ||
!hairType ||
!product ||
!rating ||
!liked ||
!improve2
){

if(currentLang === "ar"){

alert("من فضلك جاوب على كل الأسئلة");

}else{

alert("Please answer all questions");

}

return;

}

const templateParams = {

name,
email,
phone,
age,
hairType,
product,
rating,
liked,
improve2

};

emailjs.send(
"service_1cacfjc",
"template_nz4bkcn",
templateParams,
"yU9SQohYS6cVCtIty"
)

.then(()=>{

showPopup();

document.getElementById("reviewForm").reset();

selectedRating = 0;

ratingInput.value = "";

stars.forEach(star=>{

star.classList.remove("active");

});

})

.catch(()=>{

if(currentLang === "ar"){

alert("حصل خطأ أثناء إرسال التقييم");

}else{

alert("Error sending review");

}

});

});

/* LANGUAGE */

const langBtn =
document.getElementById("langToggle");

let currentLang = "en";

const translations = {

en: {

title:
"Tell Us About Your Experience",

desc:
"Your feedback helps us improve our products and create a better luxury hair care experience.",

nameLabel:
"Full Name",

emailLabel:
"Email Address",

phoneLabel:
"Phone Number",

ageLabel:
"Age Range",

hairLabel:
"Hair Type",

productLabel:
"Which Product Did You Use?",

rateLabel:
"Rate Your Experience",

likedLabel:
"What did you like the most?",

improve2Label:
"What can we improve?",

submitBtn:
"Submit Review",

popupTitle:
"Thank You!",

popupText:
"Your review has been received successfully.",

popupBtn:
"Close",

langText:
"AR"

},

ar: {

title:
"احكيلنا عن تجربتك",

desc:
"رأيك بيساعدنا نحسن منتجاتنا ونقدم تجربة أفضل للعناية بالشعر.",

nameLabel:
"الاسم بالكامل",

emailLabel:
"البريد الإلكتروني",

phoneLabel:
"رقم الهاتف",

ageLabel:
"الفئة العمرية",

hairLabel:
"نوع الشعر",

productLabel:
"ايه المنتج اللي استخدمته؟",

rateLabel:
"قيّم تجربتك",

likedLabel:
"ايه أكتر حاجة عجبتك؟",

improve2Label:
"إيه اللي ممكن نحسنه؟",

submitBtn:
"إرسال التقييم",

popupTitle:
"شكراً ليك!",

popupText:
"تم إرسال تقييمك بنجاح.",

popupBtn:
"إغلاق",

langText:
"EN"

}

};

function setLanguage(lang){

const t = translations[lang];

currentLang = lang;

if(lang === "ar"){

document.body.classList.add("ar");

}else{

document.body.classList.remove("ar");

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
document.getElementById("likedLabel").innerText = t.likedLabel;
document.getElementById("improve2Label").innerText = t.improve2Label;

document.getElementById("submitBtn").innerText = t.submitBtn;

document.getElementById("popupTitle").innerText = t.popupTitle;
document.getElementById("popupText").innerText = t.popupText;
document.getElementById("popupBtn").innerText = t.popupBtn;

langBtn.innerHTML = `🌐 ${t.langText}`;

}

langBtn.addEventListener("click",()=>{

if(currentLang === "en"){

setLanguage("ar");

}else{

setLanguage("en");

}

});

setLanguage("en");