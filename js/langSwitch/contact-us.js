// Get the language toggle checkbox and the text elements
// Navbar Desktop
const languageToggle = document.getElementById('language-toggle');
const HomeNav = document.getElementById('HomeNav');
const AboutUsNav = document.getElementById('AboutUsNav');
const ServicesNav = document.getElementById('ServicesNav');
const MoreInfoNav = document.getElementById('MoreInfoNav');
const PaymentMethodNav = document.getElementById('PaymentMethodNav');
const PrivacyNoticeNav = document.getElementById('PrivacyNoticeNav');
const ContactUsNav = document.getElementById('ContactUsNav');
const ApplyNowNav = document.getElementById('ApplyNowNav');

//Navbar Mobile
const HomeMobileNav = document.getElementById('HomeMobileNav');
const AboutUsMobileNav = document.getElementById('AboutUsMobileNav');
const ServicesMobileNav = document.getElementById('ServicesMobileNav');
const MoreInfoMobileNav = document.getElementById('MoreInfoMobileNav');
const PaymentMethodMobileNav = document.getElementById('PaymentMethodMobileNav');
const PrivacyNoticeMobileNav = document.getElementById('PrivacyNoticeMobileNav');
const ContactMobileNav = document.getElementById('ContactMobileNav');
const ApplyNowMobileNav = document.getElementById('ApplyNowMobileNav');

// Header
const ContactHeader = document.getElementById('ContactHeader');
const ContactHeaderDes = document.getElementById('ContactHeaderDes');

//Contact Form
const fname = document.getElementById('name');
const femail = document.getElementById('email');
const fphone = document.getElementById('phone');
const fmessage = document.getElementById('message');
const SendBtn = document.getElementById('SendBtn');

//Footer
const FooterDes = document.getElementById('FooterDes');
const PrivacyPolicyFooter = document.getElementById('PrivacyPolicyFooter');
const TermOfUseFooter = document.getElementById('TermOfUseFooter');
const ContactsFooter = document.getElementById('ContactsFooter');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
    languageToggle.checked = true;
    updateNavbar('bm');
    updateMobileNavbar('bm');
    updateHeader('bm');
    updateContact('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateHeader('en');
    updateContact('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateHeader('bm');
        updateContact('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateHeader('en');
        updateContact('en');
        updateFooter('en');
        localStorage.setItem('language', 'en');
    }
});

function updateNavbar(language) {
    if (language === 'bm') {
        HomeNav.textContent = 'Laman Utama';
        AboutUsNav.textContent = 'Mengenai Kami';
        ServicesNav.textContent = 'Perkhidmatan';
        MoreInfoNav.textContent = 'Maklumat Lanjut';
        PaymentMethodNav.textContent = 'Cara Menbayar';
        PrivacyNoticeNav.textContent = 'Notis Privasi';
        ContactUsNav.textContent = 'Hubungi Kami';
        ApplyNowNav.innerHTML = 'Mohon Sekarang <i class="arrow_right">';
    } else {
        HomeNav.textContent = 'Home';
        AboutUsNav.textContent = 'About Us';
        ServicesNav.textContent = 'Services';
        MoreInfoNav.textContent = 'More Info';
        PaymentMethodNav.textContent = 'Payment Method';
        PrivacyNoticeNav.textContent = 'Privacy Notice';
        ContactUsNav.textContent = 'Contacts';
        ApplyNowNav.innerHTML = 'Apply Now <i class="arrow_right">';
    }
}

function updateMobileNavbar(language) {
    if (language === 'bm') {
        HomeMobileNav.textContent = 'Laman Utama';
        AboutUsMobileNav.textContent = 'Mengenai Kami';
        ServicesMobileNav.textContent = 'Perkhidmatan';
        MoreInfoMobileNav.textContent = 'Maklumat Lanjut';
        PaymentMethodMobileNav.textContent = 'Cara Menbayar';
        PrivacyNoticeMobileNav.textContent = 'Notis Privasi';
        ContactMobileNav.textContent = 'Hubungi Kami';
        ApplyNowMobileNav.innerHTML = 'Mohon Sekarang <i class="arrow_right">';
    } else {
        HomeMobileNav.textContent = 'Home';
        AboutUsMobileNav.textContent = 'About Us';
        ServicesMobileNav.textContent = 'Services';
        MoreInfoMobileNav.textContent = 'More Info';
        PaymentMethodMobileNav.textContent = 'Payment Method';
        PrivacyNoticeMobileNav.textContent = 'Privacy Notice';
        ContactMobileNav.textContent = 'Contacts';
        ApplyNowMobileNav.innerHTML = 'Apply Now <i class="arrow_right">';
    }
}

function updateHeader(language) {
    if (language === 'bm') {
        ContactHeader.innerHTML = 'Hubungi<span>.</span>';
        ContactHeaderDes.textContent = 'Anda juga boleh meninggalkan mesej kepada kami dan kami akan mengaturkan panggilan semula secepat mungkin';
    } else {
        ContactHeader.innerHTML = 'Contacts<span>.</span>';
        ContactHeaderDes.textContent = 'You can also leave us a message and we will arrange for a call back as soon as possible.';
    }
}

function updateContact(language) {
    if (language === 'bm') {
        fname.placeholder = 'Nama';
        femail.placeholder = 'Emel';
        fphone.placeholder = 'Telefon';
        fmessage.placeholder = 'Mesej';
        SendBtn.innerHTML = 'Hantar <i class="arrow_right"></i>';
    } else {
        fname.placeholder = 'Name';
        femail.placeholder = 'Email';
        fphone.placeholder = 'Phone';
        fmessage.placeholder = 'Message';
        SendBtn.innerHTML = 'Send <i class="arrow_right"></i>';
    }
}

function updateFooter(language) {
    if (language === 'bm') {
        FooterDes.textContent = 'Perkhidmatan pembiayaan peribadi berlesen anda dengan nasihat kredit percuma. Kadar faedah rendah, kelulusan cepat, proses permohonan tanpa kerumitan.';
        PrivacyPolicyFooter.textContent = 'Notis Privasi';
        TermOfUseFooter.textContent = 'Syarat Penggunaan';
        ContactsFooter.textContent = 'Hubungi';
    } else {
        FooterDes.textContent = 'Your go-to licensed personal financing service with free credit advice. Low interest rate, fast approval, hassle-free application process.';
        PrivacyPolicyFooter.textContent = 'Privacy Policy';
        TermOfUseFooter.textContent = 'Terms of Use';
        ContactsFooter.textContent = 'Contacts';
    }
}