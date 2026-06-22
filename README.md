# Styled Portfolio Website - Week 2 CSS Project

## Project Overview

The Styled Portfolio Website is a personal portfolio developed using HTML5 and CSS3. The project showcases personal information, technical skills, project details, and contact information. The main objective of this project is to learn CSS styling, responsive web design, and modern webpage layouts.

## Project Goals and Objectives

* Create a professional personal portfolio website.
* Apply CSS styling to improve visual appearance.
* Implement responsive design for mobile devices.
* Use Flexbox for layout management.
* Add hover effects and interactive elements.
* Learn external CSS implementation.

## Technologies Used

* HTML5
* CSS3
* Google Fonts (Poppins)

## Setup Instructions

### Step 1

Create a project folder named:

Portfolio-Website

### Step 2

Create the following files:

* index.html
* style.css
* README.md

### Step 3

Create folders:

* images
* screenshots

### Step 4

Add profile image inside the images folder.

### Step 5

Link CSS file to HTML:

<link rel="stylesheet" href="style.css">

### Step 6

Run the project using Live Server.

## CSS Concepts Used

### CSS Selectors

* Element Selector
* Class Selector
* ID Selector
* Pseudo-class Selector (:hover)

### CSS Properties

* color
* background-color
* font-family
* margin
* padding
* border-radius
* box-shadow
* width
* height

### Box Model

The project uses:

* Content
* Padding
* Border
* Margin

### CSS Variables

:root{
--primary:#3498db;
--secondary:#2c3e50;
--accent:#e74c3c;
}

### Flexbox Layout

Used in the Skills section to arrange skills in a responsive layout.

### Responsive Design

Media queries were implemented to make the website mobile-friendly.

@media(max-width:768px)

### Hover Effects

Implemented on:

* Navigation links
* Skill cards
* Buttons
* Profile image

## Design Decisions

### Color Scheme

* Blue (#3498db) for primary elements
* Dark Blue (#2c3e50) for header and footer
* Red (#e74c3c) for hover effects

### Typography

Google Font "Poppins" was used for a modern appearance.

### Layout Structure

* Header
* Navigation Menu
* About Section
* Skills Section
* Project Section
* Contact Form
* Footer

## Code Structure

Portfolio-Website/
│
├── index.html
├── style.css
├── README.md
│
├── images/
│   └── anusha.jpg
│
└── screenshots/
├── homepage.png
├── about.png
├── skills.png
├── project.png
├── contact.png
└── mobile-view.png

## Technical Details

### Architecture

The website follows a simple front-end architecture:

* HTML for structure
* CSS for styling
* Responsive design using media queries

### Data Structures

No complex data structures are used because this is a static website project.

### Algorithms

No algorithms are implemented. The project focuses on webpage design and styling.

## Testing Evidence

### Test Case 1

Verify navigation links work correctly.
Result: Passed

### Test Case 2

Verify hover effects appear on buttons and links.
Result: Passed

### Test Case 3

Verify website displays correctly on mobile screens.
Result: Passed

### Test Case 4

Verify contact form accepts user input.
Result: Passed

## Screenshots

Screenshots are included in the screenshots folder:

* Homepage
* About Section
* Skills Section
* Project Section
* Contact Section
* Mobile View

## Conclusion

This project helped me understand CSS styling, Flexbox layouts, responsive design, media queries, hover effects, and modern web development practices. The website is responsive, user-friendly, and visually appealing.
