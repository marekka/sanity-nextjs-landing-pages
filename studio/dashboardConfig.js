export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5dd7d6da9cd1c646050878c3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-agz5hzov',
                  apiId: '737b7649-b920-42b4-9978-71aa40b88569'
                },
                {
                  buildHookId: '5dd7d6dbab09d64d52e3491b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ui6mbyu2',
                  apiId: 'b94bcada-6f1e-4ff6-9fa8-ee2b4a2c5512'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marekka/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ui6mbyu2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
