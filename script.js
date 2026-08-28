/* ============================================
   OmniConvert - Real-Time Precision Engine
   ============================================ */

// ============ UNITS DATABASE ============
const unitCategories = {
    length: {
        title: "Length Converter",
        icon: "fa-ruler",
        group: "Converters",
        units: [
            { name: "Meter", symbol: "m", value: 1 },
            { name: "Kilometer", symbol: "km", value: 1000 },
            { name: "Centimeter", symbol: "cm", value: 0.01 },
            { name: "Millimeter", symbol: "mm", value: 0.001 },
            { name: "Micrometer", symbol: "µm", value: 0.000001 },
            { name: "Nanometer", symbol: "nm", value: 1e-9 },
            { name: "Mile", symbol: "mi", value: 1609.344 },
            { name: "Yard", symbol: "yd", value: 0.9144 },
            { name: "Foot", symbol: "ft", value: 0.3048 },
            { name: "Inch", symbol: "in", value: 0.0254 },
            { name: "Nautical Mile", symbol: "nmi", value: 1852 }
        ]
    },
    weight: {
        title: "Mass & Weight",
        icon: "fa-weight-hanging",
        group: "Converters",
        units: [
            { name: "Kilogram", symbol: "kg", value: 1 },
            { name: "Gram", symbol: "g", value: 0.001 },
            { name: "Milligram", symbol: "mg", value: 0.000001 },
            { name: "Metric Ton", symbol: "t", value: 1000 },
            { name: "Pound", symbol: "lb", value: 0.45359237 },
            { name: "Ounce", symbol: "oz", value: 0.028349523125 },
            { name: "Stone", symbol: "st", value: 6.35029 }
        ]
    },
    temperature: {
        title: "Temperature",
        icon: "fa-temperature-high",
        group: "Converters",
        units: [
            { name: "Celsius", symbol: "°C" },
            { name: "Fahrenheit", symbol: "°F" },
            { name: "Kelvin", symbol: "K" },
            { name: "Rankine", symbol: "°R" }
        ]
    },
    area: {
        title: "Area",
        icon: "fa-vector-square",
        group: "Converters",
        units: [
            { name: "Square Meter", symbol: "m²", value: 1 },
            { name: "Square Kilometer", symbol: "km²", value: 1e6 },
            { name: "Square Centimeter", symbol: "cm²", value: 0.0001 },
            { name: "Hectare", symbol: "ha", value: 10000 },
            { name: "Acre", symbol: "ac", value: 4046.8564224 },
            { name: "Square Foot", symbol: "ft²", value: 0.09290304 },
            { name: "Square Inch", symbol: "in²", value: 0.00064516 }
        ]
    },
    volume: {
        title: "Volume & Liquid",
        icon: "fa-flask",
        group: "Converters",
        units: [
            { name: "Liter", symbol: "L", value: 1 },
            { name: "Milliliter", symbol: "mL", value: 0.001 },
            { name: "Cubic Meter", symbol: "m³", value: 1000 },
            { name: "Gallon (US)", symbol: "gal", value: 3.78541 },
            { name: "Quart (US)", symbol: "qt", value: 0.946353 },
            { name: "Pint (US)", symbol: "pt", value: 0.473176 },
            { name: "Cup (US)", symbol: "cup", value: 0.24 },
            { name: "Fluid Ounce (US)", symbol: "fl oz", value: 0.0295735 }
        ]
    },
    speed: {
        title: "Speed & Velocity",
        icon: "fa-tachometer-alt",
        group: "Converters",
        units: [
            { name: "Meter per Second", symbol: "m/s", value: 1 },
            { name: "Kilometer per Hour", symbol: "km/h", value: 0.277777778 },
            { name: "Mile per Hour", symbol: "mph", value: 0.44704 },
            { name: "Knot", symbol: "kn", value: 0.514444 },
            { name: "Foot per Second", symbol: "ft/s", value: 0.3048 }
        ]
    },
    time: {
        title: "Time Duration",
        icon: "fa-clock",
        group: "Converters",
        units: [
            { name: "Second", symbol: "s", value: 1 },
            { name: "Millisecond", symbol: "ms", value: 0.001 },
            { name: "Minute", symbol: "min", value: 60 },
            { name: "Hour", symbol: "h", value: 3600 },
            { name: "Day", symbol: "d", value: 86400 },
            { name: "Week", symbol: "wk", value: 604800 },
            { name: "Month (avg)", symbol: "mo", value: 2629746 },
            { name: "Year (365d)", symbol: "yr", value: 31536000 }
        ]
    },
    data: {
        title: "Data Storage",
        icon: "fa-database",
        group: "Converters",
        units: [
            { name: "Byte", symbol: "B", value: 1 },
            { name: "Bit", symbol: "b", value: 0.125 },
            { name: "Kilobyte", symbol: "KB", value: 1024 },
            { name: "Megabyte", symbol: "MB", value: 1048576 },
            { name: "Gigabyte", symbol: "GB", value: 1073741824 },
            { name: "Terabyte", symbol: "TB", value: 1099511627776 },
            { name: "Petabyte", symbol: "PB", value: 1125899906842624 }
        ]
    },
    pressure: {
        title: "Pressure",
        icon: "fa-compress-alt",
        group: "Converters",
        units: [
            { name: "Pascal", symbol: "Pa", value: 1 },
            { name: "Kilopascal", symbol: "kPa", value: 1000 },
            { name: "Bar", symbol: "bar", value: 100000 },
            { name: "Atmosphere", symbol: "atm", value: 101325 },
            { name: "PSI", symbol: "psi", value: 6894.757 },
            { name: "Torr / mmHg", symbol: "Torr", value: 133.322 }
        ]
    },
    energy: {
        title: "Energy & Work",
        icon: "fa-bolt",
        group: "Converters",
        units: [
            { name: "Joule", symbol: "J", value: 1 },
            { name: "Kilojoule", symbol: "kJ", value: 1000 },
            { name: "Calorie", symbol: "cal", value: 4.184 },
            { name: "Kilocalorie", symbol: "kcal", value: 4184 },
            { name: "Watt-hour", symbol: "Wh", value: 3600 },
            { name: "Kilowatt-hour", symbol: "kWh", value: 3600000 },
            { name: "BTU", symbol: "BTU", value: 1055.06 }
        ]
    },
    power: {
        title: "Power Engine",
        icon: "fa-charging-station",
        group: "Converters",
        units: [
            { name: "Watt", symbol: "W", value: 1 },
            { name: "Kilowatt", symbol: "kW", value: 1000 },
            { name: "Megawatt", symbol: "MW", value: 1000000 },
            { name: "Horsepower (mechanical)", symbol: "hp", value: 745.699872 },
            { name: "BTU per Hour", symbol: "BTU/h", value: 0.293071 }
        ]
    },
    angle: {
        title: "Angle",
        icon: "fa-shapes",
        group: "Converters",
        units: [
            { name: "Degree", symbol: "°", value: 1 },
            { name: "Radian", symbol: "rad", value: 57.2957795 },
            { name: "Gradian", symbol: "grad", value: 0.9 },
            { name: "Arcminute", symbol: "arcmin", value: 0.016666667 },
            { name: "Arcsecond", symbol: "arcsec", value: 0.000277778 }
        ]
    },
    frequency: {
        title: "Frequency",
        icon: "fa-wave-square",
        group: "Converters",
        units: [
            { name: "Hertz", symbol: "Hz", value: 1 },
            { name: "Kilohertz", symbol: "kHz", value: 1000 },
            { name: "Megahertz", symbol: "MHz", value: 1e6 },
            { name: "Gigahertz", symbol: "GHz", value: 1e9 }
        ]
    },
    typography: {
        title: "Typography & Web",
        icon: "fa-font",
        group: "Converters",
        units: [
            { name: "Pixel (px)", symbol: "px", value: 1 },
            { name: "REM (root 16px)", symbol: "rem", value: 16 },
            { name: "EM (base 16px)", symbol: "em", value: 16 },
            { name: "Point (pt)", symbol: "pt", value: 1.333333 },
            { name: "Percent (%)", symbol: "%", value: 0.16 }
        ]
    }
};

// ============ ALL COUNTRY CURRENCY NAMES DATABASE ============
const currencyNames = {
    USD: "United States Dollar", EUR: "Euro", GBP: "British Pound", JPY: "Japanese Yen",
    AUD: "Australian Dollar", CAD: "Canadian Dollar", CHF: "Swiss Franc", CNY: "Chinese Yuan",
    HKD: "Hong Kong Dollar", NZD: "New Zealand Dollar", SEK: "Swedish Krona", KRW: "South Korean Won",
    SGD: "Singapore Dollar", NOK: "Norwegian Krone", MXN: "Mexican Peso", INR: "Indian Rupee",
    RUB: "Russian Ruble", ZAR: "South African Rand", TRY: "Turkish Lira", BRL: "Brazilian Real",
    TWD: "New Taiwan Dollar", DKK: "Danish Krone", PLN: "Polish Zloty", THB: "Thai Baht",
    IDR: "Indonesian Rupiah", HUF: "Hungarian Forint", CZK: "Czech Koruna", ILS: "Israeli New Shekel",
    CLP: "Chilean Peso", PHP: "Philippine Peso", AED: "United Arab Emirates Dirham", COP: "Colombian Peso",
    SAR: "Saudi Riyal", MYR: "Malaysian Ringgit", RON: "Romanian Leu", PKR: "Pakistani Rupee",
    EGP: "Egyptian Pound", BDT: "Bangladeshi Taka", VND: "Vietnamese Dong", IQD: "Iraqi Dinar",
    DZD: "Algerian Dinar", MAD: "Moroccan Dirham", QAR: "Qatari Riyal", KWD: "Kuwaiti Dinar",
    BHD: "Bahraini Dinar", OMR: "Omani Rial", JOD: "Jordanian Dinar", LKR: "Sri Lankan Rupee",
    KES: "Kenyan Shilling", NGN: "Nigerian Naira", GHS: "Ghanaian Cedi", TZS: "Tanzanian Shilling",
    UGX: "Ugandan Shilling", ETB: "Ethiopian Birr", ZMW: "Zambian Kwacha", ARS: "Argentine Peso",
    PEN: "Peruvian Sol", UYU: "Uruguayan Peso", BOB: "Bolivian Boliviano", PYG: "Paraguayan Guarani",
    CRC: "Costa Rican Colón", DOP: "Dominican Peso", GTQ: "Guatemalan Quetzal", HNL: "Honduran Lempira",
    NIO: "Nicaraguan Córdoba", PAB: "Panamanian Balboa", BZD: "Belize Dollar", JMD: "Jamaican Dollar",
    HTG: "Haitian Gourde", BSD: "Bahamian Dollar", BBD: "Barbadian Dollar", TTD: "Trinidad & Tobago Dollar",
    KYD: "Cayman Islands Dollar", XCD: "East Caribbean Dollar", AFN: "Afghan Afghani", ALL: "Albanian Lek",
    AMD: "Armenian Dram", ANG: "Netherlands Antillean Guilder", AOA: "Angolan Kwanza", AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat", BAM: "Bosnia Convertible Mark", BIF: "Burundian Franc", BMD: "Bermudian Dollar",
    BND: "Brunei Dollar", BTN: "Bhutanese Ngultrum", BWP: "Botswana Pula", BYN: "Belarusian Ruble",
    CDF: "Congolese Franc", DJF: "Djiboutian Franc", FJD: "Fijian Dollar", FKP: "Falkland Islands Pound",
    GEL: "Georgian Lari", GIP: "Gibraltar Pound", GMD: "Gambian Dalasi", GNF: "Guinean Franc",
    GYD: "Guyanese Dollar", ISK: "Icelandic Króna", KHR: "Cambodian Riel", KMF: "Comorian Franc",
    KZT: "Kazakhstani Tenge", LAK: "Lao Kip", LBP: "Lebanese Pound", LSL: "Lesotho Loti",
    LYD: "Libyan Dinar", MDL: "Moldovan Leu", MGA: "Malagasy Ariary", MKD: "Macedonian Denar",
    MMK: "Myanmar Kyat", MNT: "Mongolian Tugrik", MOP: "Macanese Pataca", MRU: "Mauritanian Ouguiya",
    MUR: "Mauritian Rupee", MVR: "Maldivian Rufiyaa", MWK: "Malawian Kwacha", MZN: "Mozambican Metical",
    NAD: "Namibian Dollar", NPR: "Nepalese Rupee", PGK: "Papua New Guinean Kina", RSD: "Serbian Dinar",
    RWF: "Rwandan Franc", SBD: "Solomon Islands Dollar", SCR: "Seychellois Rupee", SDG: "Sudanese Pound",
    SHP: "Saint Helena Pound", SLE: "Sierra Leonean Leone", SOS: "Somali Shilling", SRD: "Surinamese Dollar",
    SSP: "South Sudanese Pound", STN: "São Tomé Dobra", SYP: "Syrian Pound", SZL: "Eswatini Lilangeni",
    TJS: "Tajikistani Somoni", TMT: "Turkmenistan Manat", TND: "Tunisian Dinar", TOP: "Tongan Paʻanga",
    TVD: "Tuvaluan Dollar", UAH: "Ukrainian Hryvnia", UZS: "Uzbekistani Som", VES: "Venezuelan Bolívar",
    VUV: "Vanuatu Vatu", WST: "Samoan Tālā", XAF: "CFA Franc BEAC", XOF: "CFA Franc BCEAO",
    XPF: "CFP Franc", YER: "Yemeni Rial"
};

// ============ GLOBAL STATE ============
let currentCategory = 'length';
let history = JSON.parse(localStorage.getItem('omni_history') || '[]');
let calcCount = parseInt(localStorage.getItem('omni_calc_count') || '0');
let timerInterval = null;
let timerSeconds = 0;

let exchangeRates = {
    USD: 1, EUR: 0.924, GBP: 0.789, JPY: 149.65, CAD: 1.358, AUD: 1.518,
    CHF: 0.882, INR: 83.12, CNY: 7.195, AED: 3.673, PKR: 278.50, SAR: 3.75,
    BRL: 5.50, ZAR: 18.20, MXN: 19.50, SGD: 1.34, NZD: 1.63, SEK: 10.30,
    NOK: 10.60, KRW: 1340, TRY: 34.00, RUB: 91.50, EGP: 48.50, THB: 34.20
};

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    initAppLoader();
    initUI();
    renderSidebar();
    populateUnitSelectors();
    calculateConversion();
    fetchLiveCurrencyRates();
    updateCalcCountDisplay();
    renderHistory();
    plotGraph();
    startWorldClocks();
    setupEventListeners();
});

// ============ APP LOADING OVERLAY ANIMATION ============
function initAppLoader() {
    const loader = document.getElementById('appLoader');
    const progress = document.getElementById('loaderProgress');
    if (!loader) return;

    if (progress) {
        progress.style.width = '60%';
    }

    setTimeout(() => {
        if (progress) progress.style.width = '100%';
        setTimeout(() => {
            loader.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 700);
        }, 300);
    }, 400);
}

// ============ UI & STANDARD EVENT LISTENERS ============
function initUI() {
    document.getElementById('calcCount').innerText = calcCount;
}

function setupEventListeners() {
    // Real-time input reactivity
    document.getElementById('inputValue').addEventListener('input', calculateConversion);
    document.getElementById('fromUnit').addEventListener('change', calculateConversion);
    document.getElementById('toUnit').addEventListener('change', calculateConversion);
    document.getElementById('precisionSetting').addEventListener('change', calculateConversion);
    document.getElementById('currencyAmount').addEventListener('input', calculateCurrency);
    document.getElementById('currencyFrom').addEventListener('change', calculateCurrency);
    document.getElementById('currencyTo').addEventListener('change', calculateCurrency);

    // Sidebar Navigation Controls
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const closeSidebarMobileBtn = document.getElementById('closeSidebarMobile');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    if (toggleSidebarBtn) toggleSidebarBtn.addEventListener('click', toggleSidebar);
    if (closeSidebarMobileBtn) closeSidebarMobileBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);

    // History drawer
    const toggleHistoryBtn = document.getElementById('toggleHistory');
    const closeHistoryBtn = document.getElementById('closeHistory');
    const historyDrawer = document.getElementById('historyDrawer');

    if (toggleHistoryBtn) {
        toggleHistoryBtn.addEventListener('click', () => {
            historyDrawer.classList.toggle('translate-x-full');
        });
    }
    if (closeHistoryBtn) {
        closeHistoryBtn.addEventListener('click', () => {
            historyDrawer.classList.add('translate-x-full');
        });
    }

    // Standard Search Palette Modal (Point-and-Click controls)
    const openCmdPaletteBtn = document.getElementById('openCmdPalette');
    const closeCmdBtn = document.getElementById('closeCmdBtn');
    const cmdPalette = document.getElementById('commandPalette');
    const cmdInput = document.getElementById('cmdInput');

    function openCmd() {
        cmdPalette.classList.remove('hidden');
        cmdInput.focus();
        filterCmdPalette('');
    }
    function closeCmd() {
        cmdPalette.classList.add('hidden');
    }

    if (openCmdPaletteBtn) openCmdPaletteBtn.addEventListener('click', openCmd);
    if (closeCmdBtn) closeCmdBtn.addEventListener('click', closeCmd);

    cmdInput.addEventListener('input', (e) => filterCmdPalette(e.target.value));

    // Category Search Filter in Sidebar
    const catSearch = document.getElementById('catSearch');
    const searchClear = document.getElementById('searchClear');
    if (catSearch) {
        catSearch.addEventListener('input', (e) => {
            renderSidebar(e.target.value);
            if (e.target.value) searchClear.classList.remove('hidden');
            else searchClear.classList.add('hidden');
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            catSearch.value = '';
            renderSidebar('');
            searchClear.classList.add('hidden');
        });
    }
}

// ============ SIDEBAR RENDERING ============
function renderSidebar(filter = '') {
    const sidebarNav = document.getElementById('sidebarNav');
    sidebarNav.innerHTML = '';
    const lowerFilter = filter.toLowerCase();

    const navSections = [
        {
            groupName: "Converters",
            items: Object.keys(unitCategories).map(key => ({
                key: key,
                title: unitCategories[key].title,
                icon: unitCategories[key].icon
            }))
        },
        {
            groupName: "Financial & Tech",
            items: [
                { key: 'currency', title: 'All Country Forex', icon: 'fa-money-bill-wave' },
                { key: 'calculator', title: 'Scientific Calc', icon: 'fa-calculator' },
                { key: 'math-solver', title: 'Math Solver', icon: 'fa-square-root-variable' },
                { key: 'finance', title: 'Loan & Interest', icon: 'fa-chart-pie' },
                { key: 'developer', title: 'Developer Tools', icon: 'fa-code' },
                { key: 'health', title: 'BMI & Fitness', icon: 'fa-heartbeat' },
                { key: 'timer', title: 'Smart Timer & Clock', icon: 'fa-stopwatch' }
            ]
        }
    ];

    navSections.forEach(section => {
        const filteredItems = section.items.filter(item => item.title.toLowerCase().includes(lowerFilter));
        if (filteredItems.length > 0) {
            const groupHeader = document.createElement('div');
            groupHeader.className = "text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-3 pt-2 pb-1";
            groupHeader.innerText = section.groupName;
            sidebarNav.appendChild(groupHeader);

            filteredItems.forEach(item => {
                const btn = document.createElement('button');
                const isActive = currentCategory === item.key;
                btn.className = `w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition ${
                    isActive 
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20' 
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`;
                btn.onclick = () => switchToCategory(item.key);
                btn.innerHTML = `
                    <div class="flex items-center gap-2.5 min-w-0">
                        <i class="fas ${item.icon} w-4 text-center shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}"></i>
                        <span class="truncate">${item.title}</span>
                    </div>
                    ${isActive ? '<i class="fas fa-chevron-right text-[10px] shrink-0"></i>' : ''}
                `;
                sidebarNav.appendChild(btn);
            });
        }
    });
}

// ============ CATEGORY SWITCHER ============
function switchToCategory(categoryKey) {
    currentCategory = categoryKey;
    renderSidebar();

    document.querySelectorAll('.tool-section').forEach(sec => sec.classList.add('hidden'));

    const sectionMap = {
        'currency': 'currencySection',
        'calculator': 'calculatorSection',
        'math-solver': 'mathSolverSection',
        'finance': 'financeSection',
        'developer': 'developerSection',
        'health': 'healthSection',
        'timer': 'timerSection'
    };

    const activeTitle = document.getElementById('activeCategoryTitle');

    if (sectionMap[categoryKey]) {
        document.getElementById(sectionMap[categoryKey]).classList.remove('hidden');
        if (categoryKey === 'currency') {
            activeTitle.innerText = "All Country Currency Converter";
            populateCurrencySelectors();
            calculateCurrency();
        } else if (categoryKey === 'calculator') {
            activeTitle.innerText = "Scientific Engine & Plotter";
            plotGraph();
        } else if (categoryKey === 'math-solver') {
            activeTitle.innerText = "Equation Solver";
            solveLinear();
        } else if (categoryKey === 'finance') {
            activeTitle.innerText = "Financial Calculators";
            calcEMI();
        } else if (categoryKey === 'developer') {
            activeTitle.innerText = "Developer Utilities";
            convertBase('dec');
        } else if (categoryKey === 'health') {
            activeTitle.innerText = "BMI & Fitness";
            calculateBMI();
        } else if (categoryKey === 'timer') {
            activeTitle.innerText = "Smart Timer & World Clock";
        }
    } else {
        document.getElementById('converterSection').classList.remove('hidden');
        const catObj = unitCategories[categoryKey];
        if (catObj) {
            activeTitle.innerText = catObj.title;
            document.getElementById('converterTitle').innerText = catObj.title;
            document.getElementById('converterIcon').className = `fas ${catObj.icon}`;
            populateUnitSelectors();
            calculateConversion();
        }
    }

    document.getElementById('sidebar').classList.add('-translate-x-full');
    document.getElementById('sidebarOverlay').classList.add('hidden');
}

// ============ REAL-TIME UNIT CONVERTER ============
function populateUnitSelectors() {
    const cat = unitCategories[currentCategory];
    if (!cat) return;

    const fromSelect = document.getElementById('fromUnit');
    const toSelect = document.getElementById('toUnit');
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    cat.units.forEach((u) => {
        fromSelect.add(new Option(`${u.name} (${u.symbol})`, u.symbol));
        toSelect.add(new Option(`${u.name} (${u.symbol})`, u.symbol));
    });

    if (cat.units.length > 1) {
        toSelect.selectedIndex = 1;
    }
}

function calculateConversion() {
    const cat = unitCategories[currentCategory];
    if (!cat) return;

    const inputValueRaw = document.getElementById('inputValue').value;
    const inputValue = inputValueRaw === '' ? 0 : parseFloat(inputValueRaw);
    const fromSymbol = document.getElementById('fromUnit').value;
    const toSymbol = document.getElementById('toUnit').value;
    const precision = parseInt(document.getElementById('precisionSetting').value);

    document.getElementById('fromSymbolBadge').innerText = fromSymbol;
    document.getElementById('toSymbolBadge').innerText = toSymbol;

    if (isNaN(inputValue)) {
        document.getElementById('outputValue').innerText = '0.00';
        return;
    }

    let result = 0;

    if (currentCategory === 'temperature') {
        result = convertTemperature(inputValue, fromSymbol, toSymbol);
    } else {
        const fromObj = cat.units.find(u => u.symbol === fromSymbol);
        const toObj = cat.units.find(u => u.symbol === toSymbol);
        if (fromObj && toObj) {
            const baseVal = inputValue * fromObj.value;
            result = baseVal / toObj.value;
        }
    }

    const formattedResult = formatNumber(result, precision);
    document.getElementById('outputValue').innerText = formattedResult;
    document.getElementById('formulaText').innerText = `1 ${fromSymbol} = ${formatNumber(getUnitRatio(fromSymbol, toSymbol), 4)} ${toSymbol}`;

    updateUnitMatrix(inputValue, fromSymbol, precision);
    incrementCalcCount();
}

function getUnitRatio(fromSymbol, toSymbol) {
    if (currentCategory === 'temperature') return convertTemperature(1, fromSymbol, toSymbol);
    const cat = unitCategories[currentCategory];
    const fromObj = cat.units.find(u => u.symbol === fromSymbol);
    const toObj = cat.units.find(u => u.symbol === toSymbol);
    if (!fromObj || !toObj) return 1;
    return fromObj.value / toObj.value;
}

function convertTemperature(value, from, to) {
    let kelvin = 0;
    if (from === '°C') kelvin = value + 273.15;
    else if (from === '°F') kelvin = (value - 32) * 5 / 9 + 273.15;
    else if (from === 'K') kelvin = value;
    else if (from === '°R') kelvin = value * 5 / 9;

    if (to === '°C') return kelvin - 273.15;
    if (to === '°F') return (kelvin - 273.15) * 9 / 5 + 32;
    if (to === 'K') return kelvin;
    if (to === '°R') return kelvin * 9 / 5;
    return value;
}

function swapUnits() {
    const fromSelect = document.getElementById('fromUnit');
    const toSelect = document.getElementById('toUnit');
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    calculateConversion();
}

function updateUnitMatrix(value, fromSymbol, precision) {
    const matrixGrid = document.getElementById('unitMatrixGrid');
    matrixGrid.innerHTML = '';
    const cat = unitCategories[currentCategory];
    if (!cat) return;

    cat.units.slice(0, 8).forEach(unit => {
        let converted = 0;
        if (currentCategory === 'temperature') {
            converted = convertTemperature(value, fromSymbol, unit.symbol);
        } else {
            const fromObj = cat.units.find(u => u.symbol === fromSymbol);
            converted = (value * fromObj.value) / unit.value;
        }

        const card = document.createElement('div');
        card.className = "bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-col justify-between space-y-1 hover:border-brand-500 transition group";
        card.innerHTML = `
            <div class="flex justify-between items-center text-xs text-slate-500">
                <span class="font-medium truncate">${unit.name}</span>
                <span class="font-mono font-bold text-slate-700">${unit.symbol}</span>
            </div>
            <div class="text-sm sm:text-base font-bold font-mono text-slate-900 truncate">${formatNumber(converted, precision)}</div>
        `;
        matrixGrid.appendChild(card);
    });
}

// ============ ALL COUNTRY CURRENCY CONVERTER ENGINE ============
function populateCurrencySelectors() {
    const fromSelect = document.getElementById('currencyFrom');
    const toSelect = document.getElementById('currencyTo');
    
    const currentFrom = fromSelect.value || 'USD';
    const currentTo = toSelect.value || 'EUR';

    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    const currencyCodes = Object.keys(exchangeRates).sort();

    currencyCodes.forEach(code => {
        const fullTitle = currencyNames[code] ? `${code} - ${currencyNames[code]}` : code;
        fromSelect.add(new Option(fullTitle, code));
        toSelect.add(new Option(fullTitle, code));
    });

    fromSelect.value = currencyCodes.includes(currentFrom) ? currentFrom : 'USD';
    toSelect.value = currencyCodes.includes(currentTo) ? currentTo : 'EUR';
}

async function fetchLiveCurrencyRates() {
    try {
        const res = await fetch('https://open.er-api.com/v4/latest/USD');
        if (res.ok) {
            const data = await res.json();
            if (data && data.rates) {
                exchangeRates = { ...exchangeRates, ...data.rates };
                populateCurrencySelectors();
                document.getElementById('lastFxUpdate').innerText = `Updated: Live`;
                showToast('160+ Country FX rates updated', 'success');
            }
        }
    } catch (err) {
        console.log('FX API offline, using built-in rates.');
    }
    updateFxTicker();
    updateFxComparisonGrid();
    calculateCurrency();
}

function calculateCurrency() {
    populateCurrencySelectors();
    const amountRaw = document.getElementById('currencyAmount').value;
    const amount = amountRaw === '' ? 0 : parseFloat(amountRaw);
    const from = document.getElementById('currencyFrom').value;
    const to = document.getElementById('currencyTo').value;

    if (isNaN(amount)) {
        document.getElementById('currencyOutput').innerText = '0.00';
        return;
    }

    const rateFrom = exchangeRates[from] || 1;
    const rateTo = exchangeRates[to] || 1;
    const result = (amount / rateFrom) * rateTo;

    document.getElementById('currencyOutput').innerText = formatNumber(result, 2);
    const singleRate = (1 / rateFrom) * rateTo;
    document.getElementById('exchangeRate').innerText = `1 ${from} = ${formatNumber(singleRate, 4)} ${to}`;
    incrementCalcCount();
}

function swapCurrency() {
    const from = document.getElementById('currencyFrom');
    const to = document.getElementById('currencyTo');
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
    calculateCurrency();
}

function updateFxTicker() {
    const ticker = document.getElementById('tickerContent');
    if (!ticker) return;
    const topPairs = [
        ['USD', 'EUR'], ['USD', 'GBP'], ['USD', 'JPY'], 
        ['USD', 'PKR'], ['USD', 'INR'], ['USD', 'CAD'], ['USD', 'AUD']
    ];
    ticker.innerHTML = topPairs.map(([f, t]) => {
        const rate = (exchangeRates[t] / exchangeRates[f]).toFixed(2);
        return `<span>${f}/${t}: <strong class="text-white">${rate}</strong></span>`;
    }).join('');
}

function updateFxComparisonGrid() {
    const grid = document.getElementById('currencyGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const baseCode = document.getElementById('currencyFrom')?.value || 'USD';
    const baseRate = exchangeRates[baseCode] || 1;

    const majorCodes = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'INR', 'PKR', 'SAR', 'AED', 'CNY', 'BRL', 'ZAR', 'MXN'];
    majorCodes.forEach(code => {
        if (code === baseCode || !exchangeRates[code]) return;
        const rate = (exchangeRates[code] / baseRate).toFixed(4);
        const card = document.createElement('div');
        card.className = "bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-col justify-between hover:border-emerald-500 transition";
        card.innerHTML = `
            <span class="text-[11px] text-slate-500 font-bold truncate">1 ${baseCode} =</span>
            <div class="text-xs sm:text-sm font-bold font-mono text-emerald-700 truncate">${rate} ${code}</div>
        `;
        grid.appendChild(card);
    });
}

// ============ SCIENTIFIC CALCULATOR & CANVAS GRAPH ============
let calcExpression = '';

function calcInput(val) {
    if (calcExpression === '0') calcExpression = '';
    calcExpression += val;
    updateCalcDisplay();
}

function calcOp(op) {
    calcExpression += ' ' + op + ' ';
    updateCalcDisplay();
}

function calcFunc(fn) {
    if (fn === 'sin') calcExpression += 'Math.sin(';
    else if (fn === 'cos') calcExpression += 'Math.cos(';
    else if (fn === 'tan') calcExpression += 'Math.tan(';
    else if (fn === 'sqrt') calcExpression += 'Math.sqrt(';
    else if (fn === 'log') calcExpression += 'Math.log10(';
    else if (fn === 'ln') calcExpression += 'Math.log(';
    else if (fn === 'pi') calcExpression += 'Math.PI';
    else if (fn === 'e') calcExpression += 'Math.E';
    else if (fn === 'square') calcExpression += '**2';
    updateCalcDisplay();
}

function calcClear() {
    calcExpression = '';
    updateCalcDisplay();
}

function calcBackspace() {
    calcExpression = calcExpression.trim().slice(0, -1);
    updateCalcDisplay();
}

function updateCalcDisplay() {
    document.getElementById('calcCurrent').innerText = calcExpression || '0';
}

function calcEquals() {
    try {
        let sanitized = calcExpression.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
        let res = Function(`"use strict"; return (${sanitized})`)();
        document.getElementById('calcHistory').innerText = calcExpression + ' =';
        calcExpression = String(res);
        document.getElementById('calcCurrent').innerText = res;
        incrementCalcCount();
        addHistory('Calculator', `${sanitized} = ${res}`);
    } catch (e) {
        document.getElementById('calcCurrent').innerText = 'Error';
    }
}

function plotGraph() {
    const canvas = document.getElementById('graphCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.parentElement.clientWidth;
    const height = canvas.height = canvas.parentElement.clientHeight;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2); ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0); ctx.lineTo(width / 2, height);
    ctx.stroke();

    const funcStr = document.getElementById('graphFuncInput').value || 'sin(x)';
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    const scale = 20;
    let started = false;

    for (let px = 0; px < width; px++) {
        let x = (px - width / 2) / scale;
        let y = 0;
        try {
            if (funcStr === 'sin(x)') y = Math.sin(x);
            else if (funcStr === 'cos(x)') y = Math.cos(x);
            else if (funcStr === 'x^2' || funcStr === 'x^2 - 4') y = x * x - 4;
            else y = Math.sin(x);

            let py = height / 2 - y * scale;
            if (!started) { ctx.moveTo(px, py); started = true; }
            else { ctx.lineTo(px, py); }
        } catch (e) {}
    }
    ctx.stroke();
}

// ============ EQUATION SOLVER ============
function switchSolverTab(type) {
    document.querySelectorAll('.solver-tab-btn').forEach(btn => btn.classList.remove('bg-amber-600', 'text-white'));
    document.getElementById(`solverTab${type.charAt(0).toUpperCase() + type.slice(1)}`).classList.add('bg-amber-600', 'text-white');

    document.getElementById('solverPanelLinear').classList.add('hidden');
    document.getElementById('solverPanelQuadratic').classList.add('hidden');

    if (type === 'linear') {
        document.getElementById('solverPanelLinear').classList.remove('hidden');
        solveLinear();
    } else if (type === 'quadratic') {
        document.getElementById('solverPanelQuadratic').classList.remove('hidden');
        solveQuadratic();
    }
}

function solveLinear() {
    const aRaw = document.getElementById('linA').value;
    const bRaw = document.getElementById('linB').value;
    const cRaw = document.getElementById('linC').value;

    const a = aRaw === '' ? 0 : parseFloat(aRaw);
    const b = bRaw === '' ? 0 : parseFloat(bRaw);
    const c = cRaw === '' ? 0 : parseFloat(cRaw);

    const steps = document.getElementById('solverSteps');
    if (a === 0 && b === 0 && c === 0) {
        steps.innerHTML = '<div>0x + 0 = 0 (Enter non-zero coefficient \'a\')</div>';
        return;
    }

    if (a === 0) {
        steps.innerHTML = '<div>Enter a non-zero coefficient \'a\' to solve linear equation</div>';
        return;
    }

    const val = (c - b) / a;
    steps.innerHTML = `
        <div>${a}x + ${b} = ${c}</div>
        <div>${a}x = ${c - b}</div>
        <div class="text-emerald-400 font-bold text-base">x = ${formatNumber(val, 4)}</div>
    `;
}

function solveQuadratic() {
    const aRaw = document.getElementById('quadA').value;
    const bRaw = document.getElementById('quadB').value;
    const cRaw = document.getElementById('quadC').value;

    const a = aRaw === '' ? 0 : parseFloat(aRaw);
    const b = bRaw === '' ? 0 : parseFloat(bRaw);
    const c = cRaw === '' ? 0 : parseFloat(cRaw);

    const steps = document.getElementById('solverSteps');
    if (a === 0 && b === 0 && c === 0) {
        steps.innerHTML = '<div>Enter coefficients to solve quadratic equation</div>';
        return;
    }

    if (a === 0) {
        steps.innerHTML = '<div>Enter a non-zero coefficient \'a\' for quadratic equation</div>';
        return;
    }

    const disc = b * b - 4 * a * c;
    if (disc > 0) {
        const x1 = (-b + Math.sqrt(disc)) / (2 * a);
        const x2 = (-b - Math.sqrt(disc)) / (2 * a);
        steps.innerHTML = `
            <div>Discriminant Δ = b² - 4ac = ${disc}</div>
            <div class="text-emerald-400 font-bold text-base">x₁ = ${formatNumber(x1, 4)}, x₂ = ${formatNumber(x2, 4)}</div>
        `;
    } else if (disc === 0) {
        const x = -b / (2 * a);
        steps.innerHTML = `
            <div>Discriminant Δ = 0 (Repeated Root)</div>
            <div class="text-emerald-400 font-bold text-base">x = ${formatNumber(x, 4)}</div>
        `;
    } else {
        steps.innerHTML = `<div>Discriminant Δ = ${disc} (Complex Roots)</div>`;
    }
}

// ============ FINANCE CALCULATORS ============
function calcEMI() {
    const pRaw = document.getElementById('emiPrincipal').value;
    const rRaw = document.getElementById('emiRate').value;
    const nRaw = document.getElementById('emiTenure').value;

    const p = pRaw === '' ? 0 : parseFloat(pRaw);
    const r = (rRaw === '' ? 0 : parseFloat(rRaw)) / 12 / 100;
    const n = (nRaw === '' ? 0 : parseFloat(nRaw)) * 12;

    if (p === 0 || r === 0 || n === 0) {
        document.getElementById('emiMonthly').innerText = `$0.00`;
        document.getElementById('emiTotalInterest').innerText = `$0.00`;
        document.getElementById('emiTotalPayable').innerText = `$0.00`;
        return;
    }

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - p;

    document.getElementById('emiMonthly').innerText = `$${formatNumber(emi, 2)}`;
    document.getElementById('emiTotalInterest').innerText = `$${formatNumber(totalInterest, 2)}`;
    document.getElementById('emiTotalPayable').innerText = `$${formatNumber(totalPayable, 2)}`;
}

// ============ DEVELOPER UTILITIES ============
function switchDevTab(tab) {
    document.getElementById('devPanelBase').classList.add('hidden');
    document.getElementById('devPanelColor').classList.add('hidden');

    if (tab === 'base') document.getElementById('devPanelBase').classList.remove('hidden');
    else if (tab === 'color') document.getElementById('devPanelColor').classList.remove('hidden');
}

function convertBase(source) {
    let decVal = 0;
    if (source === 'dec') {
        const val = document.getElementById('baseDec').value;
        decVal = val === '' ? 0 : parseInt(val, 10);
    } else if (source === 'hex') {
        const val = document.getElementById('baseHex').value;
        decVal = val === '' ? 0 : parseInt(val, 16);
    } else if (source === 'bin') {
        const val = document.getElementById('baseBin').value;
        decVal = val === '' ? 0 : parseInt(val, 2);
    } else if (source === 'oct') {
        const val = document.getElementById('baseOct').value;
        decVal = val === '' ? 0 : parseInt(val, 8);
    }

    if (isNaN(decVal)) decVal = 0;

    if (source !== 'dec') document.getElementById('baseDec').value = decVal;
    if (source !== 'hex') document.getElementById('baseHex').value = decVal.toString(16).toUpperCase();
    if (source !== 'bin') document.getElementById('baseBin').value = decVal.toString(2);
    if (source !== 'oct') document.getElementById('baseOct').value = decVal.toString(8);
}

function convertColorPicker(hex) {
    document.getElementById('colorHex').value = hex.toUpperCase();
    document.getElementById('colorSwatch').style.backgroundColor = hex;
    updateRgbHsl(hex);
}

function convertColorHex(hex) {
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
        document.getElementById('colorSwatch').style.backgroundColor = hex;
        document.getElementById('colorPicker').value = hex;
        updateRgbHsl(hex);
    }
}

function updateRgbHsl(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    document.getElementById('colorRgb').value = `rgb(${r}, ${g}, ${b})`;
}

// ============ HEALTH CALCULATOR ============
function calculateBMI() {
    const hRaw = document.getElementById('bmiHeight').value;
    const wRaw = document.getElementById('bmiWeight').value;

    const h = (hRaw === '' ? 0 : parseFloat(hRaw)) / 100;
    const w = wRaw === '' ? 0 : parseFloat(wRaw);

    const badge = document.getElementById('bmiCategory');
    if (h === 0 || w === 0 || isNaN(h) || isNaN(w)) {
        document.getElementById('bmiValue').innerText = '0.0';
        badge.innerText = "Enter height & weight";
        badge.className = "inline-block px-3 py-1 bg-slate-200 text-slate-700 font-semibold text-xs rounded-full";
        document.getElementById('bmiIdealRange').innerText = `0.0 kg – 0.0 kg`;
        return;
    }

    const bmi = w / (h * h);
    document.getElementById('bmiValue').innerText = formatNumber(bmi, 1);

    if (bmi < 18.5) {
        badge.innerText = "Underweight";
        badge.className = "inline-block px-3 py-1 bg-amber-100 text-amber-800 font-semibold text-xs rounded-full";
    } else if (bmi < 25) {
        badge.innerText = "Normal Weight";
        badge.className = "inline-block px-3 py-1 bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-full";
    } else if (bmi < 30) {
        badge.innerText = "Overweight";
        badge.className = "inline-block px-3 py-1 bg-amber-100 text-amber-800 font-semibold text-xs rounded-full";
    } else {
        badge.innerText = "Obese";
        badge.className = "inline-block px-3 py-1 bg-rose-100 text-rose-800 font-semibold text-xs rounded-full";
    }

    const minW = 18.5 * h * h;
    const maxW = 24.9 * h * h;
    document.getElementById('bmiIdealRange').innerText = `${formatNumber(minW, 1)} kg – ${formatNumber(maxW, 1)} kg`;
}

// ============ TIMER & WORLD CLOCK ============
function startWorldClocks() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('clockNY').innerText = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', timeStyle: 'medium' }).format(now);
        document.getElementById('clockLondon').innerText = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', timeStyle: 'medium' }).format(now);
        document.getElementById('clockTokyo').innerText = new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', timeStyle: 'medium' }).format(now);
    }, 1000);
}

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hrs = String(Math.floor(timerSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((timerSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(timerSeconds % 60).padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `${hrs}:${mins}:${secs}`;
}

function switchTimerMode() {
    resetTimer();
}

// ============ UTILITIES & HISTORY ============
function formatNumber(num, decimals = 2) {
    if (isNaN(num)) return '0.00';
    if (decimals === 8) return num.toExponential(4);
    return num.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

function incrementCalcCount() {
    calcCount++;
    updateCalcCountDisplay();
}

function updateCalcCountDisplay() {
    document.getElementById('calcCount').innerText = calcCount;
    localStorage.setItem('omni_calc_count', calcCount);
}

function addHistory(type, detail) {
    history.unshift({ type, detail, time: new Date().toLocaleTimeString() });
    if (history.length > 30) history.pop();
    localStorage.setItem('omni_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const feed = document.getElementById('historyFeed');
    if (!feed) return;

    if (history.length === 0) {
        feed.innerHTML = `
            <div class="text-center py-8 text-slate-400 text-xs">
                <i class="fas fa-inbox text-2xl mb-2"></i>
                <p>No recent activity</p>
            </div>
        `;
        return;
    }

    feed.innerHTML = history.map(item => `
        <div class="py-2.5 text-xs flex justify-between items-start gap-2">
            <div>
                <span class="font-bold text-slate-800">${item.type}</span>
                <p class="text-slate-600 font-mono text-[11px]">${item.detail}</p>
            </div>
            <span class="text-[10px] text-slate-400 shrink-0">${item.time}</span>
        </div>
    `).join('');
}

function clearHistory() {
    history = [];
    localStorage.removeItem('omni_history');
    renderHistory();
}

function exportHistoryCSV() {
    if (history.length === 0) return;
    let csv = "Type,Detail,Time\n";
    history.forEach(h => {
        csv += `"${h.type}","${h.detail}","${h.time}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'omniconvert_history.csv';
    a.click();
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showToast('Copied to clipboard!', 'success');
}

function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = "toast-item px-4 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold shadow-xl flex items-center gap-2 border border-slate-800";
    toast.innerHTML = `<i class="fas fa-check-circle text-emerald-400"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function filterCmdPalette(query) {
    const results = document.getElementById('cmdResults');
    results.innerHTML = '';
    const q = query.toLowerCase();

    const items = [
        { title: 'Length Converter', cat: 'length', icon: 'fa-ruler' },
        { title: 'Weight & Mass', cat: 'weight', icon: 'fa-weight-hanging' },
        { title: 'Temperature', cat: 'temperature', icon: 'fa-temperature-high' },
        { title: 'All Country Currency Converter', cat: 'currency', icon: 'fa-money-bill-wave' },
        { title: 'Scientific Calculator', cat: 'calculator', icon: 'fa-calculator' },
        { title: 'Equation Solver', cat: 'math-solver', icon: 'fa-square-root-variable' },
        { title: 'Loan & EMI Calculator', cat: 'finance', icon: 'fa-chart-pie' },
        { title: 'Base Radix Converter', cat: 'developer', icon: 'fa-code' },
        { title: 'BMI Calculator', cat: 'health', icon: 'fa-heartbeat' },
        { title: 'World Clock & Timer', cat: 'timer', icon: 'fa-stopwatch' }
    ];

    const filtered = items.filter(i => i.title.toLowerCase().includes(q));
    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = "p-3 hover:bg-slate-50 rounded-xl cursor-pointer flex items-center justify-between text-xs transition";
        div.onclick = () => {
            switchToCategory(item.cat);
            document.getElementById('commandPalette').classList.add('hidden');
        };
        div.innerHTML = `
            <div class="flex items-center gap-3 font-semibold text-slate-800">
                <i class="fas ${item.icon} text-brand-600 w-4 text-center"></i>
                <span>${item.title}</span>
            </div>
            <span class="text-[10px] text-slate-400 uppercase tracking-wider">Select</span>
        `;
        results.appendChild(div);
    });
}