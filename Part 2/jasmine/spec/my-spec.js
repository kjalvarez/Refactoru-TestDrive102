// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });
var testArray = [{name: "Karin"}, {name: "Joe"}, {name: "Dre"}]
console.log(testArray);
console.log(join(testArray, 'or'))

describe("Join", function() {
	it("should join strings in an array with a delimeter", function() {
		expect(join(['one', 'two', 'three'], 'and')).toEqual('oneandtwoandthreeand')
	});

	it("should join items in one array without a delimeter", function() {
		expect(join(['one','two', 'three'], '')).toEqual('onetwothree')
	});

	it("should just include the delimeter", function() {
		expect(join([], 'and')).toEqual('')
	});

	it("should join objects in an array with a delimeter", function() {
		expect(join(testArray, 'or')).toEqual('[object Object]or[object Object]or[object Object]or')
	})

})