Package.describe({
      name:"natestrauser:videojs",
      summary: "Load Video.js via CDN",
  version: "5.10.5",
  git: "https://github.com/nate-strauser/meteor-video-js.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.add_files('video-js-load.js', 'client');
});
