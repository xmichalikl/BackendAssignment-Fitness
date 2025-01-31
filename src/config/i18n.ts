import i18n from 'i18n';
import path from 'path';

i18n.configure({
  locales: ['en', 'sk'],
  defaultLocale: 'en',
  directory: path.join(__dirname, '../locales'),
  header: 'language',
  objectNotation: true,
  updateFiles: false,
});

export { i18n };
