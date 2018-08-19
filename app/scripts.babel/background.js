const findAndReplaceDOMText = require('findandreplacedomtext')

const bobs = [
  'Literally the least popular member of parliament since the person who started the War of the Emus',
  '2nd generation migrant who doesn’t like migrants',
  'White Australian who doesn’t get the irony of calling migration an invasion',
  'The person whose job it is to distract us from the damage being done by the Liberal party by appearing even more extreme',
]

const frasers = [
  'That guy with only 19 votes we can’t wait to kick out in the next election',
  'Guy who had never heard of Hitler',
  'White Australian who doesn’t get the irony of calling migration an invasion',
  'The guy Pauline Hanson thinks is a racist',
  'The ‘competent businessman’ taken to court for unpaid debts',
]

const paulines = [
  'You thought she wasn’t racist because she was on Dancing with the stars',
  'Woman who wrongly predicted 1997 Asian invasion',
  'White Australian who doesn’t get the irony of calling migration an invasion',
]

chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);

      if (window.location.host.indexOf('racists') > -1) return;

      // phrases
      findAndReplaceDOMText(
        document.getElementsByTagName('body')[0],
        {
          present: 'prose',
          find: /Bob Katter/g,
          replace: bobs[Math.floor(Math.random()*bobs.length)]
        }
      )

      findAndReplaceDOMText(
        document.getElementsByTagName('body')[0],
        {
          present: 'prose',
          find: /Fraser Anning/g,
          replace: frasers[Math.floor(Math.random()*frasers.length)]
        }
      )

      findAndReplaceDOMText(
        document.getElementsByTagName('body')[0],
        {
          present: 'prose',
          find: /Pauline Hanson/g,
          replace: paulines[Math.floor(Math.random()*paulines.length)]
        }
      )

    }
  }, 10);
});