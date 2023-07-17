import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'simple-fm',
      social: {
        discord: 'https://solstice.tf/discord',
        github: 'https://github.com/solelychloe/simple-fm',
        mastodon: 'https://solstice.tf/fediverse',
        twitter: 'https://solstice.tf/twitter'
      },
      customCss: ['@assets/landing.css', '@assets/custom.css'],
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Classes',
          autogenerate: { directory: 'classes', collapsed: true },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/solelychloe/simple-fm-docs/edit/master'
      },
      lastUpdated: true
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
