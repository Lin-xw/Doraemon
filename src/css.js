const string = `
/*画一只哆啦A梦*/
/*开始了*/
.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before{box-sizing: border-box;}
.skin *::after{box-sizing: border-box;}
.skin{
    position: relative;
    height: 50vh;
}
/*首先，需要准备哆啦A梦的皮*/
.head{
    z-index: 2;
    background: #008ee3;
    width: 280px;
    height: 240px;
    position: absolute;
    left: 50%;
    top: 20px;
    border-radius: 50% 50% 25% 25% / 55% 55% 45% 45%;;
    margin-left: -140px;
}
/*接下来画眼睛*/
.eye.left{
    z-index: 5;
    border: 1px solid #000;
    width: 60px;
    height: 75px;
    position: absolute;
    left: 50%;
    top: 50px;
    margin-left: -60px;
    background: #fffafa;
    border-radius: 50%;
}

.eye.right{
    z-index: 5;
    border: 1px solid #000;
    width: 60px;
    height: 75px;
    position: absolute;
    left: 50%;
    top: 50px;
    background: #fffafa;
    border-radius: 50%;  
}
.eye.right::before{ 
    content: "";
    display: block;
    width: 16px;
    height: 20px;
    background: #2e2e2e;
    border-radius: 50%;
    position: relative;
    top: 32px;
    
}
.eye.left::before{
    content: "";
    display: block;
    width: 16px;
    height: 20px;
    background: #2e2e2e;
    border-radius: 50%;
    position: relative;
    left: 43px;
    top: 32px;
    
}
/*眼睛里的珠子*/
.yuan1{
    position: relative;
    width: 8px;
    height: 8px;
    top: 18px;
    left: 80%;
    border-radius: 50%;
    background: #fffafa;
    margin-left: 3px;
}
.yuan2{
    position: relative;
    width: 8px;
    height: 8px;
    top: 18px;
    left: 50%;
    border-radius: 50%;
    background: #fffafa;
    margin-left: -28px;
}
/*接下来，画哆啦A梦的鼻子*/
.nose{
    z-index: 4;
    background: #c70000;
    width: 20px;
    height: 20px;
    position: relative;
    left: 50%;
    top: 110px;
    border-radius: 50%;
    margin-left: -10px;
}
.shuxian{
    z-index: 3;
    border: 1px solid #000;
    width: 2px;
    height: 80px;
    left: 50%;
    top: 150px;
    background: #000;
    margin-left: 9px;
    margin-top: 11px;
}
.yuan{
    position: relative;
    width: 9px;
    height: 9px;
    top: 6px;
    left: 50%;
    border-radius: 50%;
    background: #fffafa;
    margin-left: 1px;
}
/*然后是脸蛋*/
.face{
    z-index: 2;
    position: relative;
    width: 210px;
    height: 180px;
    top: 60px;
    left: 50%;
    margin-left: -105px;
    background: #fffafa;
    border-radius: 50% 50% 25% 25% / 55% 55% 45% 45%;
}
/*充满正能量的微笑*/
.mouth{
    z-index: 2;
    position: relative;
    width: 160px;
    height: 120px;
    top: 96px;
    left: 50%;
    border-radius: 50%;
    border-bottom: 2px #000 solid;
    margin: -180px -80px auto;
}
/*红色围巾*/
.scarf{
    z-index: 1;
    border: 1px solid saddlebrown;
    width: 220px;
    height: 130px;
    border-radius: 50% 50% 20% 20% / 50% 50% 50% 50%;
    background: #e30000;
    margin: 80px auto;
    top: -74px;
    position: relative;
}
.scarf::before{
    content: "";
    display: block;
\twidth: 46px;
\theight: 3px;
\tbackground: #fffafa;
\tposition: relative;
\tleft: 50%;
\tmargin-left: -70px;
\ttop: 115px;
\tborder-radius: 5px;
}
/*小小的铃铛*/
.bell{
    z-index: 2;
    border: 2px #000 solid;
\tborder-radius: 50%;
\twidth: 36px;
\theight: 36px;
\tbackground: #ffdd2e;
\tposition: absolute;
\ttop: 264px;
\tleft: 50%;
\tmargin-left: -18px;
}
.bell div:nth-child(1){
\tborder: 2px #000 solid;
\twidth: 40px;
\theight: 8px;
\tbackground: #ffdd2e;
\tposition: absolute;
\tleft: 50%;
\tmargin-left: -20px;
\ttop: 10px;
\tborder-radius: 5px;
}
.bell div:nth-child(2){
\twidth: 8px;
\theight: 8px;
\tborder: 2px #000 solid;
\tposition: absolute;
\tbackground: #6c5844;
\tborder-radius: 50%;
\tleft: 50%;
\tmargin-left: -4px;
\ttop: 20px;
}
.bell div:nth-child(3){
\twidth: 2px;
\theight: 6px;
\tbackground: #000;
\tposition: absolute;
\tleft: 50%;
\tmargin-left: -1px;
\ttop: 27px;
}
/*哆啦A梦的小胡须*/
.hair.left{ 
    position: absolute;
    width: 90px;
    height: 20px;
    z-index: 5;
    top: 300px;
    left: 50%;
    border-radius: 20% 20% 60% 60%/60% 30% 80% 60%;
    transform: rotate(-170deg) translateX(53px);
    border-bottom: 2px #000 solid;
    margin: -170px -70px auto;
}
.hair.left div:first-child{
    position: relative;
    width: 90px;
    height: 20px;
    z-index: 5;
    border-radius: 50% 50% 50% 30%/50% 30% 50% 30%;
    transform: rotate(-5deg) translateX(52px);
    border-bottom: 2px #000 solid;
    margin: -20px -55px auto;
}
.hair.left div:last-child{
    z-index: 7;
    position: relative;
    width: 90px;
    height: 20px;
    border-radius: 50% 50% 50% 30%/50% 30% 50% 30%;
    transform: rotate(-10deg) translateX(53px);
    border-bottom: 2px #000 solid;
    margin: -35px -60px auto;
}
.hair.right{ 
    z-index: 7;
    position: absolute;
    width: 90px;
    height: 20px;
    top: 300px;
    left: 50%;
    border-radius: 20% 20% 60% 60%/60% 30% 80% 60%;
    transform: rotate(170deg) translateX(-53px);
    border-bottom: 2px #000 solid;
    margin: -170px -20px auto; 
}
.hair.right div:first-child{
    z-index: 7;
    position: relative;
    width: 90px;
    height: 20px;
    border-radius: 50% 50% 50% 30%/50% 30% 50% 30%;
    transform: rotate(5deg) translateX(55px);
    border-bottom: 2px #000 solid;
    margin: -30px -51px auto
}
.hair.right div:last-child{
    z-index: 7;
    position: relative;
    width: 90px;
    height: 20px;
    border-radius: 50% 50% 50% 30%/50% 30% 50% 30%;
    transform: rotate(12deg) translateX(60px);
    border-bottom: 2px #000 solid;
    margin: -48px -52px auto;
}
/*好了，这只哆啦A梦送给你*/
`
export default string;