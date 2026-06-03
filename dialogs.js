// ============================================
// DIALOGS.JS — Pflege 9: Beruhigung des Patienten
// 2 dialoguri (panică nocturnă + frica de injecție) · sync audio.currentTime
// 🌟 Bazat pe materialul Agnesa — fraze REALE de teren
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

// ============================================
// DIALOG 1: „Mein Herz schlägt schnell" — Andreea + Frau Müller (panică nocturnă 3:00)
// 12 replici, ~85 sec (extins — moment intens)
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Mein Herz schlägt schnell',
    context: 'Ora 3:00 dimineața. Andreea aude prin perete vocea Frauei Müller — sună speriată. Sare din pat și intră în dormitor. Frau Müller stă întinsă, palidă, mâna pe piept. „Mein Herz!" — crede că are atac de cord. ESTE de fapt anxietate nocturnă (a mai avut). Andreea aprinde lumina mică, se așază pe marginea patului, ia mâna ei, începe calmarea cu fraze Agnesa.',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 85,
    replici: [
        { id: 1, speaker: 'fraumueller', start: 0,  duration: 6, de: 'Andreea! Mein Herz schlägt schnell!', ro: 'Andreea! Mi se bate inima repede!' },
        { id: 2, speaker: 'andreea',     start: 6,  duration: 7, de: 'Ich bin hier, Frau Müller. Keine Angst.', ro: 'Sunt aici, Doamna Müller. Nu vă fie teamă.' },
        { id: 3, speaker: 'fraumueller', start: 13, duration: 7, de: 'Ich glaube, ich habe einen Herzinfarkt!', ro: 'Cred că am infarct!' },
        { id: 4, speaker: 'andreea',     start: 20, duration: 9, de: 'Bitte bleiben Sie ruhig. Es besteht kein Grund zur Panik.', ro: 'Vă rog să rămâneți calmă. Nu există motiv de panică.' },
        { id: 5, speaker: 'fraumueller', start: 29, duration: 6, de: 'Aber es tut so weh hier...', ro: 'Dar mă doare aici...' },
        { id: 6, speaker: 'andreea',     start: 35, duration: 8, de: 'Spüren Sie meine Hand. Atmen Sie tief ein.', ro: 'Simțiți mâna mea. Respirați adânc.' },
        { id: 7, speaker: 'andreea',     start: 43, duration: 6, de: 'Und langsam aus. Sehr gut.', ro: 'Și încet afară. Foarte bine.' },
        { id: 8, speaker: 'fraumueller', start: 49, duration: 5, de: 'Es geht ein bisschen besser...', ro: 'E un pic mai bine...' },
        { id: 9, speaker: 'andreea',     start: 54, duration: 10, de: 'Sehr gut. Noch einmal — ein… und aus. Sie sind nicht allein.', ro: 'Foarte bine. Încă o dată — inspir... expir. Nu sunteți singură.' },
        { id: 10, speaker: 'fraumueller', start: 64, duration: 6, de: 'Bleiben Sie bei mir, Andreea.', ro: 'Rămâneți cu mine, Andreea.' },
        { id: 11, speaker: 'andreea',    start: 70, duration: 9, de: 'Ich bleibe bei Ihnen, bis es Ihnen besser geht.', ro: 'Rămân lângă dumneavoastră până vă simțiți mai bine.' },
        { id: 12, speaker: 'fraumueller', start: 79, duration: 6, de: 'Danke. Sie sind so gut zu mir.', ro: 'Mulțumesc. Sunteți așa de bună cu mine.' }
    ]
};

// ============================================
// DIALOG 2: „Vor der Spritze" — Andreea + Frau Müller (înainte de injecție)
// 10 replici, ~70 sec
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Vor der Spritze',
    context: 'Marți dimineața. Dr. Schmidt (Hausarzt) e pe drum — vine pentru injecția săptămânală de vitamină B12. Frau Müller s-a trezit deja tensionată — vede seringa, se face roșie. Andreea o vede agitată și începe calmarea cu 10 minute înainte. Folosește combinația: fraze de bază + autoritate medicală + tehnica respirației.',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 70,
    replici: [
        { id: 1, speaker: 'fraumueller', start: 0,  duration: 6, de: 'Ich habe Angst vor der Spritze.', ro: 'Mi-e frică de injecție.' },
        { id: 2, speaker: 'andreea',     start: 6,  duration: 8, de: 'Ich verstehe. Keine Angst, ich bin bei Ihnen.', ro: 'Înțeleg. Nu vă fie teamă, sunt lângă dumneavoastră.' },
        { id: 3, speaker: 'fraumueller', start: 14, duration: 5, de: 'Es tut so weh!', ro: 'Doare așa de tare!' },
        { id: 4, speaker: 'andreea',     start: 19, duration: 9, de: 'Es ist nicht so schlimm, wie es aussieht. Dr. Schmidt ist sehr gut.', ro: 'Nu este atât de grav pe cât pare. Dr. Schmidt e foarte bun.' },
        { id: 5, speaker: 'fraumueller', start: 28, duration: 6, de: 'Sind Sie sicher?', ro: 'Sunteți sigură?' },
        { id: 6, speaker: 'andreea',     start: 34, duration: 9, de: 'Ja. Sie können mir vertrauen. Wir haben gute Ärzte.', ro: 'Da. Puteți avea încredere în mine. Avem medici buni.' },
        { id: 7, speaker: 'andreea',     start: 43, duration: 8, de: 'Versuchen Sie sich zu entspannen. Atmen Sie tief.', ro: 'Încercați să vă relaxați. Respirați adânc.' },
        { id: 8, speaker: 'fraumueller', start: 51, duration: 5, de: 'Ich versuche es...', ro: 'Încerc...' },
        { id: 9, speaker: 'andreea',     start: 56, duration: 9, de: 'Sehr gut. Das schaffen Sie schon. Gemeinsam schaffen wir das.', ro: 'Foarte bine. O să reușiți. Vom reuși împreună.' },
        { id: 10, speaker: 'fraumueller', start: 65, duration: 5, de: 'Danke, Andreea. Mit Ihnen geht es.', ro: 'Mulțumesc, Andreea. Cu dumneavoastră se poate.' }
    ]
};

// ============================================
// BUILD ANIMATED DIALOG HTML
// ============================================
function buildAnimatedDialog(data) {
    const otherLabel = 'Frau Müller';
    const otherAvatar = '👵';
    const otherBadge = '👵 Frau Müller';
    const otherSpeakerCode = 'fraumueller';

    const repliciHTML = data.replici.map(r => {
        const spkrLabel = r.speaker === 'andreea' ? '🧑‍⚕️ Andreea' : otherBadge;
        return `
        <div class="reply-item" data-reply-id="${r.id}" data-speaker="${r.speaker}">
            <div class="reply-header">
                <span class="reply-num">${r.id}.</span>
                <span class="reply-speaker speaker-${r.speaker}">${spkrLabel}</span>
                <button class="btn-replay-reply" onclick="replayReply('${data.id}', ${r.id})">🔁</button>
            </div>
            <div class="reply-de">${r.de}</div>
            <div class="reply-ro">${r.ro}</div>
        </div>`;
    }).join('');

    return `
        <div class="animated-dialog" id="dialog-${data.id}" data-dialog-id="${data.id}">
            <div class="dialog-context">
                <strong>📍 Situația:</strong> ${data.context}
            </div>

            <div class="stage-container">
                <div class="stage">
                    <div class="character-wrapper character-andreea" data-speaker="andreea">
                        <div class="character-avatar">
                            <img src="images/andreea.png" alt="Andreea">
                        </div>
                        <div class="character-label">Andreea</div>
                        <div class="speech-bubble speech-andreea" id="bubble-${data.id}-andreea">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>

                    <div class="character-wrapper character-${otherSpeakerCode}" data-speaker="${otherSpeakerCode}">
                        <div class="character-avatar frau-mueller-avatar-large">
                            <span class="avatar-face" style="font-size:48px;">${otherAvatar}</span>
                        </div>
                        <div class="character-label">${otherLabel}</div>
                        <div class="speech-bubble speech-${otherSpeakerCode}" id="bubble-${data.id}-${otherSpeakerCode}">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>
                </div>

                <div class="dialog-controls">
                    <button class="btn-dialog btn-play" id="btn-play-${data.id}" onclick="playDialog('${data.id}')">▶️ Pornește</button>
                    <button class="btn-dialog btn-pause" id="btn-pause-${data.id}" onclick="pauseDialog('${data.id}')" disabled>⏸ Pauză</button>
                    <button class="btn-dialog btn-reset" id="btn-reset-${data.id}" onclick="resetDialog('${data.id}')">🔄 Reset</button>
                </div>

                <div class="dialog-progress">
                    <div class="progress-bar" id="progress-${data.id}"><div class="progress-fill" id="progress-fill-${data.id}"></div></div>
                    <div class="progress-text" id="progress-text-${data.id}">Replica 0 / ${data.replici.length}</div>
                </div>

                <audio id="audio-${data.id}" preload="none">
                    <source src="${data.audioFile}" type="audio/mpeg">
                </audio>
            </div>

            <details class="transcript-details">
                <summary>📜 Vezi transcriptul complet (bilingv)</summary>
                <div class="transcript-list">
                    ${repliciHTML}
                </div>
            </details>
        </div>
    `;
}

// ============================================
// STATE + PLAY/PAUSE cu currentTime sync
// ============================================
const dialogState = {};

function initDialogState(dialogId) {
    if (!dialogState[dialogId]) {
        dialogState[dialogId] = {
            isPlaying: false,
            currentReply: 0,
            lastDisplayedIdx: -1,
            timeouts: [],
            timeUpdateHandler: null,
            endedHandler: null,
            data: dialogId === 'dialog1' ? dialog1Data : dialog2Data
        };
    }
    return dialogState[dialogId];
}

function playDialog(dialogId) {
    const state = initDialogState(dialogId);
    if (state.isPlaying) return;
    state.isPlaying = true;
    const data = state.data;
    const audio = document.getElementById(`audio-${dialogId}`);
    document.getElementById(`btn-play-${dialogId}`).disabled = true;
    document.getElementById(`btn-pause-${dialogId}`).disabled = false;
    if (audio && !state.timeUpdateHandler) {
        state.timeUpdateHandler = () => {
            if (!state.isPlaying) return;
            const t = audio.currentTime;
            let currentIdx = -1;
            for (let i = 0; i < data.replici.length; i++) {
                if (t >= data.replici[i].start) currentIdx = i;
                else break;
            }
            if (currentIdx >= 0 && currentIdx !== state.lastDisplayedIdx) {
                state.lastDisplayedIdx = currentIdx;
                state.currentReply = currentIdx + 1;
                showReply(dialogId, data.replici[currentIdx]);
                updateProgress(dialogId);
            }
        };
        audio.addEventListener('timeupdate', state.timeUpdateHandler);
        state.endedHandler = () => endDialog(dialogId);
        audio.addEventListener('ended', state.endedHandler);
    }
    if (audio) {
        if (state.currentReply >= data.replici.length) {
            audio.currentTime = 0;
            state.currentReply = 0;
            state.lastDisplayedIdx = -1;
        }
        audio.play().catch(() => { startTimerFallback(dialogId); });
    } else {
        startTimerFallback(dialogId);
    }
}

function startTimerFallback(dialogId) {
    const state = initDialogState(dialogId);
    const data = state.data;
    const startFromReply = state.currentReply;
    const offsetMs = startFromReply > 0 ? data.replici[startFromReply - 1].start * 1000 : 0;
    for (let i = startFromReply; i < data.replici.length; i++) {
        const reply = data.replici[i];
        const delayMs = (reply.start * 1000) - offsetMs;
        const timeout = setTimeout(() => {
            if (!state.isPlaying) return;
            state.lastDisplayedIdx = i;
            showReply(dialogId, reply);
            state.currentReply = i + 1;
            updateProgress(dialogId);
            if (i === data.replici.length - 1) {
                setTimeout(() => endDialog(dialogId), reply.duration * 1000);
            }
        }, delayMs);
        state.timeouts.push(timeout);
    }
}

function showReply(dialogId, reply) {
    const activeChar = document.querySelector(`#dialog-${dialogId} .character-${reply.speaker}`);
    const sameSpeakerContinues = activeChar && activeChar.classList.contains('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => {
        if (c !== activeChar) c.classList.remove('speaking');
    });
    if (activeChar) activeChar.classList.add('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => {
        if (!b.id.endsWith('-' + reply.speaker)) b.classList.remove('visible');
    });
    const bubble = document.getElementById(`bubble-${dialogId}-${reply.speaker}`);
    if (!bubble) return;
    if (sameSpeakerContinues) {
        bubble.classList.add('text-fading');
        setTimeout(() => {
            bubble.querySelector('.bubble-de').textContent = reply.de;
            bubble.querySelector('.bubble-ro').textContent = reply.ro;
            bubble.classList.remove('text-fading');
        }, 180);
    } else {
        bubble.querySelector('.bubble-de').textContent = reply.de;
        bubble.querySelector('.bubble-ro').textContent = reply.ro;
        bubble.classList.add('visible');
    }
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const replyItem = document.querySelector(`#dialog-${dialogId} .reply-item[data-reply-id="${reply.id}"]`);
    if (replyItem) replyItem.classList.add('active');
}

function pauseDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state || !state.isPlaying) return;
    state.isPlaying = false;
    state.timeouts.forEach(t => clearTimeout(t));
    state.timeouts = [];
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) audio.pause();
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function resetDialog(dialogId) {
    pauseDialog(dialogId);
    const state = initDialogState(dialogId);
    state.currentReply = 0;
    state.lastDisplayedIdx = -1;
    state.timeouts = [];
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => c.classList.remove('speaking'));
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => b.classList.remove('visible'));
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) { audio.pause(); audio.currentTime = 0; }
    updateProgress(dialogId);
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function endDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    state.isPlaying = false;
    state.currentReply = state.data.replici.length;
    state.timeouts = [];
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function updateProgress(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    const total = state.data.replici.length;
    const pct = total > 0 ? (state.currentReply / total) * 100 : 0;
    const fill = document.getElementById(`progress-fill-${dialogId}`);
    const text = document.getElementById(`progress-text-${dialogId}`);
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `Replica ${state.currentReply} / ${total}`;
}

function replayReply(dialogId, replyId) {
    const data = (dialogId === 'dialog1') ? dialog1Data : dialog2Data;
    const replyIdx = data.replici.findIndex(r => r.id === replyId);
    if (replyIdx < 0) return;
    const reply = data.replici[replyIdx];
    const state = initDialogState(dialogId);
    state.lastDisplayedIdx = -1;
    showReply(dialogId, reply);
    state.currentReply = replyIdx + 1;
    updateProgress(dialogId);
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) {
        audio.currentTime = reply.start;
        if (audio.paused) {
            state.isPlaying = true;
            audio.play().catch(() => {});
            document.getElementById(`btn-play-${dialogId}`).disabled = true;
            document.getElementById(`btn-pause-${dialogId}`).disabled = false;
        }
    }
}

document.getElementById('dialog1-container').innerHTML = buildAnimatedDialog(dialog1Data);
document.getElementById('dialog2-container').innerHTML = buildAnimatedDialog(dialog2Data);
