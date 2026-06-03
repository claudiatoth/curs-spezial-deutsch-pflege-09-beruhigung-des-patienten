// ============================================
// FLASHCARDS — Pflege 9: Beruhigung des Patienten
// 48 carduri în 6 categorii (8 fiecare)
// 🌟 Bazat pe materialul Agnesa
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

const flashcardsData = [
    // === 1. FRAZELE DE BAZĂ (8) ===
    { de: "Alles wird gut.", ro: "💚 Totul va fi bine · CEA MAI universală frază · oricând", audio: "audio/letters/alles-wird-gut.wav" },
    { de: "Ich bin bei Ihnen.", ro: "💚 Sunt aici lângă dumneavoastră · bei + Ihnen (Dativ) · noaptea, panică", audio: "audio/letters/bei-ihnen.wav" },
    { de: "Keine Angst.", ro: "💚 Nu vă fie teamă · frica concretă (injecție, doctor)", audio: "audio/letters/keine-angst.wav" },
    { de: "Sie sind nicht allein.", ro: "💚 Nu sunteți singură · tristețe · vizita nu vine", audio: "audio/letters/nicht-allein.wav" },
    { de: "Sie sind in guten Händen.", ro: "💚 Sunteți pe mâini bune · preluare îngrijire · doctor nou", audio: "audio/letters/guten-haenden.wav" },
    { de: "Bitte bleiben Sie ruhig.", ro: "💚 Vă rog să rămâneți calmă · imperativ Sie · politicos", audio: "audio/letters/bleiben-sie-ruhig.wav" },
    { de: "Ich helfe Ihnen.", ro: "💚 Vă ajut · universal · înainte de orice acțiune fizică", audio: "audio/letters/ich-helfe.wav" },
    { de: "Wir kümmern uns um Sie.", ro: "💚 Avem grijă de dumneavoastră · plural NOI = inclusiv familia", audio: "audio/letters/kuemmern-uns.wav" },

    // === 2. FRAZELE DE ÎNCURAJARE (8) ===
    { de: "Das schaffen Sie schon.", ro: "🌟 O să reușiți · înainte de un efort (ridicat, mâncat singură)", audio: "audio/letters/schaffen-sie.wav" },
    { de: "Sie machen das sehr gut.", ro: "🌟 Vă descurcați foarte bine · LAUDĂ procesul (în timpul efortului)", audio: "audio/letters/machen-gut.wav" },
    { de: "Kopf hoch!", ro: "🌟 Capul sus! · tristețe ușoară · negativism", audio: "audio/letters/kopf-hoch.wav" },
    { de: "Es ist nicht so schlimm, wie es aussieht.", ro: "🌟 Nu este atât de grav pe cât pare · răni mici, simptome care sperie", audio: "audio/letters/nicht-so-schlimm.wav" },
    { de: "Versuchen Sie sich zu entspannen.", ro: "🌟 Încercați să vă relaxați · verb reflexiv sich entspannen", audio: "audio/letters/versuchen-entspannen.wav" },
    { de: "Gemeinsam schaffen wir das.", ro: "🌟 Vom reuși împreună · solidaritate · efort comun", audio: "audio/letters/gemeinsam-schaffen.wav" },
    { de: "Sie können mir vertrauen.", ro: "🌟 Puteți avea încredere în mine · vertrauen + Dativ (mir, nu mich!)", audio: "audio/letters/koennen-vertrauen.wav" },
    { de: "Sie müssen keine Angst haben.", ro: "🌟 Nu trebuie să vă fie frică · variantă „Keine Angst" elaborată", audio: "audio/letters/keine-angst-haben.wav" },

    // === 3. FRAZELE CU AUTORITATE MEDICALĂ (8) ===
    { de: "Der Arzt ist bereits informiert.", ro: "🏥 Medicul a fost deja informat · anxietate medicală · NU singură", audio: "audio/letters/arzt-informiert.wav" },
    { de: "Wir beobachten Ihren Zustand genau.", ro: "🏥 Monitorizăm atent starea dumneavoastră · simptome ușoare", audio: "audio/letters/zustand-beobachten.wav" },
    { de: "Wir haben hier gute Ärzte.", ro: "🏥 Avem aici medici buni · programare nouă · medic nou", audio: "audio/letters/gute-aerzte.wav" },
    { de: "Es besteht kein Grund zur Panik.", ro: "🏥 Nu există motiv de panică · panică acută · simptome care sperie", audio: "audio/letters/grund-zur-panik.wav" },
    { de: "Ich bleibe bei Ihnen, bis es Ihnen besser geht.", ro: "🏥 Rămân lângă dumneavoastră până vă simțiți mai bine · PROMISIUNE concretă", audio: "audio/letters/bleibe-bis-besser.wav" },
    { de: "Wenn Sie Schmerzen haben, sagen Sie mir Bescheid.", ro: "🏥 Dacă aveți dureri, vă rog să-mi spuneți · canal deschis", audio: "audio/letters/schmerzen-bescheid.wav" },
    { de: "Seien Sie unbesorgt.", ro: "🏥 Fiți fără griji · imperativ sein cu unbesorgt", audio: "audio/letters/seien-sie-unbesorgt.wav" },
    { de: "Machen Sie sich keine Sorgen.", ro: "🏥 Nu vă faceți griji · verb reflexiv sich Sorgen machen", audio: "audio/letters/keine-sorgen.wav" },

    // === 4. TEHNICA RESPIRAȚIEI (8) ===
    { de: "Schauen Sie mich an.", ro: "🫁 Priviți-mă · contact vizual · pasul 1", audio: "audio/letters/schauen-an.wav" },
    { de: "Spüren Sie meine Hand.", ro: "🫁 Simțiți mâna mea · contact fizic · pasul 2", audio: "audio/letters/spueren-hand.wav" },
    { de: "Atmen Sie tief ein.", ro: "🫁 Respirați adânc · inspirați · pasul 3", audio: "audio/letters/atmen-tief.wav" },
    { de: "Halten Sie kurz.", ro: "🫁 Țineți puțin · pauză · pasul 4", audio: "audio/letters/halten-kurz.wav" },
    { de: "Und langsam aus.", ro: "🫁 Și încet afară · expirați · pasul 5", audio: "audio/letters/langsam-aus.wav" },
    { de: "Schließen Sie die Augen.", ro: "🫁 Închideți ochii · relaxare", audio: "audio/letters/schliessen-augen.wav" },
    { de: "Konzentrieren Sie sich auf die Atmung.", ro: "🫁 Concentrați-vă pe respirație · verb reflexiv", audio: "audio/letters/konzentrieren-atmung.wav" },
    { de: "Entspannen Sie sich.", ro: "🫁 Relaxați-vă · verb reflexiv sich entspannen", audio: "audio/letters/entspannen-sich.wav" },

    // === 5. CUVINTE CHEIE EMOȚIONALE (8) ===
    { de: "die Angst · die Ängste", ro: "💔 frica · feminin · plural cu Umlaut", audio: "audio/letters/die-angst.wav" },
    { de: "die Sorge · die Sorgen", ro: "💔 grija · feminin · sich Sorgen machen (a-și face griji)", audio: "audio/letters/die-sorge.wav" },
    { de: "die Panik", ro: "💔 panica · feminin · NUMAI singular", audio: "audio/letters/die-panik.wav" },
    { de: "der Herzinfarkt · die Herzinfarkte", ro: "💔 atac de cord · masculin · cuvântul care SPERIE", audio: "audio/letters/herzinfarkt.wav" },
    { de: "der Schmerz · die Schmerzen", ro: "💔 durerea · masculin · plural FOARTE folosit (Rückenschmerzen)", audio: "audio/letters/der-schmerz.wav" },
    { de: "die Spritze · die Spritzen", ro: "💉 injecția · feminin · vor der Spritze = înainte de injecție", audio: "audio/letters/die-spritze.wav" },
    { de: "der Zustand · die Zustände", ro: "🏥 starea (medicală) · masculin · plural cu Umlaut", audio: "audio/letters/zustand.wav" },
    { de: "die Atmung", ro: "🫁 respirația · feminin · NUMAI singular", audio: "audio/letters/die-atmung.wav" },

    // === 6. IMPERATIV POLITICOS + VERBE REFLEXIVE (8) ===
    { de: "Atmen Sie!", ro: "📐 Respirați! · imperativ Sie · verb la POZIȚIA 1", audio: "audio/letters/atmen-sie.wav" },
    { de: "Bleiben Sie ruhig!", ro: "📐 Rămâneți calmă! · imperativ + adjectiv", audio: "audio/letters/bleiben-ruhig.wav" },
    { de: "Versuchen Sie!", ro: "📐 Încercați! · imperativ Sie", audio: "audio/letters/versuchen-sie.wav" },
    { de: "Seien Sie unbesorgt!", ro: "📐 Fiți fără griji! · IMPERATIV sein neregulat (NU Sind)", audio: "audio/letters/seien-sie.wav" },
    { de: "Entspannen Sie sich!", ro: "📐 Relaxați-vă! · reflexiv · sich rămâne sich la imperativ Sie", audio: "audio/letters/entspannen-sich-imp.wav" },
    { de: "Setzen Sie sich!", ro: "📐 Așezați-vă! · reflexiv sich setzen", audio: "audio/letters/setzen-sich.wav" },
    { de: "Bei Ihnen vs bei Ihnen", ro: "📐 bei + Ihnen (Dativ) = lângă dumneavoastră · ich bin BEI Ihnen", audio: "audio/letters/bei-ihnen-grammar.wav" },
    { de: "vertrauen + Dativ", ro: "📐 a avea încredere · vertrauen Sie MIR (Dat), NU mich (Akk)!", audio: "audio/letters/vertrauen-dativ.wav" }
];

// ============================================
// BUILD FLASHCARDS UI
// ============================================
let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Fraze de bază · Fraze de încurajare · Autoritate medicală · Tehnica respirației · Cuvinte cheie emoționale · Imperativ politicos + verbe reflexive.</p>
            <p>🌟 Materialul vine de la <strong>Agnesa</strong>, Pflegerin colaboratoare cu experiență de teren.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');
    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) { audio.pause(); audio.src = card.audio; audio.load(); }
    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';
    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
