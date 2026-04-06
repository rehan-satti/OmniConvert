const units = {
    length: [
        { name: "Meter", symbol: "m", value: 1 },
        { name: "Kilometer", symbol: "km", value: 1000 },
        { name: "Centimeter", symbol: "cm", value: 0.01 },
        { name: "Millimeter", symbol: "mm", value: 0.001 },
        { name: "Mile", symbol: "mi", value: 1609.34 }
    ],
    weight: [
        { name: "Kilogram", symbol: "kg", value: 1 },
        { name: "Gram", symbol: "g", value: 0.001 },
        { name: "Milligram", symbol: "mg", value: 0.000001 },
        { name: "Pound", symbol: "lb", value: 0.453592 },
        { name: "Ounce", symbol: "oz", value: 0.0283495 }
    ],
    temperature: [
        { name: "Celsius", symbol: "°C" },
        { name: "Fahrenheit", symbol: "°F" },
        { name: "Kelvin", symbol: "K" },
        { name: "Rankine", symbol: "°R" },
        { name: "Réaumur", symbol: "°Re" }
    ],
    time: [
        { name: "Second", symbol: "s", value: 1 },
        { name: "Minute", symbol: "min", value: 60 },
        { name: "Hour", symbol: "h", value: 3600 },
        { name: "Day", symbol: "d", value: 86400 },
        { name: "Week", symbol: "wk", value: 604800 }
    ],
    volume: [
        { name: "Liter", symbol: "L", value: 1 },
        { name: "Milliliter", symbol: "mL", value: 0.001 },
        { name: "Gallon", symbol: "gal", value: 3.78541 },
        { name: "Cubic Meter", symbol: "m³", value: 1000 },
        { name: "Cup", symbol: "cup", value: 0.236588 }
    ],
    speed: [
        { name: "Meter per Second", symbol: "m/s", value: 1 },
        { name: "Kilometer per Hour", symbol: "km/h", value: 0.277778 },
        { name: "Mile per Hour", symbol: "mph", value: 0.44704 },
        { name: "Knot", symbol: "kn", value: 0.514444 },
        { name: "Foot per Second", symbol: "ft/s", value: 0.3048 }
    ],
    energy: [
        { name: "Joule", symbol: "J", value: 1 },
        { name: "Kilocalorie", symbol: "kcal", value: 4184 },
        { name: "Watt-hour", symbol: "Wh", value: 3600 },
        { name: "Kilowatt-hour", symbol: "kWh", value: 3600000 },
        { name: "BTU", symbol: "BTU", value: 1055.06 }
    ],
    pressure: [
        { name: "Pascal", symbol: "Pa", value: 1 },
        { name: "Bar", symbol: "bar", value: 100000 },
        { name: "Atmosphere", symbol: "atm", value: 101325 },
        { name: "PSI", symbol: "psi", value: 6894.76 },
        { name: "Torr", symbol: "Torr", value: 133.322 }
    ],
    area: [
        { name: "Square Meter", symbol: "m²", value: 1 },
        { name: "Square Kilometer", symbol: "km²", value: 1000000 },
        { name: "Square Centimeter", symbol: "cm²", value: 0.0001 },
        { name: "Hectare", symbol: "ha", value: 10000 },
        { name: "Acre", symbol: "ac", value: 4046.86 }
    ],
    frequency: [
        { name: "Hertz", symbol: "Hz", value: 1 },
        { name: "Kilohertz", symbol: "kHz", value: 1000 },
        { name: "Megahertz", symbol: "MHz", value: 1000000 },
        { name: "Gigahertz", symbol: "GHz", value: 1000000000 },
        { name: "Terahertz", symbol: "THz", value: 1000000000000 }
    ],
    density: [
        { name: "Kilogram per Cubic Meter", symbol: "kg/m³", value: 1 },
        { name: "Gram per Cubic Centimeter", symbol: "g/cm³", value: 1000 },
        { name: "Pound per Cubic Inch", symbol: "lb/in³", value: 27679.9 },
        { name: "Ounce per Gallon", symbol: "oz/gal", value: 0.133526 },
        { name: "Gram per Liter", symbol: "g/L", value: 1 }
    ],
    power: [
        { name: "Watt", symbol: "W", value: 1 },
        { name: "Kilowatt", symbol: "kW", value: 1000 },
        { name: "Horsepower", symbol: "hp", value: 745.7 },
        { name: "Megawatt", symbol: "MW", value: 1000000 },
        { name: "BTU per Hour", symbol: "BTU/h", value: 0.29307107 }
    ],
    data: [
        { name: "Bit", symbol: "bit", value: 1 },
        { name: "Byte", symbol: "B", value: 8 },
        { name: "Kilobyte", symbol: "KB", value: 8192 },
        { name: "Megabyte", symbol: "MB", value: 8388608 },
        { name: "Gigabyte", symbol: "GB", value: 8589934592 },
        { name: "Terabyte", symbol: "TB", value: 8796093022208 }
    ],
    angle: [
        { name: "Degree", symbol: "°", value: 1 },
        { name: "Radian", symbol: "rad", value: 57.2958 },
        { name: "Gradian", symbol: "grad", value: 0.9 }
    ],
    force: [
        { name: "Newton", symbol: "N", value: 1 },
        { name: "Pound-force", symbol: "lbf", value: 4.44822 },
        { name: "Kilogram-force", symbol: "kgf", value: 9.80665 }
    ]
};

const categories = Object.keys(units);
let currentCategory = 'length';
let history = [];
let calcCount = 0;

const hamburgerBtn = document.getElementById('hamburgerBtn');
const overlay = document.getElementById('overlay');
const sidebar = document.querySelector('.app-sidebar');
const inputValue = document.getElementById('inputValue');
const outputValue = document.getElementById('outputValue');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const historyFeed = document.getElementById('historyFeed');
const calcCountEl = document.getElementById('calcCount');
const topCategoryEl = document.getElementById('topCategory');
const themeToggle = document.getElementById('themeToggle');
const precisionSetting = document.getElementById('precisionSetting');
const sidebarNav = document.getElementById('sidebarNav');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const precisionSettingMobile = document.getElementById('precisionSettingMobile');

// Hamburger Menu Toggle
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
}

hamburgerBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

document.addEventListener('click', function(event) {
    if (event.target.closest('.nav-pill') && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

// Render Sidebar Navigation
function renderSidebar(filter = '') {
    const lowerFilter = filter.toLowerCase();
    sidebarNav.innerHTML = '';

    let hasResults = false;

    categories.forEach(cat => {
        const categoryUnits = units[cat];
        const matchesCategory = cat.toLowerCase().includes(lowerFilter);
        const matchesUnit = categoryUnits.some(unit =>
            unit.name.toLowerCase().includes(lowerFilter) ||
            unit.symbol.toLowerCase().includes(lowerFilter)
        );

        if (filter === '' || matchesCategory || matchesUnit) {
            const navItem = document.createElement('button');
            navItem.className = `nav-pill ${cat === currentCategory ? 'active' : ''}`;
            navItem.innerHTML = `<i class="fas fa-exchange"></i> ${cat.charAt(0).toUpperCase() + cat.slice(1)}`;
            navItem.onclick = () => selectCategory(cat);
            sidebarNav.appendChild(navItem);
            hasResults = true;
        }
    });

    if (filter !== '' && !hasResults) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `<i class="fas fa-search"></i> No categories or units found for "${filter}"`;
        sidebarNav.appendChild(noResults);
    }
}

// Select Category
function selectCategory(cat) {
    currentCategory = cat;
    topCategoryEl.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    updateConverterUI();
    renderSidebar(document.getElementById('catSearch').value);
}

// Update Converter UI
function updateConverterUI() {
    const categoryUnits = units[currentCategory];
    document.getElementById('activeCategoryTitle').textContent =
        currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1) + ' Engine';
    
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    
    categoryUnits.forEach((unit, index) => {
        const option = document.createElement('option');
        option.value = unit.name;
        option.textContent = `${unit.name} (${unit.symbol})`;
        fromUnit.appendChild(option);
        
        const option2 = document.createElement('option');
        option2.value = unit.name;
        option2.textContent = `${unit.name} (${unit.symbol})`;
        toUnit.appendChild(option2);
        
        if (index === 1) toUnit.value = unit.name;
    });
    
    convert();
}

// Convert Function
function convert() {
    document.getElementById('loadingSpinner').style.display = 'block';
    setTimeout(() => {
        const value = parseFloat(inputValue.value);
        const from = fromUnit.value;
        const to = toUnit.value;
        
        if (isNaN(value) || value === '') {
            outputValue.textContent = '0.00';
            document.getElementById('loadingSpinner').style.display = 'none';
            return;
        }
        
        let result;
        const precision = parseInt(precisionSetting.value, 10);
        
        if (currentCategory === 'temperature') {
            result = convertTemperature(value, from, to);
        } else {
            const fromData = units[currentCategory].find(u => u.name === from);
            const toData = units[currentCategory].find(u => u.name === to);
            result = value * fromData.value / toData.value;
        }
        
        outputValue.textContent = result.toFixed(precision);
        addHistory(value, from, result.toFixed(precision), to);
        document.getElementById('loadingSpinner').style.display = 'none';
    }, 300);
}

// Temperature Conversion
function convertTemperature(value, from, to) {
    if (from === to) return value;
    const celsius = {
        Celsius: value,
        Fahrenheit: (value - 32) * 5/9,
        Kelvin: value - 273.15,
        Rankine: (value - 491.67) * 5/9,
        "Réaumur": value * 1.25
    };

    let c = celsius[from];
    if (from === 'Kelvin') c = value - 273.15;
    if (from === 'Rankine') c = (value - 491.67) * 5/9;
    if (from === 'Réaumur') c = value * 1.25;

    if (to === 'Celsius') return c;
    if (to === 'Fahrenheit') return (c * 9/5) + 32;
    if (to === 'Kelvin') return c + 273.15;
    if (to === 'Rankine') return (c + 273.15) * 9/5;
    if (to === 'Réaumur') return c * 0.8;

    return value;
}

// Add to History
function addHistory(input, fromUnit, output, toUnit) {
    const fromData = units[currentCategory].find(u => u.name === fromUnit);
    const toData = units[currentCategory].find(u => u.name === toUnit);
    
    if (!fromData || !toData) return;
    
    const emptyMsg = historyFeed.querySelector('div[style*="text-align: center"]');
    if (emptyMsg) emptyMsg.remove();
    
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
        <span>${parseFloat(input).toFixed(2)} ${fromData.symbol}</span>
        <i class="fas fa-arrow-right"></i>
        <span>${output} ${toData.symbol}</span>
    `;
    
    historyFeed.insertBefore(historyItem, historyFeed.firstChild);
    
    if (historyFeed.children.length > 10) {
        historyFeed.removeChild(historyFeed.lastChild);
    }
    
    calcCount++;
    calcCountEl.textContent = calcCount;
}

// Swap Units
function swapUnits() {
    const temp = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = temp;
    convert();
}

// Clear History
function clearHistory() {
    historyFeed.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 1rem;">No conversions yet</div>';
    calcCount = 0;
    calcCountEl.textContent = '0';
}

// Filter Categories
function filterCategories() {
    const filter = document.getElementById('catSearch').value;
    const clearBtn = document.getElementById('searchClear');
    if (filter) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }
    renderSidebar(filter);
}

function clearSearch() {
    document.getElementById('catSearch').value = '';
    filterCategories();
}

// Theme Toggle
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

themeToggleMobile.addEventListener('change', function() {
    themeToggle.checked = this.checked;
    themeToggle.dispatchEvent(new Event('change'));
});

precisionSetting.addEventListener('change', convert);
precisionSettingMobile.addEventListener('change', function() {
    precisionSetting.value = this.value;
    convert();
});
inputValue.addEventListener('input', convert);
fromUnit.addEventListener('change', convert);
toUnit.addEventListener('change', convert);

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'dark';
themeToggleMobile.checked = savedTheme === 'dark';

// Initialize
renderSidebar();
updateConverterUI();
// Hide loading overlay on page load
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loadingOverlay').style.display = 'none';
        // Show mobile message if not closed
        const message = document.getElementById('mobileMessage');
        if (message && !localStorage.getItem('mobileMessageClosed')) {
            message.style.display = 'block';
            message.classList.add('message-show');
        }
        // Attract attention to input field
        const inputField = document.getElementById('inputValue');
        inputField.classList.add('input-attract');
        setTimeout(() => {
            inputField.classList.remove('input-attract');
        }, 2000);
    }, 2500); // Match the animation duration
});

function closeMobileMessage() {
    const message = document.getElementById('mobileMessage');
    message.style.display = 'none';
    localStorage.setItem('mobileMessageClosed', 'true');
}
