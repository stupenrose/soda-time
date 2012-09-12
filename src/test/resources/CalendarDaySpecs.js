/*global expect equal $ test:false ok:false module:false soda:false*/

module("CalendarDay");

test("a calendar day consists of a year, a month, and a day value", function() {
    var result;

    // when
    result = soda.CalendarDay(2012, 8, 1);

    // then
    equal(result.year(), 2012);
    equal(result.month(), 8);
    equal(result.day(), 1);
});

test("a calendar day's default string representation is ISO 8601 extended format ", function() {
    var testSubject, result;

    // given
    testSubject = soda.CalendarDay(2012, 8, 1);

    // when
    result = testSubject.toString();

    // then
    equal(result, "2012-08-01");
});


test("a calendar day can be constructed from a string in ISO 8601 extended format ", function() {
    var result;

    // when
    result = soda.CalendarDay("2010-03-01");

    // then
    equal(result.year(), 2010);
    equal(result.month(), 3);
    equal(result.day(), 1);
});

test("a calendar day can be constructed from a string in ISO 8601 extended format, but that has non-padded numbers ", function() {
    var result;

    // when
    result = soda.CalendarDay("2010-3-1");

    // then
    equal(result.year(), 2010);
    equal(result.month(), 3);
    equal(result.day(), 1);
});

test("CalendarDay.isAfter()", function() {
    // given
    var testCases = [
                     {a:"1066-01-01", b:"1066-01-01", expected:false},
                     {a:"1066-01-02", b:"1066-01-01", expected:true},
                     {a:"1066-01-01", b:"1066-02-01", expected:false},
                     {a:"1066-02-01", b:"1066-01-01", expected:true},
                     {a:"1066-01-01", b:"1065-01-01", expected:true},
                     {a:"1065-01-01", b:"1066-01-01", expected:false}
                     ];


    $.each(testCases, function(idx, testCase){
        var result, a = soda.CalendarDay(testCase.a), b = soda.CalendarDay(testCase.b);

        // when
        result = a.isAfter(b);

        // then
        equal(result, testCase.expected, "isAfter() returned " + result + " when comparing " + a + " to " + b);
    });

});


