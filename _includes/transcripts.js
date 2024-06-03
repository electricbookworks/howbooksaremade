// Format transcript name headings and timestamps nicely.
// This function handles legacy formatting for original episodes.
function formatOldTranscriptHeads () {
  'use strict'

  // If this is an episode page, wrap the names and timestamps
  // in a span that we can target with CSS.
  if (document.body.getAttribute('data-episode', 'true')) {
    const nameAndTimestampRegex = /(<strong>.*<\/strong>(\s|\n)*\d+:\d+(\s|\n)*<br.*>)/
    const timestampRegex = /(\d+:\d+)/
    const paras = document.querySelectorAll('p')

    paras.forEach(function (para) {
      // Get the HTML to transform
      const oldHTML = para.innerHTML

      // Wrap the name and timestamp in a span
      let newHTML = oldHTML.replace(nameAndTimestampRegex, '<span class="name-and-timestamp">$1</span>')

      // Wrap the timestamp in its own span
      newHTML = newHTML.replace(timestampRegex, '<span class="timestamp">$1</span>')

      // Replace the old HTML with the new HTML
      para.innerHTML = newHTML
    })
  }
}

// Formatting for HTML transcripts from Transistor.
function formatTranscriptLabels () {
  'use strict'

  // Kramdown wraps each <cite> in a <p>.
  // We want to remove that and wrap each pair
  // of <cite> and <time> in a <div>, so that
  // we can lay them out neatly.

  if (document.body.getAttribute('data-episode', 'true')) {
    const citeElements = document.querySelectorAll('cite')
    citeElements.forEach(function (citeElement) {
      const citeParagraph = citeElement.closest('p')
      const citeDiv = document.createElement('div')
      citeDiv.classList.add('name-and-timestamp')
      citeDiv.appendChild(citeElement)
      citeParagraph.insertAdjacentElement('beforebegin', citeDiv)
      citeParagraph.remove()

      // Move the <time> into the div, too.
      const timeElement = citeDiv.nextElementSibling
      if (timeElement.tagName === 'TIME') {
        citeDiv.appendChild(timeElement)
      }

      // Let us hide the colon visually for neat design.
      citeElement.innerHTML = citeElement.innerHTML.replace(':', '<span class="cite-colon">:</span>')
    })
  }
}

// Go
formatOldTranscriptHeads()
formatTranscriptLabels()
