let expansion = 0;
let Redexpansion = 0;
let expansionfirst = 0;
let globalspeed = 1; //0.5
let RedMaxExpansion = 200;
let maxExpansion = 100;


let minimumExpansion = -25;

let wantExpanding = true;

let expanding = true;
let expandingOne = true;
let Secondexpanding = true;

let biggestExpansion = 0;

let xExpansion = 0;
let ExpansionSpeed = 0.4; //0.2
let xExpansionMax = 10;
let biggestExpansionMax = 80;
let MinusOne = 1;
let shapes;
let rectPink;
let HalfCircleRed;
let HalfCircleGreen;
let Circle;
let RectBlue;
let HalfCircleBlack;
let RectOrange;
let RectYellow;
let BlackTriangle;
let NoStrokeTriangle;
let round = 1;
// Initial dimensions of the shapes inside the border
let initialWidth = 690;
let initialHeight = 550;
var angle = 0;

let xLocation1 = 120;
let xLocation2 = 195;
let xLocation3 = 245;
let xLocation4 = 345;
let xLocation5 = 470;
let xLocation6 = 505;
let xLocation7 = 570;
let xLocation8 = 720; 
let img;
let WhiteExpansion = 0;
let WhiteExpansionMax = 50;
function setup() {
    createCanvas(1280, 720);
    background(220);
    noStroke();
    frameRate(144);
    img = loadImage('ciclogo.png');
    
    HalfCircleRed = new halfCircle(xLocation1, height / 2, 150, 150, HALF_PI, PI + HALF_PI, '#AB794D');
    
    HalfCircleGreen = new halfCircleGreen(xLocation2, height / 2, 150, 150, HALF_PI, PI + HALF_PI, '#79AB4D');
    Circle = new circle(245, height / 2, 100, 100, '#F49EC9');
    RectBlue = new rectangle(xLocation4, height / 2, 100, 50, 75, 75, 75, 75, '#4E42B9');
    HalfCircleBlack = new halfCircleBlack(xLocation5, height / 2, 150, 150, HALF_PI, PI + HALF_PI, '#000000');
    RectOrange = new segirectangle(xLocation6, height / 2, 50, 50, '#F95003');
    RectYellow = new yellowRectangle(xLocation7, height / 2, 50, 50, 50, 0, 0, 50, '#DEE001');
    BlackTriangle = new blackTriangle();
    NoStrokeTriangle = new RectNoStroke(xLocation8, height / 2, 0,0, 500,500,500,500 , '#F49EC9');
    // drawGrid();

    RectangleBlue = new rectangleBlue(375, height / 2, 100, 50, 175, 175, 175, 175, '#4E42B9');
}

function draw() {
    background(220); // Clear the background each frame
    // drawGrid();
    image(img, 50, 50, 160,100);
    
    if (expandingOne) {
        xExpansion += ExpansionSpeed;
        if (xExpansion > xExpansionMax) {
            expandingOne = false;
        }
    } else {
        xExpansion -= ExpansionSpeed;
        if (xExpansion < 0) {
            expandingOne= true;
        }
    }



    if (expanding) {
        Redexpansion += globalspeed;
        if (Redexpansion > RedMaxExpansion) {
            expanding = false;
        }
    } else {
        Redexpansion -= globalspeed;
        if (Redexpansion < 0) {
            Redexpansion = 0;
        }
    }

    // Adjust the expansion value
    if(Secondexpanding) {
        expansion += globalspeed;
        if (expansion > 0) {
            Secondexpanding = true;
        }
    }else{
        expansion -= globalspeed;
        if (expansion < maxExpansion) {
            Secondexpanding = false;
        }
    }




    

    translate(width / 4, 0);

    whiteBorder();
    switch(round){
    case 1:
    
    HalfCircleRed.display();
    HalfCircleRed.Bigger();
    HalfCircleGreen.display();
    HalfCircleGreen.Smaller(); 

    Circle.display();

    RectBlue.display();
    RectBlue.missing();
    

    RectangleBlue.display();
    
    


    HalfCircleBlack.display();
    HalfCircleBlack.moveLeft();

    RectOrange.display();
    RectOrange.moveLeft();

    RectYellow.display();
    RectYellow.moveLeft();

    BlackTriangle.moveLeft();
    BlackTriangle.display();

    NoStrokeTriangle.display();
    NoStrokeTriangle.moveLeft();

    break;
    round = 2;

    case 2:
        HalfCircleRed.display();
        HalfCircleGreen.display();
        break;

    }

    

} 

// function decreaseExpansion() {
//     if (expanding) {
//         expansion -= globalspeed; 
//         if (expansion <= minimumExpansion) {
//             expansion = minimumExpansion; 
//             expanding = false; 
//         }
//     }
// }



function whiteBorder(){
    let newWidth = initialWidth + WhiteExpansion ;
    let newHeight = initialHeight + WhiteExpansion;

    let borderPadding = 20;
    let borderX = 45 - 8;
    let borderY = 75 - 8;   
    let borderWidth = newWidth + borderPadding;
    let borderHeight = newHeight + borderPadding;
    push();
    noFill();
    stroke(255);
    strokeWeight(5);
    rect(borderX, borderY, borderWidth, borderHeight);
    pop();
}



class halfCircle {
    constructor(x, y, w, h, start, stop, color) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.start = start;
        this.stop = stop;
        this.color = color;
        this.movingRight = true;
    }

    display() {
        push();
        fill(this.color);
        // if (this.movingRight) {
        //     this.pos.x += ExpansionSpeed;
        //     if (this.pos.x >= 200) {
        //         this.movingRight = false;
        //     }
        // } else {
        //     this.pos.x -= ExpansionSpeed;
        //     if (this.pos.x <= xLocation1) {
        //         this.movingRight = true;
        //     }
        // }
        
        // this.w = 150 + Redexpansion;
        // this.h = 150 + Redexpansion;
        arc(this.pos.x, this.pos.y, this.w, this.h, this.start, this.stop);
        pop();
    }

    Bigger(){
        if (this.movingRight) {
            this.pos.x += ExpansionSpeed;
            if (this.pos.x >= 200) {
                this.movingRight = false;
            }
        } else {
            this.pos.x -= ExpansionSpeed;
            if (this.pos.x <= xLocation1) {

                this.movingRight = true;
            }
        }
        
        this.w = 150 + Redexpansion;
        this.h = 150 + Redexpansion;
    }
}

// function firstRed(HalfCircleRed) {
//     // Adjust the expansion value
//     if (expanding) {
//         Redexpansion += globalspeed;
//         if (Redexpansion > RedMaxExpansion) {
//             expanding = false;
//         }
//     } else {
//         Redexpansion -= globalspeed;
//         if (Redexpansion < 0) {
//             expanding = true;
//         }
//     }
//     HalfCircleRed.display();
// }
 

// function secondGreen(HalfCircleGreen) {
//     decreaseExpansion()
//     HalfCircleGreen.display();
// }

class halfCircleGreen {
    constructor(x, y, w, h, start, stop, color) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.w1 = 150;
        this.h1 = 150;
        this.start = start;
        this.stop = stop;
        this.color = color;
        this.movingRight = true;
    }

    display() {
        push();
        fill(this.color);
//         if (this.movingRight) {
//             this.pos.x += ExpansionSpeed;
//             if (this.pos.x >= 275) {
//                 this.movingRight = false;
//             }
//         } else {
//             this.pos.x -= ExpansionSpeed;
//             if (this.pos.x <= xLocation2) {
//                 this.movingRight = true;
//             }
//         }
//         this.w = this.w1;
//         this.h = this.h1;

//         if(this.w1 >= 100){
//           this.w1 -= ExpansionSpeed;
//           this.h1 -= ExpansionSpeed;
//         }else{
//             this.w1 += ExpansionSpeed;
//             this.h1 += ExpansionSpeed;
//         }

        
        arc(this.pos.x, this.pos.y, this.w, this.h, this.start, this.stop);
        pop();
    }

    Smaller(){
        if (this.movingRight) {
            this.pos.x += ExpansionSpeed;
            if (this.pos.x >= 275) {
                this.movingRight = false;
            }
        } else {
            this.pos.x -= ExpansionSpeed;
            if (this.pos.x <= xLocation2) {
                this.movingRight = true;
            }
        }
        this.w = this.w1;
        this.h = this.h1;

        if(this.w1 >= 100){
          this.w1 -= ExpansionSpeed;
          this.h1 -= ExpansionSpeed;
        }else{
            this.w1 += ExpansionSpeed;
            this.h1 += ExpansionSpeed;
        }
    }

}

class halfCircleBlack {
    constructor(x, y, w, h, start, stop, color) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.start = start;
        this.stop = stop;
        this.color = color;
        this.movingRight = false;
    }

    display() {
        push();
        fill(this.color);
        // if (this.movingRight) {
        //     this.pos.x += ExpansionSpeed;
        //     if (this.pos.x >= 450) {
        //         this.movingRight = false;
        //     }
        // } else {
        //     this.pos.x -= ExpansionSpeed;
        //     if (this.pos.x <= 420) {
        //         this.movingRight = true;
        //     }
        // }
        this.w = 120

        this.w = 150;
        // - expansion;
        this.h = 150;
        arc(this.pos.x, this.pos.y, this.w, this.h, this.start, this.stop);
        pop();
    }

    moveLeft(){
        if (this.movingRight) {
            this.pos.x += ExpansionSpeed;
            if (this.pos.x >= 560) {
                this.movingRight = false;
            }
        } else {
            this.pos.x -= ExpansionSpeed;
            if (this.pos.x <= 420) {
                this.movingRight = true;
            }
        }
    }
}

class circle {
    constructor(x, y, w, h, color) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.color = color;
        this.movingRight = true;
    }

    display() {
        push();
        fill(this.color);
        if (this.movingRight) {
            this.pos.x += ExpansionSpeed;
            if (this.pos.x >= 325) {
                this.movingRight = false;
            }
        } else {
            this.pos.x -= ExpansionSpeed;
            if (this.pos.x <= xLocation3) {
                this.movingRight = true;
            }
        }
        this.w = 100;
        this.h = 100;
        ellipse(this.pos.x, this.pos.y, this.w, this.h);
        pop();
    }
}

class rectangle {
    constructor(x, y, w, h, radius1, radius2, radius3, radius4, color) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.w1 = 100;
        this.h1 = 45;
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.radius3 = radius3;
        this.radius4 = radius4;
        this.color = color;
        this.movingRight = true;
        this.first = true;
        
    }

    display() {
        push();
        fill(this.color);
        // if (this.movingRight) {
        //     this.pos.x += ExpansionSpeed;
        //     if (this.pos.x >= 425) {
        //         this.movingRight = false;
        //     }
        // } else {
        //     this.pos.x -= ExpansionSpeed;
        //     if (this.pos.x <= xLocation4) {
        //         this.movingRight = true;
        //     }
        // }
        translate(this.pos.x, this.pos.y); // Move the origin to the rectangle's position

        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h, this.radius1, this.radius2, this.radius3, this.radius4);
        pop();
        angle += 0.05;
        if(angle > radians(1260)){
            angle = radians(1260);
        }   

    }

    missing(){
        this.w = this.w1;
        this.h = this.h1;

        if(this.first && this.w1 > 0){
          this.w1 -= 1;
          this.h1 -= 0.4;
        }else{
            this.first = false;
            this.ChangeBig();
}

    }
    ChangeBig(){
        this.w = this.w1;
        this.h = this.h1;
        if(this.h1 < 5.4){
            // this.w1 += 0.01;
            this.h1 += 0.002;
        } else {
            if(this.w1 < 150){
                this.w1 += 1;
                this.h1 += 0.5;
            }
        }
         if (this.movingRight) {
            this.pos.x += ExpansionSpeed;
            if (this.pos.x >= 445) {
                this.movingRight = false;
            }
        } else {
            this.pos.x -= ExpansionSpeed;
            if (this.pos.x <= 380) {
                this.movingRight = true;
            }
        }


}
}

class rectangleBlue {
    constructor(x, y, w, h, radius1, radius2, radius3, radius4, color) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.radius3 = radius3;
        this.radius4 = radius4;
        this.color = color;

        
    }

    display() {
        push();
        fill(this.color);
        noStroke(this.color);
        this.w = 0 ;
        this.h = 0;

        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.w, this.h, this.radius1, this.radius2, this.radius3, this.radius4);
        pop();
    }
}


class RectNoStroke {
    constructor(x, y, w, h, radius1, radius2, radius3, radius4, color) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.radius3 = radius3;
        this.radius4 = radius4;
        this.color = color;
        this.movingRight = false;
    }

    display() {
        push();
        noFill();
        stroke(this.color);
        strokeWeight(10);
        this.w = 50 + Redexpansion / 2;
        this.h = 150 + Redexpansion;
        // this.w = 50 + Redexpansion * 0.5;
        // this.h = 150 + Redexpansion;
        if (this.pos.x - this.w / 2 < 0) {
            this.pos.x = this.w / 2;
        }
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.w, this.h, this.radius1, this.radius2, this.radius3, this.radius4);
        pop();
    }

    moveLeft(){
        if (this.movingRight) {
            this.pos.x += ExpansionSpeed;
            if (this.pos.x >= 730) {
                this.movingRight = false;
            }
        } else {
            this.pos.x -= ExpansionSpeed - 0.04;
            if (this.pos.x <= 700) {
                this.movingRight = true;
            }
        }
    }
}

class segirectangle {
    constructor(x, y, w, h, color) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.color = color;
        this.movingRight = false;
    }

    display() {
        push();
        fill(this.color);
        // if (this.movingRight) {
        //     this.pos.x += ExpansionSpeed;
        //     if (this.pos.x >= 585) {
        //         this.movingRight = false;
        //     }
        // } else {
        //     this.pos.x -= ExpansionSpeed;
        //     if (this.pos.x <= xLocation6) {
        //         this.movingRight = true;
        //     }
        // }
        this.w = 70 ;
        this.h = 70 ;
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.w, this.h);
        pop();
    }

    moveLeft() {
        if (this.movingRight) {
            this.pos.x += ExpansionSpeed;
            if (this.pos.x >= 595) {
                this.movingRight = false;
            }
        } else {
            this.pos.x -= ExpansionSpeed;
            if (this.pos.x <= 455) {
                this.movingRight = true;
            }
        }
    }
    
}

class yellowRectangle {
    constructor(x, y, w, h, radius1, radius2, radius3, radius4, color) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.radius3 = radius3;
        this.radius4 = radius4;
        this.color = color;
        this.movingRight = false;
    }

    display() {
        push();
        fill(this.color);
        
        this.w = 60 ;
        this.h = 60 ;
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.w, this.h, this.radius1, this.radius2, this.radius3, this.radius4);
        pop();
    }

    moveLeft() {
        if (this.movingRight) {
            this.pos.x += ExpansionSpeed;
            if (this.pos.x >= 660) {
                this.movingRight = false;
            }
        } else {
            this.pos.x -= ExpansionSpeed;
            if (this.pos.x <= 520) {
                this.movingRight = true;
            }
        }
    }
}

// class blackTriangle {
//     constructor(x1, y1, x2, y2, x3, y3) {
//         this.pos = createVector(620, height / 2);
//         this.x1 = x1;
//         this.y1 = y1;
//         this.x2 = x2;
//         this.y2 = y2;
//         this.x3 = x3;
//         this.y3 = y3;
//         this.movingRight = true;
//     }

//     display() {
//         push();
//         if (this.movingRight) {
//             this.pos.x += ExpansionSpeed;
//             if (this.pos.x >= 680) {
//                 this.movingRight = false;
//             }
//         } else {
//             this.pos.x -= ExpansionSpeed;
//             if (this.pos.x <= 620) {
//                 this.movingRight = true;
//             }
//         }

//         // Update vertices positions based on the pos.x
//         this.x1 = this.pos.x;
//         this.y1 = height / 2 - 25;
//         this.x2 = this.pos.x - 50;
//         this.y2 = height / 2;
//         this.x3 = this.pos.x;
//         this.y3 = height / 2 + 25;
        
//         fill('#696969');
//         triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
//         pop();
//     }
// }


class blackTriangle {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.pos = createVector(0, height / 2);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.movingRight = false;
    }

    moveLeft() {
        if (this.movingRight) {
            this.pos.x += ExpansionSpeed * 0.5;
            if (this.pos.x >= 50) {
                this.movingRight = false;
            }
        } else {
            this.pos.x -= ExpansionSpeed * 0.5;
            if (this.pos.x <= 0) {
                this.movingRight = true;
            }
        }
    }

    display() {
        this.moveLeft();
        
        let offsetX = this.pos.x ;

        this.x1 = 660 - offsetX;
        this.y1 = height / 2 - 30;
        this.x2 = 600 - offsetX;
        this.y2 = height / 2;
        this.x3 = 660 - offsetX;
        this.y3 = height / 2 + 30;
        
        push();
        fill('#696969');
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        pop();
    }
}


// class blackTriangle {
//     constructor(x1, y1, x2, y2, x3, y3) {
//         this.x1 = x1;
//         this.y1 = y1;
//         this.x2 = x2;
//         this.y2 = y2;
//         this.x3 = x3;
//         this.y3 = y3;
//     }

//     display() {
//       // 600, height / 2 - 25, 550, height / 2, 600, height / 2 + 25
//         push();
//         this.x1 = 620 +  expansion;
//         this.y1 = (height / 2 - 25) - expansion;
//         this.x2 = 570 - expansion;
//         this.y2 = height / 2;
//         this.x3 = 620 + expansion;
//         this.y3 = (height / 2 + 25) + expansion;
//         fill('#696969');
//         triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
//         pop();
//     }
// }   

function drawGrid(){
    stroke(200);
    fill (120);  
  
    for (let x=0; x< innerWidth; x+=40){
        console.log(x);
        line (x,0,x,height);
        text (x,x+1,12);
    }
  
    for (let y=0; y<height; y+=40){
        line (0,y,width,y);
        text (y,1,y+12);
    }
  }