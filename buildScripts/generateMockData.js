/* eslint-disable no-console */

// Generate JSON data from schema
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
// library to read/write from file system
import fs from 'fs';
// library to color console output
import chalk from 'chalk';

// Generate randomized JSON Object from JSON Schema jsf(schema)
const json = JSON.stringify(jsf(schema));

// generate JSON output write file
fs.writeFile("./src/api/db.json", json, (err) => {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.green("Mock API JSON data generated"));
    }
});
