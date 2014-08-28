Package.describe({
      name:"natestrauser:videojs",
      summary: "A smart package that makes it easy to use Video.js",
  version: "4.1.3",
  git: "https://github.com/nate-strauser/meteor-video-js.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.add_files('video-js-load.js', 'client');
});
