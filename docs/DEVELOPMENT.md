# Nishuville Development Log

This document tracks the development of Nishuville, including completed features, architectural decisions, technical challenges and future work.

## Milestone 01: Planning & Git Setup

**Status:** Complete

### Completed
- Established the purpose of Nishuville as a personal portfolio and creative archive.
- Planned six pages: Home, Projects, Listening Room, Blog, About and Contact.
- Created the GitHub repository.
- Defined the retro-futuristic design direction and initial development milestones.

### Key decisions
- Build the initial website using HTML, CSS and JavaScript before introducing React.
- Use incremental Git commits to track development.
- Keep the project suitable for showcasing frontend engineering skills.

---

## Milestone 02: HTML & Page Structure

**Status:** Complete

### Completed
- Created the initial multipage HTML structure.
- Added site navigation and homepage content sections.
- Used semantic HTML elements for the main page structure.
- Established the initial project and album card markup.

---

## Milestone 03: CSS & Responsive Design

**Status:** Complete

### Completed
- Established the site's typography, spacing and colour system.
- Designed the header, hero, cards and footer.
- Built responsive layouts for different screen sizes.
- Added interactive styling for links and album artwork.

### Key decisions
- Use charcoal as the primary background, with green and purple accents.
- Maintain consistent visual styling across the website.

---

## Milestone 04: Homepage Visual Completion

**Status:** Complete

### Completed
- Refined the homepage hero and navigation.
- Added featured project previews.
- Created the On Rotation album section.
- Refined responsive layouts and visual details.
- Committed and pushed the completed homepage.

---

## Milestone 05: JavaScript

**Status:** Complete

### Completed
- Learned DOM selection, manipulation and event handling.
- Implemented dynamic project and album rendering.
- Added featured-project filtering.
- Sorted albums by calculated rating and displayed the highest-ranked five.
- Developed synthesised interface sounds using the Web Audio API.
- Implemented persistent sound preferences using localStorage.
- Created an album rating calculator using 60% track-average and 40% holistic weighting.
- Wrote initial JavaScript tests using console.assert().
- Tested dynamic rendering, sound behaviour, keyboard navigation and responsive layouts.

### Architectural decisions
- Separated code into data.js, ratings.js, home.js and sound.js.
- Stored individual song ratings and holistic album ratings rather than hardcoding final scores.
- Used reusable calculation functions to generate album scores.
- Kept tests.js in the repository without loading it on the production-facing homepage.

### Challenges and solutions
- **Dynamic sound listeners:** Ensured dynamically created project links existed before attaching their sound listeners.
- **Floating-point comparisons:** Introduced an approximate-equality helper for decimal rating tests.
- **Keyboard focus order:** Moved the sound toggle after the footer in the HTML document.
- **Footer overlap:** Adjusted footer spacing to prevent text from being obscured by the floating sound toggle.

---

## Milestone 06: APIs & Asynchronous JavaScript

**Status:** In progress

### Objectives
- Learn Promises, asynchronous functions, fetch() and JSON.
- Evaluate music metadata APIs.
- Retrieve album metadata and tracklists automatically.
- Integrate external music data with personal ratings.
- Handle network errors, loading states and missing information.

### Completed
- [ ] Project README and development log
- [ ] 06A: Asynchronous JavaScript fundamentals
- [ ] 06B: Music API selection
- [ ] 06C: Album metadata fetcher
- [ ] 06D: Tracklists and artwork
- [ ] 06E: Rating-data integration
- [ ] 06F: Loading, errors and caching
- [ ] 06G: Refactoring and testing

---

## Milestones 07–10

**07:** React and component architecture

**08:** Complete pages, Listening Room and private CMS

**09:** Testing, accessibility and performance

**10:** Deployment and portfolio launch

---

## Development Log Template

Use this structure for future milestones:

### Milestone XX: Name

**Status:** Not started / In progress / Complete

#### Completed
- Feature or task completed

#### Architectural decisions
- Decision and reasoning

#### Challenges and solutions
- Problem encountered
- How it was resolved

#### Testing
- What was verified

#### Next steps
- Remaining tasks