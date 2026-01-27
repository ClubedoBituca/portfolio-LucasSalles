// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Dynamic import to avoid bundle bloat
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS((metric) => {
      console.log('CLS:', metric);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000)
        });
      }
    });

    getFID((metric) => {
      console.log('FID:', metric);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FID',
          value: Math.round(metric.value)
        });
      }
    });

    getFCP((metric) => {
      console.log('FCP:', metric);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(metric.value)
        });
      }
    });

    getLCP((metric) => {
      console.log('LCP:', metric);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(metric.value)
        });
      }
    });

    getTTFB((metric) => {
      console.log('TTFB:', metric);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'TTFB',
          value: Math.round(metric.value)
        });
      }
    });
  }).catch(console.error);
};

// Custom event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
  console.log('Event tracked:', eventName, parameters);
};

// Project interaction tracking
export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', {
    project_name: projectName,
    engagement_time_msec: Date.now()
  });
};

export const trackContactForm = (action: 'submit' | 'success' | 'error') => {
  trackEvent('contact_form', {
    form_action: action,
    timestamp: Date.now()
  });
};

export const trackSkillsInteraction = () => {
  trackEvent('skills_sphere_interaction', {
    section: 'skills',
    timestamp: Date.now()
  });
};