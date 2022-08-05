module.exports = function reverse (n) {
     if (n<0) {
        n=0-n;
     }
 
        let word=String(n).split('').reverse().join('');
        
        console.log(Number(word));
        return Number(word);
       
      }

