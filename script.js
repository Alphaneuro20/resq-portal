// ==========================================
// 1. CONTENT DATA (EN/HI/MR)
// ==========================================
const medicalData = {
    cpr: {
        en: `<h3>CPR Guide</h3><img src="./cpr.jpg" class="guide-img"><div class="intro-box"><strong>Summary:</strong> Emergency procedure for cardiac arrest. Keeps oxygenated blood flowing to the brain until medical help arrives.</div><div class="step-box" style="border-top-color: #d32f2f;"><h4>⚡ Rhythm Assistant</h4><div id="pacer-ui" class="pacer-box" style="display:none; text-align:center; margin:15px 0;"><div id="pulse-visual" style="width:60px; height:60px; background:#ffebee; border:4px solid #d32f2f; border-radius:50%; margin:0 auto; display:flex; align-items:center; justify-content:center;"><span style="font-size:24px;">💓</span></div><div id="cpr-text" style="font-weight:bold; margin-top:10px; color:#d32f2f; font-size:1.2rem; transition:0.1s;">PUSH! PUSH!</div></div><button class="start-btn" onclick="togglePacer()" style="width:100%; padding:12px; background:#d32f2f; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer;">▶ Start Pacer (110 BPM)</button></div><div class="step-box"><h4>1. Check Responsiveness</h4><p>Shake person gently. Shout "Are you okay?". Check breathing for 10s.</p></div><div class="step-box"><h4>2. Call 112</h4><p>Call immediately. Point to someone: "Call an Ambulance!".</p></div><div class="step-box"><h4>3. Hand Position</h4><p>Center of chest (nipple line). Interlock fingers.</p></div><div class="step-box"><h4>4. Push Hard & Fast</h4><p>Push down 2 inches. Let chest recoil. 100-120 BPM.</p></div>`,
        hi: `<h3>सीपीआर (CPR) गाइड</h3><img src="./cpr.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> कार्डियक अरेस्ट के लिए आपातकालीन प्रक्रिया। यह मस्तिष्क तक ऑक्सीजन युक्त रक्त पहुंचाती है।</div><div class="step-box" style="border-top-color: #d32f2f;"><h4>⚡ रिदम असिस्टेंट</h4><div id="pacer-ui" class="pacer-box" style="display:none; text-align:center; margin:15px 0;"><div id="pulse-visual" style="width:60px; height:60px; background:#ffebee; border:4px solid #d32f2f; border-radius:50%; margin:0 auto; display:flex; align-items:center; justify-content:center;"><span style="font-size:24px;">💓</span></div><div id="cpr-text" style="font-weight:bold; margin-top:10px; color:#d32f2f; font-size:1.2rem; transition:0.1s;">दबाएं! दबाएं!</div></div><button class="start-btn" onclick="togglePacer()" style="width:100%; padding:12px; background:#d32f2f; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer;">▶ पेसर शुरू करें</button></div><div class="step-box"><h4>1. प्रतिक्रिया जांचें</h4><p>व्यक्ति को हिलाएं। जोर से पूछें "क्या आप ठीक हैं?".</p></div><div class="step-box"><h4>2. 112 कॉल करें</h4><p>तुरंत एम्बुलेंस बुलाएं।</p></div><div class="step-box"><h4>3. हाथ की स्थिती</h4><p>छाती के बीच में। उंगलियां लॉक करें।</p></div><div class="step-box"><h4>4. जोर से दबाएं</h4><p>2 इंच गहरा। 100-120 बार/मिनट।</p></div>`,
        mr: `<h3>सीपीआर (CPR) मार्गदर्शक</h3><img src="./cpr.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> हृदयविकाराच्या झटक्यासाठी आपत्कालीन प्रक्रिया. मेंदूला रक्तपुरवठा चालू ठेवते.</div><div class="step-box" style="border-top-color: #d32f2f;"><h4>⚡ रिदम असिस्टंट</h4><div id="pacer-ui" class="pacer-box" style="display:none; text-align:center; margin:15px 0;"><div id="pulse-visual" style="width:60px; height:60px; background:#ffebee; border:4px solid #d32f2f; border-radius:50%; margin:0 auto; display:flex; align-items:center; justify-content:center;"><span style="font-size:24px;">💓</span></div><div id="cpr-text" style="font-weight:bold; margin-top:10px; color:#d32f2f; font-size:1.2rem; transition:0.1s;">दाबा! दाबा!</div></div><button class="start-btn" onclick="togglePacer()" style="width:100%; padding:12px; background:#d32f2f; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer;">▶ पेसर सुरू करा</button></div><div class="step-box"><h4>1. प्रतिसाद तपासा</h4><p>व्यक्तीला हलवा. "तुम्ही ठीक आहात का?" विचारा.</p></div><div class="step-box"><h4>2. 112 कॉल करा</h4><p>त्वरित रुग्णवाहिका बोलवा.</p></div><div class="step-box"><h4>3. हाताची स्थिती</h4><p>छातीच्या मध्यभागी. बोटे लॉक करा.</p></div><div class="step-box"><h4>4. जोरात दाबा</h4><p>२ इंच खोल. १००-१२० वेळा/मिनिट.</p></div>`
    },
    snake: {
        en: `<h3>Snake Bite</h3><img src="./snake.jpg" class="guide-img"><div class="intro-box"><strong>Summary:</strong> Venom spread must be slowed. Keep patient calm and still.</div><div class="step-box"><h4>1. Calm & Still</h4><p>Do NOT run. Panic spreads venom faster. Lay the person down.</p></div><div class="step-box"><h4>2. Immobilize Limb</h4><p>Use a splint or bandage to stop movement, but do not cut off circulation.</p></div><div class="step-box"><h4>3. Remove Items</h4><p>Remove rings, watches, or tight clothing near the bite before swelling starts.</p></div><div class="step-box"><h4>4. Transport</h4><p>Carry the patient to the hospital. Do NOT let them walk.</p></div><div class="warning-box">⚠️ NO cutting, sucking venom, or ice.</div>`,
        hi: `<h3>सांप का काटना</h3><img src="./snake.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> जहर फैलने से रोकें। मरीज को शांत रखें।</div><div class="step-box"><h4>1. शांत रहें</h4><p>दौड़ें नहीं। घबराने से जहर तेजी से फैलता है।</p></div><div class="step-box"><h4>2. अंग स्थिर रखें</h4><p>लकड़ी या पट्टी से अंग को हिलने से रोकें।</p></div><div class="step-box"><h4>3. चीजें हटाएं</h4><p>अंगूठी, घड़ी या टाइट कपड़े तुरंत उतार दें।</p></div><div class="step-box"><h4>4. अस्पताल ले जाएं</h4><p>मरीज को उठाकर ले जाएं। उसे चलने न दें।</p></div><div class="warning-box">⚠️ जहर चूसें नहीं। बर्फ न लगाएं।</div>`,
        mr: `<h3>सर्पदंश</h3><img src="./snake.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> विष पसरणे थांबवा. रुग्णाला शांत ठेवा.</div><div class="step-box"><h4>1. शांत राहा</h4><p>धावू नका. घाबरल्याने विष वेगाने पसरते.</p></div><div class="step-box"><h4>2. अवयव स्थिर ठेवा</h4><p>काठी किंवा पट्टी बांधून हालचाल थांबवा.</p></div><div class="step-box"><h4>3. वस्तू काढा</h4><p>अंगठी, घड्याळ किंवा घट्ट कपडे त्वरित काढा.</p></div><div class="step-box"><h4>4. रुग्णालयात न्या</h4><p>रुग्णाला उचलून न्या. त्याला चालू देऊ नका.</p></div><div class="warning-box">⚠️ विष चोखू नका. बर्फ लावू नका.</div>`
    },
    fracture: {
        en: `<h3>Fracture (Broken Bone)</h3><img src="./fracture.jpg" class="guide-img"><div class="intro-box"><strong>Summary:</strong> Prevent movement to avoid nerve damage.</div><div class="step-box"><h4>1. Stop Bleeding</h4><p>Apply pressure to wound edges if bone pierced skin.</p></div><div class="step-box"><h4>2. Immobilize</h4><p>Do NOT try to push bone back. Tie a splint (stick/board) to the limb.</p></div><div class="step-box"><h4>3. Ice Pack</h4><p>Apply ice wrapped in cloth to reduce swelling.</p></div><div class="step-box"><h4>4. Elevate</h4><p>Raise limb slightly if possible to reduce throbbing.</p></div>`,
        hi: `<h3>हड्डी टूटना</h3><img src="./fracture.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> अंग को हिलाएं नहीं ताकि नस न दबे।</div><div class="step-box"><h4>1. खून रोकें</h4><p>अगर घाव है तो किनारों पर दबाव डालें।</p></div><div class="step-box"><h4>2. स्थिर रखें</h4><p>हड्डी को बिठाने की कोशिश न करें। लकड़ी से बांधें।</p></div><div class="step-box"><h4>3. बर्फ लगाएं</h4><p>सूजन कम करने के लिए कपड़े में बर्फ लगाकर सेकें।</p></div><div class="step-box"><h4>4. ऊपर उठाएं</h4><p>अंग को थोड़ा ऊपर रखें।</p></div>`,
        mr: `<h3>हाड मोडणे (फ्रॅक्चर)</h3><img src="./fracture.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> हालचाल नको. मज्जातंतूंचे नुकसान टाळा.</div><div class="step-box"><h4>1. रक्तस्राव थांबवा</h4><p>जखम असल्यास बाजूने दाबा.</p></div><div class="step-box"><h4>2. स्थिर ठेवा</h4><p>हाड बसवण्याचा प्रयत्न करू नका. काठीने बांधा.</p></div><div class="step-box"><h4>3. बर्फ लावा</h4><p>सूज कमी करण्यासाठी बर्फाने शेक द्या.</p></div><div class="step-box"><h4>4. उंच ठेवा</h4><p>शक्य असल्यास अवयव थोडा वर ठेवा.</p></div>`
    },
    bleeding: { en: `<h3>Severe Bleeding</h3><img src="./bleeding.jpg" class="guide-img"><div class="intro-box"><strong>Summary:</strong> Stop blood loss immediately using pressure.</div><div class="step-box"><h4>1. Pressure</h4><p>Apply direct pressure with clean cloth.</p></div><div class="step-box"><h4>2. Elevate</h4><p>Raise limb above heart level.</p></div><div class="step-box"><h4>3. Tourniquet</h4><p>Use only if bleeding won't stop. Tie tight above wound.</p></div>`, hi: `<h3>गंभीर रक्तस्राव</h3><img src="./bleeding.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> खून तुरंत रोकें।</div><div class="step-box"><h4>1. दबाव</h4><p>साफ कपड़े से जोर से दबाएं।</p></div><div class="step-box"><h4>2. ऊपर उठाएं</h4><p>दिल के स्तर से ऊपर रखें।</p></div>`, mr: `<h3>रक्तस्त्राव</h3><img src="./bleeding.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> रक्तस्राव त्वरित थांबवा.</div><div class="step-box"><h4>1. दाब द्या</h4><p>स्वच्छ कपड्याने जोरात दाबा.</p></div>` },
    burn: { en: `<h3>Burns</h3><img src="./burn.jpg" class="guide-img"><div class="intro-box"><strong>Summary:</strong> Cool immediately to stop tissue damage.</div><div class="step-box"><h4>1. Cool Water</h4><p>Run cool tap water for 20 mins. NO ICE.</p></div><div class="step-box"><h4>2. Remove Items</h4><p>Take off jewelry/tight clothes near burn.</p></div><div class="step-box"><h4>3. Cover</h4><p>Use cling film or clean cloth. Do not wrap tight.</p></div>`, hi: `<h3>जलना</h3><img src="./burn.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> तुरंत ठंडा करें।</div><div class="step-box"><h4>1. ठंडा पानी</h4><p>20 मिनट तक पानी डालें। बर्फ नहीं।</p></div>`, mr: `<h3>भाजणे</h3><img src="./burn.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> त्वरित थंड करा.</div><div class="step-box"><h4>1. थंड पाणी</h4><p>२० मिनिटे पाणी ओता. बर्फ नको.</p></div>` },
    heatstroke: { en: `<h3>Heatstroke</h3><img src="./heatstroke.jpg" class="guide-img"><div class="intro-box"><strong>Summary:</strong> Life-threatening overheating. Needs rapid cooling.</div><div class="step-box"><h4>1. Shade</h4><p>Move indoors or to shade immediately.</p></div><div class="step-box"><h4>2. Cool Down</h4><p>Spray water, fan vigorously, wet cloths on neck.</p></div><div class="step-box"><h4>3. Hydrate</h4><p>Sips of water if conscious. Do not choke.</p></div>`, hi: `<h3>हीटस्ट्रोक</h3><img src="./heatstroke.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> शरीर को तुरंत ठंडा करें।</div><div class="step-box"><h4>1. छांव</h4><p>ठंडी जगह ले जाएं।</p></div><div class="step-box"><h4>2. गीला कपड़ा</h4><p>गर्दन पर रखें और हवा करें।</p></div>`, mr: `<h3>उष्माघात</h3><img src="./heatstroke.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> त्वरित थंड करणे आवश्यक.</div><div class="step-box"><h4>1. सावली</h4><p>सावलीत न्या.</p></div><div class="step-box"><h4>2. थंड करा</h4><p>ओले कापड ठेवा आणि वारा घाला.</p></div>` },
    kit: { en: `<h3>First Aid Kit</h3><img src="./first_aid.jpg" class="guide-img"><div class="intro-box"><strong>Summary:</strong> Essential tools for care.</div><div class="step-box"><h4>1. Antiseptic</h4><p>Clean wounds (Dettol/Savlon).</p></div><div class="step-box"><h4>2. Gauze & Tape</h4><p>Cover wounds and secure dressings.</p></div><div class="step-box"><h4>3. Scissors</h4><p>Cut clothes/tape.</p></div><div class="step-box"><h4>4. ORS</h4><p>Rehydration for heat/shock.</p></div>`, hi: `<h3>फर्स्ट एड किट</h3><img src="./first_aid.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> जरूरी सामान।</div><div class="step-box"><h4>1. एंटीसेप्टिक</h4><p>घाव साफ करें।</p></div><div class="step-box"><h4>2. पट्टी</h4><p>घाव ढकने के लिए।</p></div>`, mr: `<h3>प्रथमोपचार पेटी</h3><img src="./first_aid.jpg" class="guide-img"><div class="intro-box"><strong>सारांश:</strong> आवश्यक साहित्य.</div><div class="step-box"><h4>1. अँटीसेप्टिक</h4><p>जखम साफ करण्यासाठी.</p></div><div class="step-box"><h4>2. बँडेज</h4><p>जखम झाकण्यासाठी.</p></div>` }
};

const uiText = {
    header_sub: { en: "Offline Emergency Response", hi: "ऑफ़लाइन आपातकालीन सेवा", mr: "ऑफलाइन आपत्कालीन सेवा" },
    close_tools: { en: "✖ Close Tools", hi: "✖ बंद करें", mr: "✖ बंद करा" },
    timer: { en: "Incident Timer", hi: "घटना टाइमर", mr: "घटना टायमर" },
    timer_desc: { en: "Start when emergency begins.", hi: "आपातकाल शुरू होने पर चालू करें।", mr: "आणीबाणी सुरू होताच चालू करा." },
    start: { en: "▶ START", hi: "▶ शुरू", mr: "▶ सुरू" },
    stop: { en: "⏹ STOP", hi: "⏹ रुकें", mr: "⏹ थांबा" },
    log: { en: "Event Log", hi: "घटना लॉग", mr: "इव्हेंट लॉग" },
    no_events: { en: "No events recorded.", hi: "कोई घटना दर्ज नहीं।", mr: "कोणतीही नोंद नाही." },
    log_unconscious: { en: "😴 Unconscious", hi: "😴 बेहोश", mr: "😴 बेशुद्ध" },
    log_vomit: { en: "🤮 Vomited", hi: "🤮 उल्टी", mr: "🤮 उलटी" },
    log_cpr: { en: "❤️ CPR Start", hi: "❤️ CPR शुरू", mr: "❤️ CPR सुरू" },
    log_amb: { en: "🚑 Amb. Called", hi: "🚑 एम्बुलेंस", mr: "🚑 रुग्णवाहिका" },
    clear_log: { en: "🗑️ Clear Log", hi: "🗑️ लॉग हटाएं", mr: "🗑️ लॉग पुसा" },
    beacon: { en: "Audio Beacon", hi: "ऑडियो बीकन", mr: "ऑडिओ बीकन" },
    siren: { en: "🚨 LOUD SIREN", hi: "🚨 तेज़ सायरन", mr: "🚨 मोठा सायरन" },
    whistle: { en: "🦅 High Whistle", hi: "🦅 सीटी", mr: "🦅 शिट्टी" },
    silence: { en: "🛑 STOP AUDIO", hi: "🛑 बंद करें", mr: "🛑 बंद करा" },
    my_data: { en: "My Data", hi: "मेरी जानकारी", mr: "माझी माहिती" },
    med_id: { en: "Medical ID & Contacts", hi: "मेडिकल ID और संपर्क", mr: "मेडिकल ID आणि संपर्क" },
    gps: { en: "Share My GPS", hi: "लोकेशन भेजें", mr: "लोकेशन पाठवा" },
    protocols: { en: "Emergency Protocols", hi: "आपातकालीन गाइड", mr: "आपत्कालीन मार्गदर्शक" },
    cpr: { en: "CPR Guide", hi: "CPR गाइड", mr: "CPR मार्गदर्शक" },
    bleeding: { en: "Severe Bleeding", hi: "खून बहना", mr: "रक्तस्त्राव" },
    burn: { en: "Burns & Scalds", hi: "जलना", mr: "भाजणे" },
    heat: { en: "Heatstroke", hi: "लू लगना", mr: "उष्माघात" },
    fracture: { en: "Fractures", hi: "हड्डी टूटना", mr: "हाड मोडणे" },
    snake: { en: "Snake Bite", hi: "सांप काटना", mr: "सर्पदंश" },
    utilities: { en: "Utilities", hi: "उपकरण", mr: "साधने" },
    kit: { en: "First Aid Kit", hi: "फर्स्ट एड किट", mr: "प्रथमोपचार पेटी" },
    sos: { en: "SOS SIGNAL", hi: "SOS सिग्नल", mr: "SOS सिग्नल" },
    back: { en: "⬅ Back", hi: "⬅ पीछे", mr: "⬅ मागे" },
    read_aloud: { en: "🔇 Read Aloud", hi: "🔇 पढ़कर सुनाएं", mr: "🔇 वाचून दाखवा" },
    stop_read: { en: "🔊 Stop", hi: "🔊 बंद करें", mr: "🔊 थांबवा" },
    profile_title: { en: "Medical Profile", hi: "मेडिकल प्रोफाइल", mr: "वैद्यकीय प्रोफाइल" },
    blood_type: { en: "Blood Type:", hi: "ब्लड ग्रुप:", mr: "रक्तगट:" },
    fam_contacts: { en: "Family Contacts", hi: "पारिवारिक संपर्क", mr: "कौटुंबिक संपर्क" },
    prim_contact: { en: "Primary Contact", hi: "प्राथमिक संपर्क", mr: "प्राथमिक संपर्क" },
    save_btn: { en: "💾 Save Data", hi: "💾 सेव करें", mr: "💾 सेव्ह करा" },
    saved_list: { en: "Saved List", hi: "सेव सूची", mr: "सेव्ह केलेली यादी" },
    dir_title: { en: "Emergency Directory", hi: "आपातकालीन नंबर", mr: "आपत्कालीन नंबर" },
    nat_help: { en: "National Helpline", hi: "राष्ट्रीय हेल्पलाइन", mr: "राष्ट्रीय हेल्पलाइन" },
    police: { en: "Police", hi: "पुलिस", mr: "पोलीस" },
    fire: { en: "Fire", hi: "फायर ब्रिगेड", mr: "अग्निशामक दल" },
    ambulance: { en: "Ambulance", hi: "एम्बुलेंस", mr: "रुग्णवाहिका" },
    women: { en: "Women Helpline", hi: "महिला हेल्पलाइन", mr: "महिला हेल्पलाइन" },
    child: { en: "Child Helpline", hi: "बाल हेल्पलाइन", mr: "बाल हेल्पलाइन" },
    road: { en: "Road Accident", hi: "सड़क दुर्घटना", mr: "रस्ता अपघात" },
    senior: { en: "Senior Citizen", hi: "वरिष्ठ नागरिक", mr: "जेष्ठ नागरिक" },
    cyber: { en: "Cyber Crime", hi: "साइबर अपराध", mr: "सायबर गुन्हे" },
    rail: { en: "Railway Help", hi: "रेलवे हेल्पलाइन", mr: "रेल्वे हेल्पलाइन" },
    checklist: { en: "Handover Checklist", hi: "हैंडओवर चेकलिस्ट", mr: "हँडओव्हर चेकलिस्ट" },
    chk_time: { en: "Time of Incident?", hi: "घटना का समय?", mr: "घटनेची वेळ?" },
    chk_age: { en: "Patient Age?", hi: "मरीज की उम्र?", mr: "रुग्णाचे वय?" },
    chk_breathing: { en: "Breathing Normal?", hi: "सांस सामान्य?", mr: "श्वास सामान्य?" },
    chk_bleeding: { en: "Bleeding Controlled?", hi: "खून रुका?", mr: "रक्तस्त्राव थांबला?" },
    chk_allergy: { en: "Allergies?", hi: "एलर्जी?", mr: "काही ॲलर्जी?" },
    chk_meds: { en: "Medications?", hi: "दवाएं?", mr: "औषधे?" }
};

let currentLang = 'en';

// ==========================================
// 2. LANGUAGE LOGIC
// ==========================================
function toggleLanguage() {
    if (currentLang === 'en') currentLang = 'hi';
    else if (currentLang === 'hi') currentLang = 'mr';
    else currentLang = 'en';
    document.getElementById('lang-display').innerText = currentLang === 'en' ? "EN" : (currentLang === 'hi' ? "हिंदी" : "मराठी");
    updateUIText();
}

function updateUIText() {
    document.querySelectorAll('.trans').forEach(el => {
        const key = el.getAttribute('data-key');
        if (uiText[key]) el.innerText = uiText[key][currentLang];
    });
    const guideContent = document.getElementById('guide-content');
    if (!document.getElementById('guide-screen').classList.contains('hidden') && currentGuideType) {
        guideContent.innerHTML = medicalData[currentGuideType][currentLang];
    }
}

// ==========================================
// 3. THEME LOGIC
// ==========================================
const themes = ['light', 'dark', 'semi'];
let currentThemeIndex = 0;

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-btn');
    if (theme === 'light') btn.innerText = "☀️";
    else if (theme === 'dark') btn.innerText = "🌑";
    else btn.innerText = "☕";
}

// ==========================================
// 4. NAV & PACER
// ==========================================
let currentGuideType = null;
function hideAllScreens() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('guide-screen').classList.add('hidden');
    document.getElementById('profile-screen').classList.add('hidden');
    document.getElementById('emergency-screen').classList.add('hidden');
}
function showGuide(type) {
    hideAllScreens();
    currentGuideType = type;
    document.getElementById('guide-screen').classList.remove('hidden');
    document.getElementById('guide-content').innerHTML = medicalData[type][currentLang];
    pacerRunning = false;
    window.scrollTo(0,0);
}
function showScreen(id) {
    hideAllScreens();
    currentGuideType = null;
    document.getElementById(id).classList.remove('hidden');
    if(id==='profile-screen') loadData();
    window.scrollTo(0,0);
}
function goHome() {
    hideAllScreens();
    currentGuideType = null;
    document.getElementById('main-menu').classList.remove('hidden');
    stopAudio();
    if(pacerRunning) togglePacer();
}
function toggleMobileTools() { document.getElementById('tools-panel').classList.toggle('mobile-active'); }

let pacerRunning = false;
function togglePacer() {
    const ui = document.getElementById('pacer-ui');
    const textElement = document.getElementById('cpr-text');
    const btn = document.querySelector('.start-btn');
    if (!pacerRunning) {
        ui.style.display = 'block';
        textElement.classList.add('cpr-active');
        btn.innerHTML = "⏹ " + (currentLang === 'en' ? "Stop" : "Stop");
        btn.style.background = "#333";
        pacerRunning = true;
    } else {
        ui.style.display = 'none';
        textElement.classList.remove('cpr-active');
        btn.innerHTML = "▶ " + (currentLang === 'en' ? "Start Pacer" : "Start");
        btn.style.background = "#d32f2f";
        pacerRunning = false;
    }
}

// ==========================================
// 5. AUDIO & UTILS
// ==========================================
let audioCtx, oscillators = [];
function initAudio() { if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
function playSiren() {
    initAudio(); stopAudio();
    const osc1 = audioCtx.createOscillator(); osc1.type = 'sawtooth';
    const osc2 = audioCtx.createOscillator(); osc2.type = 'square';
    osc1.frequency.setValueAtTime(600, audioCtx.currentTime); osc1.frequency.linearRampToValueAtTime(1500, audioCtx.currentTime+0.5);
    osc2.frequency.setValueAtTime(580, audioCtx.currentTime); osc2.frequency.linearRampToValueAtTime(1480, audioCtx.currentTime+0.5);
    osc1.connect(audioCtx.destination); osc2.connect(audioCtx.destination);
    osc1.start(); osc2.start(); oscillators.push(osc1, osc2);
    let t = true;
    sirenInterval = setInterval(() => {
        if(t) { osc1.frequency.linearRampToValueAtTime(600, audioCtx.currentTime+0.5); osc2.frequency.linearRampToValueAtTime(580, audioCtx.currentTime+0.5); }
        else { osc1.frequency.linearRampToValueAtTime(1500, audioCtx.currentTime+0.5); osc2.frequency.linearRampToValueAtTime(1480, audioCtx.currentTime+0.5); }
        t = !t;
    }, 500);
}
function playWhistle() { initAudio(); stopAudio(); const osc = audioCtx.createOscillator(); osc.type = 'triangle'; osc.frequency.setValueAtTime(3000, audioCtx.currentTime); osc.connect(audioCtx.destination); osc.start(); oscillators.push(osc); }
let sirenInterval;
function stopAudio() { oscillators.forEach(o => {o.stop(); o.disconnect();}); oscillators=[]; clearInterval(sirenInterval); }

let incidentTimer, sec=0, isTiming=false;
function startIncident() { if(!isTiming) { isTiming=true; logEvent("Incident Started"); incidentTimer=setInterval(()=>{ sec++; const d=new Date(0); d.setSeconds(sec); document.getElementById('timer-display').innerText=d.toISOString().substr(11,8); },1000); }}
function stopIncident() { if(isTiming) { isTiming=false; clearInterval(incidentTimer); logEvent("Incident Stopped"); }}
function logEvent(msg) {
    const feed = document.getElementById('log-feed');
    const time = new Date().toLocaleTimeString();
    if(feed.innerText.includes("No events")) feed.innerHTML = "";
    feed.innerHTML = `<div class="log-entry"><b>${time}</b> ${msg}</div>` + feed.innerHTML;
}
function clearLog() { document.getElementById('log-feed').innerHTML = `<div class="empty-log trans" data-key="no_events" style="opacity:0.7">${uiText.no_events[currentLang]}</div>`; }

// ==========================================
// 6. SAVE / LOAD DATA (with 2 contacts)
// ==========================================
function saveData() {
    localStorage.setItem('resq_fam1-name', document.getElementById('fam1-name').value);
    localStorage.setItem('resq_fam1-phone', document.getElementById('fam1-phone').value);
    localStorage.setItem('resq_fam2-name', document.getElementById('fam2-name').value);
    localStorage.setItem('resq_fam2-phone', document.getElementById('fam2-phone').value);
    localStorage.setItem('resq_blood', document.getElementById('blood-type').value);
    alert("✅ Data saved successfully!");
    loadData();
}

function loadData() {
    const n1 = localStorage.getItem('resq_fam1-name') || '';
    const p1 = localStorage.getItem('resq_fam1-phone') || '';
    const n2 = localStorage.getItem('resq_fam2-name') || '';
    const p2 = localStorage.getItem('resq_fam2-phone') || '';
    const blood = localStorage.getItem('resq_blood') || '';

    if (document.getElementById('fam1-name')) document.getElementById('fam1-name').value = n1;
    if (document.getElementById('fam1-phone')) document.getElementById('fam1-phone').value = p1;
    if (document.getElementById('fam2-name')) document.getElementById('fam2-name').value = n2;
    if (document.getElementById('fam2-phone')) document.getElementById('fam2-phone').value = p2;
    if (blood && document.getElementById('blood-type')) document.getElementById('blood-type').value = blood;

    const display = document.getElementById('saved-data-display');
    const list = document.getElementById('contacts-list');
    if (p1 || p2) {
        display.style.display = 'block';
        list.innerHTML = '';
        if (p1) list.innerHTML += `<div class="log-entry">👤 <b>${n1 || 'Contact 1'}</b>: ${p1}</div>`;
        if (p2) list.innerHTML += `<div class="log-entry">👤 <b>${n2 || 'Contact 2'}</b>: ${p2}</div>`;
    }
}

// ==========================================
// 7. GPS SHARE — WhatsApp + SMS fallback
// ==========================================
function getGPS() {
    if (!navigator.geolocation) {
        alert("GPS not supported on this device.");
        return;
    }

    const p1 = localStorage.getItem('resq_fam1-phone') || '';
    const p2 = localStorage.getItem('resq_fam2-phone') || '';
    const n1 = localStorage.getItem('resq_fam1-name') || 'Contact 1';
    const n2 = localStorage.getItem('resq_fam2-name') || 'Contact 2';

    if (!p1 && !p2) {
        alert("⚠️ No emergency contacts saved!\n\nPlease go to 'Medical ID & Contacts' and save at least one contact first.");
        return;
    }

    // Show loading state
    const btn = document.querySelector('.btn.location');
    if (btn) btn.querySelector('.title').innerText = "Getting location...";

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            const mapsUrl = `https://maps.google.com/?q=${lat},${lon}`;
            const msg = encodeURIComponent(`🚨 EMERGENCY! I need help.\nMy location: ${mapsUrl}\nSent via ResQ Portal`);

            // Reset button text
            if (btn) btn.querySelector('.title').innerText = uiText['gps'][currentLang];

            // Build list of contacts to share with
            const contacts = [];
            if (p1) contacts.push({ name: n1, phone: p1.replace(/\D/g, '') });
            if (p2) contacts.push({ name: n2, phone: p2.replace(/\D/g, '') });

            if (contacts.length === 0) return;

            // Determine if mobile
            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

            if (isMobile) {
                // Open WhatsApp for first contact, SMS for second (or both WhatsApp)
                // Show a choice dialog
                showGPSShareOptions(contacts, msg, mapsUrl);
            } else {
                // Desktop: show modal with options
                showGPSShareOptions(contacts, msg, mapsUrl);
            }
        },
        (err) => {
            if (btn) btn.querySelector('.title').innerText = uiText['gps'][currentLang];
            if (err.code === 1) {
                alert("❌ Location permission denied.\n\nPlease allow location access in your browser settings.");
            } else {
                alert("❌ Could not get location. Please try again.");
            }
        },
        { timeout: 10000, enableHighAccuracy: true }
    );
}

function showGPSShareOptions(contacts, encodedMsg, mapsUrl) {
    // Create a temporary share panel
    const existing = document.getElementById('gps-share-panel');
    if (existing) existing.remove();

    const panel = document.createElement('div');
    panel.id = 'gps-share-panel';
    panel.style.cssText = `
        position: fixed; bottom: 100px; right: 20px; left: 20px;
        background: var(--bg-card, #fff); border: 2px solid #d32f2f;
        border-radius: 16px; padding: 20px; z-index: 5000;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        max-width: 420px; margin: 0 auto;
    `;

    let btns = `<p style="margin:0 0 12px 0; font-weight:700; font-size:1rem;">📍 Share your location with:</p>`;

    contacts.forEach(c => {
        const waLink = `https://wa.me/${c.phone}?text=${encodedMsg}`;
        const smsLink = `sms:${c.phone}?body=${encodedMsg}`;
        btns += `
            <div style="margin-bottom:12px; border:1px solid #eee; border-radius:10px; overflow:hidden;">
                <div style="background:#f5f5f5; padding:8px 12px; font-weight:600; font-size:0.9rem;">👤 ${c.name} (${c.phone})</div>
                <div style="display:flex; gap:0;">
                    <a href="${waLink}" target="_blank" style="flex:1; display:block; padding:12px; background:#25D366; color:white; text-align:center; font-weight:700; text-decoration:none; font-size:0.95rem;">
                        💬 WhatsApp
                    </a>
                    <a href="${smsLink}" style="flex:1; display:block; padding:12px; background:#1976d2; color:white; text-align:center; font-weight:700; text-decoration:none; font-size:0.95rem;">
                        📱 SMS
                    </a>
                </div>
            </div>
        `;
    });

    btns += `
        <div style="text-align:center; margin-top:5px;">
            <a href="${mapsUrl}" target="_blank" style="color:#1976d2; font-size:0.85rem; text-decoration:underline;">🗺️ View my location on Google Maps</a>
        </div>
        <button onclick="document.getElementById('gps-share-panel').remove()" 
            style="margin-top:15px; width:100%; padding:10px; background:#eee; border:none; border-radius:8px; cursor:pointer; font-weight:600;">
            ✕ Close
        </button>
    `;

    panel.innerHTML = btns;
    document.body.appendChild(panel);
}

// ==========================================
// 8. EMERGENCY MODAL (FAB Button)
// ==========================================
function openEmergencyModal() {
    document.getElementById('emergency-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeEmergencyModal(event) {
    // Close if clicking overlay background or close button (no event = button click)
    if (!event || event.target === document.getElementById('emergency-modal')) {
        document.getElementById('emergency-modal').classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeEmergencyModal();
});

// ==========================================
// 9. OTHER UTILS
// ==========================================
function filterGuides() {
    const f = document.getElementById('search-bar').value.toUpperCase();
    for(let b of document.getElementById('main-menu').getElementsByClassName('btn'))
        b.style.display = b.innerText.toUpperCase().indexOf(f) > -1 ? "" : "none";
}

let speechHandler = new SpeechSynthesisUtterance();
let isSpeaking = false;
function toggleVoice() {
    const btn = document.getElementById('voice-btn');
    if (isSpeaking) {
        window.speechSynthesis.cancel(); isSpeaking = false;
        btn.innerText = uiText['read_aloud'][currentLang];
    } else {
        speechHandler.text = document.getElementById('guide-content').innerText;
        window.speechSynthesis.speak(speechHandler); isSpeaking = true;
        btn.innerText = uiText['stop_read'][currentLang];
        speechHandler.onend = () => { isSpeaking = false; btn.innerText = uiText['read_aloud'][currentLang]; };
    }
}

function toggleSOS() { document.getElementById('sos-screen').classList.toggle('hidden'); }

// On load — restore saved data if on profile screen
document.addEventListener("DOMContentLoaded", function() {
    // Disable tel: links on desktop
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.querySelectorAll('.emergency-link').forEach(l => {
            l.removeAttribute('href');
            l.style.cursor = "default";
        });
    }
});
