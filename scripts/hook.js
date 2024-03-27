;
//获取WeChatAppEx.exe的基址
var base = Process.findModuleByName("WeChatAppEx.exe").base


for (let key in address) {
    address[key] = base.add(address[key]); 
}

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

//过新版8555检测
if(address.MenuItemDevToolsString){
    var menuItemDevToolsStringCr = new Uint8Array(address.MenuItemDevToolsString.readByteArray(7));
   var intptr_ = (menuItemDevToolsStringCr[3] & 0xFF) | ((menuItemDevToolsStringCr[4] & 0xFF) << 8) | ((menuItemDevToolsStringCr[5] & 0xFF) << 16) | ((menuItemDevToolsStringCr[6] & 0xFF) << 24);
   var menuItemDevToolsStringPtrData = address.MenuItemDevToolsString.add(intptr_+7);
   Memory.protect(menuItemDevToolsStringPtrData, 8, 'rw-')
   menuItemDevToolsStringPtrData.writeUtf8String("DevTools");
}


Interceptor.attach(address.LaunchAppletBegin, {
    onEnter(args) {
        send("[+] HOOK到小程序加载! " + readStdString(args[1]))
        for (var i = 0; i < 0x1000; i+=8) {
            try {
                var s = readStdString(args[2].add(i))
                
                var s1 = s.replaceAll("md5", "md6")
                    .replaceAll('"enable_vconsole":false', '"enable_vconsole": true')
                    .replaceAll('"frameset":false', '"frameset": true')
                    //"frameset":false
                if (s !== s1) {
                    //send(s1)
                    writeStdString(args[2].add(i), s1)
                } 
            } catch (a) {
            }
        }
    }
})



