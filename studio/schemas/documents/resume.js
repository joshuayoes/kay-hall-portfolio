export default {
  name: 'resume',
  type: 'document',
  title: 'Resume',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'file',
      type: 'file',
      title: 'File',
      options: {
        accept: '.pdf,.doc,.docx'
      }
    },
    {
      name: 'ctaLabel',
      type: 'string',
      title: 'CTA Label'
    }
  ]
}
