
const path =require('path');
module.exports = {
  content: [path.join(__dirname, 'views/**/*.ejs')],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [ require('preline/plugin')],
}
