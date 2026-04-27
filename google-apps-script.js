/**
 * Google Apps Script – Dashboard Camera Lead Capture Form Handler
 *
 * HOW TO DEPLOY
 * ─────────────
 * 1. Create a new Google Sheet (or open an existing one).
 * 2. Click  Extensions → Apps Script
 * 3. Delete everything in the editor and paste this entire file.
 * 4. Click the 💾 Save icon (name it anything, e.g. "CamX Form Handler").
 * 5. Click  Deploy → New deployment
 * 6. Click the ⚙️ gear next to "Select type" → choose  Web app
 * 7. Set:
 *      Description : CamX Lead Capture
 *      Execute as  : Me
 *      Who has access : Anyone   ← this is required!
 * 8. Click  Deploy → Authorize access → allow permissions
 * 9. Copy the  Web app URL  (looks like https://script.google.com/macros/s/XXX/exec)
 * 10. Paste that URL into  assets/js/core.js  replacing  YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL
 * 11. Run  make build  and deploy your site.
 *
 * NOTE: Every time you edit this script you must create a New deployment
 * (not "Manage deployments" → edit) otherwise the live URL keeps running
 * the old version.
 */

var SHEET_NAME = 'Leads'; // Your sheet tab name

var HEADERS = [
  'Timestamp',
  'First Name',
  'Last Name',
  'Email',
  'Phone',
  'Car Brand',
  'Car Model',
  'Car Year',
  'Camera Placement',
  'Consent',
  'Language',
];

// ─── Main POST handler ────────────────────────────────────────────────────────
function doPost(e) {
  try {
    var sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) ||
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet
        .getRange(1, 1, 1, HEADERS.length)
        .setFontWeight('bold')
        .setBackground('#0f172a')
        .setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // Parse body – sent as text/plain containing JSON
    var raw = e.postData ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    sheet.appendRow([
      new Date(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.carBrand || '',
      data.carModel || '',
      data.carYear || '',
      data.cameraPlacement || '',
      data.consent || '',
      data.language || 'en',
    ]);

    sheet.autoResizeColumns(1, HEADERS.length);

    return _json({ result: 'success', row: sheet.getLastRow() });
  } catch (err) {
    Logger.log(err);
    return _json({ result: 'error', message: err.toString() });
  }
}

// ─── GET handler – quick health check ────────────────────────────────────────
function doGet() {
  return ContentService.createTextOutput('✓ CamX lead capture form handler is running.');
}

// ─── Helper ──────────────────────────────────────────────────────────────────
function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
