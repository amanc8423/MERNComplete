rstream.on("error", (err) => {    // if error happens 
    console.log(err);
    res.end("file not found");

  });