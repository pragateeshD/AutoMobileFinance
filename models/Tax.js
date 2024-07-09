const mongoose = require('mongoose');

const TaxSchema = new mongoose.Schema({
  
  
  taxableeIncome : {
    type: String,
    required:truue
  },
  businessExpence:{
    type:String,
    required:true
  },
  deductions:{
    type:String,
    required:true
  },
  taxRate:{
    type:String,
    required:true
  },
  financialYear:{
    type:String,
    required:true
  }
  
});

const Tax = mongoose.model('Tax', TaxSchema);

module.exports = Tax;
