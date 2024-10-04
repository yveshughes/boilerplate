import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/yourusername/your-repo',
  },
  docsRepositoryBase: 'https://github.com/yourusername/your-repo',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config