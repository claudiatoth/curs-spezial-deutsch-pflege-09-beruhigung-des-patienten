// ============================================
// PDF BUILDER — Pflege L9: Beruhigung des Patienten
// 🌟 Material co-creat cu Agnesa
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildPflegeWarn() + buildAgnesa() + buildCast() + buildTheory() + buildDialogs() + buildExercises() + buildFlashcards();
    }

    function buildPflegeWarn() {
        return `<div class="pflege-warn">
            <h4>⚠️ Notă importantă</h4>
            <p>Această lecție te pregătește <strong>LINGVISTIC</strong> pentru calmarea pacientului. <strong>NU înlocuiește</strong> calificarea profesională sau intervenția medicală în urgențe reale. În urgență REALĂ (atac cord, AVC): SUNAȚI 112 IMEDIAT, calmarea verbală vine DUPĂ.</p>
        </div>`;
    }

    function buildAgnesa() {
        return `<div class="agnesa-box">
            <h4>🌟 Material co-creat cu Agnesa</h4>
            <p>Cele <strong>25 de fraze esențiale</strong> din această lecție vin din materialul colaboratoarei noastre <strong>Agnesa</strong> — Pflegerin cu experiență de teren în 24-Stunden-Betreuung. Materialul ei „Calmarea_Pacientului_Germana_Romana" e folosit ca ankerset profesional verificat. Lecția aceasta e <strong>UNIC pe piață</strong> — niciun curs Pflege românesc nu acoperă calmarea cu fraze reale de teren.</p>
        </div>`;
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" · Andreea învață cea mai importantă superputere a Pflegerinnei</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Pflegerin · calmează</div></div>
                <div class="cast-card"><div class="frau-mueller-pdf-avatar">👵</div><div class="name">Frau Müller</div><div class="detail">Pacientă · 78 ani</div></div>
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · Berlin</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<audio[^>]*>[\s\S]*?<\/audio>/g, '');
        t = t.replace(/<div class="subsection-header"[^>]*>\s*<h4>([^<]+)<\/h4>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="subsection">/g, '<div class="theory-box">');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="capcana-box">/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="grammar-tip">/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="final-note-box">/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter new-section">📘 1. Teorie — 25 fraze calmare (Agnesa) + Imperativ politicos</h1>` + t;
    }

    function buildDialogs() {
        let html = `<h1 class="chapter new-section">🎬 2. Dialoguri — Andreea calmează Frau Müller</h1>`;
        [dialog1Data, dialog2Data].forEach((d, idx) => {
            if (!d) return;
            html += `<div class="ex-block">
                <h3>${idx === 0 ? 'Dialog 1' : 'Dialog 2'}: „${d.title}"</h3>
                <div class="instruction">${d.context}</div>
                <div class="dialog-pdf-card">`;
            d.replici.forEach((r, ri) => {
                const spkrName = r.speaker === 'andreea' ? '🧑‍⚕️ Andreea' : '👵 Frau Müller';
                html += `<div class="reply"><span class="spkr">${ri + 1}. ${spkrName}:</span> <span class="de"> ${r.de}</span><br><span class="ro">🇷🇴 ${r.ro}</span></div>`;
            });
            html += `</div></div>`;
        });
        return html;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 3. Exerciții — cu rezolvări complete</h1>`;

        if (typeof ex1Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 1: Match — Fraze calmare DE → RO</h3>
                <div class="instruction">Pentru fiecare frază de calmare (din materialul Agnesa), scrii traducerea în RO.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:50%">🇩🇪 Germană</th><th>🇷🇴 Română</th></tr></thead><tbody>`;
            ex1Data.forEach((it, i) => {
                html += `<tr><td class="verb">${i + 1}. ${it.de}</td><td class="ro-text">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        if (typeof ex2Data !== 'undefined') html += fillInBlock('Übung 2: Imperativ politicos (Sie-Form)', 'Formula: VERB la poziția 1 + Sie + restul. Verbele reflexive păstrează „sich".', ex2Data);
        if (typeof ex5Data !== 'undefined') html += fillInBlock('Übung 5: Dialog Gap-Fill — Panică nocturnă', 'Completează replicile lipsă din Dialog 1.', ex5Data);

        if (typeof ex3Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 3: Audio Dictat — Fraze esențiale</h3>
                <div class="instruction">Ascultă și scrie fraza ce auzi. (Audio disponibil online — PDF afișează doar răspunsurile.)</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex3Data.forEach((it, i) => {
                html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-a">${it.correct}</div></div></div>`;
            });
            html += `</div>`;
        }

        if (typeof ex4Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 4: Situații — fraza potrivită</h3>
                <div class="instruction">Pentru fiecare situație, alegi fraza Agnesa potrivită.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex4Data.forEach((it, i) => {
                html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${it.situation}</div><div class="ex-a">${it.correct}</div></div></div>`;
            });
            html += `</div>`;
        }

        if (typeof ex6Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 6: Traducere RO → DE</h3>
                <div class="instruction">Scrie frazele de calmare în germană.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:50%">🇷🇴 Română</th><th>🇩🇪 Germană</th></tr></thead><tbody>`;
            ex6Data.forEach((it, i) => {
                html += `<tr><td class="ro-text">${i + 1}. ${it.ro}</td><td class="verb">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        html += `<div class="ex-block"><h3>✍️ Übung 7: Schreiben — Reflexie despre primul moment de calmare</h3>
            <div class="instruction">După prima săptămână în care ai stat singură noaptea cu Frau Müller, ai avut primul moment de calmare. Scrie 5-7 propoziții către Petra (fiica) folosind 3-5 fraze Agnesa.</div>
            <div class="rezolvare-banner">📝 Model de răspuns</div>
            <p><em>Hallo Petra. Heute Nacht um 3 Uhr hatte Ihre Mutter Angst. Sie dachte, sie hat einen Herzinfarkt. Ich bin sofort gekommen und habe ihr gesagt: „Ich bin bei Ihnen. Keine Angst." Wir haben zusammen tief geatmet — ein, aus, ein, aus. Sie hat meine Hand gehalten. Nach 10 Minuten ging es ihr besser. Sie ist eingeschlafen, ich habe noch eine Stunde bei ihr gesessen. Alles ist gut. Schönen Tag! Andreea.</em></p>
            <p class="ro-translation">🇷🇴 Bună Petra. Astă noapte la ora 3 mama dumneavoastră a avut frică. Credea că are infarct. Am venit imediat și i-am spus: „Sunt aici lângă dumneavoastră. Nu vă fie teamă." Am respirat adânc împreună. Mi-a ținut mâna. După 10 minute s-a simțit mai bine. A adormit, eu am stat încă o oră lângă ea. Totul e bine. O zi frumoasă! Andreea.</p>
            </div>`;

        return html;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 4. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> grupate pe 6 categorii: Fraze de bază · Fraze de încurajare · Autoritate medicală · Tehnica respirației · Cuvinte cheie emoționale · Imperativ politicos + verbe reflexive.</p>
            <p style="margin-bottom:10px"><em>🌟 Materialul vine de la Agnesa, Pflegerin colaboratoare.</em></p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }
})();
