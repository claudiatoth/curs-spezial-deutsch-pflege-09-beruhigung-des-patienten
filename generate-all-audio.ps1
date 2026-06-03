# Generare WAV-uri Hedda pentru Pflege L9 - Beruhigung des Patienten
# 10 dictat + 48 flashcards = 58 fisiere
# Bazat pe materialul Agnesa (Pflegerin colaboratoare)

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1

# DICTAT (10)
$dictat = @(
    @{ file='dictat-01.wav'; text='Alles wird gut.' },
    @{ file='dictat-02.wav'; text='Ich bin bei Ihnen.' },
    @{ file='dictat-03.wav'; text='Keine Angst.' },
    @{ file='dictat-04.wav'; text='Bitte bleiben Sie ruhig.' },
    @{ file='dictat-05.wav'; text='Atmen Sie tief ein.' },
    @{ file='dictat-06.wav'; text='Sie sind nicht allein.' },
    @{ file='dictat-07.wav'; text='Das schaffen Sie schon.' },
    @{ file='dictat-08.wav'; text='Kopf hoch!' },
    @{ file='dictat-09.wav'; text='Spuren Sie meine Hand.' },
    @{ file='dictat-10.wav'; text='Gemeinsam schaffen wir das.' }
)

# FLASHCARDS (48)
$flashcards = @(
    # Fraze de baza (8)
    @{ file='alles-wird-gut.wav';      text='Alles wird gut.' },
    @{ file='bei-ihnen.wav';           text='Ich bin bei Ihnen.' },
    @{ file='keine-angst.wav';         text='Keine Angst.' },
    @{ file='nicht-allein.wav';        text='Sie sind nicht allein.' },
    @{ file='guten-haenden.wav';       text='Sie sind in guten Handen.' },
    @{ file='bleiben-sie-ruhig.wav';   text='Bitte bleiben Sie ruhig.' },
    @{ file='ich-helfe.wav';           text='Ich helfe Ihnen.' },
    @{ file='kuemmern-uns.wav';        text='Wir kummern uns um Sie.' },

    # Fraze de incurajare (8)
    @{ file='schaffen-sie.wav';        text='Das schaffen Sie schon.' },
    @{ file='machen-gut.wav';          text='Sie machen das sehr gut.' },
    @{ file='kopf-hoch.wav';           text='Kopf hoch!' },
    @{ file='nicht-so-schlimm.wav';    text='Es ist nicht so schlimm, wie es aussieht.' },
    @{ file='versuchen-entspannen.wav'; text='Versuchen Sie sich zu entspannen.' },
    @{ file='gemeinsam-schaffen.wav';  text='Gemeinsam schaffen wir das.' },
    @{ file='koennen-vertrauen.wav';   text='Sie konnen mir vertrauen.' },
    @{ file='keine-angst-haben.wav';   text='Sie mussen keine Angst haben.' },

    # Autoritate medicala (8)
    @{ file='arzt-informiert.wav';     text='Der Arzt ist bereits informiert.' },
    @{ file='zustand-beobachten.wav';  text='Wir beobachten Ihren Zustand genau.' },
    @{ file='gute-aerzte.wav';         text='Wir haben hier gute Arzte.' },
    @{ file='grund-zur-panik.wav';     text='Es besteht kein Grund zur Panik.' },
    @{ file='bleibe-bis-besser.wav';   text='Ich bleibe bei Ihnen, bis es Ihnen besser geht.' },
    @{ file='schmerzen-bescheid.wav';  text='Wenn Sie Schmerzen haben, sagen Sie mir Bescheid.' },
    @{ file='seien-sie-unbesorgt.wav'; text='Seien Sie unbesorgt.' },
    @{ file='keine-sorgen.wav';        text='Machen Sie sich keine Sorgen.' },

    # Tehnica respiratiei (8)
    @{ file='schauen-an.wav';          text='Schauen Sie mich an.' },
    @{ file='spueren-hand.wav';        text='Spuren Sie meine Hand.' },
    @{ file='atmen-tief.wav';          text='Atmen Sie tief ein.' },
    @{ file='halten-kurz.wav';         text='Halten Sie kurz.' },
    @{ file='langsam-aus.wav';         text='Und langsam aus.' },
    @{ file='schliessen-augen.wav';    text='Schliessen Sie die Augen.' },
    @{ file='konzentrieren-atmung.wav'; text='Konzentrieren Sie sich auf die Atmung.' },
    @{ file='entspannen-sich.wav';     text='Entspannen Sie sich.' },

    # Cuvinte cheie emotionale (8)
    @{ file='die-angst.wav';           text='die Angst. Die Angste.' },
    @{ file='die-sorge.wav';           text='die Sorge. Die Sorgen.' },
    @{ file='die-panik.wav';           text='die Panik.' },
    @{ file='herzinfarkt.wav';         text='der Herzinfarkt.' },
    @{ file='der-schmerz.wav';         text='der Schmerz. Die Schmerzen.' },
    @{ file='die-spritze.wav';         text='die Spritze.' },
    @{ file='zustand.wav';             text='der Zustand. Die Zustande.' },
    @{ file='die-atmung.wav';          text='die Atmung.' },

    # Imperativ + reflexive (8)
    @{ file='atmen-sie.wav';           text='Atmen Sie!' },
    @{ file='bleiben-ruhig.wav';       text='Bleiben Sie ruhig!' },
    @{ file='versuchen-sie.wav';       text='Versuchen Sie!' },
    @{ file='seien-sie.wav';           text='Seien Sie unbesorgt!' },
    @{ file='entspannen-sich-imp.wav'; text='Entspannen Sie sich!' },
    @{ file='setzen-sich.wav';         text='Setzen Sie sich!' },
    @{ file='bei-ihnen-grammar.wav';   text='bei Ihnen. Lasa-mi langa dumneavoastra.' },
    @{ file='vertrauen-dativ.wav';     text='vertrauen plus Dativ. Sie konnen mir vertrauen.' }
)

$total = $dictat.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })
