export const programmes = [
  {
    slug: "script-to-screen",
    number: "01",
    name: "Script to Screen",
    eyebrow: "Film · New works · Local stories",
    copy: "Local stories, written, filmed, and premiered by local talent.",
    image: "/images/generated/programmes/script-to-screen.webp",
    tone: "amber",
    statement: "Lephalale stories deserve to live beyond memory.",
    body: "Script to Screen develops writers, actors, camera operators, directors, and editors through the complete journey from first idea to public premiere.",
    activities: ["Script development workshops", "Open local casting calls", "Production skills and mentorship", "Community screenings and festival submissions"],
  },
  {
    slug: "stage-and-theatre",
    number: "02",
    name: "Stage & Theatre",
    eyebrow: "Theatre · Musical theatre · Social change",
    copy: "Original performance that confronts social issues and celebrates culture.",
    image: "/images/generated/programmes/community-theatre.webp",
    tone: "clay",
    statement: "A stage can hold a mirror—and open a door.",
    body: "Community theatre brings local performers and audiences together around stories of identity, indigenous history, gender-based violence, substance abuse, and shared possibility.",
    activities: ["Original theatre productions", "Musical theatre and dance", "Industrial theatre", "Post-show community dialogue"],
  },
  {
    slug: "art-in-schools",
    number: "03",
    name: "Art in Schools",
    eyebrow: "Children · Education · Imagination",
    copy: "Weekly creative learning for children across Lephalale and surrounding villages.",
    image: "/images/generated/programmes/art-in-schools.webp",
    tone: "green",
    statement: "Creativity belongs in every classroom.",
    body: "Trained arts facilitators help children aged three to twelve explore movement, music, visual art, theatre, confidence, and collaboration.",
    activities: ["Weekly facilitated sessions", "Creative curriculum alignment", "Arts supplies and materials", "End-of-term school showcases"],
  },
  {
    slug: "creative-futures",
    number: "04",
    name: "Creative Futures",
    eyebrow: "Training · Enterprise · Opportunity",
    copy: "Training young artists in craft, production, entrepreneurship, and ownership.",
    image: "/images/generated/programmes/creative-futures.webp",
    tone: "violet",
    statement: "Talent needs craft. Careers need ownership.",
    body: "Creative Futures equips emerging artists with practical production, business, project management, fundraising, marketing, intellectual-property, and contract skills.",
    activities: ["Film and camera training", "Arts entrepreneurship", "Fundraising and grant writing", "Marketing, rights, and contracts"],
  },
] as const;

export type Programme = (typeof programmes)[number];

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}
