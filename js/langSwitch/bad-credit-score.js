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
const BlogHeaderDes = document.getElementById('BlogHeaderDes');

//Blog Post Three
const BadCredit = document.getElementById('BadCredit');
const BadCreditDesOne = document.getElementById('BadCreditDesOne');
const BadCreditDesTwo = document.getElementById('BadCreditDesTwo');
const AutoDeduction = document.getElementById('AutoDeduction');
const AutoDeductionOne = document.getElementById('AutoDeductionOne');
const AutoDeductionTwo = document.getElementById('AutoDeductionTwo');
const OverdueLoans = document.getElementById('OverdueLoans');
const OverdueLoansDes = document.getElementById('OverdueLoansDes');
const IncomeSource = document.getElementById('IncomeSource');
const IncomeSourceDes = document.getElementById('IncomeSourceDes');
const Restructure = document.getElementById('Restructure');
const RestructureDes = document.getElementById('RestructureDes');
const Takeaway = document.getElementById('Takeaway');

//Recent Posts
const RecentPosts = document.getElementById('RecentPosts');
const RecentPostsOne = document.getElementById('RecentPostsOne');
const RecentPostsTwo = document.getElementById('RecentPostsTwo');
const RecentPostsThree = document.getElementById('RecentPostsThree');

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
    updateBlogThree('bm');
    updateRecentPost('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateHeader('en');
    updateBlogThree('en');
    updateRecentPost('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateHeader('bm');
        updateBlogThree('bm');
        updateRecentPost('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateHeader('en');
        updateBlogThree('en');
        updateRecentPost('en');
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
        BlogHeaderDes.textContent = 'kami menawarkan pelbagai penyelesaian pembiayaan untuk memenuhi keperluan peribadi anda dengan aplikasi tanpa kerumitan dan keperluan dokumen mudah.';
    } else {
        BlogHeaderDes.textContent = 'we offer a variety of financing solutions to cater to your personal needs with hassle-free applications and simple documents requirements.';
    }
}

function updateBlogThree(language) {
    if (language === 'bm') {
        BadCredit.textContent = 'SKOR KREDIT TERUK? Jelaskan rekod CTOS & CCRIS anda dengan cara-cara ini';
        BadCreditDesOne.textContent = 'Jika anda pernah memohon pinjaman di mana-mana institusi kewangan perbankan atau bukan bank, anda mungkin pernah dengar pasal CTOS dan CCRIS. Kedua-dua entiti ini merupakan laporan kredit yang merekod sejarah kewangan dan bayaran balik anda, dan rumusan sejarah kredit anda secara terperinci. Laporan-laporan ini amat penting untuk permohonan kad kredit ataupun pinjaman, untuk memberi keyakinan kepada bank atau kredit komuniti anda bahawa anda dapat membuat bayaran balik bulanan.';
        BadCreditDesTwo.textContent = 'Macam mana kalau anda mempunyai skor kredit yang teruk? Di sini ada 4 benda yang anda boleh buat untuk menjelaskan rekod CTOS dan CCRIS anda';
        AutoDeduction.innerHTML = '<strong>1. Mohon untuk khidmat penyatuan hutang dan tetapkan kepada potongan automatik.</strong>';
        AutoDeductionOne.textContent = 'Menyatukan segala-gala hutang anda kepada satu dapat menjimatkan dari segi kadar faedah yang tinggi. Apabila anda mempunyai beberapa hutang yang berkadar faedah tinggi, ia sudah tentu akan meletakkan banyak beban ke atas kewangan anda. Untuk kes ini, anda boleh memilih untuk dapatkan khidmat penyatuan hutang dan runding dengan kredit komuniti untuk meletakkan bayaran bulanan kepada potongan secara automatik. Dengan hanya satu pinjaman untuk dibayar, kewangan anda akan menjadi lebih berstruktur dan tersusun.';
        AutoDeductionTwo.innerHTML = 'Untuk maklumat lanjut tentang khidmat penyatuan hutang, sila hubungi kami <a href="contact-us.html">di sini</a>.';
        OverdueLoans.innerHTML = '<strong>2. Jika anda mempunyai bayaran tertunggak, langsaikan itu terlebih dahulu.</strong>';
        OverdueLoansDes.textContent = 'Tiada cara lain untuk mengatasi bayaran tertunggak. Jadikan bayaran tertunggak sebagai keutamaan kerana ia dapat perbaiki rekod kredit anda dengan lebih lumayan. Apa yang anda boleh lakukan untuk mencapai target ini adalah mengurangkan perbelanjaan yang tidak perlu, seperti kopi mahal, gajet, pakaian berjenama, dan banyak lagi.';
        IncomeSource.innerHTML = '<strong>3. Establish an extra income source.</strong>';
        IncomeSourceDes.textContent = 'Sejak kebelakangan ini, banyak orang mempunyai pekerjaan kedua untuk sara diri. Menambahkan pendapatan itu sangat bagus, apa kata dapatkan sumber pendapatan ekstra untuk melangsaikan hutang anda? Perolehi pendapatan tambahan dengan kerja sampingan pada waktu lapang. Kerja sampingan yang anda boleh buat: dropship, freelance, ataupun affiliate marketing.';
        Restructure.innerHTML = '<strong>4. Penyusunan balik pembayaran balik pinjaman.</strong>';
        RestructureDes.textContent = 'Jika anda tidak mampu membuat bayaran balik bulanan anda tepat pada waktu, runding dengan bank atau kredit komuniti anda untuk menyusun semula bayaran balik anda daripada anda kerap terlepas bayar. Kebanyakan bank dan kredit komuniti membenarkan penyusunan semula apabila anda tidak mampu melakukan bayaran tepat pada masa. ';
        Takeaway.innerHTML = '<strong>Rumusannya:</strong> Penyumbang utama kepada rekod CTOS dan CCRIS yang bagus adalah membayar bil kad kredit dan pinjaman anda tepat pada waktunya. Sebab itu pentingnya untuk menjejaki perbelanjaan bulanan anda dan menambah pendapatan untuk mengekalkan gaya hidup. Dengan rekod bayaran balik yang konsisten, memohon pinjaman juga akan menjadi senang. Untuk meningkatkan lagi peluang pinjaman anda diluluskan, baca <a href="getting-a-loan-increase-your-chance-of-getting-approved.html">artikel ini</a>.';
    } else {
        BadCredit.textContent = 'BAD CREDIT SCORE? Here’s how to improve your CTOS & CCRIS records';
        BadCreditDesOne.textContent = 'If you have applied for loans at any banking or non-banking financial institutions, chances are you might have heard of CTOS and CCRIS. These two are credit reports that detailed your financing and repayment history, and how healthy your credit history is. These two reports are essential in any credit card or loan applications, to give your bank or credit companies confidence that you can pay back the loan you applied for.';
        BadCreditDesTwo.textContent = 'What if you have a bad credit score? Here’s 4 things that you can do to clear your CTOS and CCRIS records.';
        AutoDeduction.innerHTML = '<strong>1. Apply for debt consolidation and set for auto deduction.</strong>';
        AutoDeductionOne.textContent = 'Consolidating all your debts into one to save on high interest rates actually makes sense. When you have multiple debts with high interest rates, it will put a strain on your finances. You may opt for a debt consolidation service and negotiate with your credit company to put your repayment on auto deduction. With only one loan to pay for, you can have a more structured and manageable finances.';
        AutoDeductionTwo.innerHTML = 'You may <a href="contact-us.html">contact us</a> for more information on debt consolidation.';
        OverdueLoans.innerHTML = '<strong>2. If you have overdue loans, settle that first.</strong>';
        OverdueLoansDes.textContent = 'There is no other way to tackle overdue loans. Make it a priority to settle your arrears as this will improve your credit record tremendously. What you can do is to reduce unnecessary expenses, meaning cut off pricey coffee, gadgets, branded clothes, and many more.';
        IncomeSource.innerHTML = '<strong>3. Dapatkan sumber pendapatan ekstra.</strong>';
        IncomeSourceDes.textContent = 'Many people work a second job nowadays. It is always good to increase your income, so why not have an extra income source to settle your debts? Earn extra income with a side hustle whenever you have free time. Things you can do: dropship, freelance, or even affiliate marketing.';
        Restructure.innerHTML = '<strong>4. Restructure your loan repayment. </strong>';
        RestructureDes.textContent = 'If you are unable to pay your monthly loan repayments on time, discuss with your respective banks or credit companies on restructuring or refinancing your repayments instead of missing out on them. Most banks and credit companies allow refinancing when you are in a pinch.';
        Takeaway.innerHTML = '<strong>Takeaway:</strong> The main contributor to an excellent CTOS and CCRIS record is paying your credit card bill and loans on time. That’s why it’s important to keep track of your monthly expenses and increase your income to fund your lifestyle. With a good repayment record, applying for a loan is as easy as counting 1-2-3. Read <a href="getting-a-loan-increase-your-chance-of-getting-approved.html">this article</a> to know how you can increase your chance of getting loan approval.';
    }
}

function updateRecentPost(language) {
    if (language === 'bm') {
        RecentPosts.textContent = 'Catatan Terkini';
        RecentPostsOne.textContent = '4 Cara Mencegah Daripada Menjadi Mangsa Penipuan Pinjaman';
        RecentPostsTwo.textContent = 'Ingin Memohon Pinjaman? Tingkatkan Peluang Anda Untuk Dapat Kelulusan Pinjaman!';
        RecentPostsThree.textContent = 'SKOR KREDIT TERUK? Jelaskan rekod CTOS & CCRIS anda dengan cara-cara ini';
    } else {
        RecentPosts.textContent = 'Recent Posts';
        RecentPostsOne.textContent = '4 Ways to Prevent Becoming Loan Scams Victims';
        RecentPostsTwo.textContent = 'Getting A Loan? Increase Your Chance Of Getting Approved!';
        RecentPostsThree.textContent = 'BAD CREDIT SCORE? Here’s how to improve your CTOS & CCRIS records';
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