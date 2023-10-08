
const fs=require("fs");
const readline=require("readline");


const inputstream=fs.readFileSync("data.csv");
const femaleRegion=fs.createWriteStream("femaleRegion.txt");
const noChildren=fs.createWriteStream("noChildren.txt");
const rl=readline.createInterface({
  input:inputstream,
  output:process.stdout,
  terminal:false,
});

rl.on('line',(line)=>{
  const columns=line.split(',');
const gender=columns[1];
const region=columns[4];

  if(gender=='female'&&region==="east"){
    femaleRegion.write(line+'\n')
  }
})
rl.on('line',(line)=>{
  const columns=line.split(',');
  const gender=columns[1];
  const children=parseInt(columns[3]);
  
    if(gender==='male'|| (gender==='female'&&children===0)){    
      noChildren.write(line+'\n');
    }
})
//close stream
rl.on('line',(line)=>{
  femaleRegion.end();
  noChildren.end();
  console.log("Finished");
})


// non readline
const fileContents = fs.readFileSync('data.csv', 'utf-8');

const lines=fileContents.split('\n');
const headers=lines[0].split(',');

const femaleRegionX=[];
const noChildrenX=[];
for (let i = 1; i < lines.length; i++) {
  const columns = lines[i].split(',');
  const gender = columns[1];
  const region = columns[4];
  const children = parseInt(columns[3], 10);

  
  if (gender === 'female' && region === 'east') {
    femaleRegionX.push(lines[i]);
  }
  if(gender==='male'||(gender==='female'&&children===0)){
    noChildrenX.push(lines[i]);
  }
}
fs.writeFileSync('femaleRegionX.txt', headers.join(',') + '\n' + femaleRegionX.join('\n'));
fs.writeFileSync('noChildrenX.txt', headers.join(',') + '\n' + noChildrenX.join('\n'));





function createPerson(age, sex, BMI, children, smoker) {
  if (
    typeof age === 'number' &&
    typeof sex === 'boolean' &&
    typeof BMI === 'number' &&
    Number.isFinite(BMI) &&
    typeof children === 'number' &&
    Number.isInteger(children) &&
    typeof smoker === 'boolean'
  ) {
    return {
      age,
      sex,
      BMI,
      children,
      smoker,
    };
  } else {
    throw new Error('Invalid data types');
  }
}
