var quotes = {'The best way to get started is to quit talking and begin doing.': 'Walt Disney',
    'Don\'t let yesterday take up too much of today.': 'Will Rogers',
    'It\'s not whether you get knocked down, it\'s whether you get up.': 'Vince Lombardi',
    'If you are working on something exciting, it will keep you motivated.': 'Larry Page',
    'Success is not in what you have, but who you are.': 'Bo Bennett', 
    'The harder you work for something,the greater you\'ll feel when you achieve it.': 'Unknown',
    'Dream bigger. Do bigger.': 'Unknown',
    'Don\'t watch the clock; do what it does. Keep going.': 'Sam Levenson',
    'Great things never come from comfort zones.': 'Unknown', 'Push yourself, because no one else is going to do it for you.': 'Unknown'};

var randcolor = ['red', 'blue', 'green', 'purple', 'pink', 'yellow', 'cyan', 'magenta','orange','teal','lime','indigo'];


function new_quote() {
    var quote_keys = Object.keys(quotes);
    var quote_len = quote_keys.length;
    var old_quote = document.getElementById('quote')
    var old_auth = document.getElementById('author')
    var rand_index = Math.floor(Math.random() * quote_len);
    var color_index = Math.floor(Math.random() * randcolor.length);
    var quote = quote_keys[rand_index];
    var author = quotes[quote];
    old_quote.innerHTML = '"' + quote + '"';
    old_auth.innerHTML = '- ' + author;
    old_quote.style.color = randcolor[color_index];
    old_auth.style.color = randcolor[color_index];
    delete quotes[quote];
    if (Object.keys(quotes).length === 0) {
        alert("No more quotes available!");
    }
}

