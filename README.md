# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
+ After I went to the instructions, I got a github link `https://github.com/udacity/frontend:`
  and I got the project file in rubric structure which was provided by udacity.
 + I get through it and got a plain page with error in console.
 + And then I initialized a player class and assigned a variable.
 + for player I initialized `render()` ,`update()` ,`handleInput()` functions, As render used for placing cards and
   update for updating positions.
 + `handleInput()` is used for initializing arrow key functioning , __left arrow_ _right arrow_ _up arrow_ _
 down arrow__ as they are used for movements of the player.
 + when the actor reaches to the top then again he must go to the initial position with adding
 some `game score`.
 + I initialized `gamescore` for counting the score of the game.
 + And I used bugs as enemies using array and given some speed and positions, and if actor touches the bug
 then he should come to initial position again.
+ While playing game, when actor reaches to the top of the layer, score gets increased and player again gets to initial place until the actor touches to the BUG.
+ Once Player touches to the bug, then actor gets killed and a pop will arraise that intiamates that user gets killed, after clicking ok the game gets restarted.
