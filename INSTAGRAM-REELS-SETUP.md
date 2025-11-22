# How to Add Your Instagram Reels

## Step 1: Get Your Reel URLs

1. Go to your Instagram profile: https://www.instagram.com/Spotbarbershops
2. Click on one of your recent reels
3. Click the three dots (•••) in the top right
4. Select "Copy Link" or "Share" → "Copy Link"
5. You'll get a URL like: `https://www.instagram.com/reel/ABC123xyz/`

## Step 2: Update the HTML File

Open `index.html` and find these lines in the Gallery section:

```html
<!-- Reel 1 - Replace the URL with your actual Instagram reel link -->
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/YOUR_REEL_1_ID/" ...>

<!-- Reel 2 - Replace the URL with your actual Instagram reel link -->
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/YOUR_REEL_2_ID/" ...>
```

Replace `YOUR_REEL_1_ID` and `YOUR_REEL_2_ID` with your actual reel URLs.

## Example:

**Before:**
```html
data-instgrm-permalink="https://www.instagram.com/reel/YOUR_REEL_1_ID/"
```

**After:**
```html
data-instgrm-permalink="https://www.instagram.com/reel/C-abc123XYZ/"
```

## Step 3: Save and Refresh

1. Save the `index.html` file
2. Refresh your browser
3. The reels should appear automatically!

## Tips:

- Use your **2 most recent** or **best performing** reels
- The reels will auto-play when someone scrolls to them
- They're fully interactive - visitors can like, comment, and share
- Update the URLs whenever you want to showcase different reels

## What It Does:

✅ Shows your latest Instagram reels embedded on your website
✅ Visitors can watch without leaving your site
✅ Links directly to your Instagram profile
✅ Responsive design - works on mobile and desktop
✅ Professional integration with your brand colors
