const fs = require('fs');
const path = require('path');

const SourceMapComment = '//# sourceMappingURL=[filename].map'
const jsPath = './build/static/js';

const jsFiles = fs.readdirSync(jsPath)
  .filter(filename => filename.endsWith('.js'))

jsFiles.forEach(filename => {
  const fullPath = path.join(jsPath, filename);
  const comment = SourceMapComment.replace('[filename]', filename);
  console.log(comment)
  fs.appendFileSync(fullPath, comment);
})
