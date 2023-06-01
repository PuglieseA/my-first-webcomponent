const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
  const files = [
    './dist/my-first-webcomponent/runtime.js',
    './dist/my-first-webcomponent/polyfills.js',
    // './dist/my-first-webcomponent/scripts.js', // add only if it gets created
    './dist/my-first-webcomponent/main.js'
  ];

  await fs.ensureDir('dist');
  await concat(files, 'dist/my-first-webcomponent/the-example.js');
}
build();
