// ============================================
// EXERCISES.JS — Pflege 9: Beruhigung des Patienten
// 7 exerciții × 10 itemi = 70 itemi total
// Schreiben form dedicat: forms.gle/t9MacuWDiy3334qYA
// 🌟 Bazat pe materialul Agnesa
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// ============================================
// EX 1: Match — Fraze calmare DE → RO
// ============================================
const ex1Data = [
    { id: 'a', de: 'Alles wird gut.', accept: ['totul va fi bine', 'totul o sa fie bine'], correct: 'Totul va fi bine.' },
    { id: 'b', de: 'Ich bin bei Ihnen.', accept: ['sunt aici', 'sunt langa dumneavoastra', 'sunt lângă dumneavoastră', 'sunt cu dumneavoastra'], correct: 'Sunt aici lângă dumneavoastră.' },
    { id: 'c', de: 'Keine Angst.', accept: ['nu va fie teama', 'nu vă fie teamă', 'fara teama'], correct: 'Nu vă fie teamă.' },
    { id: 'd', de: 'Sie sind nicht allein.', accept: ['nu sunteti singura', 'nu sunteți singură', 'nu sunteti singur'], correct: 'Nu sunteți singură.' },
    { id: 'e', de: 'Atmen Sie tief ein.', accept: ['respirati adanc', 'respirați adânc', 'respira adanc'], correct: 'Respirați adânc.' },
    { id: 'f', de: 'Spüren Sie meine Hand.', accept: ['simtiti mana mea', 'simțiți mâna mea'], correct: 'Simțiți mâna mea.' },
    { id: 'g', de: 'Das schaffen Sie schon.', accept: ['o sa reusiti', 'o să reușiți', 'veti reusi'], correct: 'O să reușiți.' },
    { id: 'h', de: 'Kopf hoch!', accept: ['capul sus', 'sus capul'], correct: 'Capul sus!' },
    { id: 'i', de: 'Der Arzt ist bereits informiert.', accept: ['medicul a fost informat', 'medicul a fost deja informat', 'doctorul stie deja'], correct: 'Medicul a fost deja informat.' },
    { id: 'j', de: 'Es besteht kein Grund zur Panik.', accept: ['nu este motiv de panica', 'nu exista motiv de panica', 'nu este nevoie sa va panicati'], correct: 'Nu există motiv de panică.' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>💚 Scrie traducerea în română</strong> pentru fiecare frază de calmare (din materialul Agnesa).</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 2: Imperativ politicos
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'a respira → imperativ Sie: „____ Sie!" (verb la POZIȚIA 1)', translation: 'Respirați!', correct: 'Atmen', accept: ['atmen'] },
    { id: 'b', sentence: 'a rămâne calmă → „____ Sie ruhig!"', translation: 'Rămâneți calmă!', correct: 'Bleiben', accept: ['bleiben'] },
    { id: 'c', sentence: 'a închide ochii → „____ Sie die Augen!"', translation: 'Închideți ochii!', correct: 'Schließen', accept: ['schliessen', 'schließen'] },
    { id: 'd', sentence: 'a încerca → „____ Sie es!"', translation: 'Încercați!', correct: 'Versuchen', accept: ['versuchen'] },
    { id: 'e', sentence: 'a simți (mâna) → „____ Sie meine Hand!"', translation: 'Simțiți mâna mea!', correct: 'Spüren', accept: ['spueren', 'spüren'] },
    { id: 'f', sentence: 'a ține (puțin) → „____ Sie kurz!"', translation: 'Țineți puțin!', correct: 'Halten', accept: ['halten'] },
    { id: 'g', sentence: 'a privi → „____ Sie mich an!" (verb separabil ansehen)', translation: 'Priviți-mă!', correct: 'Schauen', accept: ['schauen'] },
    { id: 'h', sentence: 'sich entspannen (reflexiv) → „____ Sie sich!"', translation: 'Relaxați-vă!', correct: 'Entspannen', accept: ['entspannen'] },
    { id: 'i', sentence: 'sich konzentrieren (reflexiv) → „____ Sie sich auf die Atmung!"', translation: 'Concentrați-vă pe respirație!', correct: 'Konzentrieren', accept: ['konzentrieren'] },
    { id: 'j', sentence: 'sein (a fi) → „____ Sie unbesorgt!" (Fiți fără griji!)', translation: 'Fiți fără griji!', correct: 'Seien', accept: ['seien'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📐 Imperativul politicos Sie.</strong> Formula: VERB la poziția 1 + Sie + restul. Verbele reflexive păstrează „sich".</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="verbul..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 3: Audio dictat — Fraze esențiale
// ============================================
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'Alles wird gut.', accept: ['alles wird gut'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'Ich bin bei Ihnen.', accept: ['ich bin bei ihnen'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'Keine Angst.', accept: ['keine angst'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'Bitte bleiben Sie ruhig.', accept: ['bitte bleiben sie ruhig'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'Atmen Sie tief ein.', accept: ['atmen sie tief ein'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'Sie sind nicht allein.', accept: ['sie sind nicht allein'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'Das schaffen Sie schon.', accept: ['das schaffen sie schon'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'Kopf hoch!', accept: ['kopf hoch'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'Spüren Sie meine Hand.', accept: ['spueren sie meine hand', 'spüren sie meine hand'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'Gemeinsam schaffen wir das.', accept: ['gemeinsam schaffen wir das'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — fraze esențiale de calmare.</strong> Ascultă și scrie ce auzi.</div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#6b7280; font-size:0.9rem;">Ascultă și scrie:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie fraza..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 4: Situații — alegi fraza potrivită
// ============================================
const ex4Data = [
    { id: 'a', situation: '🌙 Frau Müller se trezește la 3 dimineața speriată. Ce-i spui PRIMA?', options: ['„Schlafen Sie!"', '„Ich bin bei Ihnen, Frau Müller."', '„Was ist?"', '„Ruhig!"'], correctIndex: 1, correct: 'Ich bin bei Ihnen, Frau Müller. (PRIMA cu prezența + nume)' },
    { id: 'b', situation: '💉 Pacienta vede seringa și începe să tremure. Cea mai bună frază?', options: ['„Tut nicht weh."', '„Es ist nicht so schlimm, wie es aussieht."', '„Stop!"', '„Sie sind feige."'], correctIndex: 1, correct: 'Es ist nicht so schlimm, wie es aussieht. (Agnesa)' },
    { id: 'c', situation: '😢 Frau Müller plânge: „Mi-am pierdut soțul." Ce spui?', options: ['„Vergessen Sie ihn!"', '„Es war schon lange her."', '„Das tut mir sehr leid."', '„Nicht weinen!"'], correctIndex: 2, correct: 'Das tut mir sehr leid. (empatie, NU contradicție)' },
    { id: 'd', situation: '😨 Pacienta panică: „Ich kann nicht atmen!" Care e SECVENȚA corectă?', options: ['„Beruhigen Sie sich!"', '„Spüren Sie meine Hand. Atmen Sie tief ein."', '„Trinken Sie Wasser!"', '„Ich rufe 112!"'], correctIndex: 1, correct: 'Spüren Sie meine Hand. Atmen Sie tief ein. (contact + respirație ghidată)' },
    { id: 'e', situation: '🦴 Frau Müller: „Mă doare așa de tare!" + plânge. Ce spui?', options: ['„Nehmen Sie Tabletten!"', '„Sie übertreiben."', '„Ich bin hier. Wo tut es weh?"', '„Schreien Sie nicht!"'], correctIndex: 2, correct: 'Ich bin hier. Wo tut es weh? (prezență + întrebare concretă)' },
    { id: 'f', situation: '😰 Înainte de o procedură medicală. Cea mai INCURAJATOARE?', options: ['„Vorsicht!"', '„Das schaffen Sie schon."', '„Es wird weh tun."', '„Nicht denken!"'], correctIndex: 1, correct: 'Das schaffen Sie schon. (încredere în puterea ei)' },
    { id: 'g', situation: '🧓 Pacienta confuză: „Cine ești tu?" la 3 noaptea. Ce spui?', options: ['„Ich bin die Pflegerin, Andreea. Sie sind sicher."', '„Erinnern Sie sich nicht?"', '„Schlafen Sie weiter."', '„Was?"'], correctIndex: 0, correct: 'Ich bin die Pflegerin, Andreea. Sie sind sicher. (identitate + siguranță)' },
    { id: 'h', situation: '🚨 Real urgență (atac cord). PRIMA ACȚIUNE?', options: ['„Alles wird gut!"', '„Atmen Sie tief!"', '🆘 SUNAȚI 112 INSTANT', '„Trinken Sie Wasser!"'], correctIndex: 2, correct: '🆘 SUNAȚI 112 INSTANT. Calmarea VERBALĂ vine DUPĂ apel — nu o înlocuiește.' },
    { id: 'i', situation: '🌸 Frau Müller: „Sunt o povară pentru voi." Ce spui?', options: ['„Stimmt nicht!"', '„Nein."', '„Wir kümmern uns gern um Sie."', '„Klagen Sie nicht."'], correctIndex: 2, correct: 'Wir kümmern uns gern um Sie. (afirmație caldă, NU contradicție directă)' },
    { id: 'j', situation: '💔 Pacienta nesigură: „Sunteți cu adevărat aici pentru mine?" Ce spui?', options: ['„Natürlich."', '„Sie können mir vertrauen. Ich bleibe bei Ihnen."', '„Ich werde bezahlt."', '„Frag nicht."'], correctIndex: 1, correct: 'Sie können mir vertrauen. Ich bleibe bei Ihnen. (Agnesa)' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎯 Situații reale.</strong> Alege fraza potrivită din materialul Agnesa.</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label><strong>${it.situation}</strong></label>`;
        it.options.forEach((opt, idx) => {
            h += `<label style="display:block; margin:6px 0; cursor:pointer;"><input type="radio" name="ex4-${it.id}" value="${idx}" style="margin-right:8px;">${opt}</label>`;
        });
        h += `</div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const fb = document.getElementById(`ex4-f${it.id}`);
        const checked = document.querySelector(`input[name="ex4-${it.id}"]:checked`);
        const ok = checked && parseInt(checked.value) === it.correctIndex;
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 5: Dialog Gap-Fill — Panică nocturnă (Dialog 1)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Frau Müller: „Andreea! Mein Herz schlägt ____!" (rapid)', translation: 'Mi se bate inima REPEDE!', correct: 'schnell', accept: ['schnell'] },
    { id: 'b', sentence: 'Andreea: „Ich bin ____, Frau Müller. Keine Angst." (aici)', translation: 'Sunt AICI, Doamna Müller.', correct: 'hier', accept: ['hier'] },
    { id: 'c', sentence: 'Frau Müller: „Ich glaube, ich habe einen ____!" (atac de cord)', translation: 'Cred că am un INFARCT!', correct: 'Herzinfarkt', accept: ['herzinfarkt'] },
    { id: 'd', sentence: 'Andreea: „Bitte ____ Sie ruhig." (imperativ — a rămâne)', translation: 'Vă rog să RĂMÂNEȚI calmă.', correct: 'bleiben', accept: ['bleiben'] },
    { id: 'e', sentence: 'Andreea: „Es besteht kein ____ zur Panik." (motiv)', translation: 'Nu există MOTIV de panică.', correct: 'Grund', accept: ['grund'] },
    { id: 'f', sentence: 'Andreea: „Spüren Sie meine ____." (MÂNA — feminin singular)', translation: 'Simțiți MÂNA mea.', correct: 'Hand', accept: ['hand'] },
    { id: 'g', sentence: 'Andreea: „Atmen Sie tief ____." (înăuntru — prefix verb separabil)', translation: 'Respirați adânc ÎNĂUNTRU (inspirați).', correct: 'ein', accept: ['ein'] },
    { id: 'h', sentence: 'Andreea: „Und langsam ____." (afară — prefix verb separabil)', translation: 'Și încet AFARĂ (expirați).', correct: 'aus', accept: ['aus'] },
    { id: 'i', sentence: 'Andreea: „Ich bleibe bei ____, bis es Ihnen besser geht." (DUMNEAVOASTRĂ — Dativ formal)', translation: 'Rămân lângă DUMNEAVOASTRĂ până vă simțiți mai bine.', correct: 'Ihnen', accept: ['ihnen'] },
    { id: 'j', sentence: 'Frau Müller: „Danke. Sie sind so ____ zu mir." (BUNĂ)', translation: 'Sunteți așa de BUNĂ cu mine.', correct: 'gut', accept: ['gut'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌙 Dialog gap-fill — Panică nocturnă (Dialog 1).</strong> Completează replicile lipsă.</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 6: Traducere RO → DE
// ============================================
const ex6Data = [
    { id: 'a', ro: 'Totul va fi bine.', correct: 'Alles wird gut.', accept: ['alles wird gut'] },
    { id: 'b', ro: 'Sunt aici lângă dumneavoastră.', correct: 'Ich bin bei Ihnen.', accept: ['ich bin bei ihnen'] },
    { id: 'c', ro: 'Nu vă fie teamă.', correct: 'Keine Angst.', accept: ['keine angst', 'haben sie keine angst'] },
    { id: 'd', ro: 'Vă rog să rămâneți calmă.', correct: 'Bitte bleiben Sie ruhig.', accept: ['bitte bleiben sie ruhig'] },
    { id: 'e', ro: 'Respirați adânc.', correct: 'Atmen Sie tief ein.', accept: ['atmen sie tief ein', 'atmen sie tief'] },
    { id: 'f', ro: 'Sunteți pe mâini bune.', correct: 'Sie sind in guten Händen.', accept: ['sie sind in guten haenden', 'sie sind in guten händen'] },
    { id: 'g', ro: 'Rămân lângă dumneavoastră până vă simțiți mai bine.', correct: 'Ich bleibe bei Ihnen, bis es Ihnen besser geht.', accept: ['ich bleibe bei ihnen bis es ihnen besser geht', 'ich bleibe bei ihnen, bis es ihnen besser geht'] },
    { id: 'h', ro: 'Avem grijă de dumneavoastră.', correct: 'Wir kümmern uns um Sie.', accept: ['wir kuemmern uns um sie', 'wir kümmern uns um sie'] },
    { id: 'i', ro: 'Vom reuși împreună.', correct: 'Gemeinsam schaffen wir das.', accept: ['gemeinsam schaffen wir das'] },
    { id: 'j', ro: 'Puteți avea încredere în mine.', correct: 'Sie können mir vertrauen.', accept: ['sie koennen mir vertrauen', 'sie können mir vertrauen'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong> Scrie frazele de calmare în germană.</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 7: Schreiben — Reflexie primul moment calmare
// ============================================
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere — Reflexie despre primul moment de calmare</h4>
                <p>După prima săptămână în care ai stat singură noaptea cu Frau Müller, ai avut <strong>primul moment de calmare</strong> — fie panică nocturnă, fie frică de injecție, fie tristețe pentru fiica care nu a sunat.</p>
                <p><strong>Scrie 5-7 propoziții</strong> către Petra (fiica) în care îi povestești ce s-a întâmplat și CUM ai gestionat. Folosește 3-5 fraze de calmare din materialul Agnesa.</p>

                <div class="schreiben-hints">
                    <h5>💡 Structuri utile</h5>
                    <p>Hallo Petra · Heute Nacht / Gestern Abend · Frau Müller hatte Angst / war traurig · Ich habe ihr gesagt: „..." · Sie hat sich beruhigt · Wir haben zusammen geatmet · Sie ist eingeschlafen · Schönen Tag</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier deine Reflexion auf Deutsch...
Beispiel:
Hallo Petra. Heute Nacht hatte Ihre Mutter Angst..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Hallo Petra. Heute Nacht um 3 Uhr hatte Ihre Mutter Angst. Sie dachte, sie hat einen Herzinfarkt. Ich bin sofort gekommen und habe ihr gesagt: „Ich bin bei Ihnen. Keine Angst." Wir haben zusammen tief geatmet — ein, aus, ein, aus. Sie hat meine Hand gehalten. Nach 10 Minuten ging es ihr besser. Sie ist eingeschlafen, ich habe noch eine Stunde bei ihr gesessen. Alles ist gut. Schönen Tag! Andreea.</p>
                    <p class="model-translation"><em>Traducere:</em> Bună Petra. Astă noapte la ora 3 mama dumneavoastră a avut frică. Credea că are infarct. Am venit imediat și i-am spus: „Sunt aici lângă dumneavoastră. Nu vă fie teamă." Am respirat adânc împreună — inspir, expir, inspir, expir. Mi-a ținut mâna. După 10 minute s-a simțit mai bine. A adormit, eu am stat încă o oră lângă ea. Totul e bine. O zi frumoasă! Andreea.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/t9MacuWDiy3334qYA" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite reflexia aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

// ============================================
// MAIN HANDLER
// ============================================
function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) {
        const pct = Math.round((result.correct / result.total) * 100);
        let msg = `Scor: ${result.correct}/${result.total} (${pct}%)`;
        if (pct === 100) msg += ' — Perfect! 🎉';
        else if (pct >= 80) msg += ' — Foarte bine! 💪';
        else if (pct >= 60) msg += ' — Bine, mai exersează puțin. 🙂';
        else msg += ' — Reia teoria și încearcă din nou. 📚';
        scoreEl.textContent = msg;
        scoreEl.className = 'score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
    }
}

function resetExercise(n) {
    const containerId = `ex${n}-container`;
    const c = document.getElementById(containerId);
    if (!c) return;
    c.querySelectorAll('input[type="text"]').forEach(inp => inp.value = '');
    c.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    c.querySelectorAll('.feedback').forEach(fb => { fb.className = 'feedback'; fb.textContent = ''; });
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'score'; }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
