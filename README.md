# flash-cards
Express-powered flash cards and quiz for learning Korean. The learner can enter the corresponding pairs of English and Korean words or phrases, which are saved in a MySQL database. The Express server contains a simple JSON endpoint that returns the paired terms.
## Flash Cards
One view reads the JSON list and generates clickable flash cards of the terms, with one language on each side. Each time the page is loaded the card order is randomized. The page defaults to showing a random side of the card up initially, but the learner can also choose to start with all English or all Korean face up.
## Quiz
A second view uses the same JSON list to generate a random-order series of text input boxes labeled with the English terms. When the correct Korean term is entered in the box it automatically turns green.

A working version is available at [korean.lennon.dev](https://korean.lennon.dev/cards.html)
