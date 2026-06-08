// ============================================
// FINAL TEST — Pflege 9: Beruhigung des Patienten
// 25 întrebări × 5 categorii
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // === 1. FRAZELE DE BAZĂ (5) ===
    { id: 1, category: 'Fraze de bază', type: 'fill', question: 'Cea mai universală frază de calmare: „____ wird gut."', correct: 'Alles', accept: ['alles'] },
    { id: 2, category: 'Fraze de bază', type: 'fill', question: 'Frază cu prezență: „Ich bin ____ Ihnen." (prepoziție = lângă, formal)', correct: 'bei', accept: ['bei'] },
    { id: 3, category: 'Fraze de bază', type: 'mc', question: '„Sie sind in guten Händen" se folosește când?', options: ['Înainte de mâncare', 'Preluare îngrijire · doctor nou · siguranță', 'La culcare', 'În urgență 112'], correctIndex: 1, correct: 'Preluare îngrijire · doctor nou · siguranță (Agnesa)' },
    { id: 4, category: 'Fraze de bază', type: 'fill', question: '„Bitte ____ Sie ruhig." (imperativ — a rămâne)', correct: 'bleiben', accept: ['bleiben'] },
    { id: 5, category: 'Fraze de bază', type: 'fill', question: '„Wir ____ uns um Sie." (a avea grijă — reflexiv)', correct: 'kümmern', accept: ['kuemmern', 'kümmern'] },

    // === 2. ÎNCURAJARE + AUTORITATE (5) ===
    { id: 6, category: 'Încurajare + Autoritate', type: 'fill', question: 'Înainte de un efort: „Das ____ Sie schon!" (a reuși)', correct: 'schaffen', accept: ['schaffen'] },
    { id: 7, category: 'Încurajare + Autoritate', type: 'fill', question: 'Tristețe ușoară: „____ hoch!" (sus capul)', correct: 'Kopf', accept: ['kopf'] },
    { id: 8, category: 'Încurajare + Autoritate', type: 'mc', question: 'În urgență REALĂ (atac cord, AVC), PRIMA acțiune e:', options: ['„Alles wird gut" repede', '„Atmen Sie tief!" repetat', '🆘 SUNAȚI 112 IMEDIAT — calmarea VERBALĂ vine DUPĂ', '„Ich helfe Ihnen!"'], correctIndex: 2, correct: '🆘 SUNAȚI 112 — calmarea verbală NU înlocuiește apelul de urgență' },
    { id: 9, category: 'Încurajare + Autoritate', type: 'fill', question: 'Reasigurare panică: „Es ____ kein Grund zur Panik." (a exista)', correct: 'besteht', accept: ['besteht'] },
    { id: 10, category: 'Încurajare + Autoritate', type: 'fill', question: 'Promisiune: „Ich ____ bei Ihnen, bis es Ihnen besser geht." (a rămâne)', correct: 'bleibe', accept: ['bleibe'] },

    // === 3. RESPIRAȚIA + CONTACT FIZIC (5) ===
    { id: 11, category: 'Respirația + Contact fizic', type: 'fill', question: 'Pasul 1: contact vizual → „____ Sie mich an!" (a privi)', correct: 'Schauen', accept: ['schauen'] },
    { id: 12, category: 'Respirația + Contact fizic', type: 'fill', question: 'Pasul 2: contact fizic → „____ Sie meine Hand." (a simți)', correct: 'Spüren', accept: ['spueren', 'spüren'] },
    { id: 13, category: 'Respirația + Contact fizic', type: 'fill', question: 'Pasul 3: inspir → „Atmen Sie tief ____." (în — prefix verb separabil)', correct: 'ein', accept: ['ein'] },
    { id: 14, category: 'Respirația + Contact fizic', type: 'fill', question: 'Pasul 5: expir → „Und langsam ____." (afară — prefix verb separabil)', correct: 'aus', accept: ['aus'] },
    { id: 15, category: 'Respirația + Contact fizic', type: 'mc', question: 'De ce „Tu respiri PRIMA"?', options: ['Ca să-ți arăți autoritatea', 'Pacienta te imită inconștient (mirror neurons) — calmul tău e contagios', 'Pentru că ea nu poate', 'Pentru aer mai mult în cameră'], correctIndex: 1, correct: 'Mirror neurons — calmul tău e contagios în 30 de secunde' },

    // === 4. IMPERATIV + REFLEXIVE (5) ===
    { id: 16, category: 'Imperativ + Reflexive', type: 'mc', question: 'Formula imperativului Sie:', options: ['Sie + verb (la fel ca propoziția)', 'VERB la POZIȚIA 1 + Sie + restul', 'Bitte + Sie + verb', 'Nu există imperativ pentru Sie'], correctIndex: 1, correct: 'VERB la POZIȚIA 1 + Sie + restul · (NU „Sie atmen!", ci „Atmen Sie!")' },
    { id: 17, category: 'Imperativ + Reflexive', type: 'fill', question: 'Imperativ sein NEREGULAT: „____ Sie unbesorgt!" (NU „Sind")', correct: 'Seien', accept: ['seien'] },
    { id: 18, category: 'Imperativ + Reflexive', type: 'fill', question: 'Reflexiv: „____ Sie sich!" (a se relaxa)', correct: 'Entspannen', accept: ['entspannen'] },
    { id: 19, category: 'Imperativ + Reflexive', type: 'mc', question: '🚨 Capcana „Beruhigen Sie sich!" (calmați-vă):', options: ['E foarte politicos', 'Sună RECE și autoritar către pacientă — folosește „Bitte bleiben Sie ruhig" în loc', 'E formula standard pentru calmare', 'NU există această frază'], correctIndex: 1, correct: 'Sună RECE/autoritar către pacientă · folosește „Bitte bleiben Sie ruhig"' },
    { id: 20, category: 'Imperativ + Reflexive', type: 'mc', question: 'Cu vertrauen (a avea încredere) folosești:', options: ['Sie können mir vertrauen (Dativ)', 'Sie können mich vertrauen (Akk)', 'Sie können vertrauen', 'Sie können auf mich vertrauen'], correctIndex: 0, correct: 'Sie können MIR vertrauen — vertrauen + Dativ (NU Akkusativ!)' },

    // === 5. TRADUCERE + SITUAȚII (5) ===
    { id: 21, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Sunt aici lângă dumneavoastră." → 🇩🇪 ?', correct: 'Ich bin bei Ihnen.', accept: ['ich bin bei ihnen'] },
    { id: 22, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Vom reuși împreună." → 🇩🇪 ?', correct: 'Gemeinsam schaffen wir das.', accept: ['gemeinsam schaffen wir das'] },
    { id: 23, category: 'Traducere + Situații', type: 'mc', question: '🌙 La 3 noaptea: pacienta confuză întreabă „Cine ești tu?" Cea mai BUNĂ frază?', options: ['„Schlafen Sie weiter."', '„Erinnern Sie sich nicht?"', '„Ich bin die Pflegerin, Andreea. Sie sind sicher."', '„Was?"'], correctIndex: 2, correct: 'Ich bin die Pflegerin, Andreea. Sie sind sicher. (identitate + siguranță)' },
    { id: 24, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Nu vă fie teamă." (cea mai scurtă variantă) → 🇩🇪 ?', correct: 'Keine Angst.', accept: ['keine angst'] },
    { id: 25, category: 'Traducere + Situații', type: 'mc', question: '💉 Pacienta vede seringa și tremură. Cea mai bună frază Agnesa?', options: ['„Tut nicht weh."', '„Es ist nicht so schlimm, wie es aussieht."', '„Stop!"', '„Sie sind feige."'], correctIndex: 1, correct: 'Es ist nicht so schlimm, wie es aussieht. (din materialul Agnesa)' }
];

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Fraze de bază · Încurajare+Autoritate · Respirația+Contact · Imperativ+Reflexive · Traducere+Situații</strong></p>
            <p>📝 Diacriticele DE și RO sunt opționale.</p>
        </div>
        <div id="ft-questions">`;
    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;
        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }
        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });
    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>`;
    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;
        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }
        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });
    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;
    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Ai cea mai importantă superputere a Pflegerinnei!`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine! Mai recapitulează imperativul Sie.`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine. Reia teoria pe părți.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează. Reia teoria + flashcards.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
