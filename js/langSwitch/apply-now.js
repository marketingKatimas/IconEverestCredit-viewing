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
const ApplyNowHeader = document.getElementById('ApplyNowHeader');
const ApplyNowHeaderDes = document.getElementById('ApplyNowHeaderDes');

//The Process
const SubmitApplication = document.getElementById('SubmitApplication');
const CreditAssessment = document.getElementById('CreditAssessment');
const Approval = document.getElementById('Approval');
const SignAgreement = document.getElementById('SignAgreement');
const ReceiveMoney = document.getElementById('ReceiveMoney');

//Apply Form
const LoanAmount = document.getElementById('LoanAmount');
const LoanAge = document.getElementById('LoanAge');
const NameAs = document.getElementById('NameAs');
const Email = document.getElementById('Email');
const Mobile = document.getElementById('Mobile');
const EmploymentSector = document.getElementById('EmploymentSector');
const PleaseSelect = document.getElementById('PleaseSelect');
const Government = document.getElementById('Government');
const GovernmentLink = document.getElementById('GovernmentLink');
const Private = document.getElementById('Private');
const MonthlyGrossSalary = document.getElementById('MonthlyGrossSalary');
const MonthlyNettSalary = document.getElementById('MonthlyNettSalary');
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
    updateTheProcess('bm');
    updateApplyForm('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateHeader('en');
    updateTheProcess('en');
    updateApplyForm('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateHeader('bm');
        updateTheProcess('bm');
        updateApplyForm('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateHeader('en');
        updateTheProcess('en');
        updateApplyForm('en');
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
        ApplyNowHeader.innerHTML = 'i-FUND Permohonan Dalam Talian<span>.</span>';
        ApplyNowHeaderDes.textContent = 'kami menawarkan pelbagai penyelesaian pembiayaan untuk memenuhi keperluan peribadi anda dengan aplikasi tanpa kerumitan dan keperluan dokumen mudah.';
    } else {
        ApplyNowHeader.innerHTML = 'i-FUND Online Application<span>.</span>';
        ApplyNowHeaderDes.textContent = 'we offer a variety of financing solutions to cater to your personal needs with hassle-free applications and simple documents requirements.';
    }
}

function updateTheProcess(language) {
    if (language === 'bm') {
        SubmitApplication.textContent = 'Hantar Permohonan';
        CreditAssessment.textContent = 'Penilaian Kredit';
        Approval.textContent = 'Kelulusan';
        SignAgreement.textContent = 'Menandatangani Perjanjian';
        ReceiveMoney.textContent = 'Terima Wang';
    } else {
        SubmitApplication.textContent = 'Submit Application';
        CreditAssessment.textContent = 'Credit Assessment';
        Approval.textContent = 'Approval';
        SignAgreement.textContent = 'Sign Agreement';
        ReceiveMoney.textContent = 'Receive Money';
    }
}

function updateApplyForm(language) {
    if (language === 'bm') {
        LoanAmount.textContent = 'Jumlah Pinjaman (RM):';
        LoanAge.textContent = 'Umur:';
        NameAs.textContent = 'Nama seperti Dalam NRIC:';
        Email.textContent = 'Emel:';
        Mobile.textContent = 'Nombor telefon:';
        EmploymentSector.textContent = 'Sektor Pekerjaan:';
        PleaseSelect.textContent = 'Sila Pilih';
        Government.textContent = 'Kerajaan';
        GovernmentLink.textContent = 'Syarikat Berkaitan Kerajaan';
        Private.textContent = 'Swasta';
        MonthlyGrossSalary.textContent = 'Gaji Kasar Bulanan (RM):';
        MonthlyNettSalary.textContent = 'Gaji Bersih Bulanan (RM):';
        SendBtn.innerHTML = 'Hantar <i class="arrow_right">';
    } else {
        LoanAmount.textContent = 'Loan Amount (RM):';
        LoanAge.textContent = 'Age:';
        NameAs.textContent = 'Name as In NRIC:';
        Email.textContent = 'Email:';
        Mobile.textContent = 'Mobile Contact No.:';
        EmploymentSector.textContent = 'Employment Sector:';
        PleaseSelect.textContent = 'Please Select';
        Government.textContent = 'Government';
        GovernmentLink.textContent = 'Government Link';
        Private.textContent = 'Private';
        MonthlyGrossSalary.textContent = 'Monthly Gross Salary (RM):';
        MonthlyNettSalary.textContent = 'Monthly Nett Salary (RM):';
        SendBtn.innerHTML = 'Send <i class="arrow_right">';
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