import path from 'path'

export default {
  filename: 'manifest.json',
  short_name: 'React SSR',
  name: 'React SSR Example',
  description: 'A React SSR example.',
  theme_color: 'maroon',
  background_color: '#575757',
  display: 'standalone',
  keywords: [
    'react',
    'ssr',
    'webpack',
  ],
  icons: [
    {
      src: path.resolve('src/assets/substitute.png'),
      sizes: [ 96, 128, 192, 256, 384, 512 ],
    },
  ],
}
