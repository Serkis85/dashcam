// ─── Car brands + models data ─────────────────────────────────────────────────
// Source: curated from NHTSA / manufacturer public data
const CAR_BRANDS_MODELS = {
  'Alfa Romeo': ['147', '156', '159', 'Giulia', 'Giulietta', 'Mito', 'Stelvio', 'Tonale'],
  'Audi': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'Q8 e-tron', 'R8', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'S3', 'S4', 'S5', 'SQ5', 'TT'],
  'BMW': ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series', 'iX', 'iX1', 'iX3', 'M2', 'M3', 'M4', 'M5', 'M8', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4'],
  'BYD': ['Atto 3', 'Dolphin', 'Han', 'Seal', 'Seal U', 'Tang'],
  'Chevrolet': ['Camaro', 'Corvette', 'Equinox', 'Impala', 'Malibu', 'Silverado', 'Suburban', 'Tahoe', 'Traverse', 'Trax'],
  'Citroën': ['Berlingo', 'C1', 'C3', 'C3 Aircross', 'C4', 'C4 Cactus', 'C5 Aircross', 'C5 X', 'ë-C4', 'Picasso'],
  'Dacia': ['Duster', 'Jogger', 'Logan', 'Sandero', 'Spring'],
  'Dodge': ['Challenger', 'Charger', 'Durango', 'Journey'],
  'Fiat': ['500', '500L', '500X', 'Bravo', 'Doblo', 'Grande Punto', 'Panda', 'Punto', 'Tipo'],
  'Ford': ['B-Max', 'C-Max', 'EcoSport', 'Edge', 'Explorer', 'F-150', 'Fiesta', 'Focus', 'Galaxy', 'Kuga', 'Mondeo', 'Mustang', 'Mustang Mach-E', 'Puma', 'Ranger', 'S-Max', 'Transit'],
  'Genesis': ['G70', 'G80', 'G90', 'GV60', 'GV70', 'GV80'],
  'Honda': ['Accord', 'Civic', 'CR-V', 'e', 'e:Ny1', 'HR-V', 'Jazz', 'Legend', 'Pilot', 'ZR-V'],
  'Hyundai': ['Bayon', 'Elantra', 'i10', 'i20', 'i30', 'i40', 'Ioniq', 'Ioniq 5', 'Ioniq 6', 'Kona', 'Nexo', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster'],
  'Infiniti': ['Q30', 'Q50', 'Q60', 'Q70', 'QX30', 'QX50', 'QX55', 'QX60', 'QX80'],
  'Jaguar': ['E-Pace', 'F-Pace', 'F-Type', 'I-Pace', 'XE', 'XF', 'XJ'],
  'Jeep': ['Cherokee', 'Compass', 'Gladiator', 'Grand Cherokee', 'Patriot', 'Renegade', 'Wrangler'],
  'Kia': ['Ceed', 'EV6', 'EV9', 'K5', 'Niro', 'Picanto', 'ProCeed', 'Rio', 'Sorento', 'Soul', 'Sportage', 'Stinger', 'Stonic', 'Telluride', 'Venga', 'XCeed'],
  'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Freelander', 'Range Rover', 'Range Rover Evoque', 'Range Rover Sport', 'Range Rover Velar'],
  'Lexus': ['CT', 'ES', 'GS', 'GX', 'IS', 'LC', 'LS', 'LX', 'NX', 'RC', 'RX', 'RZ', 'UX'],
  'Maserati': ['Ghibli', 'GranTurismo', 'Grecale', 'Levante', 'MC20', 'Quattroporte'],
  'Mazda': ['2', '3', '5', '6', 'CX-3', 'CX-30', 'CX-5', 'CX-60', 'CX-9', 'MX-5', 'MX-30'],
  'Mercedes-Benz': ['A-Class', 'B-Class', 'C-Class', 'CLA', 'CLE', 'E-Class', 'EQA', 'EQB', 'EQC', 'EQE', 'EQS', 'G-Class', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'S-Class', 'SL', 'V-Class'],
  'MG': ['3', '4', '5', 'HS', 'Marvel R', 'ZS', 'ZS EV'],
  'Mini': ['Clubman', 'Convertible', 'Cooper', 'Countryman', 'Paceman'],
  'Mitsubishi': ['ASX', 'Colt', 'Eclipse Cross', 'Galant', 'L200', 'Lancer', 'Outlander', 'Pajero', 'Space Star'],
  'Nissan': ['370Z', 'Ariya', 'Juke', 'Leaf', 'Micra', 'Navara', 'Note', 'Pathfinder', 'Patrol', 'Qashqai', 'X-Trail'],
  'Opel': ['Adam', 'Agila', 'Ampera-e', 'Astra', 'Cascada', 'Corsa', 'Crossland', 'Grandland', 'Insignia', 'Mokka', 'Mokka-e', 'Vivaro', 'Zafira'],
  'Peugeot': ['108', '2008', '208', '3008', '308', '408', '5008', '508', 'e-208', 'e-2008'],
  'Porsche': ['718 Boxster', '718 Cayman', '911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
  'Renault': ['Arkana', 'Austral', 'Clio', 'Espace', 'Kadjar', 'Kangoo', 'Koleos', 'Laguna', 'Megane', 'Megane E-Tech', 'Scenic', 'Twingo', 'Zoe'],
  'SEAT': ['Arona', 'Ateca', 'Ibiza', 'Leon', 'Tarraco', 'Toledo'],
  'Skoda': ['Citigo', 'Fabia', 'Kamiq', 'Karoq', 'Kodiaq', 'Octavia', 'Rapid', 'Scala', 'Superb'],
  'Subaru': ['BRZ', 'Crosstrek', 'Forester', 'Impreza', 'Legacy', 'Levorg', 'Outback', 'Solterra', 'WRX', 'XV'],
  'Suzuki': ['Alto', 'Baleno', 'Celerio', 'Ignis', 'Jimny', 'S-Cross', 'Swift', 'SX4', 'Vitara'],
  'Tesla': ['Cybertruck', 'Model 3', 'Model S', 'Model X', 'Model Y', 'Roadster'],
  'Toyota': ['Auris', 'Aygo', 'Aygo X', 'bZ4X', 'C-HR', 'Camry', 'Corolla', 'GR86', 'Hilux', 'Land Cruiser', 'Prius', 'RAV4', 'Supra', 'Urban Cruiser', 'Yaris', 'Yaris Cross'],
  'Volkswagen': ['Amarok', 'Arteon', 'Caddy', 'Golf', 'Golf GTI', 'Golf R', 'ID.3', 'ID.4', 'ID.5', 'ID.7', 'Jetta', 'Passat', 'Polo', 'Sharan', 'T-Cross', 'T-Roc', 'Taigo', 'Tiguan', 'Touareg', 'Touran', 'Up'],
  'Volvo': ['C30', 'C40', 'C70', 'EX30', 'EX90', 'S40', 'S60', 'S90', 'V40', 'V60', 'V90', 'XC40', 'XC60', 'XC90'],
};

const BRAND_LIST = [...Object.keys(CAR_BRANDS_MODELS).sort(), 'Other'];

// ─── Dashboard camera lead-capture form ───────────────────────────────────────
function camxForm() {
  return {
    loading: false,
    submitted: false,
    error: false,
    errorMessage: '',

    // Searchable brand combobox state
    brandQuery: '',
    brandOpen: false,

    // Searchable model combobox state
    modelQuery: '',
    modelOpen: false,

    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      carBrand: '',        // '' | brand name | 'Other'
      carModel: '',        // '' | model name
      carYear: '',
      customBrand: '',     // filled when carBrand === 'Other'
      customModel: '',     // filled when carBrand === 'Other'
      consent: false,
    },

    touched: {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      carBrand: false,
      carModel: false,
      carYear: false,
      consent: false,
    },

    // ── Computed ─────────────────────────────────────────────────────────────

    get isOtherBrand() {
      return this.formData.carBrand === 'Other';
    },

    get filteredBrands() {
      const q = this.brandQuery.toLowerCase().trim();
      if (!q) return BRAND_LIST;
      return BRAND_LIST.filter(b => b.toLowerCase().includes(q));
    },

    get availableModels() {
      if (this.isOtherBrand || !this.formData.carBrand) return [];
      return CAR_BRANDS_MODELS[this.formData.carBrand] || [];
    },

    get filteredModels() {
      const q = this.modelQuery.toLowerCase().trim();
      if (!q) return this.availableModels;
      return this.availableModels.filter(m => m.toLowerCase().includes(q));
    },

    get carYears() {
      const years = [];
      const current = new Date().getFullYear();
      for (let y = current; y >= 1990; y--) years.push(y);
      return years;
    },

    // ── Combobox: brand ───────────────────────────────────────────────────────

    selectBrand(brand) {
      this.formData.carBrand = brand;
      this.brandQuery = brand;
      this.brandOpen = false;
      this.formData.carModel = '';
      this.formData.customBrand = '';
      this.formData.customModel = '';
      this.modelQuery = '';
      this.touch('carBrand');
    },

    clearBrand() {
      this.formData.carBrand = '';
      this.formData.carModel = '';
      this.formData.customBrand = '';
      this.formData.customModel = '';
      this.brandQuery = '';
      this.modelQuery = '';
    },

    // ── Combobox: model ───────────────────────────────────────────────────────

    selectModel(model) {
      this.formData.carModel = model;
      this.modelQuery = model;
      this.modelOpen = false;
      this.touch('carModel');
    },

    clearModel() {
      this.formData.carModel = '';
      this.modelQuery = '';
    },

    // ── Validation ────────────────────────────────────────────────────────────

    touch(field) {
      this.touched[field] = true;
    },

    fieldError(field) {
      const v = this.formData;
      switch (field) {
        case 'firstName':
          return v.firstName.trim().length >= 2 ? '' : 'Please enter your first name';
        case 'lastName':
          return v.lastName.trim().length >= 2 ? '' : 'Please enter your last name';
        case 'email':
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())
            ? ''
            : 'Please enter a valid email address';
        case 'phone':
          // Optional – only validate format if something was typed
          if (!v.phone.trim()) return '';
          return /^\+?[0-9][\d\s\-()]{4,}$/.test(v.phone.trim())
            ? ''
            : 'Please enter a valid phone number (e.g. +357 99 123456)';
        case 'carBrand':
          if (!v.carBrand) return 'Please select your car brand';
          if (v.carBrand === 'Other' && !v.customBrand.trim())
            return 'Please enter your car brand';
          return '';
        case 'carModel':
          if (v.carBrand === 'Other') {
            return v.customModel.trim() ? '' : 'Please enter your car model';
          }
          return v.carModel ? '' : 'Please select your car model';
        case 'carYear':
          return v.carYear ? '' : 'Please select the car year';
        case 'consent':
          return v.consent ? '' : 'You must agree to continue';
        default:
          return '';
      }
    },

    isInvalid(field) {
      return this.touched[field] && this.fieldError(field) !== '';
    },

    validateAll() {
      Object.keys(this.touched).forEach(k => (this.touched[k] = true));
      return Object.keys(this.touched).every(k => this.fieldError(k) === '');
    },

    // ── Submit ────────────────────────────────────────────────────────────────

    async submitForm() {
      if (!this.validateAll()) {
        this.$nextTick(() => {
          const el = document.querySelector('[data-error="true"]');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        return;
      }

      this.loading = true;
      this.error = false;
      this.errorMessage = '';

      try {
        const submissionData = {
          firstName: this.formData.firstName.trim(),
          lastName: this.formData.lastName.trim(),
          email: this.formData.email.trim(),
          phone: this.formData.phone.trim(),
          carBrand:
            this.formData.carBrand === 'Other'
              ? this.formData.customBrand.trim()
              : this.formData.carBrand,
          carModel:
            this.formData.carBrand === 'Other'
              ? this.formData.customModel.trim()
              : this.formData.carModel,
          carYear: this.formData.carYear,
          consent: this.formData.consent ? 'Yes' : 'No',
        };

        // Paste your Google Apps Script Web App URL here.
        // Get it from: Google Sheet → Extensions → Apps Script →
        // Deploy → New deployment → Web app (Execute as: Me, Access: Anyone)
        const scriptURL ='https://script.google.com/macros/s/AKfycbwpbbEdVwbOMMBjafUd8MmVCKOa5cvKlFyNUDlMrW0Q2a8s1CZ1PDVlvquOhztCpnoGqw/exec';

        await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(submissionData),
        });

        this.submitted = true;
        this.loading = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.resetForm();
      } catch (err) {
        console.error('Error submitting form:', err);
        this.error = true;
        this.errorMessage = 'There was an error submitting your form. Please try again.';
        this.loading = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },

    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        carBrand: '',
        carModel: '',
        carYear: '',
        customBrand: '',
        customModel: '',
        consent: false,
      };
      this.brandQuery = '';
      this.modelQuery = '';
      Object.keys(this.touched).forEach(k => (this.touched[k] = false));
    },
  };
}

// Make it available globally for Alpine.js
window.camxForm = camxForm;
