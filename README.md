# No more hard-coding translation keys in your JS app!

Instead of typing `t("animal.bird.budgie")`, you can do `t(T_ANIMAL.bird.budgie)` which simplifies typing and promotes ease of refactoring.

### How does it work?

1. Enter the list of languages you wish to support in constants/languages.js
2. Create the schema as a collection of objects in constants/translations.js
   * You may also enter the non-translated values to be used for `DEFAULT_LANGUAGE` as specified in scripts/createTranslationFiles.js
3. Run `npm run i18n-build` to create the translation.json files
   * Values entered in the schema will be used in the `DEFAULT_LANGUAGE` translation.json file
   * For other languages, the values will be set to `null`, but you may set `KEEP_EXISTING_TRANSLATIONS = true` to keep existing translations you already have
5. Invoke `initializeTranslationKeys()` in your index.js script to begin using these object keys in your code
