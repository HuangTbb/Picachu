const string = `
.pikachu{
    width: 100%;
    height: 100%;
    position: relative;
    background: rgb(254,228,51);
}
.posBox{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%); 
}
.nose{
    position: absolute;
    left: 50%;
    margin-left: -12px;
    top: 20px;
    border: 12px solid transparent;
    border-top-color: #000;
    border-radius: 12px;
    z-index: 3;
}
.eye{
    position: absolute;
    left: 50%;
    width: 50px;
    height: 50px;
    border: 2px solid #000;
    margin-left: -25px;
    border-radius: 50%;
    background: rgb(46,46,46);
    z-index: 3;
}
.leftEye{
    transform: translateX(-100px);
}
.rightEye{
    transform: translateX(100px);
}
.ligtht{
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 6px;
}
.hide{
    position: absolute;
    top: -48px;
    width:200px;
    height: 50px;
    background: rgb(254,228,51);
    z-index: 2;
}
.mouth{
    position: absolute;
    top: 64px;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    height: 200px;
}
.mouth:after, .mouth:before {
    position: absolute;
    content: '';
    width: 80px;
    height: 50px;
    background: rgb(254, 228, 51);
    border-bottom: 4px solid #000;
    z-index: 1;
}
.mouth:before{
    border-left: 3px solid #000;
    border-bottom-left-radius: 260px 170px;
    transform: rotate(-30deg);
    top: -20px;
    margin-left: 15px;
}
.mouth:after{
    border-right: 3px solid #000;
    border-bottom-right-radius: 260px 170px;
    transform: rotate(30deg);
    left: 50%;
    top: -20px;
    margin-left: 5px;
}
.tongue{
    position: absolute;
    left: 50%;
    margin-left: -70px;
    width: 140px;
    height: 150px;
    border: 3px solid #000;
    background: rgb(204,65,67);
    border-bottom-left-radius: 280px 590px;
    border-bottom-right-radius: 280px 590px;
    overflow: hidden;
}
.tongue2{
    position: absolute;
    top: 26px;
    width: 140px;
    height: 150px;
    background: rgb(221,102,106);
    border-top-left-radius: 250px 200px;
    border-top-right-radius: 250px 240px;
}
.face{
    position: absolute;
    left: 50%;
    top: 90px;
    width: 66px;
    height: 66px;
    background: rgb(255,81,64);
    margin-left: -33px;
    border: 2px solid #000;
    border-radius: 50%;
}
.leftFace{
    transform: translateX(-140px);
}
.rightFace{
    transform: translateX(140px);
}
`
export default string;