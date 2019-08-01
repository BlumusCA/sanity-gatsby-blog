export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4310a44bd385ac0c04b32c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xbz6bs2a',
                  apiId: 'c430c66f-f123-490e-9f28-7c6ba75113c2'
                },
                {
                  buildHookId: '5d4310a402dc4602a4284d29',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-suay2bmb',
                  apiId: '6adc39cf-9bbc-4c98-b500-55bec269952d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BlumusCA/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-suay2bmb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
