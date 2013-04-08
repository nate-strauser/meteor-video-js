Package.describe({
      summary: "A smart package that makes it easy to use Video.js"
});

Package.on_use(function (api) {
    api.add_files('video-js-load.js', 'client');
});
