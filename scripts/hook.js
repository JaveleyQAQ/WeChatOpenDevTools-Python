;;
for(var addressname in address){
    address[addressname] = parseInt(address[addressname]);
	// console.log(address[addressname])
};

var base = Process.findModuleByName("WeChatAppEx.exe").base
address.LaunchAppletBegin = base.add(address.LaunchAppletBegin);
address.WechatAppHtml = base.add(address.WechatAppHtml);
address.WechatWebHtml = base.add(address.WechatWebHtml);


function readStdString(s) {

    var flag = s.add(23).readU8()
    if (flag == 0x80) {
        // 从堆中读取
        var size = s.add(8).readUInt()
        return s.readPointer().readUtf8String(size)
    } else {
        // 从栈中读取
        return s.readUtf8String(flag)
    }
}
function writeStdString(s, content) {
    var flag = s.add(23).readU8()
    if (flag == 0x80) {
        // 从堆中写入
        var orisize = s.add(8).readUInt()
        if (content.length > orisize) {
            throw "must below orisize!"
        }
        s.readPointer().writeUtf8String(content)
        s.add(8).writeUInt(content.length)
    } else {
        // 从栈中写入
        if (content.length > 22) {
            throw "max 23 for stack str"
        }
        s.writeUtf8String(content)
        s.add(23).writeU8(content.length)
    }
}

//HOOK 启动配置 
Interceptor.attach(address.LaunchAppletBegin, {
    onEnter(args) {
        send("[+] HOOK到小程序加载! " + readStdString(args[1]))
        for (var i = 0; i < 0x1000; i+=8) {
            try {
                var s = readStdString(args[2].add(i))
                var s1 = s.replaceAll("md5", "md6").replaceAll('"enable_vconsole":false', '"enable_vconsole": true')
                if (s !== s1) {
                    writeStdString(args[2].add(i), s1)
                } 
            } catch (a) {
            }
        }
    }
})
//HOOK F12配置 替换原本内容
Interceptor.attach(address.WechatAppHtml, {
    onEnter(args) {
        this.context.rdx = address.WechatWebHtml;
        send("[+] 已还原完整F12")
    }
})

send("[+] WeChatAppEx.exe 注入成功!")

