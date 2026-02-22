# Add your photos here

Place your camp photos in this folder. The website will use them as follows:

## Gallery section
- Put your photos in this `public/images/` folder.
- In **src/App.jsx**, find the `galleryImages` array and set it to your filenames, for example:
  - `['gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', ...]`
  - or use your own names: `['IMG_001.jpg', 'art-class.png', ...]`
- You can use `.jpg`, `.jpeg`, `.png`, or `.webp`. Add as many as you like.

## Testimonials section
- Name your testimonial photos: **testimonial-1.jpg**, **testimonial-2.jpg**, **testimonial-3.jpg** (one per testimonial card).
- To use different filenames, edit the `image` property of each item in the `testimonials` array in **src/App.jsx**.

## Hero section (optional)
- Add **hero.jpg** (or hero.png) for a large hero image (e.g. kids painting in natural light).
- To use a different filename, change `heroImage` in **src/App.jsx**.
- If the file is missing, the hero keeps the soft gradient background.

After adding files, refresh the website to see them.
