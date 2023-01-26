const book = {
    title: "The Robots of Dawn",
    author: "Isaac Asimov",
    readingStatus: true,
    
    getReadingStatus: function() {
      if (this.readingStatus) {
        return `Already read ${this.title} by ${this.author}.`;
      } else {
        return `You still need to read ${this.title} by ${this.author}.`;
      }
    }
  };
  
  console.log(book.getReadingStatus());