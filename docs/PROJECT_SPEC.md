# Nishuville — Project Specification

**Version:** 0.1  
**Status:** Planning  
**Project type:** Personal portfolio and interactive creative archive

## 1. Overview

Nishuville is a personal website combining software engineering, music and creative interests.

It serves as a professional portfolio and an interactive digital archive, designed to demonstrate frontend engineering skills while expressing an individual creative identity.

## 2. Objectives

- Showcase software engineering projects with clear technical explanations.
- Provide an engaging, responsive and accessible user experience.
- Develop an interactive music collection featuring album ratings and reviews.
- Demonstrate modern frontend development practices.
- Maintain a documented, incremental development history on GitHub.
- Deploy the completed website publicly.

## 3. Visual Direction

The visual identity combines:

- **Retro-futurism:** Modern motion, expressive interfaces and futuristic details.
- **Editorial design:** Strong typography, structured layouts and visual hierarchy.
- **Analogue inspiration:** Vinyl records, album sleeves and tactile visual elements.

### Colour palette

| Role | Colour |
|---|---|
| Primary | `#1DB954` |
| Accent | `#821DB9` |
| Supporting | `#4C8A62` |

Background, text, surface and border colours will be finalised during the design-system milestone.

### Design principles

- Expressive but readable
- Creative but usable
- Consistent across pages
- Responsive across devices
- Accessible keyboard and pointer interactions
- Motion that enhances rather than obstructs usability

## 4. Pages

### Home

A distinctive introduction to Nishuville featuring expressive typography, navigation, selected projects and links to other sections.

### Projects

A catalogue of software engineering projects.

Each project should support:

- Title and description
- Project image or visual preview
- Technology stack
- Links to source code or live demonstrations
- Technical challenges, decisions and outcomes

### Listening Room

An interactive collection of music albums.

Core requirements:

- Album artwork gallery
- Search by album or artist
- Genre filtering
- Default sorting by personal album rating, descending
- Album-specific ratings and written reviews
- Interactive vinyl-inspired visual effects
- Responsive presentation

Planned extensions:

- Individual track ratings
- Future listening list
- Additional sorting options

### About

Personal background, technical interests, creative interests and skills.

### Contact

Professional contact information and external profile links.

## 5. Technical Approach

### Initial development

- Semantic HTML
- CSS
- JavaScript
- Git and GitHub

### Progressive development

- React
- Component-based architecture
- Client-side routing
- Asynchronous data loading
- Automated testing
- Accessibility and performance evaluation

The initial application will use local structured data without requiring a custom backend.

## 6. Development Methodology

Development will follow incremental milestones.

Each milestone should include:

1. Defined requirements
2. Relevant technical concepts
3. Implementation
4. Verification and review
5. Meaningful Git commits
6. Documentation updates where necessary

Changes to architectural decisions and project scope will be documented as development progresses.

## 7. Quality Requirements

- Responsive functionality on mobile and desktop
- Keyboard-accessible interactive controls
- Appropriate semantic HTML
- Clearly labelled forms and controls
- Loading and error states where necessary
- Maintainable code organisation
- Automated tests for important behaviours
- Public deployment
- No known critical accessibility issues at release

## 8. Initial Milestones

1. Project planning and repository setup
2. HTML foundational additions
3. Visual design system
4. Responsive homepage
5. JavaScript interactions
6. Data and asynchronous JavaScript
7. React Introduction
8. Interactive Listening Room
9. Routing and remaining pages
10. Advanced UI and accessibility polish
11. Testing and quality assurance
12. Deployment and documentation

## 9. Out of Scope for Initial Release

- User accounts
- Public user-submitted reviews
- Custom backend administration
- Real-time collaboration
- E-commerce
- Complex server-side infrastructure

These features may be reconsidered if future requirements justify them.

