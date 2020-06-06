export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5edbf86beb4b843cc67c70dd',
                  title: 'Sanity Studio',
                  name: 'kay-hall-portfolio-studio',
                  apiId: '26bf0869-7b79-4bcc-8795-a2571143e452'
                },
                {
                  buildHookId: '5edbf86b787452fb6c575164',
                  title: 'Blog Website',
                  name: 'kay-hall-portfolio',
                  apiId: '96b099ed-5615-4908-b433-1768c72333f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshuayoes/kay-hall-portfolio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://kay-hall-portfolio.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
