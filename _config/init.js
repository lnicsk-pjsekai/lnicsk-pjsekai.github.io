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
友情链接，如其他couple群的站点...
<br />
如若有相关的站点希望添加友链，则应满足如下条件:
<br />
<code>创作内容安全，无暴力、政治敏感内容；</code>
<br />
<code>创作内容尊重原作人物形象，无对任何角色的侮辱性内容；</code>
<br />
<code>命名统一为"「couple标签】+简介"的形式，couple标签中左右位随意，简介不得超过39个标准字符（含标点符号，每个全角、半角分别视为两个、一个标准字符）；</code>
<br />
实例:
        `,
        friendslist: [
            {   characters: ["望月穗波", "日野森志步"],
                url: "#",
                desc: "Description",
            },
            {   characters: ["星乃一歌", "望月穗波"],
                url: "#",
                desc: "Description",
            },
            {   characters: ["星乃一歌", "日野森志步"],
                url: "#",
                desc: "Description",
            },
            {   characters: ["天马咲希", "望月穗波"],
                url: "#",
                desc: "Description",
            },
            {   characters: ["天马咲希", "日野森志步"],
                url: "#",
                desc: "Description",
            },
            {   characters: ["青柳冬弥", "天马咲希"],
                url: "#",
                desc: "Description",
            },
            {   characters: ["天马司", "天马咲希"],
                url: "#",
                desc: "Description",
            },
        ],
        rightpart: [
            {   desc: "About us",
                content: `
关于我们
<br />
<del>(大概也就一句话...更多的可以在上面写)</del>
                `,
            },
            {   desc: "Location(s)",
                content: `
<a href="https://zh.moegirl.org.cn/Leo/need#Leo/need的“SEKAI”">Sekai of Classrooms</a>
(教室的Sekai);
<br />
某家医院；
<br />
某处花店；
<br />
某公园，及其攀爬架；
<br />
<a href="https://zh.moegirl.org.cn/宫益坂女子学园">Miyamasuzaka Female Academy</a>, Class 1-C of Senior High
(宫益坂女子学园，高中部1-C);
                `,
            },
            {   desc: "Social",
                content: `
QQ-Group (QQ群号): <code>200708313965</code>
                `,
            },
        ],
    },
    copyright: [
        {   content: `&copy; Untitled`,
        },
        {   content: `Design: <a href="https://html5up.net">HTML5 UP</a>.Massively`,
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