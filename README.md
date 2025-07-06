# AI Summary Chrome Extension

**A sleek Chrome extension to summarize web pages using the Gemini API.**

## Overview

This extension injects a content script to scrape article text from web pages, then sends it to the Gemini text-generation API to produce concise summaries. It features a modern UI built with CSS, and stores the user’s API key in Chrome's **`storage.sync`**.

## Key Takeaways

1. **User API Key Prompt**  
   On first install, the extension prompts the user to enter their own Gemini API key instead of using a built-in key.

2. **Chrome Storage Sync**  
   The API key is stored in `chrome.storage.sync` so it syncs across all Chrome sessions and devices.

3. **Web Scraping**  
   The `content.js` script scrapes the main article content (from `<article>` or `<p>` tags) for summarization.

## Installation

1. Clone or download this repository.
2. In Chrome, navigate to `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the extension folder.
5. On first install, enter your Gemini API key in the options page.

## Usage

- Click the extension icon to open the popup.
- Select a summary type (Brief, Detailed, Bullet Points).
- Click **Summarize** to generate a summary of the current page.
- Click **Copy** to copy the summary to your clipboard.

## File Structure

- `manifest.json` — Extension manifest (MV3).  
- `background.js` — Service worker to handle storage and options page prompt.  
- `content.js` — Web scraping logic to extract page text.  
- `options.html` / `options.css` / `options.js` — UI and logic for saving the API key.  
- `popup.html` / `popup.css` / `popup.js` — UI and logic for generating and displaying summaries.  

## Contributing

Feel free to open issues or submit pull requests for improvements!

## License

MIT License
