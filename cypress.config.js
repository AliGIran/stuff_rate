const {defineConfig} = require('cypress');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
    e2e: {

        chromeWebSecurity: false,
        experimentalOriginDependencies: false,
        async setupNodeEvents(on, config) {

            // ✅ اضافه کردن cucumber preprocessor
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);

            return config;
        },
        defaultCommandTimeout: 40000,
        execTimeout: 60000,
        taskTimeout: 6000,
        pageLoadTimeout: 90000,
        requestTimeout: 60000,
        responseTimeout: 60000,
        video: true,
        screenshotOnRunFailure: true,
        trashAssetsBeforeRuns: false,
        browser: "chrome",
        specPattern: 'cypress/e2e/features/*.feature',
        reporter: 'mochawesome',
        reporterOptions: {
            reportDir: 'cypress/reports',
            html: true,
            json: true,
            embeddedScreenshots: true,
            inlineAssets: true,
            overwrite: false,
            reportPageTitle: 'گزارش تست‌ها',
            charts: true
        }
    },
});
