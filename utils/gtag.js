export const GA_TRACKING_ID = "UA-52399463-3";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  if (process.env.NODE_ENV === "production") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  console.log("fuck you");
  if (process.env.NODE_ENV === "production") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
