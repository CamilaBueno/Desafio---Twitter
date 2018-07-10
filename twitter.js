var counter = 140;

function tweet(){
    var textArea = document.getElementById('contTweet');
    var text = textArea.value;
    insertAfter(createDiv(text));
    reset();
}

function reset(){
    var textArea = document.getElementById('contTweet');
    textArea.value = '';
    textArea.rows = 2;
    document.getElementById('counter').innerHTML = counter;
    document.getElementById('btnTweet').disabled = false;
}

function insertAfter(element){
    var addTweetArea = document.getElementById('tweet')
    addTweetArea.parentNode.insertBefore(element, addTweetArea.nextSibling);
}

function createDiv(text){
    var div = document.createElement('div');
    var element = document.createElement('span');
    element.innerHTML = text.split('\n').join('<br>');
    div.appendChild(element);
    var timeElement = document.createElement('span');
    timeElement.innerHTML = getTime();
    div.appendChild(timeElement);
    return div; 
}

function getTime(){
    var date = new Date();
    var time;
    if (date.getHours() < 10){
        time = '0' + date.getHours() + ':';
    } else {
        time = date.getHours() + ':';
    }

    if (date.getMinutes() < 10){
        time += '0' + date.getMinutes();
    } else {
        time += date.getMinutes();
    }

    return time;
}

function changeTweet(){
    var tweet = document.getElementById('contTweet');
    var counterSpan = document.getElementById('counter');
    var tweetLength = tweet.value.split('\n').join('').trim().length;
    if (tweetLength > 0) {
        if (tweetLength > 140) {
            document.getElementById('btnTweet').disabled = true;
        } else {
            document.getElementById('btnTweet').disabled = false;
        }
    } else {
        document.getElementById('btnTweet').disabled = true;
    }

    counterSpan.innerHTML = counter - tweetLength;
    if (tweet.value.charAt(tweet.value.length-1) === '\n'){
        tweet.rows++;
    }
}

document.getElementById('counter').innerHTML = counter