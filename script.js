"use strict";

$(() => {
    $.get("https://www.reddit.com/r/aww/.json").then(function(data){
        let hits = data.data.children;
        for (let i = 1; i <= 10; i++) {
    
            $("#reddits").append(`
            <section class="redditPost">
            <img class="image" src="${hits[i].data.thumbnail}">
            <h4 class="title">${hits[i].data.title}</h4>
            <a class="seeMore" href="http://www.reddit.com/${hits[i].data.permalink}">See More</a>
            </section>
            `);
        }
        console.log(hits);
    })

});