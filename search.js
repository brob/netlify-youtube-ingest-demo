search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for videos',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
        item: `
                <div>
                  <h2><a href="https://youtube.com/watch?v={{objectID}}">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</a></h2>
                  <div class="video-container"><iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/{{ objectID }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
            `

    }
  })
]);

search.start();
