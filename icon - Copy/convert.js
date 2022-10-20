import { read } from "jimp";
read("image.png/outline_refresh_white_24dp.png" ,function(err,image){
    if(err){ 
        console.log(err);
        return;
    }
    image.background(0xFFFFFFFF , (err ,val)=>{
        image.write("./output/out.png");
    })
});