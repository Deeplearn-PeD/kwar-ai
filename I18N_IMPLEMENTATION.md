# i18n Implementation Guide

## Overview

Internationalization (i18n) has been successfully added to the Kwar-AI website with support for **Portuguese (Brazil)**, **English**, and **Spanish**.

## What Was Implemented

### 1. Dependencies Installed
- `i18next` - Core i18n framework
- `react-i18next` - React bindings for i18next
- `i18next-browser-languagedetector` - Automatic language detection

### 2. Project Structure
```
src/
├── i18n/
│   └── index.ts                    # i18n configuration
├── components/
│   ├── LanguageSwitcher.tsx       # Language selector component
│   └── Navbar.tsx                 # Updated with language switcher
├── sections/
│   ├── Hero.tsx                   # ✅ Translated
│   ├── About.tsx                  # ✅ Translated
│   ├── Products.tsx               # ✅ Translated
│   ├── HowItWorks.tsx             # ✅ Translated
│   ├── Contact.tsx                # ✅ Translated
│   └── Footer.tsx                 # ✅ Translated
└── main.tsx                       # Updated with i18n import

public/
└── locales/
    ├── pt-BR/
    │   └── translation.json       # Portuguese translations
    ├── en/
    │   └── translation.json       # English translations
    └── es/
        └── translation.json       # Spanish translations
```

### 3. Features

#### Language Detection
- **Automatic browser language detection**: Detects user's browser language preference
- **localStorage persistence**: Saves user's language choice for return visits
- **Fallback language**: Defaults to Portuguese (pt-BR) if detection fails

#### Language Switcher
- **Location**: Added to navbar (both desktop and mobile)
- **Design**: Globe icon with dropdown menu showing flags and language names
- **Languages available**:
  - 🇧🇷 Português (Portuguese - Brazil)
  - 🇺🇸 English
  - 🇪🇸 Español (Spanish)

### 4. Translation Coverage

All major sections have been translated:

#### ✅ Navbar
- Navigation links (Home, About, Products, How It Works, Contact)
- Contact button

#### ✅ Hero Section
- Badge text
- Main title and subtitle
- CTA buttons
- Floating cards text
- Scroll indicator

#### ✅ About Section
- Origin story (multiple paragraphs)
- Four pillars descriptions
- Mission statements for managers, doctors, and society
- Card content

#### ✅ Products Section
- Product descriptions
- EpidBot features and capabilities
- Training modalities (individual and institutional)
- Chat mockup content
- Stats labels

#### ✅ How It Works Section
- Process steps descriptions
- Target audience descriptions
- Stage labels

#### ✅ Contact Section
- Contact information
- Social media links
- Quote
- Form fields and placeholders
- Success message
- Privacy notice

#### ✅ Footer
- Company description
- Link categories (Products, Company, Resources, Legal)
- Copyright
- Slogan

## How to Use

### For Developers

#### Using Translations in Components
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('key.path.to.text')}</h1>;
}
```

#### Changing Language Programmatically
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // 'pt-BR', 'en', or 'es'
  };
}
```

#### Adding New Translations
1. Add the key to all three translation files:
   - `public/locales/pt-BR/translation.json`
   - `public/locales/en/translation.json`
   - `public/locales/es/translation.json`

2. Use the translation in your component:
   ```tsx
   {t('new.key.path')}
   ```

### For Content Editors

Translation files are located in:
- **Portuguese**: `public/locales/pt-BR/translation.json`
- **English**: `public/locales/en/translation.json`
- **Spanish**: `public/locales/es/translation.json`

#### JSON Structure
```json
{
  "section": {
    "subsection": {
      "key": "Translated text here"
    }
  }
}
```

#### Best Practices
1. **Keep keys organized**: Group related translations under logical sections
2. **Use descriptive keys**: `hero.title` is better than `t1` or `text1`
3. **Maintain consistency**: Same structure across all language files
4. **Escape special characters**: Use `\"` for quotes inside strings

## Configuration Details

### Language Detection Order
1. **localStorage**: Checks for saved preference (`i18nextLng` key)
2. **navigator**: Falls back to browser language setting

### Supported Languages
- `pt-BR` (Portuguese - Brazil) - Default/Fallback
- `en` (English)
- `es` (Spanish)

### Browser Support
- All modern browsers
- Automatic language detection
- Persistent language preference

## Testing

### Manual Testing
1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173 in your browser

3. Test language switching:
   - Click the globe icon in the navbar
   - Select different languages
   - Verify all text changes appropriately

4. Test persistence:
   - Change language
   - Refresh the page
   - Verify language choice is remembered

### Build Testing
```bash
npm run build
```

The build process compiles successfully with all translations included.

## Future Enhancements

### Potential Improvements
1. **Namespace organization**: Split translations into separate files per section
2. **Pluralization**: Add support for plural forms
3. **Date/Number formatting**: Integrate with i18next formatting
4. **Missing translation detection**: Add development warnings for missing keys
5. **SEO optimization**: Consider URL-based language routing (/en, /es, /pt-BR)
6. **Language-specific content**: Some content may need cultural adaptation beyond translation

### Adding More Languages
1. Create new translation file: `public/locales/{lang-code}/translation.json`
2. Add language to supported languages in `src/i18n/index.ts`:
   ```typescript
   supportedLngs: ['pt-BR', 'en', 'es', '{new-lang}'],
   ```
3. Add language option to `LanguageSwitcher.tsx`

## Troubleshooting

### Common Issues

**Translation not showing:**
- Check the translation key exists in all language files
- Verify the JSON syntax is valid
- Check browser console for errors

**Language not persisting:**
- Clear localStorage and try again
- Check browser localStorage permissions

**Build errors:**
- Run `npm run build` to identify TypeScript errors
- Check all translation keys are properly referenced

## Performance

- **Bundle size impact**: ~15KB (gzipped) for i18n libraries
- **Translation loading**: Synchronous loading from JSON files
- **Runtime performance**: Minimal overhead, translations are cached

## Maintenance

### Updating Translations
1. Edit the appropriate JSON file
2. Changes are reflected immediately in development
3. Run `npm run build` for production deployment

### Quality Assurance
- Review translations with native speakers
- Test all three languages regularly
- Check for text overflow in UI components
- Verify context and tone consistency

## Support

For issues or questions about the i18n implementation:
1. Check this documentation
2. Review the translation files for structure
3. Test with browser developer tools
4. Check the browser console for errors
