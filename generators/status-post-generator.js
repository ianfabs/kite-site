const fs = require('fs');
const {inputRequired} = require('./utils');

const authors = JSON.parse(fs.readFileSync('./data/author.json'));

module.exports = plop => {
  plop.setGenerator('status', {
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Status Report Number?',
        validate: inputRequired('title')
      },
      {
        type: 'list',
        name: 'author',
        message: 'The author of status post?',
        choices: authors.map(author => ({name: author.id, value: author.id}))
      },
      {
        type: 'input',
        name: 'tags',
        message: 'tags? (separate with coma)'
      },
      {
        type: 'confirm',
        name: 'draft',
        message: 'It\'s a draft?'
      }
    ],
    actions: data => {
      // Get current date
      data.createdDate = new Date().toISOString().split('T')[0];

      // Parse tags as yaml array
      if (data.tags) {
        data.tags = `\ntags:\n  - ${data.tags.split(',').join('\n  - ')}`;
      }

      data.title = "Status Report "+data.title;

      return [
        {
          type: 'add',
          path: '../data/blog/{{createdDate}}--{{dashCase title}}/index.md',
          templateFile: 'templates/status-post-md.template'
        }
      ];
    }
  });
};
