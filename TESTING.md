# Verification

- JavaScript syntax checked with Node.
- Content validation: 40 consecutive lesson IDs, 309 vocalized Arabic word entries with Urdu/English meanings and grammar, 120 MCQs with four distinct choices and explanations, and 30 supplementary readings with valid related lesson IDs.
- Source Arabic compared visually with all six content pages of the short supplied compilation; continuation passages included.
- Desktop homepage and lesson navigation inspected in Chrome.
- Responsive layout inspected in a 390px iframe viewport: no body-level horizontal overflow in the tested grammar view; grammar cards replace the wide table.
- Day/night appearances inspected; local fonts rendered.
- An MCQ answer immediately reveals correctness and explanation; next question becomes enabled and advances the question counter.
- Lesson bookmark and completion state checked; retained after navigation.
- Urdu search tested with «نیت» and returned the correct lesson.
- Additional readings route and its 30 cards inspected after PDF removal.

Limits: this is not an exhaustive cross-browser or real-device test. Embedded book readers are intentionally absent. Detailed grading of every source narration and independent scholarly review are not claimed.

## Revision checks

- All 40 main lessons have eight nonempty short questions and answers; all 30 supplementary readings have four. Total: 440.
- All 70 lesson accent colors are unique. Text contrast was calculated for each light tint/accent pair, dark background/bright pair, and white-on-accent number badge: all pass 4.5:1.
- Desktop: eight answers open together using the visible control.
- Mobile 390px test: six lesson tabs and eight questions rendered with no body-level horizontal overflow (375px content width). Light and dark themes visually checked.
- Supplementary reading question tab checked: four questions appear and the main reading remains available in its own tab.
- Existing hadith IDs, word entries, three MCQs per lesson, bookmarks and note storage format retained.
