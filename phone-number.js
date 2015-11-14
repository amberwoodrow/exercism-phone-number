function PhoneNumber(phoneNum) {
  this.phoneNum = phoneNum;
}

PhoneNumber.prototype.number = function() {
  var justNums = this.phoneNum.replace(/\D+/g, "");
  if (justNums.length === 11 && justNums[0] === '1' || justNums.length === 10) {
    if (justNums.length === 11) {return justNums.slice(1, justNums.length);}
    return justNums;
  } return '0000000000';
};

PhoneNumber.prototype.areaCode = function() {
  return this.phoneNum.slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
  var a = this.phoneNum.split("");
  a.splice(0, 0, '(');
  a.splice(4, 0, ') ');
  a.splice(8, 0, '-');
  return a.join("");
};


module.exports = PhoneNumber;

