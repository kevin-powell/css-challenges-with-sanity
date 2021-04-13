export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6075e495dfa0850d2a6c3dd0',
                  title: 'Sanity Studio',
                  name: 'css-challenges-with-sanity-studio',
                  apiId: '7b1eae1a-11d5-4f2f-8eb1-0b03f0554b78'
                },
                {
                  buildHookId: '6075e49581b2f60c6127419c',
                  title: 'Blog Website',
                  name: 'css-challenges-with-sanity',
                  apiId: '0a19f9b8-2dd1-4ace-9de1-68e955e20a40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kevin-powell/css-challenges-with-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://css-challenges-with-sanity.netlify.app', category: 'apps'}
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
