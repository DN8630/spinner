const charArray = ['|','/','-','\\','|','/','-','\\','|','\n'];
let timeCount = 100;
for (const char of charArray) {
  setTimeout(() => {
    process.stdout.write('\r'+char+'    ');
  }, timeCount);
  timeCount += 200;
}


