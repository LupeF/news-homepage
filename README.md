# Frontend Mentor - News homepage solution

A responsive news homepage built for the [Frontend Mentor news homepage challenge](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl), with a featured article, a news sidebar, article cards, and a mobile navigation menu.

## Technologies used

- HTML5 for page structure and responsive images.
- CSS and Sass (SCSS) for styling, nested rules, and responsive media queries.
- CSS Grid for desktop columns and Flexbox for navigation and article cards.
- CSS custom properties to share image sizing across the layout.
- Vanilla JavaScript for opening and closing the mobile menu.
- Inter typography and the supplied Frontend Mentor assets.

## Layout improvements

We compared the desktop layout with the supplied design and added a centered page container with a maximum width of 1440px for larger screens. A shared three-column grid with 30px gaps keeps the featured article, sidebar, and lower cards aligned.

The featured article description and Read More link were then adjusted to line up with the text in the second lower card, accounting for its image width. Desktop line heights were increased to 1.1 for the main heading and 1.7 for the description to give the text more breathing room.

## What I learned

I practiced using `repeat(3, minmax(0, 1fr))` to create equal columns that can shrink, setting a maximum page width instead of stretching content across the entire screen, and using shared sizing values to align separate sections. Unitless line heights help text spacing scale with the font size.

## AI collaboration

I used Codex to compare the reference design with my styles, refine desktop spacing and alignment.
