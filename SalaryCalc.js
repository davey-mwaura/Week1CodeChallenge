function calculateTax(salary,NHIFavailable,NSSFavailable){
 // Net Salary with average tax rate
    let netSalary = (salary/84)*100
 console.log(`Net Salary: ${netSalary}`)

 // Payee Tax with average tax rate
   let PayeeTax = (salary/16)*100
   console.log(`Payee Tax: ${PayeeTax}`)
   
// NHIF Deduction with an average deduction of 1 percent   
   if (NHIFavailable == "yes"){
   let withNHIFdeduction = (salary/100)*101
   console.log(`After NHIF Deduction: ${withNHIFdeduction}`)
   }
// NSSF Deduction with an average deduction of 6 percent  
   if (NSSFavailable == "yes"){
   let withNSSFdeduction = (salary/100)*106
   console.log(`After NSSF Deduction: ${withNSSFdeduction}`)

   }
}

//Salary, type in "yes" if NHIF deduction available, type in "yes" if NSSF deduction available
calculateTax(840000,"yes","yes")