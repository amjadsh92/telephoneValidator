const regex_array=[/1\s(\d{3})-(\d{3})-(\d{4})/g, 
    /1\s\((\d{3})\)\s(\d{3})-(\d{4})/g,
    /1\((\d{3})\)(\d{3})-(\d{4})/g,
    /1\s(\d{3})\s(\d{3})\s(\d{4})/g,
    /\d{10}/,
    /(\d{3})-(\d{3})-(\d{4})/g,
    /\((\d{3})\)(\d{3})-(\d{4})/g
    
    

]

const str = "(555)555-5555"

if(regex_array[6].test(str)){
    console.log(true)

}




