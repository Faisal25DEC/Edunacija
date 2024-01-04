import {
  FooterFacebook,
  FooterInstagram,
  FooterLogo,
  FooterPinterest,
  FooterTwitter,
  HeroButto,
  HeroImage,
  NavLoginButton,
  NavLoginButtonMid,
} from "./assets/constants.js";

// const heroImage = document.querySelector(".hero-image");
const heroButton = document.querySelector(".hero-button");
const navLoginButton = document.querySelector(".nav-login-button");
const featuresSection = document.querySelector(".features");
const achievementsSection = document.querySelector(".achievements");
const pricingSection = document.querySelector(".pricing");
const footerLogo = document.querySelector(".footer-logo");
const footerSocials = document.querySelector(".footer-socials");
const navLoginButtonMid = document.querySelector(".nav-login-button-mid");
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

// heroImage.innerHTML = HeroImage();
heroButton.innerHTML = HeroButto();
navLoginButton.innerHTML += NavLoginButton();
navLoginButtonMid.innerHTML = NavLoginButtonMid();

const features = [
  {
    image: "./src/assets/features-image.png",
    heading: "For Teachers",
    desc1: `Lorem ipsum dolor sit amet consectetur. Morbi massa dolor dui id
        nunc. Massa pulvinar consequat hendrerit porttitor enim sed id
        varius. Convallis pharetra sapien lectus vel sed nisi in. Eros nec
        libero enim quis eget amet`,
    desc2: `  Lorem ipsum dolor sit amet consectetur. Morbi massa dolor dui id
        nunc. Massa pulvinar consequat hendrerit porttitor enim sed id
        varius. Convallis pharetra sapien lectus vel sed nisi in. Eros nec
        libero enim quis eget amet.`,
  },
  {
    image: "./src/assets/features-image.png",
    heading: "For Students",
    desc1: `Lorem ipsum dolor sit amet consectetur. Morbi massa dolor dui id
        nunc. Massa pulvinar consequat hendrerit porttitor enim sed id
        varius. Convallis pharetra sapien lectus vel sed nisi in. Eros nec
        libero enim quis eget amet`,
    desc2: `  Lorem ipsum dolor sit amet consectetur. Morbi massa dolor dui id
        nunc. Massa pulvinar consequat hendrerit porttitor enim sed id
        varius. Convallis pharetra sapien lectus vel sed nisi in. Eros nec
        libero enim quis eget amet.`,
  },
  {
    image: "./src/assets/features-image.png",
    heading: "For Parents",
    desc1: `Lorem ipsum dolor sit amet consectetur. Morbi massa dolor dui id
        nunc. Massa pulvinar consequat hendrerit porttitor enim sed id
        varius. Convallis pharetra sapien lectus vel sed nisi in. Eros nec
        libero enim quis eget amet`,
    desc2: `  Lorem ipsum dolor sit amet consectetur. Morbi massa dolor dui id
        nunc. Massa pulvinar consequat hendrerit porttitor enim sed id
        varius. Convallis pharetra sapien lectus vel sed nisi in. Eros nec
        libero enim quis eget amet.`,
  },
];

features.forEach((item) => {
  featuresSection.innerHTML += `<article class="flex flex-col md:flex-row items-center pt-[63px] gap-[63px]">
    <figure class = "w-[100%] md:w-[60%]"><img src = "${item.image}" class = "w-[100%]"/></figure>
    <div class="flex flex-col gap-[28px] max-w-[487px] pt-[6px]">
      <h2 class="text-[24px] md:text-[32px] merriweather font-[700]">${item.heading}</h2>
      <p class="text-[15px] md:text-[18px] font-[400]">
       ${item.desc1}
      </p>
      <p class="text-[15px] md:text-[18px] font-[400]">
       ${item.desc2}
      </p>
    </div>
  </article>`;
});

const achievements = [
  {
    title: "5000+",
    subTitle: "Students",
    color: "#DE603E",
  },
  {
    title: "50+",
    subTitle: "Schools",
    color: "#e1a800",
  },
  {
    title: "3+",
    subTitle: "Countries",
    color: "#449045",
  },
];

achievements.forEach((item) => {
  achievementsSection.innerHTML += `<div>
    <h3 class="text-[56px] font-[700]" style="color:${item.color}">${item.title}</h3>
    <h4 class="text-[24px] font-[500]">${item.subTitle}</h4>
  </div>`;
});

const pricing = [
  {
    title: "Start",
    Discount: 10,
    Price: 30,
    desc: [
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
    ],
    color: "#DE603E",
  },
  {
    title: "Create",
    Discount: 10,
    Price: 40,
    desc: [
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
    ],
    color: "#E1A800",
  },
  {
    title: "Scale",
    Discount: 10,
    Price: 50,
    desc: [
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
      { detail: "Lorem ipsum dolor sit consectetu." },
    ],
    color: "#449045",
  },
];

pricing.forEach((item) => {
  pricingSection.innerHTML += ` <article
  class= "max-w-[500px] p-[20px] md:p-[40px] pb-[24px] rounded-[30px] border-[1px] flex flex-col"
    style = "border-color:${item.color}">

   <div class = "flex items-center justify-center">
    <div class = "text-[10px] text-white w-[fit-content] rounded-[100px] py-[4px] px-4" style="background-color:${
      item.color
    }">-${item.Discount}% dicound on yearly subscription</div></div>
  <h2 class="font-[700] text-[32px]">${item.title}</h2>
  <ul class="pl-[10px] pt-[32px] flex flex-col gap-[16px]">
  ${item.desc
    .map((ele) => {
      console.log(ele);
      return `<li class="flex items-center gap-2">
      <span>•</span> <span>${ele.detail}</span>
    </li>`;
    })
    .join("")}
  </ul>
  <div class="price-bottom flex  items-center justify-between  pt-[40px]">
    <div class="flex items-end gap-[5px]">
      <div class="flex gap-[1px] items-center">
        <p class="text-[24px] md:text-[32px] font-[600]">${item.Price}</p>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 24C13.3778 24 11.0444 23.2556 9 21.7667C6.95556 20.2778 5.51111 18.3556 4.66667 16H0V13.3333H4.06667C4 12.8 3.97244 12.3058 3.984 11.8507C3.99556 11.3956 4.02311 11.0009 4.06667 10.6667H0V8H4.66667C5.51111 5.64444 6.95556 3.72222 9 2.23333C11.0444 0.744445 13.3778 0 16 0C17.5333 0 18.9836 0.272444 20.3507 0.817333C21.7178 1.36222 22.9342 2.112 24 3.06667L22.1 4.93333C21.2778 4.22222 20.3502 3.66667 19.3173 3.26667C18.2844 2.86667 17.1787 2.66667 16 2.66667C14.1111 2.66667 12.4222 3.16133 10.9333 4.15067C9.44444 5.14 8.32222 6.42311 7.56667 8H16V10.6667H6.76667C6.67778 11.2667 6.64444 11.7947 6.66667 12.2507C6.68889 12.7067 6.72222 13.0676 6.76667 13.3333H16V16H7.56667C8.32222 17.5778 9.44444 18.8613 10.9333 19.8507C12.4222 20.84 14.1111 21.3342 16 21.3333C17.1778 21.3333 18.2836 21.1333 19.3173 20.7333C20.3511 20.3333 21.2787 19.7778 22.1 19.0667L24 20.9333C22.9333 21.8889 21.7164 22.6391 20.3493 23.184C18.9822 23.7289 17.5324 24.0009 16 24Z"
            fill="#101010"
          />
        </svg>
      </div>
      <div class="flex items-end gap-[1px] pb-[2px] md:pb-[7px] font-bold>
        <span class="text-[12px] md:text-[16px]">/ <span class="text-[14px] md:text-[16px]">month</span></span>
      </div>
    </div>
    <button>
      <svg
        width="108"
        height="84"
        viewBox="0 0 134 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="41"
          cy="41"
          r="40"
          stroke="#DE603E"
          stroke-width="2"
        />
        <rect
          width="109"
          height="24"
          transform="translate(25 29)"
          fill="white"
        />
        <path
          d="M32.8697 41.272C33.499 41.3893 34.0164 41.704 34.4217 42.216C34.827 42.728 35.0297 43.3147 35.0297 43.976C35.0297 44.5733 34.8804 45.1013 34.5817 45.56C34.2937 46.008 33.8724 46.36 33.3177 46.616C32.763 46.872 32.107 47 31.3497 47H26.5337V35.832H31.1417C31.899 35.832 32.5497 35.9547 33.0937 36.2C33.6484 36.4453 34.0644 36.7867 34.3417 37.224C34.6297 37.6613 34.7737 38.1573 34.7737 38.712C34.7737 39.3627 34.5977 39.9067 34.2457 40.344C33.9044 40.7813 33.4457 41.0907 32.8697 41.272ZM28.7737 40.44H30.8217C31.355 40.44 31.7657 40.3227 32.0537 40.088C32.3417 39.8427 32.4857 39.496 32.4857 39.048C32.4857 38.6 32.3417 38.2533 32.0537 38.008C31.7657 37.7627 31.355 37.64 30.8217 37.64H28.7737V40.44ZM31.0297 45.176C31.5737 45.176 31.995 45.048 32.2937 44.792C32.603 44.536 32.7577 44.1733 32.7577 43.704C32.7577 43.224 32.5977 42.8507 32.2777 42.584C31.9577 42.3067 31.5257 42.168 30.9817 42.168H28.7737V45.176H31.0297ZM39.0229 35.832V42.744C39.0229 43.5013 39.2203 44.0827 39.6149 44.488C40.0096 44.8827 40.5643 45.08 41.2789 45.08C42.0043 45.08 42.5643 44.8827 42.9589 44.488C43.3536 44.0827 43.5509 43.5013 43.5509 42.744V35.832H45.8069V42.728C45.8069 43.6773 45.5989 44.4827 45.1829 45.144C44.7776 45.7947 44.2283 46.2853 43.5349 46.616C42.8523 46.9467 42.0896 47.112 41.2469 47.112C40.4149 47.112 39.6576 46.9467 38.9749 46.616C38.3029 46.2853 37.7696 45.7947 37.3749 45.144C36.9803 44.4827 36.7829 43.6773 36.7829 42.728V35.832H39.0229ZM56.8512 35.832L53.0752 43.112V47H50.8352V43.112L47.0432 35.832H49.5712L51.9712 40.936L54.3552 35.832H56.8512ZM71.5076 47H69.2676L64.1956 39.336V47H61.9556V35.816H64.1956L69.2676 43.496V35.816H71.5076V47ZM78.9052 47.112C77.8599 47.112 76.8999 46.8667 76.0252 46.376C75.1505 45.8853 74.4572 45.208 73.9452 44.344C73.4332 43.4693 73.1772 42.4827 73.1772 41.384C73.1772 40.296 73.4332 39.32 73.9452 38.456C74.4572 37.5813 75.1505 36.8987 76.0252 36.408C76.8999 35.9173 77.8599 35.672 78.9052 35.672C79.9612 35.672 80.9212 35.9173 81.7852 36.408C82.6599 36.8987 83.3479 37.5813 83.8492 38.456C84.3612 39.32 84.6172 40.296 84.6172 41.384C84.6172 42.4827 84.3612 43.4693 83.8492 44.344C83.3479 45.208 82.6599 45.8853 81.7852 46.376C80.9105 46.8667 79.9505 47.112 78.9052 47.112ZM78.9052 45.112C79.5772 45.112 80.1692 44.9627 80.6812 44.664C81.1932 44.3547 81.5932 43.9173 81.8812 43.352C82.1692 42.7867 82.3132 42.1307 82.3132 41.384C82.3132 40.6373 82.1692 39.9867 81.8812 39.432C81.5932 38.8667 81.1932 38.4347 80.6812 38.136C80.1692 37.8373 79.5772 37.688 78.9052 37.688C78.2332 37.688 77.6359 37.8373 77.1132 38.136C76.6012 38.4347 76.2012 38.8667 75.9132 39.432C75.6252 39.9867 75.4812 40.6373 75.4812 41.384C75.4812 42.1307 75.6252 42.7867 75.9132 43.352C76.2012 43.9173 76.6012 44.3547 77.1132 44.664C77.6359 44.9627 78.2332 45.112 78.9052 45.112ZM101.212 35.832L98.0917 47H95.4517L93.3557 39.048L91.1637 47L88.5397 47.016L85.5317 35.832H87.9317L89.8997 44.504L92.1717 35.832H94.6677L96.8117 44.456L98.7957 35.832H101.212Z"
          fill="#101010"
        />
        <path
          d="M126.939 47.3105L133.25 41L126.939 34.6895L125.879 35.7501L130.379 40.25L110.786 40.25V41.75L130.379 41.75L125.879 46.2498L126.939 47.3105Z"
          fill="#101010"
        />
      </svg>
    </button>
  </div>
</article>`;
});

const footerSocialsObj = [
  {
    icon: FooterTwitter(),
  },
  {
    icon: FooterInstagram(),
  },
  {
    icon: FooterPinterest(),
  },
  {
    icon: FooterFacebook(),
  },
];

footerLogo.innerHTML = FooterLogo();

footerSocialsObj.forEach((item) => {
  footerSocials.innerHTML += `<div>${item.icon}</div>`;
});

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("show-flex");

  hamburger.innerHTML = sidebar.classList.contains("show-flex")
    ? `<i class="fa-solid fa-xmark w-full h-full"></i>`
    : `<i class="fa-solid fa-bars w-full h-full"></i>`;
});

hamburger.innerHTML = sidebar.classList.contains("show-flex")
  ? `<i class="fa-solid fa-xmark h-full w-full"></i>`
  : `<i class="fa-solid fa-bars h-full w-full"></i>`;
