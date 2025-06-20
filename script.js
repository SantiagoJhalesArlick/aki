// Dark mode toggle script
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to set the theme based on localStorage or default
function setTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '💜'; // Dark mode: purple heart
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🤍'; // Light mode: white heart
    }
}

// Apply theme on page load
setTheme();

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
        darkModeToggle.textContent = '🤍'; // Switch to light: white heart
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        darkModeToggle.textContent = '💜'; // Switch to dark: purple heart
    }
});


// JavaScript for Message Section (Daily Wisdom Modal)
const calendarGrid = document.querySelector('#message .calendar-grid');
const wisdomModal = document.getElementById('wisdomModal');

// CORRECTED: Select the close button SPECIFICALLY for the wisdomModal
const closeWisdomModalButton = wisdomModal.querySelector('.close-button');
const modalImage = document.getElementById('modalImage');
const modalProverb = document.getElementById('modalProverb');
const modalTagalogProverb = document.getElementById('modalTagalogProverb');
const modalExplanation = document.getElementById('modalExplanation');

// Elements for the restricted access modal
const restrictedModal = document.getElementById('restrictedModal');
const closeRestrictedModal = document.getElementById('closeRestrictedModal');
const okRestrictedModal = document.getElementById('okRestrictedModal');
const currentDayDisplay = document.getElementById('currentDayDisplay');

// Get the current day of the month
const today = new Date();
const currentDay = today.getDate(); // e.g., if today is June 2, currentDay will be 2

// Get the full name of the current day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeek = daysOfWeek[today.getDay()];

// --- Data for each day's wisdom (your existing content) ---
const messageContent = {
    1: {
        image: 'fia1.jpg',
        proverb: 'The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction. (Proverbs 1:7)',
        tagalogProverb: 'Fear on the Lord hindi yung takot ka na ayaw mo sumunod but natatakot ka gumawa ng mali kaya ka susunod sa kanya or us. Begin your journey with reverence for God. Trust His wisdom as the foundation for all knowledge and growth in faith.',
        explanation: 'This proverb emphasizes that true understanding begins with respect and reverence for God. Without this foundational wisdom, knowledge can be misused or ignored.'
    },
    2: {
        image: 'placeholder2.jpg',
        proverb: 'A wise son brings joy to his father, but a foolish son brings grief to his mother. (Proverbs 10:1)',
        tagalogProverb: 'Ang anak na matalino ay nagdudulot ng kagalakan sa kanyang ama, ngunit ang anak na hangal ay nagdudulot ng kalungkutan sa kanyang ina.',
        explanation: 'This highlights the impact of a child\'s actions on their parents, linking wisdom to happiness and foolishness to sorrow.'
    },
    3: {
        image: 'us2.jpg',
        proverb: 'Youre a truly special person, Aki. Your kindness, humor, and strong faith shine brightly. Its clear why youre such a good leader. Being around you brings so much joy. Youre a wonderful friend, and I feel lucky to know you',
        tagalogProverb: 'Babe, you are truly a woman to be praised. The Bible says, "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised" Proverbs 31:30, KJV. This verse reminds us that your true beauty comes from your heart and your love for God. Your kindness, your humor, and your strong faith make you shine in a way that lasts forever. Its truly a blessing to see Gods light in you.',
        explanation: 'Iloveyou🥰'
    },
    4: {
        image: 'pixie.jpg',
        proverb: 'Hi, first of all sorry kasi di ko nabantayan ng maayos si Pixie kung naalagaan ko lang sana siya ng maayos at pinakakawalan lagi buhay pa sana siya for now, sorry for my lack of actions through out this day June 04, 2025 our baby died.',
        tagalogProverb: 'But dont be sad even tho its still shockwave whats happening rn, Lord plans is better maybe He give us Pixie for some reasons and learn from them, Its sad but its alr Pixie is in the good hands rn and better community.',
        explanation: 'Thats all for today, dont forget to takecare yourself ily -jhales'
    },
    5: {
        image: 'us.jpg',
        proverb: 'Gusto ko lang sabihin na you’re really a good and beautiful person — inside and out. Sobrang miss na kita. Ang dami nang nangyari, ang daming ups and downs, pero look at you, you survived it all. I’m proud of you. I just really wish you stay consistent in doing good and doing what’s right. Sana rin, pakinggan mo lagi ‘yung mga sinasabi ko — not to control you, but because I care and I only want the best for you.',
        tagalogProverb: 'Alam mo, kahit minsan mahirap, I’ll still be here cheering for you quietly. Sweet reminder lang: you matter, you are loved, and you deserve all the peace and happiness sa mundo.Stay soft. Stay strong. Don’t ever lose that beautiful heart.',
        explanation: 'from Aki'
    },
    6: {
        image: 'placeholder6.jpg',
        proverb: 'The lazy man does not roast what he took in hunting, but diligence is man\'s precious possession. (Proverbs 12:27)',
        tagalogProverb: 'Ang tamad na tao ay hindi nagluluto ng kanyang nahuli sa pangangaso; ngunit ang kasipagan ay mahalagang pag-aari ng tao.',
        explanation: 'This proverb highlights that hard work and perseverance lead to tangible results and valuable possessions, unlike idleness.'
    },
    7: {
        image: 'her1.jpg',
        proverb: 'Hey dudays, just let you know that im cold this day, not because i dont want you but also i just want to be alone this time.',
        tagalogProverb: 'dont feel our conversation and smth.',
        explanation: 'jeyls'
    },
    8: {
        image: 'placeholder8.jpg',
        proverb: '#',
        tagalogProverb: '#',
        explanation: '#'
    },
    9: {
        image: 'placeholder9.jpg',
        proverb: '#',
        tagalogProverb: '#',
        explanation: '#'
    },
    10: {
        image: 'placeholder10.jpg',
        proverb: '#',
        tagalogProverb: '#',
        explanation: '#'
    },
    11: {
        image: 'placeholder11.jpg',
        proverb: '#',
        tagalogProverb: '#',
        explanation: '#'
    },
    12: {
        image: 'placeholder12.jpg',
        proverb: 'Many are the plans in a person’s heart, but it is the Lord’s purpose that prevails. (Proverbs 19:21)',
        tagalogProverb: 'Marami ang mga panukala sa puso ng tao, ngunit ang layunin ng Panginoon ang mananaig.',
        explanation: 'This reminds us that while humans make plans, God\'s ultimate will and purpose are sovereign and will always come to pass.'
    },
    13: {
        image: 'placeholder13.jpg',
        proverb: 'Wine is a mocker, strong drink is a brawler, and whoever is led astray by it is not wise. (Proverbs 20:1)',
        tagalogProverb: 'Ang alak ay manlilibak, ang matapang na inumin ay manggugulo, at sinuman na naliligaw sa pamamagitan nito ay hindi matalino.',
        explanation: 'This warns against the deceptive and destructive nature of excessive alcohol consumption, equating it with foolishness.'
    },
    14: {
        image: 'placeholder14.jpg',
        proverb: 'The rich rule over the poor, and the borrower is servant to the lender. (Proverbs 22:7)',
        tagalogProverb: 'Ang mayaman ay naghahari sa mahirap, at ang nangungutang ay alipin ng nagpapautang.',
        explanation: 'This proverb highlights the power dynamics in financial relationships and the potential for debt to lead to servitude.'
    },
    15: {
        image: 'placeholder15.jpg',
        proverb: 'Train up a child in the way he should go; even when he is old he will not depart from it. (Proverbs 22:6)',
        tagalogProverb: 'Turuan mo ang bata sa daan na dapat niyang lakaran; at pagka tumanda na siya, hindi niya hihiwalayan iyon.',
        explanation: 'This emphasizes the lasting impact of early education and moral training on a child\'s life and character.'
    },
    16: {
        image: 'placeholder16.jpg',
        proverb: 'Do not wear yourself out to get rich; do not trust your own cleverness. (Proverbs 23:4)',
        tagalogProverb: 'Huwag kang magpagal upang yumaman; huwag kang manalig sa sarili mong katalinuhan.',
        explanation: 'This advises against obsessive pursuit of wealth and encourages reliance on wisdom rather than cunning.'
    },
    17: {
        image: 'placeholder17.jpg',
        proverb: 'Do not boast about tomorrow, for you do not know what a day may bring. (Proverbs 27:1)',
        tagalogProverb: 'Huwag kang magyabang tungkol bukas, sapagka\'t hindi mo nalalaman kung ano ang idudulot ng isang araw.',
        explanation: 'This proverb teaches humility and caution, reminding us that the future is uncertain and beyond our control.'
    },
    18: {
        image: 'placeholder18.jpg',
        proverb: 'As iron sharpens iron, so one person sharpens another. (Proverbs 27:17)',
        tagalogProverb: 'Kung paanong ang bakal ay nagpapatalas ng bakal, gayon pinatatalas ng tao ang kapuwa niya tao.',
        explanation: 'This illustrates the beneficial impact of mutual encouragement, constructive criticism, and intellectual exchange between individuals.'
    },
    19: {
        image: 'placeholder19.jpg',
        proverb: 'A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel. (Proverbs 15:18)',
        tagalogProverb: 'Ang taong magagalitin ay nagbubunsod ng pagtatalo, ngunit ang taong matiisin ay nagpapatahimik ng away.',
        explanation: 'This contrasts the destructive nature of quick anger with the peacemaking ability of patience and self-control.'
    },
    20: {
        image: 'placeholder20.jpg',
        proverb: 'No message',
        tagalogProverb: '',
        explanation: ''
    },
    21: {
        image: 'placeholder21.jpg',
        proverb: 'No message again',
        tagalogProverb: '',
    },
    22: {
        image: 'placeholder22.jpg',
        proverb: 'No message',
        tagalogProverb: '.',
        explanation: ''
    },
    23: {
        image: 'placeholder23.jpg',
        proverb: 'No message',
        tagalogProverb: '',
        explanation: ''
    },
    24: {
        image: 'placeholder24.jpg',
        proverb: 'HAHAHAHAHAHAHAH lala mo',
        tagalogProverb: '',
        explanation: ''
    },
    25: {
        image: 'placeholder25.jpg',
        proverb: 'Whoever walks with the wise becomes wise, but the companion of fools will suffer harm. (Proverbs 13:20)',
        tagalogProverb: 'Ang lumalakad na kasama ng matatalino ay magiging matalino, ngunit ang kasama ng mga mangmang ay daranas ng kapahamakan.',
        explanation: 'This highlights the profound influence of one\'s associations on their character and destiny.'
    },
    26: {
        image: 'placeholder26.jpg',
        proverb: 'Hope deferred makes the heart sick, but a desire fulfilled is a tree of life. (Proverbs 13:12)',
        tagalogProverb: 'Ang pag-asa na ipinagpaliban ay nagpapasakit ng puso, ngunit ang pagnanais na natupad ay punongkahoy ng buhay.',
        explanation: 'This proverb speaks to the emotional toll of delayed hopes and the refreshing joy of seeing desires realized.'
    },
    27: {
        image: 'placeholder27.jpg',
        proverb: 'Do not deprive the worker of his wages when you have the power to do so. (Proverbs 3:27-28, adapted)',
        tagalogProverb: 'Huwag mong ipagkait ang sahod ng manggagawa kung may kapangyarihan kang gawin ito.',
        explanation: 'This emphasizes fairness and justice in dealings, particularly regarding timely payment for labor.'
    },
    28: {
        image: 'placeholder28.jpg',
        proverb: 'The integrity of the upright guides them, but the crookedness of the treacherous destroys them. (Proverbs 11:3)',
        tagalogProverb: 'Ang kalinisang-puri ng matuwid ay umaakay sa kanila, ngunit ang pagkaliko ng mga taksil ay sumisira sa kanila.',
        explanation: 'This highlights that honesty and moral uprightness lead to guidance and stability, while deceit leads to ruin.'
    },
    29: {
        image: 'placeholder29.jpg',
        proverb: 'A person\'s wisdom yields patience; it is to one\'s glory to overlook an offense. (Proverbs 19:11)',
        tagalogProverb: 'Ang karunungan ng tao ay nagbubunga ng pagtitiis; kaluwalhatian ng isang tao ang palampasin ang isang pagkakasala.',
        explanation: 'This proverb connects wisdom with patience and the ability to forgive, seeing it as a virtuous act.'
    },
    30: {
        image: 'placeholder30.jpg',
        proverb: 'Do not be among those who guzzle wine or gorge themselves on meat, for drunkards and gluttons become poor, and drowsiness clothes them in rags. (Proverbs 23:20-21)',
        tagalogProverb: 'Huwag kang mapabilang sa mga umiinom ng alak o sa mga nagpapakabusog sa karne, sapagka\'t ang mga lasinggero at matatakaw ay nagiging mahirap, at ang pagkaantok ay nagbibihis sa kanila ng basahan.',
        explanation: 'This warns against the dangers of excessive indulgence in food and drink, linking it to poverty and idleness.'
    },
    31: {
        image: 'placeholder31.jpg',
        proverb: 'Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised. (Proverbs 31:30)',
        tagalogProverb: 'Ang kariktan ay mapanlinlang, at ang kagandahan ay walang saysay; ngunit ang isang babae na natatakot sa Panginoon, siya ang pupurihin.',
        explanation: 'This verse praises inner character and reverence for God over superficial qualities.'
    }
};

// Function to generate the calendar grid
function generateCalendar() {
    // Clear existing grid
    calendarGrid.innerHTML = '';
    for (let i = 1; i <= 31; i++) {
        const dayBox = document.createElement('div');
        dayBox.classList.add('day-box');
        dayBox.textContent = i;
        dayBox.dataset.day = i; // Store the day number

        // Disable days not equal to the current day
        if (i !== currentDay) {
            dayBox.classList.add('disabled');
        }

        calendarGrid.appendChild(dayBox);
    }
}

// Event listener for clicks on the calendar grid
calendarGrid.addEventListener('click', (event) => {
    const dayBox = event.target.closest('.day-box');
    if (dayBox) {
        const day = parseInt(dayBox.dataset.day); // Convert to number

        // Check if the clicked day is the current day or if it's disabled
        if (day !== currentDay) {
            // Display the restricted modal instead of an alert
            currentDayDisplay.textContent = currentDayOfWeek + ' ' + currentDay; // Display current day of week and number
            restrictedModal.style.display = 'flex'; // Show the custom modal
            return; // Exit the function if not the current day
        }

        // If it IS the current day, proceed to show the wisdom modal
        const content = messageContent[day];

        if (content) {
            // Update wisdom modal content
            modalImage.src = content.image;
            modalProverb.textContent = content.proverb;
            modalTagalogProverb.textContent = content.tagalogProverb;
            modalExplanation.textContent = content.explanation;

            // Show the wisdom modal
            wisdomModal.style.display = 'flex';
        } else {
            alert('No wisdom available for this day yet! Please add content for Day ' + day + '.');
        }
    }
});

// Close the wisdom modal when its close button is clicked
closeWisdomModalButton.addEventListener('click', () => {
    wisdomModal.style.display = 'none';
});

// Close the restricted modal when its close button is clicked
closeRestrictedModal.addEventListener('click', () => {
    restrictedModal.style.display = 'none';
});

// Close the restricted modal when the "OK" button is clicked
okRestrictedModal.addEventListener('click', () => {
    restrictedModal.style.display = 'none';
});

// Initialize the calendar grid when the page loads
generateCalendar();