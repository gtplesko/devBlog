var express = require('express')
var router = express.Router()

var lastUpdate = new Date('5/5/2019');
lastUpdate = new Date(lastUpdate.getTime() - (lastUpdate.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

var metaData = {
  'txt':'A collection of photography done by me.',
  'url':'/Photography',
  'btnTxt':'Read',
  'date':lastUpdate,
  'title':'Photography',
  'imageSrc':'/img/roswell.jpg',
  'keywords':['art','gallery','photography','pictures']
};



router.use(function(req, res, next) {
  next();
});
//uses the prefix added in app.js as a root.
router.get('/', function(req, res) {
  res.render('gallery', {photos:['https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2af0671-c20c-413e-85a9-82b2950d782a/d2zynoa-0a49a541-cf32-4739-9e8b-4380ac77d4d7.jpg/v1/fill/w_900,h_603,q_75,strp/coming_home_3_by_squishy_1_d2zynoa-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvZDJhZjA2NzEtYzIwYy00MTNlLTg1YTktODJiMjk1MGQ3ODJhXC9kMnp5bm9hLTBhNDlhNTQxLWNmMzItNDczOS05ZThiLTQzODBhYzc3ZDRkNy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Pkmz3KHRB6H2PX31bOQlRMQiOduFZ9vbtmKwOmNqIuA',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2af0671-c20c-413e-85a9-82b2950d782a/d2u3mzx-016eab4a-70cd-493f-ad1e-4793aea86dfe.jpg/v1/fill/w_900,h_603,q_75,strp/ferris_wheel_by_squishy_1_d2u3mzx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvZDJhZjA2NzEtYzIwYy00MTNlLTg1YTktODJiMjk1MGQ3ODJhXC9kMnUzbXp4LTAxNmVhYjRhLTcwY2QtNDkzZi1hZDFlLTQ3OTNhZWE4NmRmZS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uGHO2yoajebBPx0elYxOkNqyMKUlpXV7miBSViwEwsM',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2af0671-c20c-413e-85a9-82b2950d782a/d2r4xq8-331f1907-b06d-4016-8760-6033320027a8.jpg/v1/fill/w_900,h_599,q_75,strp/haleigh_1_by_squishy_1_d2r4xq8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk5IiwicGF0aCI6IlwvZlwvZDJhZjA2NzEtYzIwYy00MTNlLTg1YTktODJiMjk1MGQ3ODJhXC9kMnI0eHE4LTMzMWYxOTA3LWIwNmQtNDAxNi04NzYwLTYwMzMzMjAwMjdhOC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mW72B9qLeoup7TQzVarbLPdILp9tauywJ933FlHL0FU',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2af0671-c20c-413e-85a9-82b2950d782a/d2ww6x5-643c8ac8-36ea-40fc-bfc3-346ecbcd5a4c.jpg/v1/fill/w_900,h_600,q_75,strp/catherine_2_by_squishy_1_d2ww6x5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvZDJhZjA2NzEtYzIwYy00MTNlLTg1YTktODJiMjk1MGQ3ODJhXC9kMnd3Nng1LTY0M2M4YWM4LTM2ZWEtNDBmYy1iZmMzLTM0NmVjYmNkNWE0Yy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KTClNfEKJ74lV4vi_Zhj8AU6oozOyB7uPPVfSzSia-0',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2af0671-c20c-413e-85a9-82b2950d782a/d2zaj6n-18d109cb-c121-4ff8-a088-d6ddc461d3d6.jpg/v1/fill/w_731,h_1093,q_70,strp/underneath_the_bridge_by_squishy_1_d2zaj6n-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM0NSIsInBhdGgiOiJcL2ZcL2QyYWYwNjcxLWMyMGMtNDEzZS04NWE5LTgyYjI5NTBkNzgyYVwvZDJ6YWo2bi0xOGQxMDljYi1jMTIxLTRmZjgtYTA4OC1kNmRkYzQ2MWQzZDYuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RyN_3DC1JY0fpYi9UKxsjPqzwuPbsUre9HhQeofyeXY']
  }
)
});
router.get('/about', function(req, res) {
  res.send('Additional Route.');
});

module.exports = {
  router:router,
  metaData:metaData
};
