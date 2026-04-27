# Google Sheets Integration Setup

This guide will help you set up the Google Sheets integration for the cruise giveaway form.

## Step 1: Create Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1q6GWNkeYWxLbJMURxEHV9MvrjcBn8OJ3TwotrGfYRec/edit
2. Click on **Extensions** → **Apps Script**
3. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Check if headers exist, if not, create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Full Name',
        'Email',
        'Phone',
        'Year of Birth',
        'Cruise Experience',
        'Travel With',
        'Stopping Reason',
        'Must Haves',
        'Current Status',
        'Recommendation',
        'Consent',
      ]);
    }

    // Append the new row with form data
    sheet.appendRow([
      data.timestamp,
      data.fullName,
      data.email,
      data.phone,
      data.yearOfBirth,
      data.cruiseExperience,
      data.travelWith,
      data.stoppingReason,
      data.mustHaves,
      data.currentStatus,
      data.recommendation,
      data.consent,
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({
        result: 'success',
        row: sheet.getLastRow(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        result: 'error',
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('The web app is running!');
}
```

## Step 2: Deploy the Web App

1. Click on **Deploy** → **New deployment**
2. Click on the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: Cruise Giveaway Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. Review permissions and click **Authorize access**
6. Click **Done**
7. **Copy the Web App URL** - it should look like:
   `https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXX/exec`

## Step 3: Update Your Website

1. Open `/workspaces/giveaway-lp/assets/js/core.js`
2. Find the line with `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL`
3. Replace it with your actual Web App URL from Step 2

Example:

```javascript
const scriptURL = 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXX/exec';
```

## Step 4: Test the Integration

1. Build and deploy your Hugo site
2. Open the form in a browser
3. Fill out all required fields
4. Submit the form
5. Check your Google Sheet - a new row should appear with the submitted data

## Column Headers in Google Sheet

The form will create the following columns automatically:

1. **Timestamp** - When the form was submitted
2. **Full Name** - Participant's full name
3. **Email** - Email address
4. **Phone** - Phone number
5. **Year of Birth** - Birth year
6. **Cruise Experience** - Yes/No
7. **Travel With** - Partner/Friends/Family/Solo
8. **Stopping Reason** - What's preventing booking
9. **Must Haves** - Up to 2 selected features (comma-separated)
10. **Current Status** - Single/Couple/Family
11. **Recommendation** - Interest in recommendations (Yes/Maybe/No)
12. **Consent** - Agreement to receive offers (Yes/No)

## Troubleshooting

- **Form submits but no data appears**: Check that the Web App URL is correct and deployment is set to "Anyone"
- **Permission errors**: Make sure you authorized the script properly
- **CORS errors**: These are expected with `no-cors` mode and don't prevent submission
- **Multiple sheets**: The script writes to the active sheet. Make sure the correct sheet is active when deploying.

## Security Note

Since the form uses `no-cors` mode, there's no authentication on submissions. Consider adding:

- Rate limiting in the Apps Script
- CAPTCHA on the frontend
- Email verification
- Duplicate submission prevention based on email/phone
