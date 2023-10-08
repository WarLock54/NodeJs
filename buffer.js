const fs=require("fs");


const salesdata=[
    {
        Customer_id:1,
        Product_Category:"Example",
        Value:5,
        Payment_Method:"credit",
    }
]
const csvHeader="sales";
const csvData=salesdata.map(record=>`${record.Customer_id},${record.Product_Category},${record.Payment_Method},${record.Value}\n`);
fs.writeFileSync('data.csv',csvHeader+csvData.join(''));

const fileContents=fs.readFileSync('data.csv','utf-8');
const lines=fileContents.split('\n');

const filtredLines=lines.filter(line=>{
    const columns=line.split(',');
    return columns[1]==='credit';
})
const filtredData=filtredLines.join('\n');
fs.writeFileSync('outputcsv.txt',filtredData);

const salesDataTxt=JSON.stringify(salesdata);
fs.appendFileSync('outputcsv.txt','\n',salesDataTxt);
console.log('Filtered data written to output.txt');









