var MARK_IMAGE = "https://i.imgur.com/aAm9WAu.jpg";


function init() {
  changeNewsFeedNames();
  changeNewsFeedProfilePics();
  changeOnYourMindHint();
  changeCommentsNames();
  changeCommentsProfilePics();
  changeStoriesNames();
  changeOpenStoriesNames();
  changeStoriesProfilePics();
  changeChatMenuNames();
  changeChatMenuProfilePics();
  changeChatWindowNames();
  changeChatWindowProfilePics();
  changeSearchProfilePics();
  changeSearchNames();
  changeSearchPostNames();
  changeSearchPostsProfilePics();
  changeSearchPhotosNames();
  changeInPhotoNames();
  changeLikesNames();
  changeFriendRequestsNames();
  changeFriendRequestsProfilePics();
  changeMessagesPopupNames();
  changeMessagesPopupProfilePics();
  changeRepliesShortNames();
  changeProfileViewFriendsProfilePics();
  changeProfileViewFriendsNames();
  changeProfileViewProfilePics();
  changeProfileViewNames();
}

var dict = {"intervalId": "", "isEnabled":false}

chrome.storage.local.get({dict:{"intervalId": "", "isEnabled":false}},function(data){
        dict = data.dict;
});

chrome.runtime.onMessage.addListener(eventHandling);

function eventHandling(message, sender, sendResponse) {
    if(message.action == "toggle") {
	    if (dict["isEnabled"]){
			stopInterval();
			dict["intervalId"] = "";
			dict["isEnabled"] = false;
		} else {
			var intervalId = setInterval(init, 3000);
			dict["intervalId"] = intervalId;
			dict["isEnabled"] = true;
		}
		saveDict(dict)
		chrome.runtime.onMessage.removeListener(eventHandling);
    }
 }

function saveDict(dict, callback){
    chrome.storage.local.set({dict},function(){
        if(typeof callback === 'function'){
            //If there was no callback provided, don't try to call it.
            callback();
        }
    });
}

function stopInterval(){
	clearInterval(dict["intervalId"]);
}

function changeNewsFeedNames(){
	var newsFeedNames = document.getElementsByClassName("fwb");
  for (j = 0; j<newsFeedNames.length; j++){
  	var newsFeedName = newsFeedNames[j];
  if(newsFeedName!=undefined && newsFeedName!=null && typeof(newsFeedName)!=="string"){
			for (i = 0; i<newsFeedName.children.length; i++){
				var hovercard = newsFeedName.children[i].getAttribute("data-hovercard");
				if (hovercard!=null && hovercard!=undefined){
					if (hovercard.includes("user.php") || hovercard.includes("page.php")){
						newsFeedName.children[i].setAttribute("data-hovercard", hovercard.replace(/id=.*&extra/, 'id=4&extra'));
						var myhref = newsFeedName.children[i].getAttribute("href")
						var zuckhref = myhref.replace(/com.*hc_ref/, 'com/zuck/?hc_ref');
						newsFeedName.children[i].href = zuckhref;
						var changable = newsFeedName.children[i];
						changable.innerHTML = "Mark Zuckerberg";
					}
				}
			}
		}
	}
}

function changeNewsFeedProfilePics(){
	var profilePics = document.getElementsByClassName("_5pb8");
  for (j = 0; j<profilePics.length; j++){
  		var profilePic = profilePics[j];
  		var hovercard = profilePic.getAttribute("data-hovercard");
  		profilePic.setAttribute("data-hovercard", hovercard.replace(/id=.*&extra/, 'id=4&extra'));
		var myhref = profilePic.getAttribute("href")
		var zuckhref = myhref.replace(/com.*ref/, 'com/zuck/?ref');
		profilePic.href = zuckhref;
	}
	var imgtags = document.getElementsByClassName("_5xib");
	for (j= 0; j<imgtags.length; j++){
		var profilePicImg = imgtags[j];
  		profilePicImg.src = MARK_IMAGE;
  	}
}

function changeOnYourMindHint(){
	var closedHint = document.getElementsByClassName("_3en1")[0];
	var openHint = document.getElementsByClassName("_1p1v")[0];

	if (closedHint!=undefined){
		closedHint.placeholder = "What would you like to send to Mark?";
	}

	if (openHint!=undefined){
		openHint.innerHTML = "What would you like to send to Mark?";
		var openImage = document.getElementsByClassName("_3hvt")[0];
		if (openImage!=undefined){
			openImage.children[0].src = MARK_IMAGE;
		}
	}

	document.getElementsByClassName("")
}

function changeCommentsNames(){
	var commentsNames = document.getElementsByClassName("UFICommentActorName");
  for (j = 0; j<commentsNames.length; j++){
  		commentsNames[j].innerHTML = "Mark Zuckerberg";
  		var hovercard = commentsNames[j].getAttribute("data-hovercard");
  		commentsNames[j].setAttribute("data-hovercard", hovercard.replace(/id=.*&extra/, 'id=4&extra'));
		var myhref = commentsNames[j].getAttribute("href")
		var zuckhref = myhref.replace(/com.*fref/, 'com/zuck?fref');
		commentsNames[j].href = zuckhref;
	}
}

function changeCommentsProfilePics(){
	var profilePics = document.getElementsByClassName("UFIActorImage");
  for (j = 0; j<profilePics.length; j++){
  		profilePics[j].src = MARK_IMAGE;
  	}
}

function changeStoriesNames(){
	var storiesNames = document.getElementsByClassName("_nbt");
	for (j = 0; j<storiesNames.length; j++){
		storiesNames[j].innerHTML = "Mark Zuckerberg";
	}
}

function changeOpenStoriesNames(){
	var storiesNames = document.getElementsByClassName("_v5n");
	for (j = 0; j<storiesNames.length; j++){
		storiesNames[j].innerHTML = "Mark Zuckerberg";
	}
}

function changeStoriesProfilePics(){
	var profilePics = document.getElementsByClassName("_26w6");
	for (j=0; j<profilePics.length; j++){
		profilePics[j].src = MARK_IMAGE;
	}
}

function changeChatMenuNames(){
	var chatNames = document.getElementsByClassName("_55lr");
	for (j = 0; j<chatNames.length; j++){
		chatNames[j].innerHTML = "Mark Zuckerberg";
	}
}

function changeChatMenuProfilePics(){
	var profilePics = document.getElementsByClassName("_1gyw");
	for (j = 0; j<profilePics.length; j++){
		profilePics[j].children[0].src = MARK_IMAGE;
	}
}

function changeChatWindowNames(){
	var chatWindowNames = document.getElementsByClassName("titlebarText");
	if(chatWindowNames.length>0){
		for (j =0; j<chatWindowNames.length; j++){
		chatWindowNames[j].setAttribute("data-tooltip-content", "Mark Zuckerberg");
		chatWindowNames[j].children[0].innerHTML = "Mark Zuckerberg";
		var myhref = chatWindowNames[j].getAttribute("href")
		var zuckhref = myhref.replace(/com.*/, 'com/zuck');
		chatWindowNames[j].href = zuckhref;
	}
	}
}

function changeChatWindowProfilePics(){
	var chatWindowProfilePics = document.getElementsByClassName("_4tdw");
	if (chatWindowProfilePics.length>0){
		for (j = 0; j<chatWindowProfilePics.length; j++){
			chatWindowProfilePics[j].children[0].src = MARK_IMAGE;
			var myhref = chatWindowProfilePics[j].getAttribute("href")
			var zuckhref = myhref.replace(/com.*/, 'com/zuck');
			chatWindowProfilePics[j].href = zuckhref;
			var bubbleData = chatWindowProfilePics[j].getAttribute("data-tooltip-content");
			var bubbleDataSplitted = bubbleData.split(" ");
			chatWindowProfilePics[j].setAttribute("data-tooltip-content", "Mark Zuckerberg " + bubbleDataSplitted[bubbleDataSplitted.length-1]);
		}
	}
}

function changeSearchProfilePics(){
	var searchProfilePics = document.getElementsByClassName("_2yet");
	for (j = 0; j<searchProfilePics.length; j++){
		searchProfilePics[j].children[0].src = MARK_IMAGE;
		var hovercard = searchProfilePics[j].getAttribute("data-hovercard");
  		searchProfilePics[j].setAttribute("data-hovercard", hovercard.replace(/id=.*&extra/, 'id=4&extra'));
	}
}

function changeSearchNames(){
	var searchNames = document.getElementsByClassName("_2yez");
	for (j = 0; j<searchNames.length; j++){
		searchNames[j].children[0].innerHTML = "Mark Zuckerberg";
		var hovercard = searchNames[j].getAttribute("data-hovercard");
  		searchNames[j].setAttribute("data-hovercard", hovercard.replace(/id=.*&extra/, 'id=4&extra'));
	}
}

function changeSearchPostNames(){
	var searchPostNames = document.getElementsByClassName("_lic");
	var searchPostsNamesTags = document.getElementsByClassName("profileLink");
	for (j=0; j<searchPostNames.length; j++){
		var searchPostName = searchPostNames[j].children[0];
		if (searchPostName.children.length<2){
		var hovercard = searchPostName.getAttribute("data-hovercard");
  		searchPostName.setAttribute("data-hovercard", hovercard.replace(/id=.*/, 'id=4'));
  		searchPostName.children[0].innerHTML = "Mark Zuckerberg";
  		}
	}
	for (j = 0; j<searchPostsNamesTags.length; j++){
		var hovercard = searchPostsNamesTags[j].getAttribute("data-hovercard");
		if (hovercard!=undefined){
			searchPostsNamesTags[j].setAttribute("data-hovercard", hovercard.replace(/id=.*/, 'id=4'));
  			searchPostsNamesTags[j].innerHTML = "Mark Zuckerberg";
		}
	}
}

function changeSearchPostsProfilePics(){
	var searchPostsProfilePics = document.getElementsByClassName("_vwn");
	for (j = 0; j<searchPostsProfilePics.length; j++){
		searchPostsProfilePics[j].children[0].src = MARK_IMAGE;
		var hovercard = searchPostsProfilePics[j].getAttribute("data-hovercard");
  		searchPostsProfilePics[j].setAttribute("data-hovercard", hovercard.replace(/id=.*/, 'id=4'));
	}
}

function changeSearchPhotosNames(){
	var searchPhotosNames = document.getElementsByClassName("_16c0");
	for (j = 0; j<searchPhotosNames.length; j++){
		searchPhotosNames[j].innerHTML = "By Mark Zuckerberg";
	}
}

function changeInPhotoNames(){
	var inPhotoNames = document.getElementsByClassName("_hli");
	for (j = 0; j<inPhotoNames.length; j++){
		inPhotoNames[j].innerHTML = "Mark Zuckerberg";
		var hovercard = inPhotoNames[j].getAttribute("data-hovercard");
  		inPhotoNames[j].setAttribute("data-hovercard", hovercard.replace(/id=.*/, 'id=4'));
	}
}

function changeLikesNames(){
	var likesNames = document.getElementsByClassName("_4arz");
	for (j = 0; j<likesNames.length; j++){
			if (!likesNames[j].children[0].innerHTML.includes("Mark Zuckerberg")){
				if(likesNames[j].children[0].innerHTML.includes("others")){
				var splittedLikesNames = likesNames[j].children[0].innerHTML.split(" ");
				likesNames[j].children[0].innerHTML = "Mark Zuckerberg"
				+ " " + splittedLikesNames[splittedLikesNames.length-3]
				+ " " + splittedLikesNames[splittedLikesNames.length-2]
				+ " " + splittedLikesNames[splittedLikesNames.length-1];
			} else {
			likesNames[j].children[0].innerHTML = "Mark Zuckerberg";
			}
		}
	}
}

function changeFriendRequestsNames(){
	var friendRequestsNames = document.getElementsByClassName("fsl");
	if(friendRequestsNames.length>0){
		for (j = 0; j<friendRequestsNames.length; j++){
			if(friendRequestsNames[j].children.length>0){
				friendRequestsNames[j].children[0].innerHTML = "Mark Zuckerberg";
			}
		}
	}
}

function changeFriendRequestsProfilePics(){
	var friendRequestsProfilePics = document.getElementsByClassName("_s0 _4ooo _rw img");
	for (j = 0; j<friendRequestsProfilePics.length; j++){
		friendRequestsProfilePics[j].src = MARK_IMAGE;
	}
}

function changeMessagesPopupProfilePics(){
	var messagesPopupProfilePics = document.getElementsByClassName("_55lt");
	for (j = 0; j<messagesPopupProfilePics.length; j++){
		messagesPopupProfilePics[j].children[0].src = MARK_IMAGE;
	}
}

function changeMessagesPopupNames(){
	var messagesPopupNames = document.getElementsByClassName("author fixemoji");
	for (j = 0; j<messagesPopupNames.length; j++){
		messagesPopupNames[j].children[0].innerHTML = "Mark Zuckerberg";
	}
}

function changeRepliesShortNames(){
	var repliesShortNames = document.getElementsByClassName("UFIReplySocialSentenceLinkText");
	for (j = 0; j<repliesShortNames.length; j++){
		repliesShortname = repliesShortNames[j];
		repliesShortname.innerHTML = "Mark Zuckerberg " + repliesShortname.innerHTML.substring(repliesShortname.innerHTML.indexOf("replied"));
	}
}

function changeProfileViewFriendsProfilePics(){
	var profileViewFriendsProfilePics = document.getElementsByClassName("_1ve7");
	var profileViewFriendsProfilePicsParentParent = document.getElementsByClassName("_3s6w");
	var profileFullViewFriendsProfilePics = document.getElementsByClassName("_5q6s");
	for (j = 0; j<profileViewFriendsProfilePics.length; j++){
		profileViewFriendsProfilePics[j].src = MARK_IMAGE;
		if(profileViewFriendsProfilePicsParentParent.length>0){
			var hovercard = profileViewFriendsProfilePicsParentParent[j].children[0].getAttribute("data-hovercard");
  			profileViewFriendsProfilePicsParentParent[j].children[0].setAttribute("data-hovercard", hovercard.replace(/id=.*/, 'id=4'));
		}
		if(profileFullViewFriendsProfilePics.length>0){
			var hovercard = profileFullViewFriendsProfilePics[j].getAttribute("data-hovercard");
  			profileFullViewFriendsProfilePics[j].setAttribute("data-hovercard", hovercard.replace(/id=.*/, 'id=4'));
		}
	}
}

function changeProfileViewFriendsNames(){
	var profileViewFriendsNames = document.getElementsByClassName("_3s6x");
	for (j = 0; j<profileViewFriendsNames.length; j++){
		profileViewFriendsNames[j].children[0].innerHTML = "Mark Zuckerberg";
	}
}

function changeProfileViewProfilePics(){
	var profileViewProfilePics = document.getElementsByClassName("profilePic");
	var profileViewSmallProfilePics = document.getElementsByClassName("profileThumb");
	for (j = 0; j<profileViewProfilePics.length; j++){
		profileViewProfilePics[j].src = MARK_IMAGE;
	}
	if (profileViewSmallProfilePics.length>0){
		profileViewSmallProfilePics[0].children[0].src = MARK_IMAGE;
	}
}

function changeProfileViewNames(){
	var profileViewNames = document.getElementsByClassName("_2nlw");
	var profileViewSmallNames = document.getElementsByClassName("nameButton");
	for (j = 0; j<profileViewNames.length; j++){
		profileViewNames[j].innerHTML = "Mark Zuckerberg";
		profileViewSmallNames[j].children[0].innerHTML = "Mark Zuckerberg";
	}
}
