AOS.init();
let JSON_good_posts_database = [
    {
        "type": "img",
        "content": "post-images/baby-bunny.jpg",
        "filter": "cute",
        "comment": "Venus.G0desss says: \"This is literally animal abuse. You're a piece of shit who deserves to rot in the ninth level of hell for torturing animals like this. That bunny deserves to be free and you deserve jail.\""
    },
    {
        "type": "img",
        "content": "post-images/bulbasaur-flower.png",
        "filter": "heavenly",
        "comment": "xcalbur_2 says: \"Hey guys, did you know that in terms of [message truncated due to length]\"\n\nmason-mason-ma says: \"bro thats a bulbasaur\""
    },
    {
        "type":"img",
        "content":"post-images/cow-friends.jpg",
        "filter" : "cute",
        "comment":"SVE-THE-ANIMALS says: \"im goign too lose myfckucking mindd stopp postin gpics of animals your prmoting genocide of inocent creaturs ToT\""
    },
    {
        "type":"img",
        "content":"post-images/garden-gnome.png",
        "filter": "funny",
        "comment" : "carlcoffee420 says \"man every time i see this mf i want to punch a child\""
    },
    {
        "type" : "img",
        "content": "post-images/it-will-get-better.jpg",
        "filter": "love",
        "comment" : "mxixTheUnseen says \"haha anyone who thinks this is deep is really stupid\""
    },
    {
        "type": "img",
        "content" : "post-images/kid-prodigy.jpg",
        "filter" : "",
        "comment" : "d0_or_dxe says \"OH MY GOD WE GET IT YOUR BETTER THAN EVERYONE GO FUCK YOURSELF\"\n\nhanaahhhh says \"last commenter def lives w his mom lol\""
    },
    {
        "type" : "img",
        "content": "post-images/periodt-started.jpg",
        "filter" : "crossed out",
        "comment" : "G(%F^=Y* says \"FLHXK^%G&%@#D#^=FU*(&^*#@*BKB^%G&%@#D#^=FU*(&^*#@*\""
    },
    {
        "type" : "img",
        "content" : "post-images/reject-mind-demons.jpg",
        "filter" : "heavenly",
        "comment" : "user28532154 says \"???? what kinda dumb shitbag makes stuff like this???\""
    },
    {
        "type": "img",
        "content" : "post-images/samoyeds.jpg",
        "filter" : "love",
        "comment" : "lonely-kris says \"i hate dogs and think every single one of them is the spawn of satan and they deserve death\""
    },
    {
        "type" : "img",
        "content" : "post-images/why-have-hands.png",
        "filter" : "",
        "comment" : "michael-cresca-1978 says \"I pray that Jesus saves your soul from this depravity\"\n\nwitchy_demonyx says \"im literally a pagan?\""
    },
    {
        "type" : "text",
        "content" : "Hey guys, after my mother had her life-changing surgery, my partner and I struggled to make ends meet for a really long time. It was hard, but thanks to all of your support with our small jewelry-making business, we were able to keep paying our bills. Just last week, we hit our goal of having customers in every state in America (except for Alaska). So from the bottom of our hearts, thank you so much, and we hope you continue to support us!",
        "filter" : "",
        "comment" : "bethany1234 says \"ew gay people\""
    },
    {
        "type": "text",
        "content" : "totally unrelated to the rest of this website, but i was literally just watching an hour and a half long video on JJK season 2 ost usage on youtube, and immediately after that i go to spotify, resume the playlist i was listening to, and the next song is a JJK season 2 track (and it's one of my favorites) despite me having literally never listened to an anime ost before. this keeps happening to me i swear youtube just buys and sells my data like its oxygen",
        "filter" : "",
        "comment" : "selina says \"btw ive never actually watched jjk season 2 lmao (or season 1)\""
    }
]
shuffle(JSON_good_posts_database)
console.log(JSON_good_posts_database)

let content_wrapper = document.getElementById("content-wrapper");
for (let i = 0; i < JSON_good_posts_database.length; i++) {
    create_post(JSON_good_posts_database[i], i);
}


function create_post(inJSON, curr_i){
    let post = document.createElement("DIV");
    post.classList.add("post-wrapper");
    post.data_aos = "fade-in";

    if (inJSON["type"] == "img"){
        let post_image = document.createElement("IMG");
        post_image.classList.add("post-image");
        post_image.src = inJSON["content"];
        post.appendChild(post_image);
    }
    else{
        let post_text = document.createElement("P");
        post_text.classList.add("post-text");
        post_text.innerText = inJSON["content"];
        post.appendChild(post_text);
    }

    let comment_button = document.createElement("BUTTON");
    comment_button.classList.add("comments");
    comment_button.innerText = "Click to see comments"
    comment_button.addEventListener("click", function(){
        comment_button.innerText = inJSON["comment"];
    });
    post.appendChild(comment_button);

    let mg = 2**curr_i;
    let sides = (curr_i%3) * (Math.random()* 25);
    post.style.marginTop = mg + "px";
    post.style.marginLeft = sides + "vw";
    content_wrapper.appendChild(post);
}


function shuffle(list) {
    for (let i = 0; i < list.length; i++) {
        let rand_ind = Math.floor(Math.random() * list.length);
        [list[i], list[rand_ind]] = [list[rand_ind], list[i]];
    }
}


