# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## How to download and run the game

 + After I went to the instructions, I got a GitHub link `https://github.com/udacity/frontend-nanodegree-arcade-game:` and i downloaded the project file in rubric structure which was provided by Udacity.

 + Open in index.html in a browser and got a plain page with error in console.
 + And then I initialized a player class and assigned a variable.
 + for player I initialized `render()` ,`update()` ,`handleInput()` functions, As render used for placing cards and update for updating positions.
 + `handleInput()` is used for initializing arrow key functioning , __left arrow_ _right arrow_ _up arrow_ _
 down arrow__ as they are used for movements of the player.
 + when the Sprite reaches to the top then again he must go to the initial position with adding
 some `score`.
 + I initialized `score` for counting the score of the game.
 + And I used bugs as enemies using array and given some speed and positions, and if Sprite touches the bug
 then he should come to initial position again.
+ While playing game, when Sprite reaches to the top of the layer, score gets increased and player again gets to initial place until the Sprite touches to the BUG.
+ Once Player touches to the bug, then Sprite gets killed and a pop will arise that intimates that user gets killed, after clicking ok the game gets restarted.
+ I used `update()` function to update the actor position : updating function is already inistialised by parameter(dt).
+ `handleInput()` is used to handle the input given by player. for this method , they had already implemented some mechanism , in order to it I just modified steps to move(in px).
- left arrow:: This key enabled player to move left side until the sprite reaches left corner.
- right arrow:: This key enables player to move right side until the sprite reaches right corner.
- up arrow:: This key enables player to move up side until the sprite reaches top of the canvas.
- down arrow:: This key enables player to move down side until the Sprite reaches down corner.
+ if the Sprite reaches to the water layer(top of the canvas), again he get to initial position at where he started in then addition of score is +1.
+ using arrays I placed three enemies on canvas based on graphical measurement by the speed generated using JAVASCRIPT.
