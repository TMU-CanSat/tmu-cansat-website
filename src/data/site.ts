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
    title: 'More to Come',
    body: 'Our 2026 updates are coming soon. Stay tuned for the next chapter of TMU CanSat.',
  },
  {
    year: '2023-2025',
    title: 'The Comeback',
    body: "In 2023, TMU CanSat entered their comeback era, rebuilding the team from the ground up. With a renewed sense of determination, we're focused on bringing the trophy home. In 2024 we have won our third 'Most innovative Student Group' University Award.",
  },
  {
    year: '2017-2022',
    title: 'Building Our Foundation',
    body: "Between 2017 and 2022, TMU CanSat took a step back from competing to regroup and research focusing on strengthening their foundation for the future. Although we didn't compete, We still won various University Awards for the 'Most innovative Student Group'.",
  },
  {
    year: '2016',
    title: '6th Place',
    body: "TMU CanSat placed 6th, a huge leap forward for the team. After a year of learning from past mistakes, the team's hard work paid off, showing just how much they had grown and how serious they were about their projects. It was a proud moment that motivated them even more for the years ahead.",
  },
  {
    year: '2015',
    title: '16th Place',
    body: 'The TMU CanSat team faced tougher competition this year and finished in 16th place. While it was a challenging outcome, it served as a turning point, pushing the team to refine their strategies and aim higher for the future.',
  },
  {
    year: '2014',
    title: '4th Place',
    body: 'Building on the momentum, the team returned the following year and earned 4th place. The consistent performance reinforced our teams dedication and drive for success.',
  },
  {
    year: '2013',
    title: '3rd Place on Our Debut',
    body: 'The TMU CanSat team competed in the competition for the first time and proudly secured 3rd place. It was a milestone achievement that validated our hard work and set the stage for future successes.',
  },
  {
    year: '2012',
    title: 'Where It All Began',
    body: 'TMU CanSat was founded by a group of engineering students eager to design and build their first Pico-Satellite',
  },
] as { year: string; title?: string; body: string }[];
