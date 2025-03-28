# web shop

Developed by Adam, Isaac, Samuel, Andreas and Arvid at Nackademin 2025.

This is a project for the course in Frontend by Mahmud Al Hakim.


# Styling

**https://www.figma.com/design/nnGYN2M0HsJOLLWdLhsE3r/nackademin-ecommerce**


   # Project Requirements Specification

   ## Project Overview
   This is a web application project for a frontend course, to be completed in groups of 3-5 participants.

   ## Project Requirements

   ### API and Products
   - Use [Fake Store API](https://fakestoreapi.com/) to display products
   - **Note:** Shopping cart implementation is reserved for advanced grading

   ### Technical Specifications
   - Create a responsive CSS layout
   - Allowed to use libraries/frameworks (e.g., Bootstrap)
   - Implement an order form with client-side validation

   ## Order Form Requirements

   ### Form Fields
   The order form must collect the following information:
   - Name
   - Phone number
   - Email address
   - Delivery address

   ### Validation Rules
   All form fields must be validated using JavaScript:

   #### Name
   - Minimum length: 2 characters
   - Maximum length: 50 characters

   #### Email
   - Must contain `@` symbol
   - Maximum length: 50 characters

   #### Phone Number
   - Allowed characters: digits, hyphens, parentheses
   - Maximum length: 50 characters

   #### Delivery Address
   - Street Address:
     - Minimum length: 2 characters
     - Maximum length: 50 characters
   - Postal Code:
     - Exactly 5 digits
   - City:
     - Minimum length: 2 characters
     - Maximum length: 50 characters

   ## Deployment
   - Deploy the web application using a hosting service
   - Recommended: GitHub Pages
