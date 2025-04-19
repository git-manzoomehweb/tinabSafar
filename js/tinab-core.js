const navOpener = document.querySelector(".open-menu"),
  navCloser = document.querySelector(".nav-closer"),
  mobileMenu = document.querySelector(".menu-mob");
navOpener.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-[7000px]");
});

navCloser.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-[7000px]");
});
megamenuItems = document.querySelectorAll(".mobile-megamenu");
megamenuItems.forEach((item) => {
  navCloser.addEventListener("click", () => {
    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    }
  });
});

navSpans = document.querySelectorAll("#parent-nav span");

navSpans.forEach((item) => {
  navCloser.addEventListener("click", () => {
    if (item.classList.contains("rotate-180")) {
      item.classList.remove("rotate-180");
    }
  });
});

megamenuItems.forEach((item) => {
  navCloser.addEventListener("click", () => {
    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    }
  });
});

function checkMenuState() {
  const menu = document.querySelector(".menu-mob");
  if (!menu) return;

  if (menu.classList.contains("translate-x-[7000px]")) {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
}

function startMenuCheck() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    setInterval(checkMenuState, 30);
  }
}

// اجرا هنگام بارگذاری صفحه و هنگام تغییر سایز صفحه
startMenuCheck();
window.addEventListener("resize", startMenuCheck);

if (document.querySelectorAll(".swiper-one").length > 0) {
  var swiper = new Swiper(".swiper-one", {
    direction: "vertical",
    slidesPerView: 3,
    speed: 400,
    touchReleaseOnEdges: true,
    centeredSlides: !1,
    spaceBetween: 25,
    grabCursor: !0,
    // autoplay: { delay: 3500, disableOnInteraction: !1 },
    // loop: !0,
    pagination: { el: ".swiper-pagination-first-mob", clickable: !0 },
    breakpoints: {
      640: { slidesPerView: 3, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
    },
  });
}
if (document.querySelectorAll(".swiper-third").length > 0) {
  var swiper = new Swiper(".swiper-third", {
    slidesPerView: 3,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 3500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
    },
  });
}
if (document.querySelectorAll(".swiper-third2").length > 0) {
  var swiper = new Swiper(".swiper-third2", {
    slidesPerView: 3,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 23,
    grabCursor: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },

    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },

    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 23 },
    },

    on: {
      slideChange: function () {
        setTimeout(() => {
          document
            .querySelector(".swiper-pagination")
            ?.classList.remove("swiper-pagination-lock");
        }, 50);
      },
    },
  });
}
const questionBox = document.querySelectorAll(
  ".common-questions .parent-box .box-container"
);
questionBox.forEach((box) => {
  box.addEventListener("click", () => {
    const answer = box.querySelector("#answer");
    const span = box.querySelector("span");
    if (answer.classList.contains("hidden")) {
      box.classList.remove("!h-[70px]");
      answer.classList.remove("hidden");
      span.classList.add("rotate-180");
    } else {
      answer.classList.add("hidden");
      span.classList.remove("rotate-180");
      box.classList.add("!h-[70px]");
    }
  });
});
function moveFlightClassIntoPassengerBox() {
  document.querySelectorAll(".Flightclass-Passenger").forEach((container) => {
    const flightClassField = container.querySelector(".flightclass-field");
    const passengerBox = container.querySelector(".passengerbox");

    if (flightClassField && passengerBox) {
      passengerBox.insertBefore(flightClassField, passengerBox.firstChild);
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("search-box")) {
    try {
      var xhrobj = new XMLHttpRequest();
      xhrobj.open("GET", "searchengine.bc");
      xhrobj.send();

      xhrobj.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var container = document.getElementById("search-box");
          container.innerHTML = xhrobj.responseText;
          moveFlightClassIntoPassengerBox();
          const pass = document.querySelectorAll(
            ".passenger-counts.adult-count"
          );
          pass.forEach((pass) => {
            pass.parentElement.classList.add("passenger-counts_container");
          });

          var scripts = container.getElementsByTagName("script");
          for (var i = 0; i < scripts.length; i++) {
            var scriptTag = document.createElement("script");
            if (scripts[i].src) {
              scriptTag.src = scripts[i].src;
              scriptTag.async = false;
            } else {
              scriptTag.text = scripts[i].textContent;
            }
            document.head
              .appendChild(scriptTag)
              .parentNode.removeChild(scriptTag);
          }
        }
      };
    } catch (error) {
      // console.error('مشکلی رخ داده است لطفا صبور باشید.', error);
    }
  }
});

document.addEventListener("click", function (e) {
  document.querySelectorAll(".reserve-field.flightclass-field").forEach((t) => {
    let r = t.querySelector("ul.FlightClass");
    t.contains(e.target) || r.classList.add("hidden");
  });
}),
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".passengers-field").forEach((t) => {
      let r = t.querySelector(".passengerbox");
      t.contains(e.target) || r.classList.add("hidden");
    });
  });
const multiBtn = document.querySelector("#multi");
if (multiBtn) {
  multiBtn.addEventListener("click", () => {
    const addRoute = document.querySelector(".add-routs");
    addRoute.parentElement.parentElement.classList.add("addRoute__container");
  });
}
document.addEventListener("DOMContentLoaded", function () {
  function moveLoginInformation() {
    // بررسی سایز صفحه برای حالت موبایل
    if (window.innerWidth <= 768) {
      let loginElement = document.querySelector(".Login_Informati");
      let targetContainer = document.querySelector(
        ".menu-mob .gap-9.overflow-auto"
      );

      if (loginElement && targetContainer) {
        targetContainer.insertBefore(loginElement, targetContainer.firstChild);
      }
    }
  }

  // اجرای تابع در زمان لود صفحه
  moveLoginInformation();

  // اجرای تابع هنگام تغییر سایز صفحه
  window.addEventListener("resize", moveLoginInformation);
});
// -----------------------------------menu-------------------------------
const parentNavs = document.querySelectorAll("#parent-nav");
const childNavs = document.querySelectorAll("#child1-nav");
const closeMenu = document.querySelector(".navCloser");

childNavs.forEach((child) => {
  child.addEventListener("click", () => {
    console.log(child);
    const childUl = child.querySelector("ul");
    const arrowSpan = child.querySelector("div span");

    if (childUl) {
      if (childUl.classList.contains("hidden")) {
        childUl.classList.remove("hidden");
        childUl.classList.add("flex");
        if (arrowSpan) arrowSpan.classList.add("rotate-180");
      } else {
        childUl.classList.add("hidden");
        childUl.classList.remove("flex");
        if (arrowSpan) arrowSpan.classList.remove("rotate-180");
      }
    }
  });

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      const childUl = child.querySelector("ul");
      const arrowSpan = child.querySelector("div span");

      if (childUl) {
        childUl.classList.add("hidden");
        childUl.classList.remove("flex");
        if (arrowSpan) arrowSpan.classList.remove("rotate-180");
      }
    });
  }
});

parentNavs.forEach((parent) => {
  parent.addEventListener("click", () => {
    let sibling = parent.nextElementSibling;
    if (sibling && sibling.id === "child2-nav") {
      const arrowSpan = parent.querySelector("span");

      if (sibling.classList.contains("hidden")) {
        sibling.classList.remove("hidden");
        if (arrowSpan) arrowSpan.classList.add("rotate-180");
      } else {
        sibling.classList.add("hidden");
        if (arrowSpan) arrowSpan.classList.remove("rotate-180");
      }
    }
  });
});
// -----------------------------------date------------------------------
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".pure-date").forEach((pureDateElement) => {
    const mainDateElement = pureDateElement.nextElementSibling; // گرفتن المنت بعدی که .main-date است

    if (mainDateElement && mainDateElement.classList.contains("main-date")) {
      const shamsiDate = pureDateElement.textContent.trim(); // دریافت مقدار تاریخ شمسی
      const [shYear, shMonth, shDay] = shamsiDate.split("-"); // جدا کردن سال، ماه و روز

      // جدول تبدیل شماره ماه به نام فارسی آن
      const monthNames = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
      ];

      // تبدیل شماره ماه به نام فارسی (دقت کن که آرایه از 0 شروع می‌شود، پس 1 کم می‌کنیم)
      const persianMonth = monthNames[parseInt(shMonth, 10) - 1];

      // مقداردهی به .main-date به فرمت موردنظر
      mainDateElement.textContent = `${parseInt(
        shDay,
        10
      )} ${persianMonth} ${shYear}`;
    }
  });
});

// -----------------------------------defaultForm--------------------------
function uploadDocumentFooter(e) {
  document.querySelector("#contact-form-resize .Loading_Form").style.display =
    "block";
  let t = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captcha']").value,
    r = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    i = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadFooter", {
    value: i,
    captcha: t,
    captchaid: r,
    run: !0,
  });
}
function refreshCaptchaFooter(e) {
  $bc.setSource("captcha.refreshFooter", !0);
}
function captchaRenderedFooter() {
  document.querySelector("#contact-form-resize .contactUsInput").placeholder =
    "کد امنیتی";
}
async function OnProcessedEditObjectFooter(e) {
  "6" == (await e.response.json()).errorid
    ? ((document.querySelector(
        "#contact-form-resize .Loading_Form"
      ).style.display = "none"),
      (document.querySelector("#contact-form-resize .message-api").innerHTML =
        "درخواست شما با موفقیت ثبت شد."))
    : (refreshCaptchaFooter(),
      setTimeout(() => {
        (document.querySelector(
          "#contact-form-resize .Loading_Form"
        ).style.display = "none"),
          (document.querySelector(
            "#contact-form-resize .message-api"
          ).innerHTML = "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
async function RenderFormFooter() {
  var e = document.querySelector(
    "#contact-form-resize .answer-name-def input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "نام و نام خانوادگی");
  var e = document.querySelector(
    "#contact-form-resize .answer-phone-def input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "شماره تماس ");
}
// _______________fetch-----------categories_____________________
const FetchPageNumPrev = async (e) => {
    let t = document.querySelector(".fetch-content-categories"),
      r = t.getAttribute("data-catid"),
      a = await fetch(`/article-load-cats.bc?catid=${r}&pagenum=${e}`),
      n = await a.text();
    t.innerHTML = n;
  },
  FetchPageNumNext = async (e) => {
    let t = document.querySelector(".fetch-content-categories"),
      r = t.getAttribute("data-catid"),
      a = await fetch(`/article-load-cats.bc?catid=${r}&pagenum=${e}`),
      n = await a.text();
    t.innerHTML = n;
  },
  FetchWithPageNum = async (e) => {
    let t = document.querySelector(".fetch-content-categories"),
      r = t.getAttribute("data-catid"),
      a = await fetch(`/article-load-cats.bc?catid=${r}&pagenum=${e}`),
      n = await a.text();
    t.innerHTML = n;
  };
document.querySelector(".fetch-content-categories") &&
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelectorAll('input[type="radio"][name="radio"]'),
      t = document.querySelector(".fetch-content-categories");
    if (t) {
      let r = t.getAttribute("data-catid");
      async function a() {
        let e = await fetch(`/article-load-cats.bc?catid=${r}`),
          a = await e.text();
        t.innerHTML = a;
      }
      a(),
        e.forEach((e) => {
          e.addEventListener("change", async function () {
            if (this.checked) {
              let e = this.value;
              try {
                t.innerHTML =
                  '<div class="w-full flex justify-center"><span class="loader"></span></div>';
                let r = await fetch(`/article-load-cats.bc?catid=${e}`),
                  a = await r.text();
                t.innerHTML = a;
              } catch (n) {
                console.error("Error:", n),
                  (t.innerHTML =
                    '<div class="text-red-500">خطا در بارگذاری مقالات</div>');
              }
            }
          });
        });
    }
  });
// ----------------------suggestion-form--------------------------------
// ----------------------suggestion-form--------------------------------
// ----------------------suggestion-form--------------------------------
// ----------------------suggestion-form--------------------------------

function uploadDocumensuggestion(e) {
  document.querySelector("#suggestion-form .Loading_Form").style.display =
    "block";
  let t = document
      .querySelector("#suggestion-form")
      .querySelector("#captchaContainer input[name='captcha']").value,
    r = document
      .querySelector("#suggestion-form")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    i = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadSuggestion", {
    value: i,
    captcha: t,
    captchaid: r,
    run: !0,
  });
}
function refreshCaptchaSuggestion(e) {
  $bc.setSource("captcha.refreshFooter", !0);
}
function captchaRenderedSuggestion() {
  document.querySelector("#suggestion-form .contactUsInput").placeholder =
    "کد امنیتی";
}
async function OnProcessedEditObjectSuggestion(e) {
  "6" == (await e.response.json()).errorid
    ? ((document.querySelector("#suggestion-form .Loading_Form").style.display =
        "none"),
      (document.querySelector("#suggestion-form .message-api").innerHTML =
        "درخواست شما با موفقیت ثبت شد."))
    : (refreshCaptchaSuggestion(),
      setTimeout(() => {
        (document.querySelector(
          "#suggestion-form .Loading_Form"
        ).style.display = "none"),
          (document.querySelector("#suggestion-form .message-api").innerHTML =
            "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
async function RenderFormSuggestion() {
  var e = document.querySelector(
    "#suggestion-form .ans-ent-name input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "نام و نام خانوادگی");
  var e = document.querySelector(
    "#suggestion-form .ans-ent-phone input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "شماره تماس ");

  var e = document.querySelector(
    "#suggestion-form .ans-ent-descr input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "توضیحات");
}
// ______________________footerBox------------------------
// ______________________footerBox------------------------
// ______________________footerBox------------------------
// function toggleBox() {
//   const box = document.querySelector("footer .fixed.bg-secondary-700");
//   box.classList.add("transition-1");
//   box.style.transform = "translateX(-100%)";
//   let isVisible = false;

//   setInterval(() => {
//     if (isVisible) {
//       box.style.transform = "translateX(-100%)";
//     } else {
//       box.style.transform = "translateX(0)";
//     }
//     isVisible = !isVisible;
//   }, 20000);

//   setTimeout(() => {
//     box.style.transform = "translateX(0)";
//     isVisible = true;
//   }, 13000);
// }

// document.addEventListener("DOMContentLoaded", toggleBox);

// _________________your-questions----------------------------
// _________________your-questions----------------------------
// _________________your-questions----------------------------
// _________________your-questions----------------------------
function uploadDocumentYourquestions(e) {
  document.querySelector("#your-questions-form .Loading_Form").style.display =
    "block";
  let t = document
      .querySelector("#your-questions-form")
      .querySelector("#captchaContainer input[name='captcha']").value,
    r = document
      .querySelector("#your-questions-form")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    i = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadYourquestions", {
    value: i,
    captcha: t,
    captchaid: r,
    run: !0,
  });
}
function refreshCaptchaYourquestions(e) {
  $bc.setSource("captcha.refreshyq", !0);
}
function captchaRenderedYourquestions() {
  document.querySelector("#your-questions-form .contactUsInput").placeholder =
    "کد امنیتی";
}
async function OnProcessedEditObjecYourquestions(e) {
  "6" == (await e.response.json()).errorid
    ? ((document.querySelector(
        "#your-questions-form .Loading_Form"
      ).style.display = "none"),
      (document.querySelector("#your-questions-form .message-api").innerHTML =
        "درخواست شما با موفقیت ثبت شد."))
    : (refreshCaptchaYourquestions(),
      setTimeout(() => {
        (document.querySelector(
          "#your-questions-form .Loading_Form"
        ).style.display = "none"),
          (document.querySelector(
            "#your-questions-form .message-api"
          ).innerHTML = "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
async function RenderFormYourquestions() {
  var e = document.querySelector(
    "#your-questions-form .ans-your-ques-name input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "نام و نام خانوادگی");
  var e = document.querySelector(
    "#your-questions-form .ans-your-ques-phone input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "شماره تماس ");
}
// _______________________________________article.bc______________________
// _______________________________________article.bc______________________
// _______________________________________article.bc______________________
// _______________________________________article.bc______________________
//

function Set_Offset_Item(element) {
  var hrefValue = element.getAttribute("data-id");
  var HEADER_HEIGHT = 0;
  if (document.querySelector(".will-fixed")) {
    var HEADER_HEIGHT = document.querySelector(".will-fixed").offsetHeight;
  }
  const targetElement = document.getElementById(hrefValue);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const offsetTop =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        HEADER_HEIGHT -
        200;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }, 1);
  }
}
// __________________________________________________________
// __________________________________________________________
// __________________________________________________________
// __________________________________________________________

document.addEventListener("DOMContentLoaded", function () {
  function splitBoxes() {
    const container = document.getElementById("q-box-1");
    if (!container) return;

    const boxes = Array.from(container.getElementsByClassName("box-container"));
    if (boxes.length === 0) return;

    if (window.innerWidth < 1024) return;

    const half = Math.ceil(boxes.length / 2);

    const firstHalfDiv = document.createElement("div");
    firstHalfDiv.className = "flex flex-col gap-3 w-[49%]";

    const secondHalfDiv = document.createElement("div");
    secondHalfDiv.className = "flex flex-col gap-3 w-[49%]";

    boxes.forEach((box, index) => {
      if (index < half) {
        firstHalfDiv.appendChild(box);
      } else {
        secondHalfDiv.appendChild(box);
      }
    });

    container.innerHTML = "";
    container.appendChild(firstHalfDiv);
    container.appendChild(secondHalfDiv);
  }

  splitBoxes();

  window.addEventListener("resize", function () {
    if (document.getElementById("q-box-1")) {
      document.getElementById("q-box-1").innerHTML = "";
      splitBoxes();
    }
  });
});
// _______________________________________________________

document.addEventListener("DOMContentLoaded", function () {
  const noTourFound = document.querySelector(".no-tour-found");
  const alignmentElement = document.querySelector(".set-alignment-with-tour");

  if (alignmentElement) {
    if (noTourFound) {
      alignmentElement.classList.remove("flex-col");
      alignmentElement.classList.add("flex-col-reverse");
    } else {
      alignmentElement.classList.remove("flex-col-reverse");
      alignmentElement.classList.add("flex-col");
    }
  }
});
// _______________________________________________________

async function RenderFormVisa() {
  var inputElementVisa1 = document.querySelector(
    "#visa-form .visa-ans-fname input[data-bc-text-input]"
  );
  inputElementVisa1.setAttribute("placeholder", "نام");

  var inputElementVisa2 = document.querySelector(
    "#visa-form .visa-ans-lname input[data-bc-text-input]"
  );
  inputElementVisa2.setAttribute("placeholder", "نام خانوادگی");

  var inputElementVisa3 = document.querySelector(
    "#visa-form .visa-ans-prevname input[data-bc-text-input]"
  );
  inputElementVisa3.setAttribute("placeholder", "نام قبلی( در صورت تغییر نام)");

  var inputElementVisa4 = document.querySelector(
    "#visa-form .birth-place-ans input[data-bc-text-input]"
  );
  inputElementVisa4.setAttribute("placeholder", "محل تولد");

  var inputElementVisa5 = document.querySelector(
    "#visa-form .birth-date-ans input[data-bc-text-input]"
  );
  inputElementVisa5.setAttribute("placeholder", "تاریخ تولد");

  var inputElementVisa6 = document.querySelector(
    "#visa-form .ans-nationality input[data-bc-text-input]"
  );
  inputElementVisa6.setAttribute("placeholder", "ملیت");

  var inputElementVisa7 = document.querySelector(
    "#visa-form .ans-prev-nationality input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "ملیت قبلی ( در صورت وجود)");

  var inputElementVisa8 = document.querySelector(
    "#visa-form .ans-call input[data-bc-text-input]"
  );
  inputElementVisa8.setAttribute("placeholder", "شماره تماس");

  var inputElementVisa9 = document.querySelector(
    "#visa-form .ans-phonenum input[data-bc-text-input]"
  );
  inputElementVisa9.setAttribute("placeholder", "شماره موبایل");

  var inputElementVisa10 = document.querySelector(
    "#visa-form .sabet-ans input[data-bc-text-input]"
  );
  inputElementVisa10.setAttribute("placeholder", "شماره تلفن ثابت");

  var inputElementVisa11 = document.querySelector(
    "#visa-form .ans-addrr input[data-bc-text-input]"
  );
  inputElementVisa11.setAttribute("placeholder", "آدرس کامل محل سکونت*");

  var inputElementVisa12 = document.querySelector(
    "#visa-form .ans-email input[data-bc-text-input]"
  );
  inputElementVisa12.setAttribute("placeholder", "ایمیــل");

  var inputElementVisa13 = document.querySelector(
    "#visa-form .ans-pass-num input[data-bc-text-input]"
  );
  inputElementVisa13.setAttribute("placeholder", "شماره پاسپورت ");

  var inputElementVisa14 = document.querySelector(
    "#visa-form .pass-li-ans input[data-bc-text-input]"
  );
  inputElementVisa14.setAttribute("placeholder", "تاریخ صدور*");

  var inputElementVisa15 = document.querySelector(
    "#visa-form .ans-country-pass input[data-bc-text-input]"
  );
  inputElementVisa15.setAttribute("placeholder", "کشور صادر کننده پاسپورت");

  var inputElementVisa16 = document.querySelector(
    "#visa-form .ans-country-v input[data-bc-text-input]"
  );
  inputElementVisa16.setAttribute("placeholder", "کشور مقصد");

  var inputElementVisa17 = document.querySelector(
    "#visa-form .ans-start-v input[data-bc-text-input]"
  );
  inputElementVisa17.setAttribute("placeholder", "تاریخ ورود");

  var inputElementVisa18 = document.querySelector(
    "#visa-form .ans-end-v input[data-bc-text-input]"
  );
  inputElementVisa18.setAttribute("placeholder", "تاریخ خروج");
}
function checkConfirme() {
  if (document.querySelector(".confirm-form").checked) {
    document.querySelector(".validate-alert").classList.add("hidden");
    $bc.setSource("cms.run", true);
  } else {
    document.querySelector(".validate-alert").classList.remove("hidden");
  }
}
function uploadDocument(args) {
  const captcha = document.querySelector(
    "#captchaContainer input[name='captcha']"
  ).value;
  const captchaid = document.querySelector(
    "#captchaContainer input[name='captchaid']"
  ).value;
  const stringJson = JSON.stringify(args.source?.rows[0]);
  $bc.setSource("cms.upload", {
    value: stringJson,
    captcha: captcha,
    captchaid: captchaid,
    run: true,
  });
}
function refreshCaptcha(e) {
  $bc.setSource("captcha.refresh", true);
}
function captchaRendered() {
  document.querySelector(".contactUsInput").placeholder = "کد امنیتی";
}
async function OnProcessedEditObject(args) {
  var response = args.response;
  var json = await response.json();
  var errorid = json.errorid;
  if (errorid == "6") {
    document.querySelector(".message-api").innerHTML =
      "درخواست شما با موفقیت ثبت شد";
    document.querySelector(".message-api").style.color = "#34b343";
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else {
    refreshCaptcha();
    setTimeout(() => {
      document.querySelector(".message-api").innerHTML =
        "خطایی رخ داده, لطفا مجدد اقدام کنید";
      document.querySelector(".message-api").style.color = "#ee2948";
    }, 2000);
  }
}
// ___________________________________________
// document.querySelectorAll(".group\\/level2.relative").forEach((groupEl) => {
//   const hasSubmenu = groupEl.querySelector("ul.w-44.cstm-drp.-left-44");

//   if (hasSubmenu) {
//     const anchor = groupEl.querySelector("a");
//     if (anchor) {
//       const svgHTML = `
//         <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;">
//           <path d="M0.826172 6C0.826172 5.87891 0.851172 5.75781 0.901172 5.63672C0.951172 5.51563 1.01617 5.42481 1.09617 5.36426L5.56617 0.823242C5.74617 0.641602 5.97617 0.550781 6.25617 0.550781C6.53617 0.550781 6.77617 0.641602 6.97617 0.823242C7.15617 1.02507 7.24617 1.26725 7.24617 1.54981C7.24617 1.83236 7.15617 2.06445 6.97617 2.24609L3.13617 6.12109L6.97617 9.99609C7.15617 10.1979 7.24617 10.4401 7.24617 10.7227C7.24617 11.0052 7.15617 11.2373 6.97617 11.4189C6.77617 11.6208 6.53617 11.7217 6.25617 11.7217C5.97617 11.7217 5.74617 11.6208 5.56617 11.4189L1.09617 6.9082C1.01617 6.70638 0.951172 6.53483 0.901172 6.39356C0.851172 6.25228 0.826172 6.12109 0.826172 6Z" fill="black"></path>
//         </svg>
//       `;
//       anchor.insertAdjacentHTML("afterend", svgHTML);
//     }
//   }
// });
