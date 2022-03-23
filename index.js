console.log("index.js in news api")
let newsAccordion = document.getElementById("newsAccordion")
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&q=tech&apiKey=8765897f559040e08de204609c950ae1', true);





xhr.onload = function() {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText)
        let artical = json.articles
        console.log(artical)
        let newshtml = ""
        artical.forEach(function(element, index) {


            let news = `<div class="accordion-item">
<h2 class="accordion-header" id="heading${index}">
    <button class="accordion-button collased" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
  ${element["title"]}
</button>
</h2>
    <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="newsAccordion">
            <div class="accordion-body">
            ${element["content"]}.<a href="${element['url']}" target="_blank rel="">Read more here</a>
            </div>
    </div>
</div>`
            newshtml += news

        });
        newsAccordion.innerHTML = newshtml
    } else {
        console.log("Some error occured")
    }
}
xhr.send()