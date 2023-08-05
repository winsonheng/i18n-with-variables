# No more hard-coding translation keys in your JS app!

### Auto Generation of translation.json files
* Create your JSON schema in one location and run an npm command to generate the translation files
* Ensures your JSON files are consistent and up to date
* You may keep any existing translations by setting `KEEP_EXISTING_TRANSLATIONS = true`

### Use variables to access translations rather than hard-coded keys
* Instead of typing `t("animal.bird.budgie")`, you can do `t(T_ANIMAL.bird.budgie)`
* Ensures that you will always reference the correct key
* Simplifies typing and makes refactoring a breeze!

### How does it work?

1. Enter the list of languages you wish to support in constants/languages.js
2. Create the schema as a collection of objects in constants/translations.js
   * You may also enter the non-translated values to be used for `DEFAULT_LANGUAGE` as specified in scripts/createTranslationFiles.js
3. Run `npm run i18n-build` to create the translation.json files
   * Values entered in the schema will be used in the `DEFAULT_LANGUAGE` translation.json file
   * For other languages, the values will be set to `null`, but you may set `KEEP_EXISTING_TRANSLATIONS = true` to keep existing translations you already have
5. Invoke `initializeTranslationKeys()` in your index.js script to begin using these object keys in your code
