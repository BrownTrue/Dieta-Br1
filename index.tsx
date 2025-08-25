// --- DATABASE DEL PIANO ALIMENTARE ---
const dietPlan = {
    dailyMacros: {
        carbs: "~220g (38%)",
        protein: "~180g (31%)",
        fats: "~75g (31%)"
    },
    days: [
        {
            id: 'lun-gio',
            title: 'Lunedì / Giovedì',
            meals: [
                { name: 'Pranzo', foods: '100g Riso Basmati, 200g Petto di Pollo, Verdure a piacere, 15g Olio EVO', kcal: 650, macros: { c: 78, p: 50, g: 17 } },
                { name: 'Merenda', foods: '250g Yogurt Greco 0%, 30g Mandorle', kcal: 330, macros: { c: 10, p: 28, g: 20 } },
                { name: 'Cena', foods: '180g Macinato magro di Manzo, 250g Patate, Verdure a piacere, 15g Olio EVO', kcal: 680, macros: { c: 45, p: 50, g: 30 } },
                { name: 'Prenanna / Post-Workout', foods: '300ml Latte Scremato, 40g Proteine Whey, 60g Fiocchi di Mais', kcal: 510, macros: { c: 65, p: 50, g: 4 } }
            ],
            total: { kcal: 2170, macros: { c: 198, p: 178, g: 71 } }
        },
        {
            id: 'mar-ven',
            title: 'Martedì / Venerdì',
            meals: [
                { name: 'Pranzo', foods: '100g Pasta Integrale, 150g Lenticchie Rosse Decorticate (o 150g macinato), 15g Parmigiano, 10g Olio EVO', kcal: 640, macros: { c: 85, p: 35, g: 18 } },
                { name: 'Merenda', foods: '2 Frutti medi (es. mela, pera), 150g Fiocchi di Latte', kcal: 300, macros: { c: 40, p: 22, g: 5 } },
                { name: 'Cena', foods: '250g Merluzzo o Platessa, 80g Pane Integrale, Verdure a piacere, 20g Olio EVO', kcal: 600, macros: { c: 38, p: 50, g: 26 } },
                { name: 'Prenanna / Post-Workout', foods: '300ml Latte Scremato, 40g Proteine Whey, 60g Fiocchi d\'Avena', kcal: 520, macros: { c: 60, p: 50, g: 8 } }
            ],
            total: { kcal: 2060, macros: { c: 223, p: 157, g: 57 } }
        },
        {
            id: 'mer-sab',
            title: 'Mercoledì / Sabato',
            meals: [
                { name: 'Pranzo', foods: '2 Piadine Integrali (~120g), 200g Fesa di Tacchino, 50g Philadelphia Active, Verdure grigliate', kcal: 630, macros: { c: 65, p: 55, g: 16 } },
                { name: 'Merenda', foods: '250g Yogurt Greco 0%, 1 frutto', kcal: 220, macros: { c: 25, p: 25, g: 2 } },
                { name: 'Cena', foods: 'Frittata con 4 Uova intere e 2 Albumi, 80g Pane Integrale, Verdure a piacere, 15g Olio EVO', kcal: 680, macros: { c: 40, p: 45, g: 35 } },
                { name: 'Prenanna / Post-Workout', foods: '300ml Latte Scremato, 40g Proteine Whey, 60g Fiocchi di Mais', kcal: 510, macros: { c: 65, p: 50, g: 4 } }
            ],
            total: { kcal: 2040, macros: { c: 195, p: 175, g: 57 } }
        },
        {
            id: 'dom',
            title: 'Domenica',
            meals: [
                { name: 'Pranzo', foods: '100g Riso Basmati, 200g Petto di Pollo, Verdure a piacere, 15g Olio EVO', kcal: 650, macros: { c: 78, p: 50, g: 17 } },
                { name: 'Merenda', foods: 'Libera ma controllata (es. 1 gelato artigianale o 1 porzione di dolce fatto in casa)', kcal: '~400', macros: { c: '-', p: '-', g: '-' } },
                { name: 'Cena', foods: 'Pizza Margherita o simile (da pizzeria), con aggiunta di fonte proteica se possibile (es. crudo)', kcal: '~1000', macros: { c: '-', p: '-', g: '-' } },
                { name: 'Prenanna / Post-Workout', foods: '250g Yogurt Greco 0%', kcal: 150, macros: { c: 5, p: 25, g: 2 } }
            ],
            total: { kcal: '~2200', macros: { c: 'Flex', p: 'Flex', g: 'Flex' } }
        }
    ],
    alternatives: {
        title: 'Opzioni Alternative',
        categories: [
            { name: 'Fonte Proteica', options: ['200g Fiocchi di latte / 150g Salmone affumicato (Veloce)', '200g Petto di tacchino / 200g Orata (Standard)', 'Spezzatino di vitello magro (200g) cotto a fuoco lento (Elaborata)'] },
            { name: 'Fonte Carboidrati', options: ['80g Gallette di riso / 100g Pane di segale (Veloce)', '100g Couscous integrale / 300g Gnocchi di patate (Standard)', 'Risotto (100g di riso) con verdure e zafferano (Elaborata)'] },
            { name: 'Pasto Completo', options: ['Insalatona con 150g tonno, mais, verdure e 80g pane', 'Pollo al curry (200g) con 100g riso basmati', 'Burger di manzo magro (200g) con pane bun e patate dolci al forno (300g)'] }
        ]
    },
    timing: {
        title: 'Timing e Idratazione',
        schedule: [
            { time: '12:30 - 13:30', meal: 'Pranzo' },
            { time: '16:00 - 17:00', meal: 'Merenda' },
            { time: '20:00 - 20:30', meal: 'Cena' },
        ],
        postWorkout: '<b>Post-Workout / Prenanna:</b> Circa 30-60 min dopo l\'allenamento o 60-90 min prima di coricarsi (per reflusso).',
        hydration: '<b>Idratazione:</b> 2.5-3 litri di acqua al giorno, da aumentare con l\'allenamento. Evitare bevande gassate.'
    },
    supplements: {
        title: 'Integratori',
        items: [
            { name: 'Creatina Monoidrato', dose: '5g al giorno, tutti i giorni (con pasto post-workout).' },
            { name: 'Proteine Whey', dose: '40g nel pasto post-workout.' },
            { name: 'Ashwagandha', dose: 'Secondo indicazioni del prodotto (gestione stress).' },
            { name: 'Condroitina e Glucosammina', dose: 'Con un pasto (supporto articolare).' },
            { name: 'Omega-3 (EPA/DHA)', dose: '2-3g al giorno (anti-infiammatorio).' }
        ]
    }
};

// --- ICONS (SVG) ---
const ICONS = {
    lunch: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`,
    snack: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572l-7.5 7.428-7.5-7.428a5 5 0 117.5-6.572 5 5 0 117.5 6.572z" /></svg>`,
    dinner: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`,
    postWorkout: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
    defaultMeal: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>`,
    carb: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
    protein: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`,
    fat: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572l-7.5 7.428-7.5-7.428a5 5 0 117.5-6.572 5 5 0 117.5 6.572z" /></svg>`,
    alternatives: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>`,
    timing: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    supplements: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`,
    checkmark: `<svg class="h-5 w-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>`,
    scale: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 7.001L7 16l4 4 6.001-6.001a5.002 5.002 0 00-7.001-7.001zM11 7l-3 3m0 0l3 3m-3-3h12" /></svg>`,
};

// --- LOGICA DELL'APPLICAZIONE ---
document.addEventListener('DOMContentLoaded', () => {
    // --- SERVICE WORKER REGISTRATION ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    const daySelector = document.getElementById('day-selector');
    const mainContent = document.getElementById('main-content');
    let currentDayId;

    // Funzione per determinare l'ID del giorno corrente
    const getTodayId = () => {
        const today = new Date().getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
        switch (today) {
            case 1: // Monday
            case 4: // Thursday
                return 'lun-gio';
            case 2: // Tuesday
            case 5: // Friday
                return 'mar-ven';
            case 3: // Wednesday
            case 6: // Saturday
                return 'mer-sab';
            case 0: // Sunday
                return 'dom';
            default:
                return dietPlan.days[0].id; // Fallback
        }
    };

    currentDayId = getTodayId(); // Imposta il giorno iniziale

    const getMealIcon = (mealName) => {
        const lowerName = mealName.toLowerCase();
        if (lowerName.includes('pranzo')) return ICONS.lunch;
        if (lowerName.includes('merenda')) return ICONS.snack;
        if (lowerName.includes('cena')) return ICONS.dinner;
        if (lowerName.includes('post-workout')) return ICONS.postWorkout;
        return ICONS.defaultMeal;
    };

    // Funzione per creare una card pasto
    const createMealCard = (meal) => `
        <div class="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="flex justify-between items-start">
                <div class="flex items-center gap-4">
                     <div class="bg-teal-100 text-teal-600 rounded-full p-3 flex-shrink-0">
                        ${getMealIcon(meal.name)}
                    </div>
                    <div>
                        <h4 class="font-bold text-lg text-gray-800">${meal.name}</h4>
                        <p class="text-gray-600 text-sm mt-1">${meal.foods}</p>
                    </div>
                </div>
                <div class="text-right flex-shrink-0 ml-4">
                    <p class="font-bold text-gray-800 text-lg">${meal.kcal} <span class="text-sm font-medium text-gray-500">kcal</span></p>
                </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center">
                <span class="nutrient-tag carb">${ICONS.carb} C: ${meal.macros.c}${meal.macros.c !== '-' ? 'g' : ''}</span>
                <span class="nutrient-tag protein">${ICONS.protein} P: ${meal.macros.p}${meal.macros.p !== '-' ? 'g' : ''}</span>
                <span class="nutrient-tag fat">${ICONS.fat} G: ${meal.macros.g}${meal.macros.g !== '-' ? 'g' : ''}</span>
            </div>
        </div>
    `;
    
    // Funzione per renderizzare il piano di un giorno
    const renderDay = (dayId) => {
        const dayData = dietPlan.days.find(d => d.id === dayId);
        if (!dayData) return;
        
        currentDayId = dayId;
        
        mainContent.innerHTML = '';
        mainContent.classList.remove('content-fade-in');

        // Delay to allow animation to trigger
        setTimeout(() => {
            const mealsHtml = dayData.meals.map(createMealCard).join('');
            mainContent.innerHTML = `
                <div class="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white">
                    <h2 class="text-3xl font-bold mb-6 text-gray-900">${dayData.title}</h2>
                    <div class="space-y-4 mb-6">
                        ${mealsHtml}
                    </div>
                    <div class="bg-teal-50 border-2 border-teal-200 rounded-xl p-5 mt-6">
                        <h3 class="text-xl font-bold text-teal-800">Totale Giorno</h3>
                        <div class="flex flex-wrap justify-between items-center mt-3 gap-2">
                            <p class="font-bold text-2xl text-teal-900">${dayData.total.kcal} <span class="text-lg font-medium text-teal-700">kcal</span></p>
                            <div class="text-right flex flex-wrap">
                                <span class="nutrient-tag carb">${ICONS.carb} C: ${dayData.total.macros.c}${dayData.total.macros.c !== 'Flex' ? 'g' : ''}</span>
                                <span class="nutrient-tag protein">${ICONS.protein} P: ${dayData.total.macros.p}${dayData.total.macros.p !== 'Flex' ? 'g' : ''}</span>
                                <span class="nutrient-tag fat">${ICONS.fat} G: ${dayData.total.macros.g}${dayData.total.macros.g !== 'Flex' ? 'g' : ''}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
             mainContent.classList.add('content-fade-in');
        }, 10);
       
        updateActiveButton();
    };

    // Funzione per aggiornare il pulsante attivo
    const updateActiveButton = () => {
        document.querySelectorAll<HTMLButtonElement>('#day-selector button').forEach(button => {
            if (button.dataset.dayId === currentDayId) {
                button.classList.remove('bg-white/50', 'text-gray-700', 'hover:bg-gray-200');
                button.classList.add('bg-teal-600', 'text-white', 'shadow-md', 'scale-105');
            } else {
                button.classList.add('bg-white/50', 'text-gray-700', 'hover:bg-gray-200');
                button.classList.remove('bg-teal-600', 'text-white', 'shadow-md', 'scale-105');
            }
        });
    };

    // Creazione dei pulsanti per i giorni
    dietPlan.days.forEach(day => {
        const button = document.createElement('button');
        button.textContent = day.title;
        button.dataset.dayId = day.id;
        button.className = 'px-4 py-2 rounded-full font-semibold transition-all duration-300 transform';
        button.addEventListener('click', () => renderDay(day.id));
        daySelector.appendChild(button);
    });
    
    // Funzione per renderizzare la sezione alternative
    const renderAlternatives = () => {
        const { title, categories } = dietPlan.alternatives;
        const categoriesHtml = categories.map(cat => `
            <div>
                <h4 class="font-semibold text-gray-700 text-lg mb-3">${cat.name}</h4>
                <div class="space-y-2">
                    ${cat.options.map(opt => `
                        <div class="bg-gray-50 p-3 rounded-lg text-gray-600 text-sm border border-gray-200 flex items-start gap-3">
                            <div class="flex-shrink-0 pt-1">${ICONS.checkmark}</div>
                            <span>${opt}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        document.getElementById('alternatives-section').innerHTML = `
            <div class="flex items-center gap-3 mb-6">
                <div class="bg-indigo-100 text-indigo-600 rounded-lg p-2">
                    ${ICONS.alternatives}
                </div>
                <h3 class="text-2xl font-bold text-gray-900">${title}</h3>
            </div>
            <div class="space-y-6">${categoriesHtml}</div>
        `;
    };

    // Funzione per renderizzare la sezione timing
    const renderTiming = () => {
        const { title, schedule, postWorkout, hydration } = dietPlan.timing;
        const scheduleHtml = schedule.map(item => `
            <li class="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span class="text-gray-600">${item.meal}</span>
                <span class="font-bold text-gray-800">${item.time}</span>
            </li>
        `).join('');
        document.getElementById('timing-section').innerHTML = `
            <div class="flex items-center gap-3 mb-6">
                <div class="bg-sky-100 text-sky-600 rounded-lg p-2">
                    ${ICONS.timing}
                </div>
                <h3 class="text-2xl font-bold text-gray-900">${title}</h3>
            </div>
            <ul class="text-sm space-y-2">${scheduleHtml}</ul>
            <p class="text-sm mt-4 text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">${postWorkout}</p>
            <p class="text-sm mt-4 text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">${hydration}</p>
        `;
    };

    // Funzione per renderizzare la sezione integratori
    const renderSupplements = () => {
        const { title, items } = dietPlan.supplements;
        const itemsHtml = items.map(item => `
            <li class="p-3 rounded-lg border border-gray-200 bg-gray-50">
                <p class="font-semibold text-gray-800">${item.name}</p>
                <p class="text-sm text-gray-600">${item.dose}</p>
            </li>
        `).join('');
        document.getElementById('supplements-section').innerHTML = `
            <div class="flex items-center gap-3 mb-6">
                <div class="bg-rose-100 text-rose-600 rounded-lg p-2">
                    ${ICONS.supplements}
                </div>
                <h3 class="text-2xl font-bold text-gray-900">${title}</h3>
            </div>
            <ul class="space-y-2">${itemsHtml}</ul>
        `;
    };

    // --- LOGICA TRACCIAMENTO PESO ---
    const renderWeightTracker = () => {
        const container = document.getElementById('weight-tracker-section');
        if (!container) return;

        const weights = JSON.parse(localStorage.getItem('userWeights') || '[]')
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        const historyHtml = weights.length > 0
            ? `<div class="mt-6 border-t pt-4">
                 <h4 class="text-lg font-semibold text-gray-700 mb-3">Storico</h4>
                 <ul class="space-y-2 max-h-48 overflow-y-auto pr-2">
                    ${weights.map(entry => `
                        <li class="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200 animate-fadeIn">
                            <span class="text-sm text-gray-600">${new Date(entry.date).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            <span class="font-bold text-gray-800">${entry.weight} kg</span>
                        </li>
                    `).join('')}
                   </ul>
               </div>`
            : `<p class="text-center text-gray-500 mt-6 bg-gray-50 p-4 rounded-lg border">Nessun dato registrato. Inizia salvando il tuo peso!</p>`;
        
        container.innerHTML = `
            <div class="flex items-center gap-3 mb-6">
                <div class="bg-green-100 text-green-600 rounded-lg p-2">
                    ${ICONS.scale}
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Tracciamento Peso</h3>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-3">
                <input type="number" id="weight-input" placeholder="Es. 75.5" class="weight-input flex-grow w-full" step="0.1" min="0">
                <button id="save-weight-btn" class="save-weight-btn w-full sm:w-auto">Salva Peso</button>
            </div>
            ${historyHtml}
        `;

        const saveBtn = document.getElementById('save-weight-btn');
        const weightInput = document.getElementById('weight-input') as HTMLInputElement;

        saveBtn.addEventListener('click', () => {
            const weightValue = parseFloat(weightInput.value);
            if (!weightValue || weightValue <= 0) {
                alert("Per favore, inserisci un peso valido.");
                return;
            }

            const newEntry = {
                date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
                weight: weightValue
            };

            const currentWeights = JSON.parse(localStorage.getItem('userWeights') || '[]');
            currentWeights.push(newEntry);
            localStorage.setItem('userWeights', JSON.stringify(currentWeights));
            
            weightInput.value = ''; // Clear input
            renderWeightTracker(); // Re-render to show the new entry
        });
    };


    // Renderizzazione iniziale
    renderDay(currentDayId);
    renderAlternatives();
    renderTiming();
    renderSupplements();
    renderWeightTracker();
});