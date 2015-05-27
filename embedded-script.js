window.onscroll = function () {
  change_like_to("う〜んこの");
}

function change_like_to(word) {
  var like_sentences = document.getElementsByClassName('UFILikeSentenceText');
  document.body.innerHTML = document.body.innerHTML.replace(/いいね！/g, word);
}
