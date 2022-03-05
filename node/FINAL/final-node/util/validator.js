module.exports={
    pass_ok:(value)=>{
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,8}/;
        return regex.test(value);
    },
  
    email_validation:(input) => {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(input);
    }
}