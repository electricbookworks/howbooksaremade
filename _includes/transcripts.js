/*jslint browser */

// Format transcript name headings and timestamps nicely
function formatTranscriptHeads() {
    'use strict';

    // If this is an episode page, wrap the names and timestamps
    // in a span that we can target with CSS.
    if (document.body.getAttribute('data-episode', 'true')) {
        console.log('ep page');

        var nameAndTimestampRegex = /(<strong>.*<\/strong>(\s|\n)*\d+:\d+(\s|\n)*<br.*>)/;
        var timestampRegex = /(\d+:\d+)/;
        var paras = document.querySelectorAll('p');

        paras.forEach(function (para) {

            // Get the HTML to transform
            var oldHTML = para.innerHTML;

            // Wrap the name and timestamp in a span
            var newHTML = oldHTML.replace(nameAndTimestampRegex, '<span class="name-and-timestamp">$1</span>');

            // Wrap the timestamp in its own span
            var newHTML = newHTML.replace(timestampRegex, '<span class="timestamp">$1</span>');

            // Replace the old HTML with the new HTML
            para.innerHTML = newHTML;
        });
    }

}

// Go
formatTranscriptHeads();
