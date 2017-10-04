/* eslint-disable no-console */
import webpack from 'webpack';
// import webpack config for production
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

// run Node.js in production mode for babel specifics
process.env.NODE_ENV = 'production';

console.log(chalk.cyan('Generating minified bundle for production. This will take a moment...'));

// invoke webpack compiler with run and attach response err,stats callback
webpack(webpackConfig).run((err, stats) => {
    if (err) { // on error return status 1 and stop
        console.log(chalk.red(err));
        return 1;
    }
    // Display stats to terminal
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        // map errors & warnings to console logs
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    // Build succeeded if we got here
    console.log(chalk.green('Your app has been built for production and written to /dist folder'));

    return 0;
});
