// ============================================
// THEORY.JS — Pflege 9: Beruhigung des Patienten
// 🌟 PRIMA LECȚIE A1.2 + PRIMA bazată pe material Agnesa (Pflegerin colaboratoare)
// 25 fraze empatice ESENȚIALE pentru calmarea pacientului
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>💚 Calmarea — cea mai importantă superputere a Pflegerinnei</h4>
  <p>Pe parcursul celor 8 lecții anterioare ai învățat <strong>structura</strong>: cum saluți, cum cunoști familia, cum descrii casa, cum spui ora. <strong>Acum vine partea care nu se învață în 1 zi</strong>: cum o calmezi pe Frau Müller când îi e frică, când plânge, când crede că moare.</p>
  <p>Lecția aceasta îți dă <strong>25 de fraze esențiale</strong> grupate pe situație: frazele de bază, frazele de încurajare, frazele cu autoritate medicală + tehnica respirației. Plus gramatica Imperativul politicos (Sie-Form) — pentru că o instrucțiune calmă spune mai mult decât 100 de cuvinte.</p>
</div>

<div class="box-etic" style="background:linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-left:4px solid #047857; padding:16px 22px; margin:20px 0; border-radius:8px;">
  <h4 style="color:#065f46; margin-bottom:6px;">🌟 Lecție co-creată cu Agnesa</h4>
  <p style="color:#065f46; margin:0;">Cele <strong>25 de fraze esențiale</strong> din această lecție vin din materialul colaboratoarei noastre <strong>Agnesa</strong> — Pflegerin cu experiență de teren în 24-Stunden-Betreuung din Germania. Ea le-a folosit zilnic cu pacientele ei. <strong>Această lecție e UNICĂ pe piață</strong> — niciun curs Pflege românesc nu acoperă calmarea pacientului cu fraze reale de teren. 💚</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 6 piloni ai calmării</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">💚</div>
      <div class="pillar-title">De ce calmarea?</div>
      <div class="pillar-text">Situațiile reale · politica brand-ului · calmul tău = profesionalismul tău.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🤝</div>
      <div class="pillar-title">Frazele de bază</div>
      <div class="pillar-text">8 fraze ULTRA · „Alles wird gut", „Ich bin bei Ihnen", „Keine Angst".</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🌟</div>
      <div class="pillar-title">Încurajarea</div>
      <div class="pillar-text">8 fraze · „Das schaffen Sie schon", „Kopf hoch", „Gemeinsam".</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🏥</div>
      <div class="pillar-title">Autoritate medicală</div>
      <div class="pillar-text">6 fraze · „Der Arzt ist informiert", „Wir kümmern uns um Sie".</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🫁</div>
      <div class="pillar-title">Respirația</div>
      <div class="pillar-text">Tehnica fizică · „Atmen Sie tief ein und aus", calmare prin corp.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">📐</div>
      <div class="pillar-title">Imperativ Sie</div>
      <div class="pillar-text">Bleiben Sie · Atmen Sie · Versuchen Sie + verbe reflexive sich-.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — De ce calmarea?
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ De ce calmarea? — situații reale & politica brand</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-de-ce-calmarea.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">În 24-Stunden-Pflege ești MARTORĂ la <strong>cele mai vulnerabile momente</strong> ale pacientei: noaptea când se trezește speriată, înainte de injecție, când doctorul îi spune o veste rea, când fiica nu o sună 3 zile la rând. <strong>Cum reacționezi tu schimbă totul</strong>. Vorbele tale sunt medicament.</p>

    <h5 style="color:#065f46; margin-top:18px;">📋 Situațiile clasice de calmare</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Situație</th><th>Ce simte Frau Müller</th><th>Cum reacționezi tu</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>🌙 Trezire nocturnă (3:00)</strong></td><td>Frică · confuzie · „Cine ești tu?"</td><td>Voce calmă · lumină mică · contact fizic ușor (mâna pe a ei)</td></tr>
          <tr><td><strong>💉 Înainte de injecție</strong></td><td>Tensiune · amintiri de spital · refuz</td><td>Respirație controlată · explicație simplă · ții mâna ei</td></tr>
          <tr><td><strong>📞 Vizita care nu vine</strong></td><td>Tristețe · uitare · „Petra m-a uitat"</td><td>Empatie · NU minți · explicație concretă · Tee</td></tr>
          <tr><td><strong>🦴 Durere de spate</strong></td><td>Frica că e ceva grav · plâns</td><td>Reasigurare profesională · Hausarzt vine · NU minimaliza</td></tr>
          <tr><td><strong>😔 Crize de demență ușoară</strong></td><td>Pierde noțiunea · plânge · agresiv ușor</td><td>NU contrazici · prezență calmă · subiect cunoscut (poze)</td></tr>
          <tr><td><strong>🥶 Dimineață rece + dureri</strong></td><td>NU vrea să se trezească · negativă</td><td>Pătură caldă · cafea aromă · vorbe blânde</td></tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>💖 Politica brand-ului Annettes</h5>
      <p><strong>Calmul tău e profesionalismul tău.</strong> O Pflegerin care țipă „liniștește-te!" e o Pflegerin care a pierdut controlul. O Pflegerin care vorbește încet, atinge cu blândețe și folosește FRAZELE potrivite — <strong>aceea este o Pflegerin pe care familia o ține 5 ani</strong> și o recomandă mai departe.</p>
      <p>📌 Reguli ferme de calmare în brand:<br>
      1. <strong>NU țipa niciodată</strong> — chiar și când e haos<br>
      2. <strong>NU minți</strong> — pacienta simte<br>
      3. <strong>NU contrazice fizic</strong> — în confuzie, AGREE & redirecționează<br>
      4. <strong>Atinge UȘOR mâna</strong> (cu permisiune dacă posibil) — contactul fizic calmează<br>
      5. <strong>Repetă fraza cheie</strong> de 2-3 ori cu pauze, NU 10 fraze diferite</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Frazele de bază (8 fraze)
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Frazele de bază — cele 8 ULTRA-folosite</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-fraze-baza.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Acestea sunt cele <strong>8 fraze pe care le vei spune cel mai des</strong>. Învață-le pe de rost. Repetă-le acasă. Spune-le în oglindă cu zâmbet. <strong>Trebuie să iasă natural</strong> — nu cu ezitare.</p>

    <h5 style="color:#065f46; margin-top:18px;">💚 Cele 8 fraze de bază (din Agnesa)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Fraza</th><th>🇷🇴 Traducere</th><th>Folosită când</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Alles wird gut.</span></td><td>Totul va fi bine.</td><td>Cea mai universală · oricând</td></tr>
          <tr><td><span class="pflege-fraza">Ich bin bei Ihnen.</span></td><td>Sunt aici lângă dumneavoastră.</td><td>Noaptea · panică · singurătate</td></tr>
          <tr><td><span class="pflege-fraza">Keine Angst.</span></td><td>Nu vă fie teamă.</td><td>Frica concretă (injecție, doctor)</td></tr>
          <tr><td><span class="pflege-fraza">Sie sind nicht allein.</span></td><td>Nu sunteți singură.</td><td>Tristețe · vizita nu vine</td></tr>
          <tr><td><span class="pflege-fraza">Sie sind in guten Händen.</span></td><td>Sunteți pe mâini bune.</td><td>Preluare îngrijire · doctor nou</td></tr>
          <tr><td><span class="pflege-fraza">Bitte bleiben Sie ruhig.</span></td><td>Vă rog să rămâneți calmă.</td><td>Agitație · panică · înainte de procedură</td></tr>
          <tr><td><span class="pflege-fraza">Ich helfe Ihnen.</span></td><td>Vă ajut.</td><td>Universal · înainte de orice acțiune fizică</td></tr>
          <tr><td><span class="pflege-fraza">Wir kümmern uns um Sie.</span></td><td>Avem grijă de dumneavoastră.</td><td>Plural „noi" = inclusiv familia/echipa</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Construcția „bei Ihnen" — lângă dumneavoastră</h5>
      <p><strong>bei + Dativ</strong> = la / lângă (cu persoane). Sie (formal) → Ihnen (Dativ).</p>
      <p>📌 <strong>Ich bin bei Ihnen.</strong> = Sunt lângă dumneavoastră / cu dumneavoastră.<br>
      📌 <strong>Ich bleibe bei Ihnen.</strong> = Rămân lângă dumneavoastră.</p>
      <p>NU confunda: <em>„mit Ihnen"</em> (cu dumneavoastră, fizic) vs <em>„bei Ihnen"</em> (lângă dumneavoastră, prezență emoțională).</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Frazele de încurajare (8 fraze)
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Frazele de încurajare — „Tu poți, tu reușești"</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-fraze-incurajare.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Frau Müller are momente când se simte <strong>nepotrivită, bătrână, neputincioasă</strong>. „Nu mai sunt bună de nimic." „Mi-am pierdut puterea." Atunci NU o contrazici cu argumente — îi spui <strong>frazele de încurajare</strong>. Scurt. Cald. Repetat.</p>

    <h5 style="color:#065f46; margin-top:18px;">🌟 Cele 8 fraze de încurajare (din Agnesa)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Fraza</th><th>🇷🇴 Traducere</th><th>Folosită când</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Das schaffen Sie schon.</span></td><td>O să reușiți.</td><td>Înainte de un efort (ridicat, mâncat singură)</td></tr>
          <tr><td><span class="pflege-fraza">Sie machen das sehr gut.</span></td><td>Vă descurcați foarte bine.</td><td>În timpul efortului · LAUDĂ procesul</td></tr>
          <tr><td><span class="pflege-fraza">Kopf hoch!</span></td><td>Capul sus!</td><td>Tristețe ușoară · negativism</td></tr>
          <tr><td><span class="pflege-fraza">Es ist nicht so schlimm, wie es aussieht.</span></td><td>Nu este atât de grav pe cât pare.</td><td>Răni mici · simptome care sperie</td></tr>
          <tr><td><span class="pflege-fraza">Versuchen Sie sich zu entspannen.</span></td><td>Încercați să vă relaxați.</td><td>Tensiune fizică · înainte de masaj/proceduri</td></tr>
          <tr><td><span class="pflege-fraza">Gemeinsam schaffen wir das.</span></td><td>Vom reuși împreună.</td><td>Sarcini grele · solidaritate</td></tr>
          <tr><td><span class="pflege-fraza">Sie können mir vertrauen.</span></td><td>Puteți avea încredere în mine.</td><td>Începutul relației · când e nesigură</td></tr>
          <tr><td><span class="pflege-fraza">Sie müssen keine Angst haben.</span></td><td>Nu trebuie să vă fie frică.</td><td>Variantă „Keine Angst" mai elaborată</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Diferența „schaffen" vs „machen"</h5>
      <p>📌 <strong>schaffen</strong> = a reuși (cu efort) · „Das schaffen Sie!" = Vă veți descurca!<br>
      📌 <strong>machen</strong> = a face (general) · „Sie machen das gut" = Faceți asta bine.</p>
      <p>În calmare, <strong>schaffen</strong> e mai puternic — implică recunoașterea efortului.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Frazele cu autoritate medicală (6 fraze)
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Frazele cu autoritate medicală — calm prin profesionalism</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-fraze-medical.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Când Frau Müller intră în <strong>panică medicală</strong> („Mă doare inima!", „Cred că am atac!"), nu e suficient să spui „Alles wird gut". Trebuie să demonstrezi <strong>autoritate profesională</strong>. Acestea sunt frazele care semnalează: <em>„Eu știu ce fac. Sistemul medical e prezent. Tu ești în siguranță."</em></p>

    <h5 style="color:#065f46; margin-top:18px;">🏥 Cele 6 fraze cu autoritate medicală</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Fraza</th><th>🇷🇴 Traducere</th><th>Folosită când</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Der Arzt ist bereits informiert.</span></td><td>Medicul a fost deja informat.</td><td>Anxietate medicală · NU singură</td></tr>
          <tr><td><span class="pflege-fraza">Wir beobachten Ihren Zustand genau.</span></td><td>Monitorizăm atent starea dumneavoastră.</td><td>Simptome ușoare · monitorizare</td></tr>
          <tr><td><span class="pflege-fraza">Wir haben hier gute Ärzte.</span></td><td>Avem aici medici buni.</td><td>Programare nouă · medic nou</td></tr>
          <tr><td><span class="pflege-fraza">Es besteht kein Grund zur Panik.</span></td><td>Nu există motiv de panică.</td><td>Panică acută · simptome care sperie</td></tr>
          <tr><td><span class="pflege-fraza">Ich bleibe bei Ihnen, bis es Ihnen besser geht.</span></td><td>Rămân lângă dumneavoastră până vă simțiți mai bine.</td><td>PROMISIUNE concretă · noaptea, panică</td></tr>
          <tr><td><span class="pflege-fraza">Wenn Sie Schmerzen haben, sagen Sie mir bitte Bescheid.</span></td><td>Dacă aveți dureri, vă rog să-mi spuneți.</td><td>Comunicare proactivă · oferă canal deschis</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Capcană — NU minți</h5>
      <p>Dacă <strong>NU AI SUNAT</strong> încă la Dr. Schmidt, <strong>NU spune</strong> „Der Arzt ist bereits informiert" — e MINCIUNĂ profesională. Variantă onestă:</p>
      <p>✅ <em>„Ich rufe gleich den Arzt an."</em> = Sun imediat medicul.<br>
      ✅ <em>„Wenn es nicht besser wird, rufen wir den Arzt."</em> = Dacă nu se îmbunătățește, sunăm medicul.</p>
      <p>Frau Müller (chiar și cu demență ușoară) <strong>simte minciunile</strong> — relația se rupe.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — Tehnica respirației
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ Tehnica respirației — calmul prin corp</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-respiratie.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Când frazele singure nu sunt de ajuns — pacienta e prea panicată să asculte — <strong>calmul intră prin corp</strong>. Tehnica respirației controlate liniștește sistemul nervos în 30-60 secunde. <strong>O înveți pe Frau Müller</strong>, o folosești ÎMPREUNĂ cu ea (tu respiri vizibil, ea te imită).</p>

    <h5 style="color:#065f46; margin-top:18px;">🫁 Instrucțiunile de respirație (în ordine)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Pasul</th><th>🇩🇪 Instrucțiunea</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Stabilizezi</strong></td><td><span class="pflege-fraza">Schauen Sie mich an.</span></td><td>Priviți-mă. (contact vizual)</td></tr>
          <tr><td><strong>2. Conectezi fizic</strong></td><td><span class="pflege-fraza">Spüren Sie meine Hand.</span></td><td>Simțiți mâna mea.</td></tr>
          <tr><td><strong>3. Inspiri</strong></td><td><span class="pflege-fraza">Atmen Sie tief ein.</span></td><td>Respirați adânc.</td></tr>
          <tr><td><strong>4. Pauză</strong></td><td><span class="pflege-fraza">Halten Sie kurz.</span></td><td>Țineți puțin.</td></tr>
          <tr><td><strong>5. Expiri</strong></td><td><span class="pflege-fraza">Und langsam aus.</span></td><td>Și încet afară.</td></tr>
          <tr><td><strong>6. Repetare</strong></td><td><span class="pflege-fraza">Noch einmal — ein… aus…</span></td><td>Încă o dată — inspir… expir…</td></tr>
          <tr><td><strong>7. Confirmi</strong></td><td><span class="pflege-fraza">Sehr gut. Geht es Ihnen besser?</span></td><td>Foarte bine. Vă simțiți mai bine?</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🧘 Alte fraze pentru relaxare fizică</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Fraza</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Schließen Sie die Augen.</span></td><td>Închideți ochii.</td></tr>
          <tr><td><span class="pflege-fraza">Konzentrieren Sie sich auf die Atmung.</span></td><td>Concentrați-vă pe respirație.</td></tr>
          <tr><td><span class="pflege-fraza">Lassen Sie die Schultern fallen.</span></td><td>Lăsați umerii să cadă.</td></tr>
          <tr><td><span class="pflege-fraza">Entspannen Sie sich.</span></td><td>Relaxați-vă. (verb reflexiv sich entspannen)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>💖 Sfat practic</h5>
      <p><strong>Tu respiri PRIMA</strong>, vizibil, audibil. Frau Müller te va imita inconștient (mirror neurons). Dacă tu rămâi calmă fizic, ea se calmează fizic. <strong>Calmul tău e contagios — în 30 de secunde.</strong></p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Gramatica: Imperativ politicos Sie
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ 🧱 Gramatica pe scurt — Imperativul politicos (Sie-Form)</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-imperativ.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Toate frazele de calmare conțin <strong>imperative politicoase</strong>: „Atmen Sie", „Bleiben Sie ruhig", „Schließen Sie die Augen". E gramatica cea mai importantă pentru Pflegerin — comenzi blânde care nu sună a ordin.</p>

    <h5 style="color:#065f46; margin-top:18px;">📐 Formula imperativului Sie</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Verb (infinitiv)</th><th>Imperativ Sie</th><th>🇷🇴 Sens</th></tr>
        </thead>
        <tbody>
          <tr><td>atmen (a respira)</td><td><span class="pflege-fraza">Atmen Sie!</span></td><td>Respirați!</td></tr>
          <tr><td>bleiben (a rămâne)</td><td><span class="pflege-fraza">Bleiben Sie ruhig!</span></td><td>Rămâneți calmă!</td></tr>
          <tr><td>schließen (a închide)</td><td><span class="pflege-fraza">Schließen Sie die Augen!</span></td><td>Închideți ochii!</td></tr>
          <tr><td>versuchen (a încerca)</td><td><span class="pflege-fraza">Versuchen Sie!</span></td><td>Încercați!</td></tr>
          <tr><td>spüren (a simți)</td><td><span class="pflege-fraza">Spüren Sie meine Hand!</span></td><td>Simțiți mâna mea!</td></tr>
          <tr><td>halten (a ține)</td><td><span class="pflege-fraza">Halten Sie kurz!</span></td><td>Țineți puțin!</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-summary">
      <h5 style="color:#065f46; margin-bottom:10px;">🎯 Regula de aur (3 secunde)</h5>
      <p><strong>Imperativ Sie = Verb conjugat „Sie" + Sie + restul propoziției</strong></p>
      <p>Formula:</p>
      <table class="summary-table">
        <thead>
          <tr><th>Conjugare „sie respiră"</th><th>→ Imperativ</th></tr>
        </thead>
        <tbody>
          <tr><td>Sie atmen</td><td><strong>Atmen Sie!</strong> (verbul la POZIȚIA 1)</td></tr>
          <tr><td>Sie bleiben ruhig</td><td><strong>Bleiben Sie ruhig!</strong></td></tr>
        </tbody>
      </table>
      <p>📌 <strong>Diferența</strong> față de propoziția normală: la propoziție „Sie atmen" (Sie pe prima poziție). La imperativ „Atmen Sie!" — verbul TREC PE PRIMA POZIȚIE + se păstrează cuvântul „Sie" (politicos obligatoriu).</p>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🔄 Verbele reflexive — sich entspannen, sich konzentrieren</h5>
    <p class="theory-intro-para">Multe verbe de calmare sunt <strong>reflexive</strong> — au „sich" obligatoriu. La imperativ Sie, „sich" devine <strong>sich</strong> (la fel, formal).</p>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Infinitiv</th><th>Imperativ Sie</th><th>🇷🇴 Sens</th></tr>
        </thead>
        <tbody>
          <tr><td>sich entspannen</td><td><span class="pflege-fraza">Entspannen Sie sich!</span></td><td>Relaxați-vă!</td></tr>
          <tr><td>sich konzentrieren</td><td><span class="pflege-fraza">Konzentrieren Sie sich!</span></td><td>Concentrați-vă!</td></tr>
          <tr><td>sich setzen</td><td><span class="pflege-fraza">Setzen Sie sich!</span></td><td>Așezați-vă!</td></tr>
          <tr><td>sich beruhigen</td><td><span class="pflege-fraza">Beruhigen Sie sich!</span></td><td>Calmați-vă!</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Capcana — „Beruhigen Sie sich!"</h5>
      <p>Atenție! Verbul lecției — <strong>beruhigen</strong> = a calma — e reflexiv DOAR când TE calmezi pe TINE. Pentru a calma pe ALTUL, NU folosești „beruhigen Sie sich" (asta înseamnă „calmează-te TU singură" — sună RECE și autoritar).</p>
      <p>✅ Tu către pacientă: <em>„Bitte bleiben Sie ruhig."</em> (politicos, blând)<br>
      ❌ Tu către pacientă: <em>„Beruhigen Sie sich!"</em> (RECE, defensiv)</p>
      <p>Folosește <em>„Beruhigen Sie sich"</em> DOAR în context formal-medical urgent (familia care țipă la spital, vecin agitat).</p>
    </div>

  </div>
</div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;
