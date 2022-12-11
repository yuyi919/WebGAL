"use strict";
exports.__esModule = true;
var index_1 = require("../index");
var scriptConfig_1 = require("./scriptConfig");
var parser = new index_1.SceneParser(function (assetList) {
}, function (fileName, assetType) {
    return fileName;
}, scriptConfig_1.ADD_NEXT_ARG_LIST, scriptConfig_1.SCRIPT_CONFIG);
var result = parser.parse("\n; \u521D\u59CB\u573A\u666F\uFF0C\u4EE5\u53CA\u7279\u6548\u6F14\u793A\nchangeBg:c4.jpg -next;\nunlockCg:c4.jpg -name=\u8857\u524D;  \u89E3\u9501\u90E8\u5206CG\nunlockCg:xgmain.jpeg -name=\u661F\u5149\u5496\u5561\u9986\u4E0E\u6B7B\u795E\u4E4B\u8776;\nunlockBgm:s_Title.mp3 -name=Smiling-Swinging!!;\nWebGAL:\u7279\u6548\u7CFB\u7EDF\u662F3.9.2\u7248\u672C\u65B0\u5F15\u5165\u7684\u7CFB\u7EDF\uFF0C\u4F60\u60F3\u8981\u770B\u7279\u6548\u7684\u6F14\u793A\u5417\uFF1F;\nchoose:\u89C2\u770B\u7279\u6548\u6F14\u793A:demo|\u6211\u4E0D\u8981\u770B\u7279\u6548\uFF0C\u76F4\u63A5\u6765\u5427\uFF01:toStart;\nlabel:demo;\npixiInit;\npixiPerform:rain;\nWebGAL:\u73B0\u5728\u5C55\u793A\u7684\u662F\u4E0B\u96E8\u7684\u7279\u6548\u3002;\npixiInit;\npixiPerform:snow;\nWebGAL:\u73B0\u5728\u5C55\u793A\u7684\u662F\u4E0B\u96EA\u7684\u7279\u6548\u3002;\nsetTextbox:hide;\npixiInit;\nsetTextbox:on -next;\nWebGAL:\u7279\u6548\u7684\u6F14\u793A\u5DF2\u7ECF\u7ED3\u675F\uFF0C\u73B0\u5728\u6211\u4EEC\u6B63\u5F0F\u5F00\u59CB\u5427\uFF01;\n\n; \u6B63\u5F0F\u573A\u666F\nlabel:toStart;\nplayVideo:OP.mp4;\nchangeBg:c3.jpg -next;\nunlockCg:c3.jpg -name=cafe;\nchangeFigure:m2.png -left -next;\nbgm:cb1.mp3;\nunlockBgm:cb1.mp3 -name=\u3072\u3068\u3059\u3058\u306E\u5149\u660E;\nsetAnimation:enter-from-left -target=fig-left -next;\n\u7C73\u5496\u591A:\u86CB\u5305\u996D\u662F\u681E\u90A3\u505A\u7684\uFF0C\u4F46\u7EA2\u8336\u662F\u590F\u76EE\u6CE1\u7684\u3002 -v1.ogg;\n\u6602\u6674:......;\n\u987A\u4FBF\u95EE\u4E00\u4E0B\uFF0C\u4F60\u662F\u6253\u7B97\u505A\u4EC0\u4E48\u7684\uFF1F;\nchangeFigure:m1.png -left -next;\n\u7C73\u5496\u591A:\u5C31\u662F\u5012\u996E\u6599\u3002\u7136\u540E\u5496\u5561\u548C\u7EA2\u8336\u7684\u51B2\u6CE1\u65B9\u5F0F\u6211\u8FD8\u662F\u8BB0\u4F4F\u4E86\u7684\u3002 -v2.ogg;\n\u6602\u6674:\u8FD9\u3001\u8FD9\u6837\u4E48......;\n:\u8FD9\u732B\u722A\u5B50\u771F\u7684\u80FD\u6CE1\u8336\u4E48\u3002;\n\u62FF\u5F97\u4E86\u6C34\u58F6\u5417\uFF1F\u5C31\u51ED\u4ED6\u90A3\u4E2A\u8089\u7403\u722A\u5B50......;\n\u96BE\u9053\u8FD9\u4E9B\u4E5F\u662F\u51ED\u501F\u732B\u5996\u7684\u5947\u7279\u529B\u91CF\u505A\u5230\u7684\u5417\uFF1F;\nchangeFigure:none -left -next;\nchangeFigure:k1.png -next;\nsetAnimation:enter-from-bottom -target=fig-center -next;\n\u681E\u90A3:\u90A3\u4E48\uFF0C\u4F60\u60F3\u5148\u5C1D\u54EA\u4E2A\uFF1F -v3.ogg;\nchoose:\u54C1\u5C1D\u86CB\u5305\u996D:dbf|\u54C1\u5C1D\u7EA2\u8336:hc;\n\n; \u681E\u90A3\u9009\u9879\nlabel:dbf;\n\u6602\u6674:\u603B\u4E4B\uFF0C\u5148\u786E\u8BA4\u4E0B\u86CB\u5305\u996D\u7684\u5473\u9053\u5427;\nchangeFigure:k2.png -next;\n\u681E\u90A3:\u660E\u767D\u4E86\uFF0C\u4EA4\u7ED9\u6211\u5427 -v4.ogg;\nchangeFigure:none -next;\nchangeFigure:m2.png -left -next;\nchangeFigure:k3.png -right -next;\nsetAnimation:enter-from-left -target=fig-left -next;\nsetAnimation:enter-from-right -target=fig-right -next;\n\u681E\u90A3:\u90A3\u4E48\u7C73\u5496\u591A\u5148\u751F\uFF0C\u6211\u53BB\u505A\u4E00\u4E0B\u8BD5\u4F5C\u54C1 -v5.ogg;\n\u7C73\u5496\u591A:\u55EF\u3002\u53BB\u5427 -v6.ogg;\nchangeFigure:none -left -next;\nchangeFigure:none -right -next;\nchangeFigure:k4.png -next;\nsetAnimation:enter-from-bottom -target=fig-center -next;\n\u681E\u90A3:\u90A3\u4E48\u9AD8\u5CAD\u540C\u5B66\uFF0C\u6211\u4EEC\u79FB\u52A8\u5230\u53A8\u623F\u5427 -v7.ogg;\nchangeFigure:none -next;\nbgm:cb2.mp3;\nunlockBgm:cb2.mp3 -name=Tea Break;\nchangeBg:c2.jpg;\nunlockCg:c2.jpg -name=\u53A8\u623F;\nchangeFigure:k2.png -next;\n\u681E\u90A3:\u8BDD\u4E0D\u591A\u8BF4\u5F00\u59CB\u505A\u5427 -v8.ogg;\njumpLabel:end;\n\n; \u590F\u76EE\u9009\u9879\nlabel:hc;\nchangeFigure:none -next;\nchangeFigure:m1.png -left -next;\nchangeFigure:k1.png -right -next;\nsetAnimation:enter-from-left -target=fig-left -next;\nsetAnimation:enter-from-right -target=fig-right -next;\n\u7C73\u5496\u591A:\u90A3\u4E48\u5C31\u662F\uFF0C\u590F\u76EE\u4E86\u5427 -v9.ogg;\nchangeFigure:k6.png -right -next;\n\u681E\u90A3:\u5979\u521A\u53BB\u4F11\u606F\uFF0C\u8981\u4E0D\u8981\u6211\u53EB\u56DE\u6765\u5462\uFF1F -v10.ogg;\n\u6602\u6674:\u6CA1\u4E8B\uFF0C\u6211\u81EA\u5DF1\u53BB\u5427;\nchangeFigure:none -left -next;\nchangeFigure:none -right -next;\nbgm:cb2.mp3;\nchangeBg:c1.jpg -next;\nunlockCg:c1.jpg -name=\u4F11\u606F\u5BA4;\n:\u6211\u5148\u6572\u4E86\u6572\u95E8;\nminiAvatar:n1.png;\n\u590F\u76EE:\u54EA\u4F4D\uFF1F -v11.ogg;\n\u6602\u6674:\u6211\u662F\u9AD8\u5CAD\uFF0C\u53EF\u4EE5\u8FDB\u53BB\u5417\uFF1F;\n\u590F\u76EE:\u53EF\u4EE5\uFF0C\u6CA1\u95EE\u9898 -v12.ogg;\n\u6602\u6674:\u6253\u6405\u4E86;\nminiAvatar:none;\nchangeFigure:n4.png -next;\n\u6602\u6674:\u6253\u6405\u4F60\u4F11\u606F\u4E86;\n\u590F\u76EE:\u4E0D\u7528\u5728\u610F\uFF0C\u600E\u4E48\u4E86\uFF1F -v13.ogg;\nchangeFigure:n2.png -next;\n:\u5979\u5E76\u6CA1\u6709\u65E0\u7CBE\u6253\u91C7\uFF0C\u6BD4\u60F3\u8C61\u4E2D\u7CBE\u795E\u591A\u4E86;\n\u6602\u6674:\u95EE\u9053\u62FF\u624B\u83DC\u8C31\uFF0C\u5C31\u542C\u8BF4\u56DB\u5B63\u540C\u5B66\u6CE1\u7684\u7EA2\u8336\u5473\u9053\u4E0D\u9519\uFF0C\u6211\u4E5F\u60F3\u54C1\u5C1D\u4E00\u4E0B;\n\u590F\u76EE:\u660E\u767D\u4E86\uFF0C\u90A3\u6211\u4EEC\u56DE\u53BB\u5427 -v14.ogg;\njumpLabel:end;\n\n; \u7ED3\u675F\u573A\u666F\nlabel:end;\nchangeFigure:none -next;\nWebGAL:\u57FA\u7840\u6F14\u51FA\u7684\u5C55\u793A\u5DF2\u7ECF\u7ED3\u675F\u3002;\n", "test", "/test.txt");
console.log(result);