let Remote = function(tivi){
    this.batTat = function(){
        if(tivi.status){
            tivi.status = false;
        }else{
            tivi.status = true;
        }
    };
    this.chuyenKenh = function(k){
        tivi.chuyenKenh(k);
    }
    this.dieuKhienAmLuong = function(al){
        tivi.dieuKhienAmLuong(al);
    }
}
let Tivi = function(){
    this.kenh = 0;
    this.amluong = 0;
    this.status = false;
    this.chuyenKenh = function(k) {
        if(this.status){
            if(k=="len"){
                this.kenh+=1;
            }
            else if(k=="xuong"){
                this.kenh-=1;
            }
            else {
                this.kenh = k;
            }
        }
    }
    this.dieuKhienAmLuong = function(al){
        if(this.status){
            if(al=="len"){
                this.amluong+=1;
            } else if(al=="xuong"){
                this.amluong-=1;
            } else {
                this.amluong += al;
            }
        }
    }
    this.showInfo = function(){
        console.log("kenh: " + this.kenh);
        console.log("am luong: " + this.amluong);
        if(this.status){
            console.log("trang thai: bat ");
        }else if(this.status==false){
            console.log("trang thai: tat ");
        }
    }
}
let tv = new Tivi();
let rm = new Remote(tv);