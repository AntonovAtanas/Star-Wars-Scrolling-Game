function start(state, game) {
    game.createMilleniumFalcon(state.milleniumFalcon);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
    // Movement of the Millenium Falcon
    if (state.keys['ArrowDown'] && state.milleniumFalcon.positionTop < document.querySelector('.game-div').offsetHeight - state.milleniumFalcon.height - 2) {
        state.milleniumFalcon.positionTop += state.milleniumFalcon.speed;
    };
    
    if (state.keys['ArrowUp'] && state.milleniumFalcon.positionTop > -12) {
        state.milleniumFalcon.positionTop -= state.milleniumFalcon.speed;
    };

    if (state.keys['ArrowRight'] && state.milleniumFalcon.positionLeft < game.gameScreen.offsetWidth - state.milleniumFalcon.width - 1) {
        state.milleniumFalcon.positionLeft += state.milleniumFalcon.speed
    };

    if (state.keys['ArrowLeft'] && state.milleniumFalcon.positionLeft > -7) {
        state.milleniumFalcon.positionLeft -= state.milleniumFalcon.speed;
    };

    //Rendering
    game.milleniumFalcon.style.top = state.milleniumFalcon.positionTop + 'px';
    game.milleniumFalcon.style.bottom = state.milleniumFalcon.positionDown + 'px';
    game.milleniumFalcon.style.left = state.milleniumFalcon.positionLeft + 'px';
    game.milleniumFalcon.style.right = state.milleniumFalcon.positionLeft + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};