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

//Blog Post Two
const GettingALoan = document.getElementById('GettingALoan');
const GettingALoanDes = document.getElementById('GettingALoanDes');
const Eligible = document.getElementById('Eligible');
const EligibleDes = document.getElementById('EligibleDes');
const NotToMuch = document.getElementById('NotToMuch');
const NotToMuchDes = document.getElementById('NotToMuchDes');
const TooManyLoans = document.getElementById('TooManyLoans');
const TooManyLoansDes = document.getElementById('TooManyLoansDes');
const CreditScore = document.getElementById('CreditScore');
const CreditScoreDes = document.getElementById('CreditScoreDes');
const Negotiate = document.getElementById('Negotiate');
const NegotiateDes = document.getElementById('NegotiateDes');
const ChooseCredit = document.getElementById('ChooseCredit');
const ChooseCreditDes = document.getElementById('ChooseCreditDes');
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
    updateBlogTwo('bm');
    updateRecentPost('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateHeader('en');
    updateBlogTwo('en');
    updateRecentPost('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateHeader('bm');
        updateBlogTwo('bm');
        updateRecentPost('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateHeader('en');
        updateBlogTwo('en');
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

function updateBlogTwo(language) {
    if (language === 'bm') {
        GettingALoan.textContent = 'Ingin Memohon Pinjaman? Tingkatkan Peluang Anda Untuk Dapat Kelulusan Pinjaman!';
        GettingALoanDes.textContent = 'Anda ingin dapatkan pinjaman dan ingin memastikan permohonan anda diluluskan terus? Ataupun anda mempunyai kredit skor yang teruk dan ingin meningkatkan rekod kredit anda? Teruskan membaca kerana artikel ini mungkin ada jawapan yang anda tengah cari.';
        Eligible.innerHTML = '<strong>1. Adakah anda layak?</strong>';
        EligibleDes.textContent = 'Setiap kredit komuniti akan menyenaraikan kriteria kelayakan mereka dalam iklan atau laman web mereka. Ini menyenangkan pelanggan baru untuk membuat perbandingan dan memilih kredit komuniti yang mana untuk memohon berdasarkan kelayakan mereka.';
        NotToMuch.innerHTML = '<strong>2. Jangan terlalu banyak!</strong>';
        NotToMuchDes.textContent = 'Apabila mohon untuk pembiayaan pinjaman, sentiasa pastikan anda dapat melangsaikan amaun pinjaman, tambah dengan faedah, setiap bulan. Semakin tinggi amaun pinjaman yang anda mohon, semakin ketat situasi kewangan anda. Semak nisbah pembayaran hutang (DTI) anda untuk memastikan anda mampu bayaran balik. Dan sentiasa pertimbangkan aliran tunai semasa menentukan amaun pinjaman.';
        TooManyLoans.innerHTML = '<strong>3. Jangan buat terlalu banyak permohonan pada satu masa.</strong>';
        TooManyLoansDes.textContent = 'Anda mesti terfikir bahawa membuat banyak permohonan pinjaman pada satu masa dapat meningkatkan peluang anda untuk sekurang-kurangnya satu pinjaman untuk lulus. SALAH. Membuat terlampau banyak permohonan sebenarnya boleh mempengaruhi skor kredit anda dan mengurangkan peluang untuk pinjaman anda diluluskan. Apabila kredit komuniti anda menyemak laporan kredit anda, mereka mungkin akan menolak permohonan anda kerana anda dianggap peminjam berisiko tinggi. Maka ianya lebih baik untuk semak lebih banyak pilihan dan pilih yang terbaik sebelum memohon';
        CreditScore.innerHTML = '<strong>4. Perbaiki skor kredit anda.</strong>';
        CreditScoreDes.textContent = 'Semasa menyemak permohonan pinjaman anda, kredit komuniti sentiasa memberi banyak perhatian kepada skor kredit anda. Skor CTOS yang disyorkan jatuh di antara 697-850, namun ini bukan sesuatu yang tentu, kerana ianya masih terpulang kepada penilaian bank atau kredit komuniti anda untuk meluluskan atau menolak permohonan pinjaman anda. Jika anda mempunyai sejarah skor kredit yang teruk, ianya digalakkan untuk melangsaikan segala tunggakan dan bayar tepat pada waktu. Jika situasi kewangan anda tidak mengizinkan, anda boleh pilih untuk mohon khidmat penyatuan hutang ataupun dapatkan khidmat nasihat dari Agensi Kaunseling dan Pengurusan Kewangan (AKPK).';
        Negotiate.innerHTML = '<strong>5. Runding untuk tempoh pinjaman yang lebih panjang.</strong>';
        NegotiateDes.textContent = 'Dengan tempoh pinjaman yang lebih panjang, lebih mudah untuk membayar balik tepat pada waktu kerana bayaran bulanan adalah lebih rendah berbanding dengan tempoh pinjaman yang lebih pendek. Namun, kena beringat bahawa kredit komuniti akan mengenakan kadar faedah yang lebih tinggi untuk tempoh pinjaman yang panjang, berbanding kadar faedah yang rendah untuk tempoh pinjaman yang pendek dengan bayaran bulanan yang lebih tinggi.';
        ChooseCredit.innerHTML = '<strong>6. Pilih kredit komuniti anda dengan teliti. </strong>';
        ChooseCreditDes.innerHTML = 'Sentiasa ingat bahawa selepas semua prosedur permohonan pinjaman sudah selesai, ianya kredit komuniti anda yang akan menyemak permohonan anda dan terpulang kepada mereka untuk meluluskan atau menolak permohonan pinjaman anda. Maka, amat penting untuk membuat soal selidik sebelum membuat permohonan. <a href="4-ways-to-prevent-Becoming-Loan-Scams-Victims.html">Baca artikel ini</a> jika ingin ambil tahu apa yang perlu dilakukan sebelum memohon sebarang khidmat';
        Takeaway.innerHTML = '<strong>Rumusannya:</strong> Dengan setiap pinjaman yang perlu diambil, anda mungkin perlu menambah sumber pendapatan dan bayar pinjaman anda tepat pada waktu untuk mendapatkan skor kredit yang sihat. Dengan kredit skor yang baik, lebih mudah untuk permohonan pinjaman anda untuk diluluskan. Jika anda ragu-ragu dan memerlukan lebih banyak nasihat, anda boleh <a href="contact-us.html">hubungi kami di sini</a> untuk dapatkan khidmat nasihat kredit percuma.';

    } else {
        GettingALoan.textContent = 'Getting A Loan? Increase Your Chance Of Getting Approved!';
        GettingALoanDes.textContent = 'You want to get a loan and you want to make sure your loan application is approved right on the go? Or you have a bad credit score and want to improve your credit report? Read on because this might be what you are looking for.';
        Eligible.innerHTML = '<strong>1. Are you eligible?</strong>';
        EligibleDes.textContent = 'Every credit company will have their eligibility criteria listed in their advertisements or websites. This makes it easier for potential customers to list down their choices and opt for which company depending on their eligibility.';
        NotToMuch.innerHTML = '<strong>2. Not too much!</strong>';
        NotToMuchDes.textContent = 'When applying for a personal loan, always make sure you are able to pay back the loan amount plus interest on a monthly basis. The higher the amount of loan you apply for, the more constricted your finances can become. Check your debt-to-income (DTI) ratio to make sure you are able to pay your loan. And consider your cashflow when deciding your loan amount.';
        TooManyLoans.innerHTML = '<strong>3. Don’t apply for too many loans at a time.</strong>';
        TooManyLoansDes.textContent = 'You might think that applying for many loans at the same time might increase your chance to get at least one loan approved. WRONG. Applying for too many loans can actually affect your credit score and reduce your chance of getting your loan approved. When your credit company reviews your credit report, they might reject you as you are a high risk borrower. So it is better to scout your choices and choose your best one before applying.';
        CreditScore.innerHTML = '<strong>4. Improve your credit score.</strong>';
        CreditScoreDes.textContent = 'When reviewing your loan applications, credit companies always pay more attention to your credit score. The recommended CTOS score falls in the range of 697-850, but this is not a hard and fast rule, because it is still up to your credit company to approve or reject your loan. If you have a history of having a bad credit score, it is encouraged that you should pay off all arrears and your loans on time. If your financial situation does not allow it, you may opt for debt consolidation service instead or seek advice from Credit Counselling and Management Agency (AKPK).';
        Negotiate.innerHTML = '<strong>5. Negotiate for a longer loan tenure.</strong>';
        NegotiateDes.textContent = 'With a longer loan tenure, it is easier to pay your loan on time as it has lower payments compared to a shorter loan tenure. However, bear in mind that a credit company will incur a higher interest rate for a longer tenure, compared to a lower interest rate for a shorter loan tenure with higher monthly payment.';
        ChooseCredit.innerHTML = '<strong>6. Choose your credit company carefully. </strong>';
        ChooseCreditDes.innerHTML = 'At the end of the day, your credit company is the one who will personally oversee and either approve or reject your loan application. Therefore, it is important that you do your research before you hand in your application. <a href="4-ways-to-prevent-Becoming-Loan-Scams-Victims.html">Read this article</a> on what to do before you apply for any financing service.';
        Takeaway.innerHTML = '<strong>Takeaway:</strong> With every loan you plan to take, you may need to increase your income source and pay your loans on time to have a healthy credit score. With a healthy credit score, it’s easier to have your loan application approved. If you are still on the fence and need more advice, you may <a href="contact-us.html">contact us here</a> for free credit advisory services.';
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