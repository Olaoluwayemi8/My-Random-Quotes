let quotes = ["I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.","When we have respect for ourselves and others, we gravitate towards connections that encourage that. ","A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful","Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot.","The fact is that grief today is a family matter as much a s it is an individual one.","Children really brighten up a household. They never turn the lights off."];

function myQuotes(){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomNumber])
    document.querySelector('.quote').innerHTML = quotes[randomNumber]
} 