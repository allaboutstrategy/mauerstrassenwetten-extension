const defaultReplacements = {
    'Google': 'Gurke',
    'Facebook': 'Gesichtsbuch',
    'Internet': 'Zwischennetz',
    'After Hour': 'Außerbörslicher Handel (ab 22 Uhr)',
    'AMD': 'Mama Su´s Bumsbude',
    'Call-Option':'Anruf',
    'Anruf von Margarine': 'problematischer Anruf, Warnung',
    'Apple':'Apfel',
    'Put-Option':'Aufleger',
    'Ausgeknockt': 'KO-Schwelle eines Knockout-Scheins wurde erreicht',
    'AWZV': 'Angst was zu verpassen (engl.: FOMO)',
    'Baader Bank':'Ballerbank',
    'Tonies':'Bärchenwurst',
    'Paypal':'Bezahlkumpel',
    'Bitcoin':'Bisschenmünze',
    'Brechgleich': 'Die Verlustzone wird verlassen',
    'Cannabis': 'Brokkoli',
    'Boomer / Bummer / Explodierer / Knaller': 'Babyboomer, also Leute die Ü50 sind oder DAX-Unternehmen (Siemens, Bayer, BASF etc.) handeln',
    'Bummer': 'Babyboomer, also Leute die Ü50 sind oder DAX-Unternehmen (Siemens, Bayer, BASF etc.) handeln',
    'Explodierer': 'Babyboomer, also Leute die Ü50 sind oder DAX-Unternehmen (Siemens, Bayer, BASF etc.) handeln',
    'Knaller': 'Babyboomer, also Leute die Ü50 sind oder DAX-Unternehmen (Siemens, Bayer, BASF etc.) handeln',
    'Bumshandeln': 'Aktien handeln, die ein starkes Momentum haben',
    'Carbonara': 'Grundnahrungsmittel im Umkreis von r/Finanzen',
    'Haier': 'Chinesische Kühlschränke',
    'Copium': 'Mischung aus Coping und Opium, erlittene Verluste durch Ablenkung oder Konfirmationstobias herunterspielen/vergessen',
    'Crocs': 'Plastikschuhe, die dich reich machen',
    'DAX':'Dachs',
    'Dirk Müller': 'Der Meister',
    'Elon Musk': 'Elong',
    'FAB': 'Frühaufsteherbande, Fachangesteller für Bäderbetriebe (einflussgreiche Gruppe auf MSW)',
    'Amerikaner':'Fettbürger',
    'Der Freund meiner Frau': 'Gut aussehender, trainierter, braungebrannter Stecher mit viel Kohle der mir Taschengeld gibt für meine retardierten All-In AWZV Hebel Moves',
    //'FF': 'Drücke F, um Respekt zu zollen',
    'Goldman Sachs':'Goldener Mann aus Sachsen',
    'Griechen': 'Die Komponenten eines Optionsscheins, die niemand kapiert',
    'HSBC': 'Ehrenemittent',
    'Trade Republic':'Handelsrepublik',
    'Hedgefonds':'Hecken',
    'Home24':'Heim24 / Zuhause24',//(zumindest solange der Kurs bei 24€ steht...)'
    'Hurensohn': 'Hurensohn (beliebte Beleidigung auf MSW)',
    'ifaq': 'Bester Mod aller Zeiten',
    'Amazon':'Jeff\'s Bücherladen',
    'Jokus': 'Schenkelklopfer',
    'Jerome Powell':'JPOW', //(der von der FED)',
    'Wirecard':'Kabelkarte',
    'Cathie Wood':'Katharina Holz / Käthe Pressspan',
    'sicheres Investment':'Kann nicht Titten hoch gehen',
    'Knockout-Zertifikat':'Klopfaus',
    'Confirmation bias':'Konfirmationstobias',
    'Corsair':'Korsaren',
    'Peinlich':'Kringelig',
    'Short-Position':'Kurzhose',
    'Kurzleiter': 'Das was die Hecken nutzen, um dein totsicheres Investment zu zerstören',//(angriff)
    'u/ProfitMomentumRakete':'Der lustige Linien-Mann',
    'Laura Müller': 'Mauerstraßengöttin mit geilen Viechern 🤤',
    'Lisa Su':'Mama Su',//(Ceo von AMD)'
    'Meme':'MaiMai',
    'Kredit':'Margin/Margarine',
    'Teamviewer':'Mannschaftsbetrachter',
    'Disney':'Die Maus',
    'Meta':'Meter',
    'NASDAQ':'Nassdachs', //🦡💦,
    'NVIDIA': 'sieht immer überbewertet aus',
    'Olaf': 'nacht die Börse auf',
    'OS': 'Optionsschein',
    'Beitrag':'Pfosten',
    'Power Hour': 'Zeit von 21 bis 22 Uhr',//Aua
    'Square':'Quadrat',
    'Short Squeeze':'Kurzquetsch',
    'Squeeze': 'Quetsch',
    'Quallenmagie': 'Die Strategie funktioniert nicht, weil du nicht fest genug daran glaubst',
    'r/Ameisenstrassenwetten': 'Wenn die Bargeldreserven nach einem missglückten 200er YOLO Hebel rückläufig sind',
    'r/Finanzen': 'Nein.',
    'Runterdurchschnitten': 'Die Tunke nachkaufen, um den Einkaufspreis zu senken (ggf. bis auf 0)',
    'Rentner': 'alle Leute Ü30, die hier regelmäßig aktiv sind (z.B. u/RidicolousKnight2)',
    'RWE': 'Rewe',
    'Rewe': 'RWE',
    'Treasury Bonds':'Schatzkisten',
    'Xiaomi':'Schaumi',
    'Smartbroker':'Schlaubrecher',
    'Joe Biden':'Der schläfrige Josef',
    'Scalable Capital':'Skalierbares Kapital',
    'Skoda Octavia RS': 'Traumauto',
    'Gamestop':'Spielstopp',
    'Spread':'Spreiz',//(das was deinen Aktienkauf so teuer macht)'
    'Aktien':'Stöcker',
    'Bitcoin':'Stückmünze',
    'Swingtrading':'Schaukelhandeln',
    'Stahlbande': 'Eine sagenumwobene Bande, die mit Stahl gehandelt hat',
    'TA': 'Technische Analyse (Astrologie für Börsianer)',
    'Tarek': 'Chef von AboutYou',
    'Tesla':'Tesler',
    'Bagholder': 'Taschenhalter',
    'Langzeitinvestor': 'Taschenhalter',
    'Tunke': 'Ein vorübergehender Kursrücksetzer',
    'Taxiteller': 'Zarties der Stahlbande. Wird üblicherweise von Olgas Grill an u/Bimmelhex geliefert und von ihm als Katalysator für den Kurs der Stahlaktien verspeist.',
    'Überheblichkeitsbande': 'Diese bullishe Bande neigt dazu, Marktbewegungen rhetorisch zu überschätzen',
    'AboutYou':'ÜberDich',
    'Ugurbande': 'Groupies von Ugur Sahin (BioNTech-CEO)',
    'Uranbande': 'Bande mit strahlender Zukunft',
    'Salesforce':'Vertriebskraft',
    'Technische Analyse':'Wachsmalstift',
    'Westwing':'Westflügel',
    'Microsoft':'Winzigweich',
    'Microvision':'Winzigsicht',
    'WRB': 'Wochenrückblick (wöchentliche Finanzmarktsendung auf MSW)',
    'Yufka': 'Blätterteig',
    'Tendies':'Zarties',
    'Tenbagger':'Zehn Bagger', // / Zehntüter / Zehnbeutler
    'temporärer Handelsstopp':'Zirkusbrecher',
    'Homies':'Zuhausis',
    'Futures':'Zukünfte / Zukunfties',
    '15:30': 'Die magische Uhrzeit für Kursverluste'
  };

chrome.runtime.onInstalled.addListener(function() {
        chrome.storage.sync.get('wordReplacements', function(data) {
            let words = data.wordReplacements;
            // Wenn keine Wörter gespeichert sind, verwende die Standardwörter
            if (!words || Object.keys(words).length === 0) {
                words = defaultReplacements;
                chrome.storage.sync.set({ 'wordReplacements': words });
            }
        });
});