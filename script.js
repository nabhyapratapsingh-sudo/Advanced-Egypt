function selectRadarPoint(locationName) {
    const statusText = document.getElementById('radarStatus');
    const detailsText = document.getElementById('radarDetails');
    const detailsRoman = document.getElementById('radarDetailsRoman');
    
    if (!statusText || !detailsText || !detailsRoman) return;

    statusText.textContent = "اخترت: " + locationName;
    
    if (locationName === 'أهرامات الجيزة') {
        detailsText.textContent = 'مكان قديم جداًوممتع لرؤية الأهرامات الجيزة.';
        detailsRoman.textContent = 'Makan qadeem geddan wa mofeed lel aela.';
    } else if (locationName === 'شرم الشيخ') {
        detailsText.textContent = 'مدينة ساحلية فيهابحر ورمل وألعابمائية.';
        detailsRoman.textContent = 'Madeena saheleya feha bahr wa raml.';
    } else if (locationName === 'الأقصر') {
        detailsText.textContent = 'مدينة فيها معابدكثيرة ونركب فيها المنطاد.';
        detailsRoman.textContent = 'Madeena feha maabed wa mentad.';
    }
}

function askAI(topic) {
    const chatWindow = document.getElementById('chatWindow');
    if (!chatWindow) return;

    let userText = "";
    let userRoman = "";
    let botReply = "";
    let botRoman = "";

    switch(topic) {
        case 'info':
            userText = "أريد معلومات عنمصر.";
            userRoman = "Areed maloomat an Masr.";
            botReply = "مصر فيها الأهراماتوالبحر الأحمر ونهر النيلوالأقصر!";
            botRoman = "Masr feha el ahramat wa el bahr wa el neel wa el uqsur!";
            break;
        case 'family':
            userText = "هل الأماكنحلوة للعائلة؟";
            userRoman = "Hal el amaken helwa lel aela?";
            botReply = "نعم! يمكنك ركوبالجمل والسباحة مع عائلتك.";
            botRoman = "Naam! Yomkenak rakob el gamal wa el sebaha.";
            break;
        case 'activities':
            userText = "ماذا نفعل هناك؟";
            userRoman = "Maza nafal honak?";
            botReply = "التقاط الصور، السباحة،ورؤية الآثار القديمة!";
            botRoman = "Elteqat el soowar, el sebaha, wa royat el athar!";
            break;
        default:
            return;
    }

    // Append User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'message user-message';
    
    const userTextSpan = document.createElement('span');
    userTextSpan.textContent = userText;
    
    const userRomanDiv = document.createElement('div');
    userRomanDiv.className = 'roman-small';
    userRomanDiv.style.color = '#000';
    userRomanDiv.textContent = userRoman;

    userDiv.appendChild(userTextSpan);
    userDiv.appendChild(userRomanDiv);
    chatWindow.appendChild(userDiv);

    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Append Bot Message with Delay
    setTimeout(function() {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot-message';
        
        const botTextSpan = document.createElement('span');
        botTextSpan.textContent = botReply;

        const botRomanDiv = document.createElement('div');
        botRomanDiv.className = 'roman-small';
        botRomanDiv.textContent = botRoman;

        botDiv.appendChild(botTextSpan);
        botDiv.appendChild(botRomanDiv);
        chatWindow.appendChild(botDiv);
        
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 600);
}

const modalDetails = {
    giza: {
        title: "أهرامات الجيزة",
        titleRoman: "Ahramat El Giza",
        desc: "فيها الأهرامات الثلاثةوأبو الهول. مكان ممتازللصور.",
        descRoman: "Feha el ahramat wa Abu El Hol. Makan momtaz lel soowar."
    },
    museum: {
        title: "المتحف المصري",
        titleRoman: "El Mathaf El Masri",
        desc: "فيه ذهب الملكتوت وتماثيل قديمةجميله جداً.",
        descRoman: "Feeh zahab el malek Tut wa tamatheel gameela."
    },
    nile: {
        title: "نهر النيل",
        titleRoman: "Nahr El Neel",
        desc: "نركب المركب ونستمتعبالهواء والغروب.",
        descRoman: "Narkab el markeb wa nastamte bel hawa."
    },
    sharm: {
        title: "شرم الشيخ",
        titleRoman: "Sharm El Sheikh",
        desc: "مدينة فيها بحرونستمتع بالسباحة والأسماك.",
        descRoman: "Madeena feha bahr wa nastamte bel sebaha."
    },
    luxor: {
        title: "الأقصر",
        titleRoman: "El Uqsur",
        desc: "فيها معابد فرعونيةوالمنطاد الهوائي الكبير.",
        descRoman: "Feha maabed ferawneya wa mentad."
    }
};

function openModal(destinationKey) {
    const modal = document.getElementById('infoModal');
    const title = document.getElementById('modalTitle');
    const titleRoman = document.getElementById('modalTitleRoman');
    const desc = document.getElementById('modalDesc');
    const descRoman = document.getElementById('modalDescRoman');

    if (!modal || !modalDetails[destinationKey]) return;

    if (title) title.textContent = modalDetails[destinationKey].title;
    if (titleRoman) titleRoman.textContent = modalDetails[destinationKey].titleRoman;
    if (desc) desc.textContent = modalDetails[destinationKey].desc;
    if (descRoman) descRoman.textContent = modalDetails[destinationKey].descRoman;

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};