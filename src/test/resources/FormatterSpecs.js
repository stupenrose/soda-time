/*global equal $ test ok module soda*/

module("Formatter");

test("a Formatter supports 'mmm dd, yyyy' format", function(){
    var formatter, input, result;
    
    // given
    input = soda.CalendarDay("400-03-01");
    formatter = soda.Formatter("mmm dd, yyyy", "en");
    
    // when
    result = formatter(input);
    
    // then
    equal(result, "Mar 01, 400");
});

test("a Formatter fails fast when given a format string it doesn't understand", function(){
    var formatter, err, badFormatString;
    
    // given
    badFormatString = "fdsfads";
    
    // when
    try{
        formatter = soda.Formatter(badFormatString, "en");
    }catch(theErr){
        err = theErr;
    }
    
    // then
    ok((typeof formatter) === "undefined");
    equal(err, 'Invalid format: "fdsfads"');
});