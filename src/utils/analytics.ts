/**
 * Google Analytics Utility Functions
 * Helper functions for tracking custom events and page views
 */

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - Name of the event
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track a page view in Google Analytics
 * @param url - URL of the page
 * @param title - Title of the page
 */
export const trackPageView = (url: string, title?: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-GZ9KYJ71FD', {
      page_path: url,
      page_title: title
    });
  }
};

/**
 * Track button clicks
 * @param buttonName - Name/label of the button
 * @param location - Where the button is located
 */
export const trackButtonClick = (buttonName: string, location: string): void => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location
  });
};

/**
 * Track project views
 * @param projectName - Name of the project
 */
export const trackProjectView = (projectName: string): void => {
  trackEvent('project_view', {
    project_name: projectName
  });
};

/**
 * Track external link clicks
 * @param url - URL of the external link
 * @param linkText - Text of the link
 */
export const trackExternalLink = (url: string, linkText: string): void => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText
  });
};

/**
 * Track social media clicks
 * @param platform - Social media platform (twitter, linkedin, github, etc.)
 */
export const trackSocialClick = (platform: string): void => {
  trackEvent('social_click', {
    platform: platform
  });
};

/**
 * Track resume/CV downloads
 */
export const trackResumeDownload = (): void => {
  trackEvent('resume_download', {
    file_type: 'pdf'
  });
};

/**
 * Track contact form submissions
 */
export const trackContactSubmit = (): void => {
  trackEvent('contact_submit', {
    form_type: 'contact'
  });
};

/**
 * Track search queries
 * @param query - Search query string
 */
export const trackSearch = (query: string): void => {
  trackEvent('search', {
    search_term: query
  });
};
