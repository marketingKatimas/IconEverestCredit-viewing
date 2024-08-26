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

//Banner
const LowInterestRate = document.getElementById('LowInterestRate');
const ApplyNowSlide = document.getElementById('ApplyNowSlide');
const Information = document.getElementById('Information');
const FastApproval = document.getElementById('FastApproval');
const ContactUsSlide = document.getElementById('ContactUsSlide');

//Our Services
const OurServices = document.getElementById('OurServices');
const OurServicesDes = document.getElementById('OurServicesDes');
const ExpressPersonalFinancing = document.getElementById('ExpressPersonalFinancing');
const PropertyMortgageFinancing = document.getElementById('PropertyMortgageFinancing');
const CreditAdvisoryServices = document.getElementById('CreditAdvisoryServices');
const ShariahCompliant = document.getElementById('ShariahCompliant');
const ExploreMore = document.getElementById('ExploreMore');

//Blog
const Blog = document.getElementById('Blog');
const fourWays = document.getElementById('fourWays');
const fourWaysDes = document.getElementById('fourWaysDes');
const GettingALoan = document.getElementById('GettingALoan');
const GettingALoanDes = document.getElementById('GettingALoanDes');
const BadCreditScore = document.getElementById('BadCreditScore');
const BadCreditScoreDes = document.getElementById('BadCreditScoreDes');

//Question Area
const HaveQuestion = document.getElementById('HaveQuestion');
const HaveQuestionDes = document.getElementById('HaveQuestionDes');
const fname = document.getElementById('name');
const femail = document.getElementById('email');
const fphone = document.getElementById('phone');
const fmessage = document.getElementById('message');
const Send = document.getElementById('Send');

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
    updateBanner('bm');
    updateServices('bm');
    updateBlog('bm');
    updateQuestion('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateBanner('en');
    updateServices('en');
    updateBlog('en');
    updateQuestion('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateBanner('bm');
        updateServices('bm');
        updateBlog('bm');
        updateQuestion('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateBanner('en');
        updateServices('en');
        updateBlog('en');
        updateQuestion('en');
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

function updateBanner(language) {
    if (language === 'bm') {
        LowInterestRate.textContent = 'Icon Everest Credit Membiayai gaya hidup anda dengan kadar faedah serendah 0.66%';
        ApplyNowSlide.innerHTML = 'Mohon Sekarang <i class="arrow_right">';
        Information.textContent = 'Maklumat';
        FastApproval.textContent = 'Memperkenalkan i-CREDIT - kemudahan pembiayaan peribadi dengan Kelulusan Pantas, Bayaran Balik Bulanan Fleksibel, dan Kadar Faedah Terendah di Malaysia!';
        ContactUsSlide.innerHTML = 'Hubungi Kami <i class="arrow_right">';
    } else {
        LowInterestRate.textContent = 'Icon Everest Credit Financing your lifestyle with interest rates as low as 0.66%';
        ApplyNowSlide.innerHTML = 'Apply Now <i class="arrow_right">';
        Information.textContent = 'Information';
        FastApproval.textContent = 'Introducing i-CREDIT a personal financing facility with Fast Approval, Flexible Monthly Payment and Lowest Interest Rate in Malaysia!';
        ContactUsSlide.innerHTML = 'Contact Us <i class="arrow_right">';
    }
}

function updateServices(language) {
    if (language === 'bm') {
        OurServices.textContent = 'Perkhidmatan Kami';
        OurServicesDes.textContent = 'Di Icon Everest Credit, kami menawarkan pelbagai penyelesaian pembiayaan, sesuai dengan keperluan peribadi anda, dengan permohonan yang senang dan dokumen yang ringkas.';
        ExpressPersonalFinancing.textContent = 'Pembiayaan Peribadi Ekspres (i-Kredit)';
        PropertyMortgageFinancing.textContent = 'Pembiayaan Harta Tanah dan Gadai Janji';
        CreditAdvisoryServices.textContent = 'Khidmat Nasihat Kredit';
        ShariahCompliant.textContent = 'Pembiayaan Peribadi Patuh Syariah';
        ExploreMore.innerHTML = 'Terokai lebih lanjut <i class="arrow_right">';
    } else {
        OurServices.textContent = 'Our Servicess';
        OurServicesDes.textContent = 'At Icon Everest Credit, we offer a variety of financing solutions to cater to your personal needs with hassle-free applications and simple documents requirements.';
        ExpressPersonalFinancing.textContent = 'Express Personal Financing (i-Credit)';
        PropertyMortgageFinancing.textContent = 'Property and Mortgage Financing';
        CreditAdvisoryServices.textContent = 'Credit Advisory Services';
        ShariahCompliant.textContent = 'Shariah-compliant Personal Financing';
        ExploreMore.innerHTML = 'explore more <i class="arrow_right">';
    }
}

function updateBlog(language) {
    if (language === 'bm') {
        Blog.textContent = 'Blog';
        fourWays.textContent = '4 Cara Mencegah Daripada Menjadi Mangsa Penipuan Pinjaman';
        fourWaysDes.textContent = 'Apabila membuat permohonan pinjaman, terdapat tanggapan umum bahawa institusi kewangan bukan ...';
        GettingALoan.textContent = 'Ingin Memohon Pinjaman? Tingkatkan Peluang Anda Untuk Dapat Kelulusan Pinjaman!';
        GettingALoanDes.textContent = 'Anda ingin dapatkan pinjaman dan ingin memastikan permohonan anda diluluskan terus? Ataupun anda ...';
        BadCreditScore.textContent = 'SKOR KREDIT TERUK? Jelaskan rekod CTOS & CCRIS anda dengan cara-cara ini';
        BadCreditScoreDes.textContent = 'Jika anda pernah memohon pinjaman di mana-mana institusi kewangan perbankan atau bukan bank, anda ...';
    } else {
        Blog.textContent = 'Blog';
        fourWays.textContent = '4 Ways to Prevent Becoming Loan Scams Victims';
        fourWaysDes.textContent = 'When it comes to applying for loans, there is the general perception that non-banking financial institutions ...';
        GettingALoan.textContent = 'Getting A Loan? Increase Your Chance Of Getting Approved!';
        GettingALoanDes.textContent = 'You want to get a loan and you want to make sure your loan application is approved right on the ...';
        BadCreditScore.textContent = 'BAD CREDIT SCORE? Here’s how to improve your CTOS & CCRIS';
        BadCreditScoreDes.textContent = 'If you have applied for loans at any banking or non-banking financial institutions, chances are you might...';
    }
}

function updateQuestion(language) {
    if (language === 'bm') {
        HaveQuestion.textContent = 'Jika anda mempunyai soalan, anda boleh menghubungi kami. Isi borang sahaja.';
        HaveQuestionDes.innerHTML = 'Jika anda lebih suka menghubungi kami melalui cara lain, anda juga boleh menghantar e-mel kepada kami di <a href="mailto:contact@iconeverestcredit.com">contact@iconeverestcredit.com</a> atau berikan kami panggilan di <a href="https://api.whatsapp.com/send?phone=60177125008">017-712 5008</a>. Kami berharap dapat membantu anda!';
        fname.placeholder = 'Nama';
        femail.placeholder = 'Emel';
        fphone.placeholder = 'Telefon';
        fmessage.placeholder = 'Mesej';
        Send.innerHTML = 'Hantar <i class="arrow_right"></i>';
    } else {
        HaveQuestion.textContent = 'If you have a question, you can contact us. Just fill a form.';
        HaveQuestionDes.innerHTML = 'If you prefer to reach us through other means, you can also email us at <a href="mailto:contact@iconeverestcredit.com">contact@iconeverestcredit.com</a> or give us a call at <a href="https://api.whatsapp.com/send?phone=60177125008">017-712 5008</a>. We look forward to assisting you!';
        fname.placeholder = 'Name';
        femail.placeholder = 'Email';
        fphone.placeholder = 'Phone';
        fmessage.placeholder = 'Message';
        Send.innerHTML = 'Send <i class="arrow_right"></i>';
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