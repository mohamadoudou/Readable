

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

export const postFormat=(title,body,author,category)=>{

   const id= uuidv4()
   const timestamp=Date.now()


    return {
        id,
        timestamp,
        title,
        body,
        author,
        category
    }
}