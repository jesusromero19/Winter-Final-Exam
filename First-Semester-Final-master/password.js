class Password{
  //The first part of the class.
  constructor(publickey,privatekey){
    this.publickey = pa;
    this.privatekey = pb;
  }
  //Instance functions below this comment.
  validPublicKey(){
    if(this.publickey.length >= 8 && this.publickey.length <= 25){
      return true;
    }
    else{
      return false;
    }
  }
  validPrivateKey(){
    let part1 = this.privatekey.substring(0,4);
    let part2 = this.privatekey.substring(5,9);
    let part3 = this.privatekey.substring(10,14);

    if(isNAN(part1))


    if(this.privatekey.charAT(4) == "-" && this.privatekey.charAT(9) == "-"){
      return true;
    }
    else{
      return false;
    }

  }
  //Static function below this comment.
  static makePrivateKey(){
    let key = "";
    let limit = 14;
    let group1 = "";
    let group2 = "";
    let group3 = "";
    for(let p = 0; p<4; p++){
      group1 = String(Math.floor(Math.random()*10));
      group2 = String(Math.floor(Math.random()*10));
      group3 = String(Math.floor(Math.random()*10));
    }
    key = group1"-"+group2"-"+group3;
    return key;
  }
}
