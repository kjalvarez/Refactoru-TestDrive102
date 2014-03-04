// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

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


})