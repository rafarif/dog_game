    ctx.fillRect(50, 50, 100, 100);

    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

    if(gameFrame % staggerFrames == 0){
        if(frameX < 6) frameX++;
        else frameX = 0;
    }
    gameFrame++;

    spriteAnimations = [
        "idle" = {
            width : 525,
            height: 523,
            loc : [
                { x : 0, y:0 },
                { x : 0, y:0 },
                { x : 1150, y:0 },
                { x : 0, y:0 },
                { x : 0, y:0 },
                { x : 0, y:0 },
                { x : 0, y:0 }
            ]
        },
        "jump" = {
            width : 120,
            height: 120,
            loc : [
                { x : 0, y:0 },
                { x : 0, y:0 },
                { x : 0, y:0 },
                { x : 0, y:0 },
                { x : 0, y:0 },
                { x : 0, y:0 },
                { x : 0, y:0 }
            ]
        }
    ];
    console.log(spriteAnimations["idle"].loc[2].x); // 1150
    console.log(spriteAnimations["idle"].loc.length); // 7