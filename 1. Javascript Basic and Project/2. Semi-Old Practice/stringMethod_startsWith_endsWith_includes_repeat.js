
const text = 'I love my country Bangladesh!';

console.log('startsWith Test ' + text.startsWith('I'));
console.log('startsWith Test ' + text.startsWith('love'));

console.log('endsWith Test ' + text.endsWith('!'));
console.log('endsWith Test ' + text.endsWith('Bangladesh!'));
console.log('endsWith Test ' + text.endsWith('country'));

console.log('includes test ' + text.includes('m'));
console.log('includes test ' + text.includes('y'));
console.log('includes test ' + text.includes('my'));
console.log('includes test ' + text.includes('hidden'));

console.log('repeat test : ' + text.repeat(3));
console.log('repeat test : ' + ` I love my country ${'Bangladesh '.repeat(5)}`);


