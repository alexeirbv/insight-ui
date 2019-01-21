var bundles = [
  {
    link: 'https://click.brprft.com/click?pid=20&offer_id=22&sub1=',
    pixel: 'https://wraprevenue.imp2aff.com/imp?aid=20&oid=22&sub1=',
  },
  {
    link: 'https://click.brprft.com/click?pid=20&offer_id=23&sub1=',
    pixel: 'https://wraprevenue.imp2aff.com/imp?aid=20&oid=23&sub1=',
  },
  {
    link: 'https://click.brprft.com/click?pid=20&offer_id=24&sub1=',
    pixel: 'https://wraprevenue.imp2aff.com/imp?aid=20&oid=24&sub1=',
  },
];

function getRandomBundle() {
  var random = getRandomInt(0, 2);
  var bundle = bundles[random];
  if (bundle != null) {
    $("#banner_img_link").attr("src", bundle+window.location.hostname);
  }

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
