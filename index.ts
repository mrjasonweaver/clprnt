// Read a file
import fs from 'node:fs';

fs.readFile('index.ts', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
});	
