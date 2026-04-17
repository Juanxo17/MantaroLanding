const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        if (file === 'node_modules' || file === 'dist' || file === '.git') return;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(fullPath));
        } else if (fullPath.match(/\.(jsx|html|css)$/)) {
            results.push(fullPath);
        }
    });
    return results;
}

const files = walkDir(path.join(process.cwd(), 'src'));
files.push(path.join(process.cwd(), 'index.html'));

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content
      .replace(/â˜•/g, '☕')
      .replace(/ðŸ§Š/g, '🥤')
      .replace(/ðŸ•/g, '🍕')
      .replace(/ðŸ¥/g, '🥐')
      .replace(/ðŸ°/g, '🍰')
      .replace(/ðŸ·/g, '🍷')
      .replace(/âœ¨/g, '✨')
      .replace(/â€“/g, '–')
      .replace(/Â·/g, '·')
      .replace(/Hola%2C%20me%20gustar%C3%83%C2%ADa/g, 'Hola%2C%20me%20gustaría')
      .replace(/%C3%83%C2%B3/g, '%C3%B3')
      .replace(/%C3%83%C2%A1/g, '%C3%A1')
      .replace(/%C3%83%C2%A9/g, '%C3%A9')
      .replace(/%C3%83%C2%BA/g, '%C3%BA')
      .replace(/%C3%83%C2%B1/g, '%C3%B1')
      .replace(/Ã³/g, 'ó')
      .replace(/Ã¡/g, 'á')
      .replace(/Ã©/g, 'é')
      .replace(/Ã/g, 'í')
      .replace(/Ãº/g, 'ú')
      .replace(/Ã±/g, 'ñ');
      
    // Fix previously double replaced if any
    content = content.replace(/í³/g, 'ó').replace(/í¡/g, 'á').replace(/í©/g, 'é').replace(/íº/g, 'ú').replace(/í±/g, 'ñ');

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed', file);
    }
  }
});