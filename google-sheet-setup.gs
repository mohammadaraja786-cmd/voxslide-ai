/**
 * VoxSlide AI — Google Sheet form handler
 *
 * SETUP (one time, ~2 minutes):
 * 1. Open your sheet:
 *    https://docs.google.com/spreadsheets/d/1kHyHsEhiB7BGKjluj0oJGtacwjwo7NedBNJwxRwtRng/edit
 * 2. Extensions → Apps Script
 * 3. Delete any default code, paste ALL of this file, save (Ctrl+S)
 * 4. Deploy → New deployment → type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click Deploy, authorize when prompted, copy the Web app URL
 * 6. Paste that URL into index.html → CONFIG.SHEET_SCRIPT_URL
 */

function doPost(e) {
  var sheet = SpreadsheetApp.openById('1kHyHsEhiB7BGKjluj0oJGtacwjwo7NedBNJwxRwtRng').getSheetByName('Sheet1');
  var params = e.parameter;

  sheet.appendRow([
    params.fullName || '',
    params.email || '',
    params.whatsapp || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput('VoxSlide AI form endpoint is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
