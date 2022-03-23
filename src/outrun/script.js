export default (request) => {
  const db = require("kvstore");
  const pubnub = require("pubnub");
  var json = JSON.parse(request.message);
  console.log(json);


  let {ranked, playerName, checkpointsCount, kilCount, deathCount, killDeathStat, killDeathCheckpointStat} = json;

  let scoreArrayPrevious = [];
  let scoreArrayNew = [];

  let userNameArrayPrevious = [];
  let userNameArrayMew = [];


  db.get("data").then((value) => {
    if (value) {
      console.log("value", value);
      let i = 0;
      value.checkpointsCount.some(item => {
        console.log("Hello", item, checkpointsCount);

        if (parseInt(item) < parseInt(checkpointsCount)) {


          db.set("data",value);
          console.log("data set: ", value)
        }
        i++;
      });


      pubnub.publish({
        "channel": "leaderboard_scores",
        "message": value
      }).then((publishResponse) => {
        console.log("publish response", publishResponse);
      });
    }
  })

  return request.ok();
};


export default (request) => {
  const db = require("kvstore");
  const pubnub = require("pubnub");
  var json = JSON.parse(request.message);
  console.log(json);
  let {ranked, playerName, checkpointsCount, killCount, deathCount, killDeathStat, killDeathCheckpointStat} = json;

  db.get("data").then((value) => {
    if (value) {
      console.log("value", value);


      pubnub.publish({
        "channel": "leaderboard_scores",
        "message": value
      }).then((publishResponse) => {
        console.log("publish response", publishResponse);
      });
    } else {
      console.log("value was false");
      db.set("data", {
        "ranked": ["unset", "unset", "unset", "unset", "unset"],
        "playerName": ["unset", "unset", "unset", "unset", "unset"],
        "checkpointsCount": ["unset", "unset", "unset", "unset", "unset"],
        "killCount": ["unset", "unset", "unset", "unset", "unset"],
        "deathCount": ["unset", "unset", "unset", "unset", "unset"],
        "killDeathStat": ["unset", "unset", "unset", "unset", "unset"],
        "killDeathCheckpointStat": ["unset", "unset", "unset", "unset", "unset"]
      });
    }
  });


  return request.ok();
};

export default (request) => {
  const db = require("kvstore");
  const pubnub = require("pubnub");
  var json = JSON.parse(request.message);
  console.log(json);
  let {ranked, playerName, checkpointsCount, kilCount, deathCount, killDeathStat, killDeathCheckpointStat} = json;

  db.get("data").then((value) => {
    if (value) {
      console.log("value", value);
      let i = 0;
      // value.score.some(item => {
      //     console.log("hello", item, score);
      //     if (parseInt(item) < parseInt(score)) { //Parse into int since variables are currently strings
      //         //Score
      //         scorearraynew = value.score.slice(0, i);
      //         scorearrayprevious = value.score.slice(i, value.score.length);
      //         console.log("values", scorearraynew, scorearrayprevious);
      //         scorearraynew.push(score);
      //         var newScoreList = scorearraynew.concat(scorearrayprevious);
      //         newScoreList.splice(-1, 1);
      //
      //         //Username
      //         usernamearrayprevious = value.username.slice(0, i);
      //         usernamearraynew = value.username.slice(i, value.score.length);
      //         console.log("values", usernamearrayprevious, usernamearraynew);
      //         usernamearrayprevious.push(username);
      //         var newUsername = usernamearrayprevious.concat(usernamearraynew);
      //         newUsername.splice(-1, 1);
      //
      //         value.score = newScoreList;
      //         value.username = newUsername;
      //         db.set("data", value);
      //
      //         return true; //break out of the loop using Array.prototype.some by returning true
      //     }
      //     i++;
      // });


      pubnub.publish({
        "channel": "leaderboard_scores",
        "message": value
      }).then((publishResponse) => {
        console.log("publish response", publishResponse);
      });
    } else {
      console.log("value was false");
      db.set("data", {
        "ranked": [],
        "playerName": [],
        "checkpointsCount": [],
        "kilCount": [],
        "deathCount": [],
        "killDeathStat": [],
        "killDeathCheckpointStat": []
      });
    }
  });


  return request.ok()
};
