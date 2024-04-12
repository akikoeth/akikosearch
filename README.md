<div align="center">
<img src="./assets/gif/akikoeth1.png" style="width: 240px; height: 240px; border-radius: 10%;">

# AkikoSearch

My own custom LlamaSearch where I have customized it for me, and I don't know why I'm writing this right now because I won't make this public...

But for if some day I make this public here it's, enjoy! This is simply a modified version of the LlamaSearch engine with custom icon, instead of showing my top pages it shows a custom array of my favorite websites, and the good thing of this is that I can make it as long or as short as I want. And in case one of the websites isn't showing its favicon it puts it from another custom site.

<div style="display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;">
<img src="./assets/screenshots/screenshot2.png" style="height: 240px"><img src="./assets/screenshots/screenshot1.png" style="height: 240px"></div>
</div>

## Making your custom favorites list

To make your own favorites list is as easy as making a json file named [`favorites.json`](./assets/json/favorites.json) with the following structure:

```json
{
    "favorites" : [
        {
            {
                "url": "https://example.com",
                "title": "Example",
                "img": "in case you want to use a custom image it has to be an url"
            },
            {
                "url": "https://example.com",
                "title": "Example",
                "img": ""
            }
        }
    ]
}
```

Then is as easy as replacing the [`favorites.json`](./assets/json/favorites.json) file found in [`assets/json`](./assets/json) and that's it, you can make it as long as you want. But I would recommend making it at most 10 long.

---

AkikoEth
