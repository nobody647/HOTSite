var quotes = ["\“The engineer has been, and is, a maker of history.\” ― James Kip Finch", 
"\"The fewer moving parts, the better.  Exactly. No truer words were ever spoken in the context of engineering.\" ― Christian Cantrell", 
"\"Engineering or technology is all about using the power of science to make life better for people, to reduce cost, to improve comfort, to improve productivity, etc.\" ― N. R. Narayana Murthy",
"\"As engineers, we were going to be in a position to change the world – not just study it.\" ― Henry Petroski",
"\"Manufacturing is more than just putting parts together. It's coming up with ideas, testing principles and perfecting the engineering, as well as final assembly.\" ― James Dyson",
"\"Science is about knowing; engineering is about doing.\" ― Henry Petroski",
"\"The walls between art and engineering exist only in our minds.\" ― Theo Jansen",
"\"Strive for perfection in everything you do. Take the best that exists and make it better. When it does not exist, design it\" ― Sir Henry Royce",
"\"Engineers like to solve problems. If there are no problems handily available, they will create their own problems\" ― Scott Adams",
"\"All we know about the new economic world tells us that nations which train engineers will prevail over those which train lawyers. No nation has ever sued its way to greatness\" ― Richard Lamm"];


var credit = true; //Set to false to remove "Designed by <a href="https://keybase.io/nobody647"> Ian Flanagan</a>" from the bottom of each page

$(document).ready(function () {
    $(".quote").html(quotes[Math.floor(Math.random() * quotes.length)]);

    if (!credit){
        $(".credits").hide();
    }
});