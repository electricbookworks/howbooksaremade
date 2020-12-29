/*jslint browser */

// Format transcript name headings and timestamps nicely
function formatTranscriptHeads() {
    'use strict';

    // If this is an episode page, wrap the names and timestamps
    // in a span that we can target with CSS.
    if (document.body.getAttribute('data-episode', 'true')) {
        console.log('ep page');

        var timestampRegex = /(<strong>.*<\/strong>(\s|\n)*\d+:\d+(\s|\n)*<br.*>)/;
        var paras = document.querySelectorAll('p');

        paras.forEach(function (para) {
            var oldHTML = para.innerHTML;
            var newHTML = oldHTML.replace(timestampRegex, '<span class="timestamp">$1</span>');
            para.innerHTML = newHTML;
        });
    }

}

// Go
formatTranscriptHeads();
