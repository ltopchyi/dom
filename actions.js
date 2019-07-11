const url = 'https://api.myjson.com/bins/152f9j';
fetch(url).then(res => res.json()).then(data => {
        const rawData = data.data;

        //var index, len;
        //for (index = 0, len = rawData.length; index < len; ++index) {  
       
        return rawData.map(post => {
         //all needed data is listed below as an entity 
          let createdAt = post.createdAt;
                description = post.description;
                img = post.image;
                tags = post.tags;
                title = post.title;
            //create element
             //append element
                         var div = document.createElement('div');
                         var par = document.createElement('p');
                         var picture = document.createElement('img');
                         var desc = document.createElement('p');
                         var created = document.createElement('time');
                         var tag = document.createElement('span');
                         div.appendChild(picture);
                         div.appendChild(par);
                         div.appendChild(desc);
                         div.appendChild(tag);
                         div.appendChild(created);
                         
                         picture.setAttribute("src", post.image);
                         picture.className = "image";
                        div.className = "item";// создали див с классом айтем
                        par.className = "title";
                        desc.className = "description";
                        created.className = "createdAt";
                        created.setAttribute("pubdate", post.createdAt);
                        tag.className = "tags";
                        var container = document.getElementById('container');//нашли контейнер
                        var item = container.appendChild(div);//прицепили туда див
                        
                     par.innerHTML = post.title;
                     desc.innerHTML = post.description;
                     created.innerHTML = post.createdAt;
                     tag.innerHTML = post.tags;

                     window.addEventListener('scroll', () =>{
                         const scrollable = document.documentElement.scrollHeight - window.innerHeight
                        const scrolled = window.scrollY;
                        console.log(scrollable);
                    })
        }); //}
        
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    });
