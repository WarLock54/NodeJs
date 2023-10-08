const os = require('os');

function getCpuInfo(){
const cpuInfo = os.cpus();
console.log('CPU Information:');
cpuInfo.forEach((cpu, index) => {
  console.log(`CPU ${index + 1}:`);
  console.log(`  Model: ${cpu.model}`);
  console.log(`  Speed: ${cpu.speed} MHz`);
  console.log(`  Times (User/System/Idle): ${cpu.times.user}/${cpu.times.sys}/${cpu.times.idle}`);
});
}
getCpuInfo();
function getHostname(){
    const os = require('os');


const hostname = os.hostname();

console.log('Hostname:', hostname);
}
getHostname();

function getInformation(){
  const os = require('os');

// Get the current user's information
const userInfo = os.userInfo();

console.log('User Information:');
console.log('Username:', userInfo.username);
console.log('Home Directory:', userInfo.homedir);
console.log('User ID (UID):', userInfo.uid);
console.log('Group ID (GID):', userInfo.gid);
}
getInformation();
function  getFreeMemoryBytes(){
  const freeMemory=os.freemem();
  console.log('Free Memory:', freeMemory, 'bytes');
}
getFreeMemoryBytes();
function getOperatingSystem(){
  const osName = os.platform();

console.log('Operating System:', osName);

}
getOperatingSystem();