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
const ServicesHeader = document.getElementById('ServicesHeader');
const ServicesHeaderDes = document.getElementById('ServicesHeaderDes');

//Our Services
const ServicesOne = document.getElementById('ServicesOne');
const ServicesOneDes = document.getElementById('ServicesOneDes');
const ServicesTwo = document.getElementById('ServicesTwo');
const ServicesTwoDes = document.getElementById('ServicesTwoDes');
const ServicesThree = document.getElementById('ServicesThree');
const ServicesThreeDes = document.getElementById('ServicesThreeDes');
const ServicesFour = document.getElementById('ServicesFour');
const ServicesFourDes = document.getElementById('ServicesFourDes');
const ServicesFive = document.getElementById('ServicesFive');
const ServicesFiveDes = document.getElementById('ServicesFiveDes');

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
    updateOurServices('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateHeader('en');
    updateOurServices('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateHeader('bm');
        updateOurServices('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateHeader('en');
        updateOurServices('en');
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
        ServicesHeader.innerHTML = 'Perkhidmatan<span>.</span>';
        ServicesHeaderDes.textContent = 'kami menawarkan pelbagai penyelesaian pembiayaan untuk memenuhi keperluan peribadi anda dengan aplikasi tanpa kerumitan dan keperluan dokumen mudah.';
    } else {
        ServicesHeader.innerHTML = 'Services<span>.</span>';
        ServicesHeaderDes.textContent = 'we offer a variety of financing solutions to cater to your personal needs with hassle-free applications and simple documents requirements.';
    }
}

function updateOurServices(language) {
    if (language === 'bm') {
        ServicesOne.textContent = 'PEMBIAYAAN PERIBADI EKSPRES (I-KREDIT)';
        ServicesOneDes.textContent = 'Icon Everest Credit menawarkan pembiayaan peribadi sehingga RM150,000 dengan pembayaran balik fleksibel sehingga 60 bulan sesuai dengan bajet dan profil dan skor kredit anda. i-Credit Personal Financing kami tidak memerlukan sebarang pembayaran pendahuluan, malah permohonan anda, jika memenuhi syarat, akan diluluskan dengan cepat.';
        ServicesTwo.textContent = 'PEMBIAYAAN HARTA TANAH DAN GADAI JANJI';
        ServicesTwoDes.textContent = 'Tidak kira anda sedang mencari untuk membiayai rumah anda atau melepaskan ekuiti dari harta anda, kami menawarkan pembiayaan hartanah dan pembiayaan perumahan pada kadar faedah yang rendah.';
        ServicesThree.textContent = 'KHIDMAT NASIHAT KREDIT';
        ServicesThreeDes.textContent = 'Buat temu janji untuk mendapatkan khidmat nasihat kredit percuma untuk menyelesaikan cabaran kewangan dan meningkatkan skor kredit anda.';
        ServicesFour.textContent = 'Pembiayaan Peribadi Patuh Syariah';
        ServicesFourDes.textContent = 'Jika anda sedang mencari khidmat pembiayaan peribadi, Pembiayaan Peribadi Hubungi kami untuk maklumat lanjut!';
        ServicesFive.textContent = 'Pembiayaan Peribadi Konvensional';
        ServicesFiveDes.textContent = 'Pembiayaan Peribadi konvensional kami membiayai ubahsuai rumah, keperluan perubatan, percutian idaman, yuran pendidikan, perkahwinan, dan malah penyatuan hutang! Dapatkan fleksibiliti kewangan yang anda perlukan sekarang! Hubungi kami untuk maklumat lanjut.';
    } else {
        ServicesOne.textContent = 'Express Personal Financing (i-Credit)';
        ServicesOneDes.textContent = 'Icon Everest Credit offers personal financing up to RM150,000 with flexible payment terms up to 60 months to suit all budgets and credit score profile. Our i-Credit Personal Financing requires no upfront payments with fast approval.';
        ServicesTwo.textContent = 'Property and Mortgage Financing';
        ServicesTwoDes.textContent = 'Whether you are looking to finance your home or to release the equity from your property, we offer property and mortgage financing at the lowest interest rate.';
        ServicesThree.textContent = 'Credit Advisory Services';
        ServicesThreeDes.textContent = 'Make an appointment with us for a free credit advisory service to solve your financial challenges and to improve your credit score.';
        ServicesFour.textContent = 'Shariah-compliant Personal Financing';
        ServicesFourDes.textContent = 'If you are looking for a Shariah-compliant Personal Financing service, murahcredit.com Personal Financing is your choice! Contact us to find out more!';
        ServicesFive.textContent = 'Conventional Personal Financing';
        ServicesFiveDes.textContent = 'Our conventional Personal Financing covers your home renovations, medical needs, dream vacations, education fees, weddings, and even debt consolidations! Get the financial flexibility that you need now! Contact us for more info.';
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