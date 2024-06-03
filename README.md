# How Books Are Made

This is a site for the How Books Are Made podcast.

## Adding episodes

1. If the guest is new, add their details to `_data/people.yml`.
1. Add the episode details to `_data/episodes.yml` by copying and editing a previous episode's data.
1. Usually, at this point you won't have the MP3 URL. Once the episode has been uploaded to Transistor, to get the MP3 link, on Transistor go to 'Episodes', click the three-dots menu to the right of the relevant episode, and select 'Share'. In the dialog that pops up, grab the link at 'Direct MP3 Download URL'.
1. Create a markdown file in the `episodes` folder. It name should be the slug of the episode title. It only needs to contain:

   ```markdown
   ---
   ---

   ## Transcript

   The transcript for this episode is coming soon.
   ```
1. Once you have the transcript, it replaces 'The transcript for this episode is coming soon.' in the episode's markdown file.
   - If you created the transcript in Transistor, export the HTML format of the transcript from Transistor and paste in the HTML contents of that file as-is.
   - Otherwise, the transcript can be text marked up as we did our original episodes:

   ```md
   **Arthur Attwell**  2:18
   Yeah, it has been many years since we first met in Ahmedabad, I think, and then Cape Town, but we haven't actually caught up for a long time. That's great. I think we're both a bit older.

   **Raghunandan Malik**  2:30
   Oh, yeah. A lot older, with children.
   ```

## Build and deployment

This site is built with Jekyll.

The live site deploys directly from the `live` branch, using CodeShip. Use https://howbooksaremade.netlify.app/ as the staging site, which builds from `master`.

Live deploys do not require a live tagging step.
