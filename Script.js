const getPhotos = async () => {
   await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) =>response.json())
        .then((data) =>data.map((p)=> console.log(p.id,p.title)));

        document.write("<H2>Ready</H2>")
};
getPhotos();