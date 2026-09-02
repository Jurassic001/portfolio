import type { PrivacyPolicy } from "../types/privacy";
import resumeData from "./resume";

const { name, email, website } = resumeData.basics;

/**
 * Content for the /privacy page. Keep this in sync with what the site
 * actually does — if analytics, forms, or embeds are ever added, the
 * matching section here has to change too.
 */
const privacyPolicy: PrivacyPolicy = {
  title: "Privacy Policy",
  effectiveDate: "August 31, 2026",

  intro: [
    `This site (${website}) is my personal portfolio. It is a static website with no accounts, no sign-ups, no forms, and no advertising.`,
    `I do not collect, store, sell, or share personal information about visitors. The sections below explain the small amount of data that is unavoidably involved in serving a website, and what your browser stores on your own device.`,
  ],

  sections: [
    {
      id: "what-i-collect",
      title: "Information I Collect",
      body: [
        "None, directly. There is no contact form, no newsletter, no comments, no login, and no analytics or tracking scripts of any kind on this site.",
        "I do not set cookies, and nothing on this site builds a profile of you or follows you across other websites.",
      ],
    },
    {
      id: "local-storage",
      title: "Data Stored in Your Browser",
      body: [
        "Nothing. This site does not write to local storage, session storage, cookies, or any other browser storage.",
      ],
      bullets: [
        "There are no saved preferences, no identifiers, and nothing to clear.",
        "Your browser may cache static files (images, styles, scripts) as it does for any website; that cache is managed entirely by your browser and is never sent to me.",
      ],
    },
    {
      id: "hosting",
      title: "Hosting and Server Logs",
      body: [
        "This site is hosted on Cloudflare Workers. Like any web host, Cloudflare processes the requests needed to deliver pages to you and may log technical details such as IP address, browser user agent, requested URL, and timestamp for security, abuse prevention, and reliability purposes.",
        "That data is handled by Cloudflare under its own privacy policy. I do not have an analytics dashboard, do not review these logs to identify visitors, and do not combine them with anything else.",
      ],
      links: [
        {
          label: "Cloudflare Privacy Policy",
          url: "https://www.cloudflare.com/privacypolicy/",
        },
      ],
    },
    {
      id: "third-parties",
      title: "Third-Party Services",
      body: [
        "The site loads the Inter typeface from Google Fonts. When your browser requests those font files, Google receives your IP address and standard request headers. This is the only third-party resource the site loads.",
        "Pages also link out to profiles and projects on sites such as GitHub and LinkedIn. Following those links takes you to services I do not operate, each governed by its own privacy policy.",
      ],
      links: [
        {
          label: "Google Privacy Policy",
          url: "https://policies.google.com/privacy",
        },
      ],
    },
    {
      id: "contact",
      title: "If You Email Me",
      body: [
        `The contact section links to my email address (${email}) using a standard mailto link — it opens your own mail client and sends nothing until you do.`,
        "If you choose to write to me, I receive your message and whatever you include in it through my email provider. I use it only to reply and keep correspondence the way anyone keeps their inbox. I do not add senders to any mailing list.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Choices and Rights",
      body: [
        "Because I hold no visitor database, there is generally nothing for me to look up, export, correct, or delete on request. If you have emailed me and would like that correspondence deleted, ask and I will remove it.",
        "Depending on where you live, you may have rights under laws such as the GDPR or CCPA. You are welcome to contact me with any question about this policy or about data handled on this site.",
      ],
    },
    {
      id: "children",
      title: "Children's Privacy",
      body: [
        "This site is not directed at children under 13, and I do not knowingly collect information from anyone.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      body: [
        "If the site changes in a way that affects this policy — for example, if analytics or a contact form are ever added — I will update this page and revise the effective date above.",
      ],
    },
    {
      id: "questions",
      title: "Questions",
      body: [
        `Reach me at ${email}. This policy is published by ${name}.`,
      ],
    },
  ],
};

export default privacyPolicy;
