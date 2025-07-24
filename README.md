# Analytics Manager Candidate Test

This document is divided into two sections:

1.  **Part 1: Candidate Instructions:** This section should be provided to the candidate. It outlines the project, the scenario, and the tracking requirements without specifying *how* to implement them.
2.  **Part 2: Internal Evaluator Guide:** This section is for internal use only. It contains the expected implementation details and criteria for evaluating the candidate's work.

---

## Part 1: Candidate Instructions

### **Welcome to the GreenScape Solutions Technical Assessment**

This practical test is designed to allow you to showcase your skills in a real-world scenario using Google Tag Manager (GTM) and Google Analytics 4 (GA4).

### **Project Overview**

GreenScape Solutions is a modern Australian commercial landscaping business. The company has just launched a new marketing website. Your first task as the new Analytics Manager is to set up a robust analytics implementation from scratch.

### **The Scenario & Your Task**

You have been asked to set up GA4 for a new website. The URL for the test website is `{{YOUR_WEBSITE_URL}}` (this will be a temporary URL provided by the evaluator).

    The evaluator will be available on Slack/email (`{{EVALUATOR_CONTACT_INFO}}`) to provide tag implementation instructions and ask any questions.

1.  **Set Up Your Own Accounts:**
    *   Create a new Google Tag Manager (GTM) account and container.
    *   Create a new Google Analytics 4 (GA4) property.
    *   Link your new GA4 property to your GTM container.

2.  **GTM Container Installation:**
    *   Provide your GTM container ID to the evaluator. The evaluator will install the GTM snippet on the test website. You will be notified once it's live.
    *   The evaluator will be available on Slack/email (`{{EVALUATOR_CONTACT_INFO}}`) to provide tag implementation instructions and ask any questions.

3.  **Implement Tracking:**
    *   Using **only the Google Tag Manager interface**, implement the tracking requirements detailed below. You will not have access to modify the website's source code.

4.  **Share for Evaluation:**
    *   During the interview evaluation, you will be asked to provide view access to your GTM container and GA4 property to the hiring manager.

### **Tracking Requirements**



Your goal is to configure your GTM container to track the following key user interactions on the GreenScape Solutions website. The data should be sent to your GA4 property, following GA4's recommended event models where applicable.

**0. Basic GA4 Tracking**
*   **Goal:** Ensure fundamental GA4 data collection is active across the entire website.
*   **Requirements:** Implement the necessary GA4 Configuration Tag to enable standard features like page views, enhanced measurement, and user engagement tracking.

Your goal is to configure your GTM container to track the following key user interactions on the GreenScape Solutions website. The data should be sent to your GA4 property, following GA4's recommended event models where applicable.

**0. Basic GA4 Tracking**
*   **Goal:** Ensure fundamental GA4 data collection is active across the entire website.
*   **Requirements:** Implement the necessary GA4 Configuration Tag to enable standard features like page views, enhanced measurement, and user engagement tracking.

Your goal is to configure your GTM container to track the following key user interactions on the GreenScape Solutions website. The data should be sent to your GA4 property, following GA4's recommended event models where applicable.

**0. Basic GA4 Tracking**
*   **Goal:** Ensure fundamental GA4 data collection is active across the entire website.
*   **Requirements:** Implement the necessary GA4 Configuration Tag to enable standard features like page views, enhanced measurement, and user engagement tracking.

**1. Lead Generation - Phone Calls**
*   **Goal:** Track all clicks on clickable phone numbers to measure call intent.
*   **Locations:** Header and Contact Us page.

**2. Lead Generation - Brochure Download**
*   **Goal:** Track clicks on the "Download Our Brochure" button.
*   **Location:** Services page.


**3. Outbound Traffic Analysis**
*   **Goal:** Measure user engagement with the company's social media profiles.
*   **Location:** The social media links (LinkedIn, Instagram, Facebook) in the website footer.

**4. On-Site Search Analysis**
*   **Goal:** Understand what users are searching for on the `/search` page to gain insights into their interests and needs.

**5. Content Engagement - Video**
*   **Goal:** Track user interaction with the embedded YouTube video.
*   **Location:** About Us page.
*   **Requirements:** Track when a user starts the video, completes it, and reaches key progress milestones (e.g., 25%, 50%, 75%).

**6. Conversion Funnel - Contact Form**
*   **Goal:** Understand the user journey through the multi-step contact form and capture valuable lead data.
*   **Location:** Contact Us page.
*   **Requirements:**
    *   Track when the contact form becomes visible in the user's viewport.
    *   Track the progression through the different steps of the form.
    *   Track successful form submissions.
    *   When the form is submitted, capture the user's selected "Project Budget" and send it to GA4.
    *   **Bonus:** Be prepared to demonstrate how you would set up a funnel exploration report in GA4 to visualize the user's journey through this multi-step form, identifying where users drop off.

**7. Open-Ended Tracking (Optional but Recommended)**
*   **Goal:** Demonstrate any additional tracking you believe would provide valuable insights for GreenScape Solutions.
*   **Requirements:** Implement at least one additional tracking solution that you think would be beneficial for understanding user behavior or business performance on this website. Be prepared to explain your rationale during the interview.

### **Final Steps**

Use GTM's Preview Mode extensively to test and verify your implementation. Once you are confident in your setup, please notify the hiring manager.

Good luck!

---

## Part 2: Internal Evaluator Guide

**(For Internal Use Only)**

### **Evaluation Criteria**

The candidate should be evaluated on the following:
*   **Account Setup:** Did they successfully create and link their own GTM and GA4 accounts?
*   **Accuracy:** Did they successfully track all required interactions?
*   **Best Practices:** Did they use clear naming conventions? Did they use built-in GTM features where appropriate? Was the implementation efficient and scalable?
*   **Problem-Solving:** How did they approach challenges like the search query tracking and form identification?
*   **Data Quality:** Is the data sent to GA4 clean, well-structured, and aligned with GA4's recommended event models?

### **Website GTM Configuration**

The website is configured to dynamically load GTM containers based on the `gtm.config.json` file located in the `public` directory. To install the candidate's GTM container:

1.  Obtain the candidate's GTM Container ID (e.g., `GTM-ABCDEFG`).
2.  Edit the `public/gtm.config.json` file and add their GTM ID to the `gtmIds` array. For example:
    ```json
    {
      "gtmIds": [
        "GTM-XXXXXXX",
        "GTM-ABCDEFG" 
      ]
    }
    ```
3.  Save the file. The website will automatically load the new GTM container(s) on refresh.

### **Expected Implementation Details**

This section details the expected GTM setup. A strong candidate should have a configuration that looks very similar to this.

**0. Basic GA4 Tracking**
*   **Expected Solution:** A GA4 Configuration Tag firing on all pages (`All Pages` trigger).

**1. Phone Number Clicks**
*   **Trigger Type:** Click - Just Links
*   **Configuration:** `Click URL` starts with `tel:`
*   **Tag:** GA4 Event, `event_name: click`, with parameters for `link_url`, `link_text`, and a manually set `link_location`.

**2. PDF Brochure Download**
*   **Trigger Type:** Click - Just Links
*   **Configuration:** `Click URL` contains `.pdf` OR `Click ID` equals `download-brochure-btn`.
*   **Tag:** GA4 Event, `event_name: file_download` (GA4 recommended), with parameters for `file_name`, `file_extension`, and `link_text`.

**3. Outbound Social Media Clicks**
*   **Trigger Type:** Click - Just Links
*   **Configuration:** `Click URL` does not contain `[your website's hostname]` AND check the "Wait for Tags" and "Check Validation" boxes.
*   **Tag:** GA4 Event, `event_name: click`, with parameters `outbound: true`, `link_url`, and `link_domain`.

**4. On-Site Search Query Tracking**
*   **The Challenge:** This is a key test of problem-solving. The search input has no ID and the search is real-time. A weak candidate might try to fire on every keystroke. A strong candidate will identify a better user action.
*   **Expected Solution:**
    *   **Variable:** A `DOM Element` variable with a CSS selector like `input[placeholder='Search for a service...']` to capture the input's `value`.
    *   **Custom HTML Listener:** A Custom HTML tag that fires on the `/search` page. It should contain JavaScript to listen for the `blur` event on the search input and push a custom `search_submitted` event to the dataLayer when the input is not empty.
    *   **Trigger:** A `Custom Event` trigger for the `search_submitted` event.
    *   **Tag:** A GA4 Event, `event_name: search` (GA4 recommended), with the `search_term` parameter populated by the DOM Element variable.

**5. YouTube Video Tracking**
*   **Trigger Type:** YouTube Video
*   **Configuration:** Enable checkboxes for Start, Complete, and Progress (with percentages like 25%, 50%, 75%).
*   **Variables:** Enable all built-in Video variables.
*   **Tag:** A single GA4 Event tag. The `event_name` should be dynamic, using the `{{Video Status}}` variable (e.g., `video_start`). It should include parameters like `video_title`, `video_percent`, etc.

**6. Conversion Funnel - Contact Form**
*   **Part A: Form Visibility**
    *   **Trigger Type:** Element Visibility
    *   **Configuration:** Use a CSS selector for the form (e.g., `form.max-w-lg`). Set to fire "Once per page".
    *   **Tag:** GA4 Event, `event_name: view_form`.
*   **Part B: Form Step Progression**
    *   **The Challenge:** Tracking steps in a multi-step form without direct code access requires careful observation of DOM changes or user interactions.
    *   **Expected Solution (Option 1: Click-based):**
        *   **Trigger:** Click - All Elements. Configure to fire on clicks where `Click Text` equals "Next" AND `Page Path` equals `/contact`.
        *   **Tag:** GA4 Event, `event_name: form_step_next`. A Custom JavaScript variable could be used to infer the current step number based on the visible form elements or the `step` variable in the form's HTML (if accessible via DOM scraping).
    *   **Expected Solution (Option 2: Element Visibility-based):**
        *   **Trigger:** Element Visibility. Create separate triggers for distinct elements that become visible on each step (e.g., `input#company` for step 2, `textarea#message` for step 3). Set to fire "Once per element on page".
        *   **Tag:** GA4 Event, `event_name: form_step_view`, with a parameter `step_number` (e.g., 1, 2, 3) derived from the specific element that triggered the event.
*   **Part C: Form Submission & Data Capture**
    *   **Variable:** A `DOM Element` variable with a CSS selector for the budget dropdown (e.g., `select#budget`) to capture its `value`.
    *   **Trigger Type:** Form Submission
    *   **Configuration:** Use a CSS selector to identify the specific form (e.g., `form.max-w-lg`) to avoid capturing other form submissions on the site.
    *   **Tag:** GA4 Event, `event_name: generate_lead` (GA4 recommended), with parameters for `form_id` (e.g., `contact_us_form`) and `project_budget` (populated by the variable).

**7. Open-Ended Tracking (Optional but Recommended)**
*   **Goal:** Demonstrate any additional tracking you believe would provide valuable insights for GreenScape Solutions.
*   **Requirements:** Implement at least one additional tracking solution that you think would be beneficial for understanding user behavior or business performance on this website. Be prepared to explain your rationale during the interview.