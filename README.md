# No more hard-coding translation keys in your JS app!

### Auto generation of translation.json files
* Ability to create and modify your JSON schema in a single location and generate the JSON files via a single command
* Ensures your JSON files are consistent and up to date
* You may keep any existing translations by setting `KEEP_EXISTING_TRANSLATIONS = true`

### Error-free key mapping
* Use variables to access translations rather than hard-coded keys _(e.g. instead of `t("animal.bird.budgie")`, you'll do `t(T_ANIMAL.bird.budgie)`)_
* Ensures that you will always reference the correct key
* Simplifies typing and makes refactoring a breeze!

### Support new languages in just 3 lines of code
* Add the following to constants/languages.js:
```
newLanguage: {
  nativeName: "Name"
}
```
* Then run `npm run i18n-build`

### How does it work?

1. Enter the list of languages you wish to support in constants/languages.js
2. Create the schema as a collection of objects in constants/translations.js
   * You may also enter the non-translated values to be used for `DEFAULT_LANGUAGE` as specified in scripts/createTranslationFiles.js
3. Run `npm run i18n-build` to create the translation.json files
   * Values entered in the schema will be used in the `DEFAULT_LANGUAGE` translation.json file
   * For other languages, the values will be set to `null`, but you may set `KEEP_EXISTING_TRANSLATIONS = true` to keep existing translations you already have
5. Invoke `initializeTranslationKeys()` in your index.js script to begin using these object keys in your code
