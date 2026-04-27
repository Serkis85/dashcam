// ─── Car brands + models data ─────────────────────────────────────────────────
// Source: curated from NHTSA / manufacturer public data
const CAR_BRANDS_MODELS = {
  'Alfa Romeo': ['Giulia', 'Giulietta', 'Mito', 'Stelvio', 'Tonale'],
  Audi: [
    'A1',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'Q2',
    'Q3',
    'Q5',
    'Q7',
    'Q8',
    'Q8 e-tron',
    'R8',
    'RS3',
    'RS4',
    'RS5',
    'RS6',
    'RS7',
    'S3',
    'S4',
    'S5',
    'SQ5',
    'TT',
  ],
  BMW: [
    '1 Series',
    '2 Series',
    '3 Series',
    '4 Series',
    '5 Series',
    '7 Series',
    '8 Series',
    'iX',
    'iX1',
    'iX3',
    'M2',
    'M3',
    'M4',
    'M5',
    'M8',
    'X1',
    'X2',
    'X3',
    'X4',
    'X5',
    'X6',
    'X7',
    'Z4',
  ],
  Buick: ['Enclave', 'Encore', 'Encore GX', 'Envision', 'Envista'],
  BYD: ['Atto 3', 'Dolphin', 'Han', 'Sea Lion 6', 'Seal', 'Seal U', 'Sealion 7', 'Tang'],
  Cadillac: ['CT4', 'CT5', 'Escalade', 'Escalade ESV', 'Lyriq', 'Optiq', 'XT4', 'XT5', 'XT6'],
  Chevrolet: [
    'Blazer',
    'Blazer EV',
    'Camaro',
    'Colorado',
    'Corvette',
    'Equinox',
    'Equinox EV',
    'Malibu',
    'Silverado',
    'Suburban',
    'Tahoe',
    'Trailblazer',
    'Traverse',
    'Trax',
  ],
  Chrysler: ['300', 'Pacifica', 'Voyager'],
  Citroën: ['Berlingo', 'C3', 'C3 Aircross', 'C4', 'C5 Aircross', 'C5 X', 'ë-C3', 'ë-C4'],
  Cupra: ['Ateca', 'Born', 'Formentor', 'Leon', 'Tavascan', 'Terramar'],
  Dacia: ['Bigster', 'Duster', 'Jogger', 'Logan', 'Sandero', 'Spring'],
  Dodge: ['Challenger', 'Charger', 'Durango', 'Hornet'],
  'DS Automobiles': ['DS 3', 'DS 3 E-Tense', 'DS 4', 'DS 7', 'DS 9'],
  Fiat: ['500', '500e', '500L', '500X', 'Doblo', 'Panda', 'Tipo'],
  Fisker: ['Alaska', 'Ocean', 'Pear'],
  Ford: [
    'Bronco',
    'EcoSport',
    'Edge',
    'Explorer',
    'F-150',
    'F-150 Lightning',
    'Fiesta',
    'Focus',
    'Galaxy',
    'Kuga',
    'Mondeo',
    'Mustang',
    'Mustang Mach-E',
    'Puma',
    'Ranger',
    'S-Max',
    'Transit',
  ],
  Genesis: ['G70', 'G80', 'G90', 'GV60', 'GV70', 'GV80'],
  GMC: ['Acadia', 'Canyon', 'Envoy', 'Hummer EV', 'Sierra', 'Terrain', 'Yukon', 'Yukon XL'],
  GWM: ['Haval H6', 'Haval H9', 'Ora 03', 'Ora Funky Cat', 'Tank 300', 'Tank 500', 'Wey Coffee 01'],
  Honda: ['Accord', 'Civic', 'CR-V', 'e:Ny1', 'HR-V', 'Jazz', 'Pilot', 'Prologue', 'ZR-V'],
  Hyundai: [
    'Bayon',
    'Elantra',
    'i10',
    'i20',
    'i30',
    'Ioniq 5',
    'Ioniq 5 N',
    'Ioniq 6',
    'Ioniq 9',
    'Kona',
    'Nexo',
    'Santa Fe',
    'Sonata',
    'Tucson',
  ],
  Infiniti: ['Q50', 'Q60', 'QX50', 'QX55', 'QX60', 'QX80'],
  Jaguar: ['E-Pace', 'F-Pace', 'F-Type', 'I-Pace', 'XE', 'XF'],
  Jeep: ['Cherokee', 'Compass', 'Gladiator', 'Grand Cherokee', 'Renegade', 'Wagoneer', 'Wrangler'],
  Kia: [
    'Ceed',
    'EV3',
    'EV6',
    'EV9',
    'K5',
    'Niro',
    'Picanto',
    'ProCeed',
    'Rio',
    'Sorento',
    'Soul',
    'Sportage',
    'Stinger',
    'Stonic',
    'Telluride',
    'XCeed',
  ],
  'Land Rover': [
    'Defender',
    'Discovery',
    'Discovery Sport',
    'Range Rover',
    'Range Rover Evoque',
    'Range Rover Sport',
    'Range Rover Velar',
  ],
  Lexus: ['ES', 'GX', 'IS', 'LC', 'LS', 'LX', 'NX', 'RC', 'RX', 'RZ', 'TX', 'UX'],
  Lincoln: ['Aviator', 'Corsair', 'MKZ', 'Nautilus', 'Navigator'],
  Maserati: ['Ghibli', 'GranTurismo', 'Grecale', 'Levante', 'MC20', 'Quattroporte'],
  Mazda: [
    '2',
    '3',
    '6',
    'CX-3',
    'CX-30',
    'CX-5',
    'CX-60',
    'CX-70',
    'CX-80',
    'CX-90',
    'MX-5',
    'MX-30',
  ],
  McLaren: ['Artura', 'GT', '720S', '750S', 'GTS'],
  'Mercedes-Benz': [
    'A-Class',
    'B-Class',
    'C-Class',
    'CLA',
    'CLE',
    'E-Class',
    'EQA',
    'EQB',
    'EQC',
    'EQE',
    'EQS',
    'G-Class',
    'GLA',
    'GLB',
    'GLC',
    'GLE',
    'GLS',
    'S-Class',
    'SL',
    'V-Class',
  ],
  MG: ['3', '4', '5', 'Cyberster', 'HS', 'Marvel R', 'ZS', 'ZS EV'],
  Mini: ['Aceman', 'Clubman', 'Convertible', 'Cooper', 'Countryman', 'Paceman'],
  Mitsubishi: ['ASX', 'Colt', 'Eclipse Cross', 'L200', 'Outlander', 'Space Star'],
  Nissan: [
    'Ariya',
    'Juke',
    'Leaf',
    'Micra',
    'Navara',
    'Note',
    'Pathfinder',
    'Patrol',
    'Qashqai',
    'X-Trail',
    'Z',
  ],
  Opel: [
    'Astra',
    'Astra Electric',
    'Corsa',
    'Corsa Electric',
    'Crossland',
    'Grandland',
    'Insignia',
    'Mokka',
    'Mokka Electric',
    'Vivaro',
    'Zafira',
  ],
  Peugeot: [
    '2008',
    '208',
    '3008',
    '308',
    '408',
    '5008',
    '508',
    'e-208',
    'e-2008',
    'e-3008',
    'e-5008',
  ],
  Polestar: ['Polestar 2', 'Polestar 3', 'Polestar 4', 'Polestar 5'],
  Porsche: ['718 Boxster', '718 Cayman', '911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
  Ram: ['1500', '1500 Classic', '2500', '3500', 'ProMaster'],
  Renault: [
    'Arkana',
    'Austral',
    'Clio',
    'Espace',
    'Kadjar',
    'Kangoo',
    'Koleos',
    'Megane',
    'Megane E-Tech',
    'Rafale',
    'Scenic E-Tech',
    'Twingo',
    'Zoe',
  ],
  'Rolls-Royce': ['Cullinan', 'Ghost', 'Phantom', 'Spectre', 'Wraith'],
  SEAT: ['Arona', 'Ateca', 'Ibiza', 'Leon', 'Tarraco'],
  Skoda: ['Elroq', 'Enyaq', 'Fabia', 'Kamiq', 'Karoq', 'Kodiaq', 'Octavia', 'Scala', 'Superb'],
  Subaru: ['BRZ', 'Crosstrek', 'Forester', 'Impreza', 'Legacy', 'Outback', 'Solterra', 'WRX'],
  Suzuki: ['Baleno', 'Fronx', 'Ignis', 'Jimny', 'S-Cross', 'Swift', 'Vitara'],
  Tesla: ['Cybertruck', 'Model 3', 'Model S', 'Model X', 'Model Y', 'Roadster'],
  Toyota: [
    'Aygo X',
    'bZ4X',
    'C-HR',
    'Camry',
    'Corolla',
    'Crown',
    'GR86',
    'GR Yaris',
    'Hilux',
    'Land Cruiser',
    'Prius',
    'RAV4',
    'Supra',
    'Urban Cruiser',
    'Yaris',
    'Yaris Cross',
  ],
  Vauxhall: [
    'Astra',
    'Astra Electric',
    'Corsa',
    'Corsa Electric',
    'Crossland',
    'Grandland',
    'Mokka',
    'Mokka Electric',
    'Vivaro',
  ],
  Volkswagen: [
    'Amarok',
    'Arteon',
    'Caddy',
    'Golf',
    'Golf GTI',
    'Golf R',
    'ID.3',
    'ID.4',
    'ID.5',
    'ID.7',
    'Passat',
    'Polo',
    'T-Cross',
    'T-Roc',
    'Taigo',
    'Tiguan',
    'Touareg',
    'Touran',
  ],
  Volvo: [
    'C40',
    'EC40',
    'EM90',
    'EX30',
    'EX40',
    'EX90',
    'S60',
    'S90',
    'V60',
    'V90',
    'XC40',
    'XC60',
    'XC90',
  ],
  Xpeng: ['G3', 'G6', 'G9', 'P5', 'P7', 'X9'],
};

const BRAND_LIST = [...Object.keys(CAR_BRANDS_MODELS).sort(), 'Other'];

// ─── Dashboard camera lead-capture form ───────────────────────────────────────
function camxForm() {
  return {
    loading: false,
    submitted: false,
    error: false,
    errorMessage: '',

    siteLanguage: document.documentElement.lang || 'en',

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
      carBrand: '', // '' | brand name | 'Other'
      carModel: '', // '' | model name
      carYear: '',
      customBrand: '', // filled when carBrand === 'Other'
      customModel: '', // filled when carBrand === 'Other'
      cameraPlacement: 'Front', // default value
      consent: false,
      language: document.documentElement.lang || 'en',
    },

    touched: {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      carBrand: false,
      carModel: false,
      carYear: false,
      cameraPlacement: false,
      consent: false,
    },

    // ── Computed ─────────────────────────────────────────────────────────────

    get isOtherBrand() {
      return this.formData.carBrand === 'Other';
    },

    get filteredBrands() {
      const q = this.brandQuery.toLowerCase().trim();
      if (!q) return BRAND_LIST;
      const brands = Object.keys(CAR_BRANDS_MODELS).sort();
      const matched = brands.filter(b => b.toLowerCase().includes(q));
      // Always keep Other at the bottom regardless of query
      return [...matched, 'Other'];
    },

    get isOtherModel() {
      return !this.isOtherBrand && this.formData.carModel === 'Other';
    },

    get availableModels() {
      if (this.isOtherBrand || !this.formData.carBrand) return [];
      return [...(CAR_BRANDS_MODELS[this.formData.carBrand] || []), 'Other'];
    },

    get filteredModels() {
      const q = this.modelQuery.toLowerCase().trim();
      if (!q) return this.availableModels;
      const models = CAR_BRANDS_MODELS[this.formData.carBrand] || [];
      return [...models.filter(m => m.toLowerCase().includes(q)), 'Other'];
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
      this.formData.customModel = '';
      this.modelOpen = false;
      this.touch('carModel');
    },

    clearModel() {
      this.formData.carModel = '';
      this.formData.customModel = '';
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
          if (v.carBrand === 'Other' && !v.customBrand.trim()) return 'Please enter your car brand';
          return '';
        case 'carModel':
          if (v.carBrand === 'Other' || v.carModel === 'Other') {
            return v.customModel.trim() ? '' : 'Please enter your car model';
          }
          return v.carModel ? '' : 'Please select your car model';
        case 'carYear':
          return v.carYear ? '' : 'Please select the car year';
        case 'cameraPlacement':
          return v.cameraPlacement ? '' : 'Please select a camera placement option';
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
            this.formData.carBrand === 'Other' || this.formData.carModel === 'Other'
              ? this.formData.customModel.trim()
              : this.formData.carModel,
          carYear: this.formData.carYear,
          cameraPlacement: this.formData.cameraPlacement,
          consent: this.formData.consent ? 'Yes' : 'No',
          language: this.siteLanguage,
        };

        // Paste your Google Apps Script Web App URL here.
        // Get it from: Google Sheet → Extensions → Apps Script →
        // Deploy → New deployment → Web app (Execute as: Me, Access: Anyone)
        const scriptURL =
          'https://script.google.com/macros/s/AKfycbyQEB8vhHww9C9nIPbgL9HFX-vHwTyNLWOL7c3EPMF4FgTM_SpAVKemTenltDSnbxDzuw/exec';

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
        cameraPlacement: 'Front',
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
