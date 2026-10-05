export const email = 'cansat@torontomu.ca';

export const socials = [
  { name: 'Email', href: `mailto:${email}`, icon: 'mail' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/torontomet-cansat', icon: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com/TMU-CanSat', icon: 'github' },
  { name: 'Instagram', href: 'https://www.instagram.com/tmu_cansat', icon: 'instagram' },
  { name: 'Discord', href: 'https://discord.gg/YU68jq2JMx', icon: 'discord' },
] as const;

export const teams = [
  { name: 'Mechanical Team', slug: 'mechanical' },
  { name: 'Electrical Team', slug: 'electrical' },
  { name: 'Software Team', slug: 'software' },
  { name: 'Integration Team', slug: 'integration' },
  { name: 'Media and Operations Team', slug: 'media-operations' },
];

export const nav = [
  {
    label: 'About Us',
    href: '/#about',
    children: teams.map((t) => ({ label: t.name, href: `/teams#${t.slug}` })),
  },
  { label: 'Awards', href: '/#awards' },
  { label: 'Sponsors', href: '/sponsorships' },
  { label: 'Contact Us', href: '/#contact' },
];

export const timeline = [
  {
    year: '2026',
    title: '1st Place in Canada',
    body: 'TMU CanSat placed first among Canadian teams and received the Advancement Award at TMU’s 2026 Night of Recognition, celebrating the team’s growth as a student group.',
  },
  {
    year: '2024-2025',
    title: 'Back-to-Back Innovation Awards',
    body: 'Two consecutive Innovation Awards recognized our work within TMU’s design team community.',
  },
  {
    year: '2020-2022',
    title: 'Building Our Foundation',
    body: 'The COVID-19 pandemic paused competition, giving the team time to reorganize, strengthen its foundation, and prepare for a return.',
  },
  {
    year: '2019',
    title: '2nd Place',
    body: 'The team followed its 2018 victory with a second-place finish at the CanSat competition.',
  },
  {
    year: '2018',
    title: '1st Place',
    body: 'More than a decade after our founding, TMU CanSat earned another first-place finish at the CanSat competition.',
  },
  {
    year: '2016',
    title: '6th Place',
    body: 'Learning from earlier challenges, the team returned to competition and secured sixth place.',
  },
  {
    year: '2014',
    title: '4th Place',
    body: 'A fourth-place finish continued the team’s strong performance at the CanSat competition.',
  },
  {
    year: '2013',
    title: '3rd Place in Abilene',
    body: 'The team earned third place at the CanSat competition in Abilene, Texas.',
  },
  {
    year: '2006',
    title: 'A First-Place Beginning',
    body: 'TMU CanSat was founded and won first place in its debut competition, beginning our journey in satellite development.',
  },
] as { year: string; title?: string; body: string }[];
