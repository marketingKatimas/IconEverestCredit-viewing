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

//Blog Post One
const Waysprevent = document.getElementById('Waysprevent');
const PreventScamOne = document.getElementById('PreventScamOne');
const PreventScamTwo = document.getElementById('PreventScamTwo');
const Research = document.getElementById('Research');
const ResearchDes = document.getElementById('ResearchDes');
const CreditCheck = document.getElementById('CreditCheck');
const CreditCheckDes = document.getElementById('CreditCheckDes');
const ExtraInfo = document.getElementById('ExtraInfo');
const Ctos = document.getElementById('Ctos');
const CtosDesOne = document.getElementById('CtosDesOne');
const CtosDesTwo = document.getElementById('CtosDesTwo');
const UpfrontPayment = document.getElementById('UpfrontPayment');
const UpfrontPaymentDesOne = document.getElementById('UpfrontPaymentDesOne');
const UpfrontPaymentDesTwo = document.getElementById('UpfrontPaymentDesTwo');
const Vigilance = document.getElementById('Vigilance');
const VigilanceDesOne = document.getElementById('VigilanceDesOne');
const VigilanceDesTwo = document.getElementById('VigilanceDesTwo');
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
    updateBlogOne('bm');
    updateRecentPost('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateHeader('en');
    updateBlogOne('en');
    updateRecentPost('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateHeader('bm');
        updateBlogOne('bm');
        updateRecentPost('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateHeader('en');
        updateBlogOne('en');
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

function updateBlogOne(language) {
    if (language === 'bm') {
        Waysprevent.textContent = '4 Cara Mencegah Daripada Menjadi Mangsa Penipuan Pinjaman';
        PreventScamOne.textContent = 'Apabila membuat permohonan pinjaman, terdapat tanggapan umum bahawa institusi kewangan bukan bank (NBFI) yang menawarkan perkhidmatan pinjaman merupakan penipu ataupun Ah Long. Nak dijadikan cerita, stereotaip ini dipopularkan atas sebab peningkatan kes keganasan dan agresif dari Ah Long yang merosakkan harta benda dan mengugut peminjam mereka. Disebabkan hal ini, syarikat kredit yang berlesen pun terkena tempiasnya.';
        PreventScamTwo.textContent = 'Jadi, apakah yang anda perlu buat untuk mengenalpasti sama ada syarikat kredit komuniti itu sah atau tidak?';
        Research.innerHTML = '<strong>1. Selidik, selidik, dan terus selidik! </strong>';
        ResearchDes.textContent = 'Sebelum anda mohon pinjaman dalam talian, pastikan anda selidik dahulu. Baca review dalam internet, baca pengalaman orang yang pernah menggunakan khidmat kredit komuniti anda di media sosial, semak jika kredit komuniti itu berdaftar di bawah Kementerian Pembangunan Kerajaan Tempatan (KPKT), dan sentiasa baca fine print polisi jika ada. Luangkan masa untuk menyelidik dan membandingkan pilihan-pilihan anda kerana kita sangat mudah terpengaruh dan hanyut dengan tawaran yang bagus tanpa memastikan kehadiran yuran tersembunyi di sebalik ciri produk yang bagus.';
        CreditCheck.innerHTML = '<strong>2. Adakah kredit komuniti itu menjalankan semakan kredit terhadap anda? Bagus</strong>';
        CreditCheckDes.textContent = 'Satu persamaan yang bank dan institusi kewangan bukan bank kongsi dari segi prosedur adalah semakan rekod CTOS dan CCRIS anda. Adakah anda pernah terlepas bayaran kad kredit atau pinjaman pendidikan anda? Sudahkah anda membayar semua bayaran tertunggak dalam 12 bulan terkini? Adakah laporan kredit anda bagus? Semakan kredit ini penting kerana ianya dapat meyakinkan bank atau kredit komuniti anda untuk meluluskan permohonan jika mereka yakin anda dapat bayar balik pinjaman anda tepat pada waktu. Jika kredit komuniti anda tidak melakukan semakan kredit, tinggalkan premis secepat mungkin';
        ExtraInfo.textContent = 'Maklumat tambahan:';
        Ctos.innerHTML = '<strong>Apakah itu CTOS and CCRIS?</strong>';
        CtosDesOne.innerHTML = 'CTOS pendek untuk Credit Tip-Off Service, Agensi Laporan Kredit (CRA) terkemuka yang dibenarkan oleh Bank Negara Malaysia dan dibina oleh CTOS Data Systems Sdn. Bhd., agensi laporan kredit swasta. Tujuannya adalah untuk <strong>merumuskan kelayakan kredit anda berdasarkan sejarah kredit anda</strong>. Ia akan menunjukkan skor CTOS anda dalam lingkungan 300 (sangat teruk) – 850 (sangat baik). Semakin tinggi skor anda, semakin rendah nilai risiko kredit, semakin senang untuk pinjaman anda diluluskan.';
        CtosDesTwo.innerHTML = 'CCRIS pula pendek untuk Central Credit Reference Information System, yang diuruskan oleh Biro Kredit Bank Negara Malaysia. Tujuan utamanya adalah <strong>untuk mengumpul maklumat berkaitan kredit dan memberi laporan kredit kepada bank dan institusi kewangan</strong> di Malaysia. Dengan cara ini, bank dan institusi kewangan dapat menentukan kelayakan kredit anda dan sama ada permohonan pinjaman atau kad kredit anda diluluskan atau tidak.';
        UpfrontPayment.innerHTML = '<strong>3. Mereka mahu pembayaran pendahuluan? Keluar dari premis itu sekarang!</strong>';
        UpfrontPaymentDesOne.innerHTML = 'Semua pemberi pinjam wang berdaftar di bawah KPKT terikat kepada Akta Pemberi Pinjam Wang 1951. Di bawah Akta Pemberi Pinjam Wang 1951, Seksyen 23, selain duti setem, fi yang dibenarkan oleh undang-undang dan kos guaman yang berkaitan dengan pinjaman, tiada caj yang boleh dikenakan oleh pemberi pinjam wang.';
        UpfrontPaymentDesTwo.textContent = 'Secara ringkasnya, pemberi pinjaman wang tidak akan mengenakan perbelanjaan tambahan kepada peminjam kecuali seperti yang ditetapkan dalam perjanjian pinjaman. Tetapi, apabila dan jika dinyatakan dalam perjanjian, peminjam akan menanggung semua duti setem dan yuran pengesahan, biasanya akan ditolak daripada jumlah pinjaman anda.';
        Vigilance.innerHTML = '<strong>4. Sentiasa berjaga-jaga.</strong>';
        VigilanceDesOne.textContent = 'Bahagian yang paling penting dalam artikel ini ialah berwaspada. Sentiasa selidik sebelum memohon untuk apa-apa, dalam talian mahupun luar talian. Jika anda mula rasa ragu-ragu atau mula menyoalkan kredibiliti kredit komuniti anda, batalkan permohonan jika belum menandatangani perjanjian pinjaman. Percaya kepada firasat anda. Ia dapat menyelamatkan anda. ';
        VigilanceDesTwo.innerHTML = 'Jika anda sedang berfikir untuk membuat permohonan pembiayaan peribadi, <a href="about-us.html">mohon dengan Icon Everest Credit di sini</a>! Kami menjanjikan anda akan dapat apa yang anda perlu dengan yakin dan tepat.';
        Takeaway.innerHTML = '<strong>Rumusannya:</strong> Sentiasa selidik kredit komuniti yang anda ingin membuat pinjam dan pastikan ianya berdaftar. Pastikan juga mereka membuat semakan kredit terhadap anda dan dapatkan laporan CTOS dan CCRIS. Jika mereka meminta pembayaran pendahuluan, kemungkinan besar mereka ialah ah long. Yang paling penting sekali, sentiasa berwaspada apabila membuat pinjaman, kerana scammer ada di mana-mana.';

    } else {
        Waysprevent.textContent = '4 Ways to Prevent Becoming Loan Scams Victims';
        PreventScamOne.textContent = 'When it comes to applying for loans, there is the general perception that non-banking financial institutions (NBFI) that offer money lending services are loan sharks, scammers, or ah long. To be fair, these stereotypes were made popular due to increasing cases of violence from ah long vandalising and threatening their borrowers. Due to this, licensed credit companies are forced to bear the end of the brunt.';
        PreventScamTwo.textContent = 'So, what should you do to identify whether the credit company you plan to borrow from is safe or not?';
        Research.innerHTML = '<strong>1. Research, research, more research!</strong>';
        ResearchDes.textContent = 'Before you apply for an online loan, do your due diligence first. Read reviews on the internet, get wind of what people are saying about the credit company on social media, check if they are registered under the Ministry of Urban Wellbeing, Housing and Local Development (KPKT), and always read their policy’s fine prints if available. Spend some time diving deep and comparing your choices because it’s easy to get swept up by good offers without making sure that there are hidden fees behind every good product feature.';
        CreditCheck.innerHTML = '<strong>2. Do they conduct credit checks on you? Good.</strong>';
        CreditCheckDes.textContent = 'One thing that banks and non-banks financial institutions have in common in terms of their financing procedure is checking your CTOS and CCRIS records. Have you missed paying for your credit cards or student loan? Have you paid all your arrears in the last 12 months? Is your credit report healthy? Credit checks are important because it will convince your credit company to approve your loan if they are sure that you are able to pay your loan in time. If your credit company does not do any credit checks on you, walk out the door immediately.';
        ExtraInfo.textContent = 'Extra information:';
        Ctos.innerHTML = '<strong>What are CTOS and CCRIS?</strong>';
        CtosDesOne.innerHTML = 'CTOS is short for Credit Tip-Off Service, Malaysia’s leading Credit Reporting Agency (CRA) permitted by Bank Negara Malaysia, created by CTOS Data Systems Sdn. Bhd., a private credit reporting agency. Its purpose is <strong>to summarise your creditworthiness based on your credit history</strong>. It will show you your CTOS score in the range of 300 (poor) – 850 (excellent). The higher your score, the lower your credit risk value, the easier your loan will be approved.';
        CtosDesTwo.innerHTML = 'On the other hand, CCRIS is short for Central Credit Reference Information System, managed by the Credit Bureau of Bank Negara Malaysia. Its sole purpose is to <strong>collect credit-related information and provide credit reports to banks and financial institutions</strong> in Malaysia. This is how banks and financial institutions determine your creditworthiness and whether your loan or credit card application will be approved or not.';
        UpfrontPayment.innerHTML = '<strong>3. They want upfront payment? Get out of there ASAP!</strong>';
        UpfrontPaymentDesOne.innerHTML = 'All registered money lenders under KPKT are tied to the Moneylender Act 1951. Under Moneylender Act 1951, Section 23, <em>“[a]ny moneylending agreement between a licensee and a borrower or intending borrower for the payment by the borrower or intending borrower to the licensee of any sum on account of costs, charges or expenses…shall be illegal.”</em>';
        UpfrontPaymentDesTwo.textContent = 'In simple terms, the moneylender shall not charge extra expenses on the borrower except as prescribed in the loan agreement. But, when and if stated in the agreement, the borrower will bear all stamp duties and attestation fees, usually will be deducted from your total loan.';
        Vigilance.innerHTML = '<strong>4. Vigilance is key.</strong>';
        VigilanceDesOne.textContent = 'The most important part of this article is being vigilant. Always do your due diligence before applying for anything, online or offline. If you feel hesitant or start to question your credit company, cancel your application if you haven’t put down your signature on your loan agreement. Trust your gut. They always save you when it matters';
        VigilanceDesTwo.innerHTML = 'If you are thinking of applying for a personal loan, <a href="about-us.html">apply with Icon Everest Credit here</a>! We promise you will receive what you need, exactly and surely.';
        Takeaway.innerHTML = '<strong>Takeaway:</strong> Always research the companies you plan to borrow from and make sure that it’s legit. Make sure that they conduct a credit check on you by asking for your CTOS and CCRIS reports. If they ask for upfront payment, they are most likely loan sharks. But most importantly, always be vigilant when it comes to loans, because scammers are everywhere.';
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