var _config_index = {
    intro: {
        title: [ "Arctic Flora Shop", "of ICHISAKI" ],
        content: `
A free, fully responsive HTML5 + CSS3 site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a>
<br />
and released for free under the <a href="https://html5up.net/license">Creative Commons license</a>.
        `,
    },
    postfeat: {
        date: "Aug 31<sup>st</sup>, 2017",
        desc: "The Main Blog of our ICHISAKI Works",
        url: "sekai/",
        content: `
<del>具体描述，我们所塑造的ichisaki的世界。</del>
<br />
我们的主站，基于<a href="https://hexo.io/zh-cn/">Hexo博客框架</a>搭建。
        `,
        cover: "images/pjsekai-colorfullive-1st-leoneed-screenshot-01.jpeg",
    },
    posts: [
        {   date: "Feb 14<sup>th</sup>, 2022",
            desc: [ "12H-Event", "of Valentine 2022", "for ICHISAKI" ],
            url: "valentine-12hevent-2022/",
            content: `
icsk 2022年 情人节12h行动
            `,
            cover: "images/Card_7.jpeg",
            moreicon: "arrow",
        },
        {   date: "March 14<sup>th</sup>, 2022",
            desc: [ "12H-Event", "of Whiteday 2022", "for ICHISAKI" ],
            url: "whiteday-12hevent-2022/",
            content: `
icsk 2022年 白色情人节12h行动
            `,
            cover: "images/Card_316.jpeg",
            moreicon: "angle-double",
        },
    ],
};
(($) => {
    $("#intro h1").html(_config_index.intro.title.join("<br />"));
    $("#intro p").html(_config_index.intro.content);
    $("#main .post.featured a").attr("href", _config_index.postfeat.url);
    $("#main .post.featured .date").html(_config_index.postfeat.date);
    $("#main .post.featured h2 a").html(_config_index.postfeat.desc);
    $("#intro-content").html(_config_index.postfeat.content);
    $("#main .post.featured .image.main img").attr("src", _config_index.postfeat.cover);
    for (const eachpost of _config_index.posts) {
        $("#main section.posts").append(
            $("<article></article>").html([
                $("<header></header>").html([
                    $("<span></span>").attr("class", "date").html(eachpost.date),
                    $("<h2></h2>").html($("<a></a>").attr("href", eachpost.url).html(eachpost.desc.join("<br />"))),
                ]),
                $("<a></a>").attr({
                    "class": "image fit",
                    href: eachpost.url,
                }).html($("<img />").attr("src", eachpost.cover)),
                $("<p></p>").html(eachpost.content),
                $("<ul></ul>").attr("class", "actions special").html(
                    $("<li></li>").html(
                        $("<a></a>").attr({
                            "class": "button",
                            href: eachpost.url,
                        }).html([
                            "Read More ",
                            $("<li></li>").attr("class", "fa fa-" + eachpost.moreicon + "-right"),
                        ])
                    )
                ),
            ])
        );
    }
})(jQuery);