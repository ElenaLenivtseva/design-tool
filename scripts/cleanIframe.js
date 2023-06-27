function cleanIframe(str) {
    let string = str;
    console.log(string)
    let newString = string.replace(/https:\/\/youtu.be\//, '');
    console.log(newString)
}
cleanIframe('https://youtu.be/M72n-y-obv4')