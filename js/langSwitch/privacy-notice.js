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
const PrivacyNoticeHeader = document.getElementById('PrivacyNoticeHeader');
const PrivacyNoticeHeaderDes = document.getElementById('PrivacyNoticeHeaderDes');

//Protection Notice
const ProtectionNotice = document.getElementById('ProtectionNotice');
const One = document.getElementById('One');
const Two = document.getElementById('Two');
const Three = document.getElementById('Three');
const Four = document.getElementById('Four');
const Five = document.getElementById('Five');
const Six = document.getElementById('Six');
const Seven = document.getElementById('Seven');
const SevenOne = document.getElementById('SevenOne');
const SevenTwo = document.getElementById('SevenTwo');
const SevenThree = document.getElementById('SevenThree');
const SevenFour = document.getElementById('SevenFour');
const SevenFive = document.getElementById('SevenFive');
const Eight = document.getElementById('Eight');
const Nine = document.getElementById('Nine');
const NineOne = document.getElementById('NineOne');
const NineTwo = document.getElementById('NineTwo');
const NineThree = document.getElementById('NineThree');
const NineFour = document.getElementById('NineFour');
const NineFive = document.getElementById('NineFive');
const NineSix = document.getElementById('NineSix');
const NineSeven = document.getElementById('NineSeven');
const NineEight = document.getElementById('NineEight');
const NineNine = document.getElementById('NineNine');
const NineTen = document.getElementById('NineTen');
const NineEleven = document.getElementById('NineEleven');
const NineTwelve = document.getElementById('NineTwelve');
const Ten = document.getElementById('Ten');
const TenOne = document.getElementById('TenOne');
const TenTwo = document.getElementById('TenTwo');
const TenThree = document.getElementById('TenThree');
const TenFour = document.getElementById('TenFour');
const TenFive = document.getElementById('TenFive');
const TenSix = document.getElementById('TenSix');
const TenSeven = document.getElementById('TenSeven');
const TenEight = document.getElementById('TenEight');
const TenTen = document.getElementById('TenTen');

const Eleven = document.getElementById('Eleven');
const Twelve = document.getElementById('Twelve');
const Thirteen = document.getElementById('Thirteen');
const Fourteen = document.getElementById('Fourteen');
const Fifteen = document.getElementById('Fifteen');
const Sixteen = document.getElementById('Sixteen');
const Seventeen = document.getElementById('Seventeen');

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
    updateProtectionNotice('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateHeader('en');
    updateProtectionNotice('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateHeader('bm');
        updateProtectionNotice('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateHeader('en');
        updateProtectionNotice('en');
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
        PrivacyNoticeHeader.innerHTML = 'Notis Privasi<span>.</span>';
        PrivacyNoticeHeaderDes.textContent = 'kami menawarkan pelbagai penyelesaian pembiayaan untuk memenuhi keperluan peribadi anda dengan aplikasi tanpa kerumitan dan keperluan dokumen mudah.';
    } else {
        PrivacyNoticeHeader.innerHTML = 'Privacy Notice<span>.</span>';
        PrivacyNoticeHeaderDes.textContent = 'we offer a variety of financing solutions to cater to your personal needs with hassle-free applications and simple documents requirements.';
    }
}

function updateProtectionNotice(language) {
    if (language === 'bm') {
        ProtectionNotice.textContent = 'Notis Privasi';
        One.innerHTML = 'Notis ini dikeluarkan oleh <strong>iconeverestcredit.com.my (Company)</strong> (“<strong>Kami</strong>” atau “<strong>iconeverestcredit.com.my</strong>”) sebagai pengguna data menurut Akta Perlindungan Data Peribadi 2010 (“<strong>Akta</strong>”), dan Notis ini mesti dikenakan kepada kamu sebagai subjek data.';
        Two.innerHTML = 'Bagi tujuan Notis ini, ungkapan “<strong>data peribadi</strong>”, “<strong>data peribadi sensitif</strong>”, “<strong>subjek data</strong>”, “<strong>pengguna data</strong>” dan “<strong>pemproses data</strong>” mempunyai erti yang sebagaimana ditakrifkan dalam Akta tersebut.';
        Three.textContent = 'Kamu dengan ini memberi kebenaran kepada kami untuk mengumpul, merekod, memegang, menyimpan, menggunakan dan/atau memproses data peribadi dan data peribadi sensitif kamu. Kebenaran ini mesti kekal digunakan sehingga kami menerima notis pembatalan keberanaran bertulis daripada kamu';
        Four.textContent = 'Kami berhak mengikut budi bicara kami pada bila-bila masa untuk menolak untuk membekalkan, atau menggantungkan dan/atau memberhentikan, dengan serta-merta, mana-mana atau semua perkhidmatan kami kepada kamu sekiranya kamu enggan memberi atau menarik balik atau menolak kebenaran yang dirujuk di dalam perenggan 3, atau mengehadkan pemproses data kamu.';
        Five.textContent = 'Kami boleh mengumpul, merekod, memegang, menyimpan, menggunakan dan/atau sebaliknya memproses data peribadi kamu dalam apa bentuk sama ada secara dalam salinan keras, electronik atau sebaliknya. Maklumat yang dihantar kepada kami boleh disimpan dan dihantar ke server kami di Malaysia. Kamu memberi kebenaran terhadap penghantaran rentas sempadan data peribadi dan data peribadi sensitif kamu untuk tujuan-tujuan yang dinyatakan dalam perenggan 9 di bawah.';
        Six.textContent = 'Data peribadi termasuk tetapi tidak terhad kepada nama, alamat, salinan dan butir-butir dokumen pengenalan, butir-butir talian, butir-butir akaun bank, sejarah pekerjaan, kredit dan rujukan semak, status perkahwinan, status kesihatan, pensabitan kesalahan atau pendakwaan, butir-butir kewangan peribadi dan keselamatan social. Kami juga boleh mengumpul, merekod, memegang, menyimpan dan/atau memproses data berikut: maklumat peranti, maklumat log seperti tarikh, masa dan tempoh bagi setiap kunjungan ke laman web kami, sejarah pelayaran, alamat protokol internet, cookies dan maklumat lokasi. Kamu boleh menolak penerimaan cookies tetapi kamu tidak dapat mengakses ke bahagian atau keistimewaan laman web kami jika kamu menolak penerimaan cookies.';
        Seven.textContent = 'Kamu memberi kebenaran pada kami untuk mengumpul, merekod, memegang, menyimpan, menggunakan dan/atau sebaliknya memproses maklumat kamu dari sumber-sumber lain dan kamu memberi kuasa yang tidak boleh ditarikbalik kepada kami untuk memproses mana-mana maklumat kamu yang kami mungkin memerlukan daripada mana-mana sumber. Tanpa menjejaskan keumuman di atas, kami boleh mengumpul atau sebaliknya memproses maklumat kamu daripada mana-mana pemeriksaan latar belakang pihak ketiga, mana-mana agensi pelaporan kredit, mana-mana pengamal perubatan atau makmal, mana-mana pihak berkuasa kawal selia, agensi, jabatan kerajaan dan mana-mana pihak berkuasa (seperti BRIM), depositori pusat atau ejen depositori, untuk tujuan-tujuan berikut:';
        SevenOne.textContent = 'untuk menjalankan penyemakan kredit dan/atau penyemakan litigasi terhadap kamu;';
        SevenTwo.textContent = 'untuk mendapatkan mana-mana maklumat yang berkaitan dengan tahap kesihatan kamu;';
        SevenThree.textContent = 'untuk mendapatkan mana-mana maklumat yang berkaitan dengan kecerdasan kredit, profil dan maklumat kredit lain;';
        SevenFour.textContent = 'untuk mendapatkan dan mengesahkan mana-mana maklumat tentang kamu yang kami mengikut budi bicara kami dianggap sesuai, termasuk tujuan untuk mematuhi undang-undang anti-pencucian wang; dan';
        SevenFive.textContent = 'untuk mendedahkan mana-mana maklumat dan data yang berkaitan dengan kamu kepada Bank Negara Malaysia, mana-mana kerajaan atau agensi kawal selia atau pihak berkuasa, mana-mana biro kredit, mana-mana agensi pelaporan kredit, dan mana-mana orang lain kepada sesiapa pendedahan adalah dibenarkan dan/atau diperlukan bawah undang-undang.';
        Eight.textContent = 'Pemproses data termasuk mana-mana orang atau organisasi yang bukan pengguna data yang memproses data peribadi bagi pihak kami dan/atau atas arahan kami. Kamu memberi kebenaran bahawa kami boleh melantik mana-mana pemproses data atas pilihan kami untuk memproses data peribadi dan data peribadi sensitif kamu.';
        Nine.textContent = 'Kamu dengan ini mengaku, mengesah dan bersetuju bahawa kami boleh mengumpul, merekod, memegang, menyimpan, menggunakan dan/atau sebaliknya memproses data peribadi kamu untuk tujuan-tujuan berikut:';
        NineOne.textContent = 'dalam segala perkara yang berkaitan dengan kontrak yang dibuat atau akan dibuat di antara kamu dengan kami;';
        NineTwo.textContent = 'untuk tujuan memproses permohonan, permintaan dan/atau pertanyaan kamu;';
        NineThree.textContent = 'untuk tujuan membekalkan perkhidmatan kami kepada kamu;';
        NineFour.textContent = 'untuk tujuan kawalan dalaman dan pengurusan risiko;';
        NineFive.textContent = 'untuk menjalankan analisis dan penilaian laman web dan perkhidmatan kami supaya membantu kami mempertingkatkan laman web dan perkhidmatan kami;';
        NineSix.textContent = 'memantau pematuhan terhadap kontrak di perenggan (a) dan peraturan-peraturan dan dasar-dasar kami yang berkuatkuasa pada masa berkenaan, penggunaan laman web kami dan mana-mana undangundang lain yang berkenaan;';
        NineSeven.textContent = 'mematuhi keperluan pematuhan dan pendedahan mana-mana dan semua jabatan kerajaan dan/atau separa-kerajaan, agensi, badan-badan kawal selia dan/atau berkanun;';
        NineEight.textContent = 'mematuhi apa-apa obligasi undang-undang yang mengikat kami di bawah mana-mana undang-undang, kaedah, peraturan, undang-undang kecil, perintah, garis panduan, arahan, dasar dan apa-apa kehendak lain yang berkuatkuasa dan seperti yang dipinda dari semasa ke semasa;';
        NineNine.textContent = 'menguatkuasakan hak kami di bawah kontrak di perenggan (a) dan peraturan-peraturan dan dasardasar kami berkuatkuasa pada masa berkenaan, penggunaan laman web kami atau mana-mana undang-undang lain yang berkenaan untuk mempertahankan hak-hak kami;';
        NineTen.textContent = 'bagi tujuan penyimpanan rekod dalam perjalanan biasa perniagaan kami;';
        NineEleven.textContent = 'bagi tujuan mengedar , menghantar dan/atau menyampai kepada kamu, dengan apa-apa cara (termasuk e-mel, khidmat pesanan ringkas , mel biasa dan cara-cara lain), bahan promosi (termasuk produk-produk , perkhidmatan, pelancaran baru , acara akan datang, promosi, iklan, pemasaran dan bahan-bahan komersial) yang berhubung dengan perkhidmatan kami; dan';
        NineTwelve.textContent = 'bagi apa-apa tujuan yang berkaitan atau berhubung dengan perniagaan kami.';
        Ten.textContent = 'Data peribadi kamu yang kami pegang akan disulitkan dan kami boleh memberikan maklumat tersebut kepada pihak-pihak di bawah (“Pihak Ketiga”) untuk tujuan-tujuan yang dinyatakan dalam perenggan 9 di atas:';
        TenOne.textContent = 'affiliate kami dan syarikat-syarikat yang berkaitan dengan kami (sama ada di Malaysia atau bidangbidang kuasa lain);';
        TenTwo.textContent = 'pemegang serah hak kami;';
        TenThree.textContent = 'mana-mana orang yang kami mempunyai kewajipan untuk membuat pendedahan kepadanya di bawah undang-undang, kaedah, peraturan, undang-undang kecil, perintah, garis panduan, arahan, dasar;';
        TenFour.textContent = 'mana-mana mahkamah dan/atau pegawai mahkamah;';
        TenFive.textContent = 'juruaudit, jurukira dan penasihat cukai kami;';
        TenSix.textContent = 'penasihat undang-undang dan profesional pematuhan kami;';
        TenSeven.textContent = 'bank-bank kami; dan';
        TenEight.textContent = 'profesional penasihat, pembekal perkhidmatan dan vendor kami.';
        TenTen.textContent = 'Kamu memberi kebenaran bahawa kami boleh mendedahkan data peribadi dan data peribadi sensitif kamu kepada mana-mana Pihak Ketiga untuk tujuan-tujuan yang dinyatakan dalam perenggan 9 di atas.';
        Eleven.textContent = 'Kamu boleh meminta akses kepada dan membuat pembetulan data peribadi kamu dan/atau mengehadkan pemprosesan data peribadi kamu, atau membuat sebarang pertanyaan atau aduan berkenaan data peribadi dan data peribadi sensitif kamu, dengan menghubungi kami di inquiry@bpartnergroup.com. Namun, kami boleh menolak permintaaan kamu untuk mengakses data kamu seperti yang dibekalkan di dalam Akta.';
        Twelve.textContent = 'Kamu bertanggungjawab untuk memastikan data peribadi yang kamu berikan kami adalah tepat, lengkap dan tidak mengelirukan dan data peribadi tersebut adalah terkini, dan kamu hendaklah dengan segera memaklumkan kami sekiranya data peribadi tidak tepat, tidak lengkap, mengelirukan atau bukan terkini, dan kamu hendaklah memberikan kami data peribadi yang benar, tepat, lengkap dan dikemaskini.';
        Thirteen.textContent = 'Sekiranya kamu memberikan kami data peribadi, data peribadi sensitif atau maklumat mengenai orang lain, kamu mengesah bahawa dia telah melantik kamu untuk bertindak untuk dia, untuk bersetuju kepada pemprosesan data peribadinya selaras dengan Notis ini dan untuk menerima notis perlindungan data bagi pihaknya.';
        Fourteen.textContent = 'Kami akan menyimpan data kamu untuk selama yang diperlukan untuk kami mamatuhi obligasi kami di bawah kontrak di antara kami atau yang dikenakan di bawah undang-undang, atau untuk memenuhi tujuantujuan yang dinyatakan di Notis ini atau seperti yang diperlukan untuk menunaikan apa-apa kehendak undang-undang, peraturan dan/atau perakaunan. Kami akan memadamkan atau memusnahkan data peribadi kamu selama-lamanya sekiranya data peribadi kamu tidak lagi diperlukan untuk memenuhi tujuantujuan yang dinyatakan dalam Notis ini.';
        Fifteen.textContent = 'Kami mengekalkan hak untuk memindah Notis ini pada bila-bila masa dan dari semasa ke semasa dan satu notis mengenai pemindahan akan disediakan untuk kamu melalui notis bertulis atau cara yang lain yang kami anggap sesuai. Kamu perlu menghantarkan kami satu pembatalan kebenaran bertulis sekiranya kamu tidak bersetuju dengan kami terus memproses data peribadi kamu selaras dengan Notis yang telah disemak semula.';
        Sixteen.textContent = 'Sekiranya Notis ini tersedia dalam lebih daripada satu bahasa, versi Bahasa Inggeris akan dianggap sebagai versi utama dan baki akan dianggap sebagai terjemahan dari versi Bahasa Inggeris, dan versi Bahasa Inggeris akan diguna pakai jika terdapat sebarang konflik, tidak konsisten atau percanggahan antara pelbagai Bahasa.';
        Seventeen.textContent = 'Sekiranya anda ingin meminta akses ke Maklumat Peribadi anda, meminta perubahan / pembetulan Maklumat Peribadi tersebut atau memberikan maklum balas kepada murahcredit.com mengenai Pemberitahuan Privasi ini, anda boleh menghubungi kami di alamat berikut, no telefon. dan / atau e-mel: –';
        
    } else {
        ProtectionNotice.textContent = 'Personal Data Protection Notice';
        One.innerHTML = 'This Notice is issued by <strong>iconeverestcredit.com.my (Company)</strong> (“<strong>we</strong>”, “<strong>our</strong>”, “<strong>us</strong>” or “<strong>iconeverestcredit.com.my</strong>”) as a data user pursuant to the Personal Data Protection Act 2010 (“<strong>PDPA</strong>”), and it shall apply to you as a data subject.';
        Two.innerHTML = 'For the purposes of this Notice, the expression “<strong>personal data</strong>”, “<strong>sensitive personal data</strong>”, “<strong>data subject</strong>”, “<strong>data user</strong>” and “<strong>data processor</strong>” shall have the meaning as defined in the PDPA.';
        Three.textContent = 'You hereby consent that we may collect, record, hold, store, use and/or otherwise process your personal data and sensitive personal data. This consent shall remain applicable until we receive a written revocation of consent from you.';
        Four.textContent = 'We reserve the right at our sole discretion at any time to refuse to provide or immediately suspend and/or terminate, any or all of our services to you in the event you refuse to grant or withdraw or revoke the consent referred to in paragraph 3, or limit the processing of your data.';
        Five.textContent = 'We may collect, record, hold, store, use and/or otherwise process your personal data in any medium whether in hard copy, electronically or otherwise. Information submitted to us may be saved and transmitted to our servers in Malaysia. You hereby consent to a cross-border transfer of your personal data and sensitive personal data for the purposes set out in paragraph 9 below.';
        Six.textContent = 'Personal data includes but not limited to name, address, copies and details of identification documents, contact details, details of bank account, employment history, credit and references check, marital status, health status, commission or alleged commission of offence, personal financial and social security detail. We may also collect, record, hold, store and/or process the following information: device information, log information such as date, time, and length of your each visit to our website, browsing history, internet protocol address, cookies and location information. You may refuse to accept the cookies. However, you may not be able to access to certain sections or features of our website if you refuse to accept the cookies.';
        Seven.textContent = 'You hereby consent that we may also collect, record, hold, store, use and/or otherwise process your information from other sources and you hereby irrevocably authorize us to process any of your information which we may require from any sources. Without prejudice to the generality of the foregoing, we may collect or otherwise process your information from any third party background checks, any credit reporting agency, any medical practitioner or laboratory, any regulatory authorities, agencies, government department and any authority (such as BRIM), central depository or depository agent, for the following purposes:';
        SevenOne.textContent = 'to conduct credit checks and/or litigation checks on you;';
        SevenTwo.textContent = 'to obtain any information relating to your health status;';
        SevenThree.textContent = 'to obtain any information relating to your credit intelligence, profile and other credit information;';
        SevenFour.textContent = 'to obtain and verify any information about you as we in our sole discretion shall deem fit, including for the purpose of complying with anti-money laundering laws; and';
        SevenFive.textContent = 'to disclose any information and data relating to you to the Central Bank of Malaysia, any governmental or regulatory agency or authority, any credit bureau, any credit reporting agency, and any other person to whom disclosure is permitted and/or required by law.';
        Eight.textContent = 'Data processors include any person or organisation that is not a data user that processes personal data on our behalf and/or on our instructions. You hereby consent that we may appoint any data processors of our choice to process your personal data and sensitive personal data.';
        Nine.textContent = 'You hereby acknowledge, confirm and consent that we may collect, record, hold, store, use and/or otherwise process your personal data for the following purposes:';
        NineOne.textContent = 'in all matters pertaining to the contract entered or to be entered into between you and us;';
        NineTwo.textContent = 'for the purposes of processing your application, request and/or queries;';
        NineThree.textContent = 'for the purposes of providing you with our services;';
        NineFour.textContent = 'for the purposes of internal control and risk management;';
        NineFive.textContent = 'to conduct analysis and evaluation of our website and services in order to assist us to improve our website and services;';
        NineSix.textContent = 'monitoring compliance with the agreement in paragraph (a) and our rules and policies for the time being in force, your access to our website and any other applicable laws;';
        NineSeven.textContent = 'complying with the compliance and disclosure requirements of any and all governmental and/or quasigovernment departments, agencies, regulatory and/or statutory bodies;';
        NineEight.textContent = 'complying with any legal obligation binding on us under any law, rule, regulation, by-law, order, guideline, directive, policy and such other requirements in force and as amended from time to time;';
        NineNine.textContent = 'enforcing our rights under the agreement in paragraph (a) and our rules and policies for the time being in force, your access to our website, or any other applicable laws to defend our rights;';
        NineTen.textContent = 'for the purposes of record-keeping in the ordinary course of our business;';
        NineEleven.textContent = 'for the purposes of circulating, transmitting and/or delivering to you, by any means (including emails, short messaging services, regular mails and other means), promotional materials (including products, services, new launches, upcoming events, promotions, advertisements, marketing and commercial materials) relating to our services; and';
        NineTwelve.textContent = 'for any purposes relating to or in connection with our business.';
        Ten.textContent = 'Your personal data in our retention will be kept confidential and we may provide such information to the following parties (“Third Party”) for the purposes set out in paragraph 9 above:';
        TenOne.textContent = 'our affiliates and associated companies (whether in Malaysia or other jurisdictions);';
        TenTwo.textContent = 'our assignee;';
        TenThree.textContent = 'any person to whom we are under an obligation to make disclosure under law, rule, regulation, by-law, order, guideline, directive, Notice;';
        TenFour.textContent = 'any court and/or officer of the court;';
        TenFive.textContent = 'our auditors, accountants and tax advisers;';
        TenSix.textContent = 'our legal advisers and compliance professionals;';
        TenSeven.textContent = 'our banks; and';
        TenEight.textContent = 'our professional advisers, service providers and vendors.';
        TenTen.textContent = 'You hereby consent that we may disclose your personal data and sensitive personal data to any Third Parties for the purposes set out in paragraph 9 above.';
        Eleven.textContent = 'You may request access to and correction of, your personal data and/or limit the processing of your personal data, or make any enquiries or complaints in respect of your personal data and sensitive personal data, by contacting us at inquiry@bpartnergroup.com. However, we may refuse your data access request in accordance with the PDPA.';
        Twelve.textContent = 'You are responsible for ensuring that the personal data that you provide to us is accurate, complete and not misleading and that such personal data is kept up-to-date, and you shall promptly keep us informed in the event the personal data is inaccurate, incomplete, misleading or not up-to-date and you shall provide us the true, accurate, complete, and updated personal data.';
        Thirteen.textContent = 'If you give us personal data, sensitive personal data or information about another person, you confirm that he/she has appointed you to act for him/her, to consent to the processing of his/her personal data in accordance with this Notice and to receive on his/her behalf any data protection notices.';
        Fourteen.textContent = 'We will retain your data for as long as is necessary for us to comply with our obligations under any contract between us or imposed under law, or for the fulfilment of the purposes set out in this Notice or as is required to satisfy any legal, regulatory and/or accounting requirements. We will permanently delete or destroy your personal data if your personal data is no longer necessary for the fulfilment of the purposes set out in this Notice.';
        Fifteen.textContent = 'We reserve the right to amend this Notice at any time and from time to time and a notice of such amendments will be made available to you through written notice or other mode which we view appropriate and suitable. You shall send us a written revocation of consent if you do not agree to us continue processing your personal data in accordance with the revised Notice.';
        Sixteen.textContent = 'In the event this Notice is available in more than one language, the English version shall be treated as the principal version and the remaining shall be treated as translations from the English version, and the English version shall prevail in the event of any conflict, inconsistency or discrepancy between the various languages.';
        Seventeen.textContent = 'Should you wish to request for access to your Personal Information, request for amendment/correction of such Personal Information or provide any feedback to murahcredit.com on this Privacy Notice, you may contact us at the following address, phone no. and/or e-mail:-';

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