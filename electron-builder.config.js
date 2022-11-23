/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  publish: null,
  npmRebuild: false,
  files: ['dist/main/**/*', 'dist/render/**/*', 'dist/preload/**/*'],
  directories: { output: 'dist/electron', buildResources: 'src/resourses' },
  extraResources: [
    {
      to: 'database/db.sqlite3',
      from: 'src/database/db.sqlite3'
    }
  ]
}

module.exports = config
