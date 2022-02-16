var _configurations = {
    head: {
        title: "ICHISAKI Flora Shop",
    },
    upside: {
        header: "ICHISAKI",
        nav: {
            links: [
                {   desc: "ICHISAKI",
                    url: "index.html",
                },
                /*
                {   desc: "Generic Page",
                    url: "generic.html",
                },
                {   desc: "Elements Reference",
                    url: "elements.html",
                },
                */
            ],
            icons: [
                /*
                {   desc: "Twitter",
                    icon: "twitter",
                    url: "#",
                },
                {   desc: "Facebook",
                    icon: "facebook-f",
                    url: "#",
                },
                {   desc: "Instagram",
                    icon: "instagram",
                    url: "#",
                },
                */
                {   desc: "GitHub",
                    icon: "github-alt",
                    url: "https://github.com/lnicsk-pjsekai/",
                },
            ],
        },
    },
    footer: {
        announcement: `
声明内容
        `,
        friendslink:`
友情链接，例如其他couple群的站点。以下为样例：
<!--
<br />
如若有相关的站点希望添加友链，则应满足如下条件:
<br />
<code>创作内容安全，无暴力、政治敏感内容；</code>
<br />
<code>创作内容尊重原作人物形象，无对任何角色的侮辱性内容；</code>
<br />
<code>命名统一为"「couple标签】+简介"的形式，couple标签中左右位随意，简介不得超过39个标准字符（含标点符号，每个全角、半角分别视为两个、一个标准字符）；</code>
<br />
-->
        `,
        friendslist: [
            {   characters: ["望月穗波", "日野森志步"],
                url: "#",
                desc: "心印",
            },
            /*
            {   characters: ["星乃一歌", "望月穗波"],
                url: "#", //"https://www.bilibili.com/video/av334072784/",
                desc: "折光",
            },
            {   characters: ["星乃一歌", "日野森志步"],
                url: "#", //"https://www.bilibili.com/video/av673241508/",
                desc: "风羽",
            },
            {   characters: ["天马咲希", "望月穗波"],
                url: "#", //"https://www.bilibili.com/video/av464699661/",
                desc: "沙城",
            },
            {   characters: ["天马咲希", "日野森志步"],
                url: "#", //"https://www.bilibili.com/video/av205048855/",
                desc: "丑马",
            },
            {   characters: ["青柳冬弥", "天马咲希"],
                url: "#", //"https://www.bilibili.com/video/av505834667/",
                desc: "灯塔",
            },
            {   characters: ["天马司", "天马咲希"],
                url: "#", //"https://www.bilibili.com/video/av291530455/",
                desc: "夏虫",
            },
            {   characters: ["星乃一歌", "宵崎奏"],
                url: "#",
                desc: "初岚",
            },
            {   characters: ["星乃一歌", "草薙宁宁"],
                url: "#",
                desc: "你好",
            },
            */
        ],
        rightpart: [
            {   desc: "About us",
                content: `
关于我们
                `,
            },
            {   desc: "Location(s)",
                content: `
<ul>
<li><a href="https://zh.moegirl.org.cn/Leo/need#Leo/need的“SEKAI”">Sekai of Classrooms</a> (教室的Sekai);
</li>
<li>某家医院；
</li>
<li>某处花店；
</li>
<li>某公园，及其攀爬架；
</li>
<li><a href="https://zh.moegirl.org.cn/宫益坂女子学园">Miyamasuzaka Female Academy</a>, Class 1-C of Senior High (宫益坂女子学园，高中部1-C);
</li>
</ul>
                `,
            },
            {   desc: "Social",
                content: `<ul>
<li>QQ-Group (QQ群号): <code>159857422</code>
</li>
</ul>
                `,
            },
            /*
            {   desc: "Construction",
                content: `<ul>
<li><a href="https://sandyzikun.github.io/">凪坤</a> (GitHub<code>@<a href="https://github.com/sandyzikun/">sandyzikun</a></code>)
</li>
</ul>
                `,
            },
            */
        ],
    },
    copyright: [
        {   content: `&copy; ICHISAKI Flora Shop`,
        },
        {   content: `Design: <a href="https://html5up.net">HTML5 UP</a>.Massively`,
        },
        {   content: `Construct: <a href="https://sandyzikun.github.io/">凪坤</a> (GitHub<code>@<a href="https://github.com/sandyzikun/">sandyzikun</a></code>)`
        },
    ]
};
(($) => {
    $("title").text(_configurations.head.title);
    $("#header a").text(_configurations.upside.header);
    for (const eachlink of _configurations.upside.nav.links) {
        $("#nav .links").append(
            $("<li></li>").html(
                $("<a></a>").attr({
                    target: "_blank",
                    href: eachlink.url,
                }).text(eachlink.desc)
            )
        );
    }
    $($("#nav .links li")[current_tab]).attr("class", "active");
    for (const eachicon of _configurations.upside.nav.icons) {
        $("#nav .icons").append(
            $("<li></li>").html(
                $("<a></a>").attr({
                    target: "_blank",
                    href: eachicon.url,
                    "class": "icon brands fa-" + eachicon.icon,
                }).html($("<span></span>").attr("class", "label").text(eachicon.desc))
            )
        );
    }
    $("#footer-announcement").html(_configurations.footer.announcement);
    $("#footer-friendslink").html(_configurations.footer.friendslink);
    for (const eachfriend of _configurations.footer.friendslist) {
        $("#footer-friendslist").append(
            $("<li></li>").html([
                "「" + eachfriend.characters[0] + "x" + eachfriend.characters[1] + "】",
                $("<a></a>").attr({
                    target: "_blank",
                    href: eachfriend.url,
                }).text(eachfriend.desc)
            ])
        );
    }
    for (const each of _configurations.footer.rightpart) {
        $("#footer-right").append(
            $("<section></section>").attr("class", "alt").html([
                $("<h3></h3>").text(each.desc),
                $("<p></p>").html(each.content),
            ])
        );
    }
    for (const each of _configurations.copyright) {
        $("#copyright ul").append($("<li></li>").html(each.content));
    }
})(jQuery);