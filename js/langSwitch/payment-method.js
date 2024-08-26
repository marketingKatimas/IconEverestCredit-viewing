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
const PaymentMethodHeader = document.getElementById('PaymentMethodHeader');
const PaymentMethodHeaderDes = document.getElementById('PaymentMethodHeaderDes');

//Payment Method
const OnlineBanking = document.getElementById('OnlineBanking');
const LogOn = document.getElementById('LogOn');
const BillerCode = document.getElementById('BillerCode');
const ICNumberRef = document.getElementById('ICNumberRef');
const NameRef = document.getElementById('NameRef');
const Payment = document.getElementById('Payment');
const Register = document.getElementById('Register');
const ApplyNowPayment= document.getElementById('ApplyNowPayment');

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
    updatePayment('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateHeader('en');
    updatePayment('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateHeader('bm');
        updatePayment('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateHeader('en');
        updatePayment('en');
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
        PaymentMethodHeader.innerHTML = 'Cara Membayar<span>.</span>';
        PaymentMethodHeaderDes.textContent = 'kami menawarkan pelbagai penyelesaian pembiayaan untuk memenuhi keperluan peribadi anda dengan aplikasi tanpa kerumitan dan keperluan dokumen mudah.';
    } else {
        PaymentMethodHeader.innerHTML = 'Payment Method<span>.</span>';
        PaymentMethodHeaderDes.textContent = 'we offer a variety of financing solutions to cater to your personal needs with hassle-free applications and simple documents requirements.';
    }
}

function updatePayment(language) {
    if (language === 'bm') {
        OnlineBanking.textContent = 'Anda boleh bayar menggunakan JomPAY melalui perbankan dalam talian dengan langkah-langkah berikut:';
        LogOn.textContent = '1. Log masuk bank anda secara dalam talian dan cari pilihan JomPAY.';
        BillerCode.textContent = '2. Masukkan 85498 sebagai Biller Code.';
        ICNumberRef.textContent = '3. Masukkan nombor IC sebagai Ref-1.';
        NameRef.textContent = '4. Masukkan nama anda seperti dalam IC sebagai Ref-2.';
        Payment.textContent = '5. Masukkan amaun bayaran.';
        Register.textContent = 'Daftar akaun direct debit anda dengan murahcredit.com. Setelah pendaftaran selesai, pastikan terdapat dana secukupnya dalam akaun anda untuk potongan automatik pada tarikh bayaran balik anda.';
        ApplyNowPayment.innerHTML = 'Mohon Sekarang <i class="arrow_right">';
    } else {
        OnlineBanking.textContent = 'You can pay using JomPAY via online banking with the following steps:';
        LogOn.textContent = '1. Log on to your internet banking and look for JomPAY.';
        BillerCode.textContent = '2. Enter 85498 as the Biller Code.';
        ICNumberRef.textContent = '3. Enter your IC number as Ref-1.';
        NameRef.textContent = '4. Enter your IC Name as Ref-2.';
        Payment.textContent = '5. Enter your Payment Amount.';
        Register.textContent = 'Register your direct debit account with murahcredit.com. Once the registration is done, all you need to do is to prepare enough funds for a deduction on your repayment date.';
        ApplyNowPayment.innerHTML = 'Apply Now <i class="arrow_right">';
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