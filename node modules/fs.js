//files
const fs = require('fs')

let file_content = fs.readFileSync('f1.txt')
console.log("Data of f1- "+file_content)

fs.writeFileSync('f2.txt',"This is updated text")
console.log("f2.txt is updated sucessfully")

fs.appendFileSync('f3.txt',"This is newly added text")
console.log("f3.txt has been appended sucessfully")

fs.unlinkSync('f3.txt')
console.log("File deleted sucessfully")



//Directory
fs.mkdirSync('Mydirectory_demo')

let folder_path= 'D://Btech//SEM-04//WT//Course Content//Node.js//node modules//Mydirectory_demo'
let folder_content = fs.readdirSync(folder_path)
console.log("Folder content - ",folder_content)

let exists=fs.existsSync('MyDirectory_demo')
console.log(exists)

fs.rmdirSync('MyDirectory_demo')
console.log('Deleted sucessfully')