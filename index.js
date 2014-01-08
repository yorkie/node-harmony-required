
var useHarmony = process.execArgv.filter(function(item) {
	return /harmony/.test(item);
}).length;

if (useHarmony === 0) {
	console.error('harmony required');
