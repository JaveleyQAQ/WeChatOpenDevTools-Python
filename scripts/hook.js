;
//获取WeChatAppEx.exe的基址
var module = Process.findModuleByName("WeChatAppEx.exe")
var base = module.base
// console.log("模块名称:",module.name);
// console.log("模块地址:",module.base);
// console.log("大小:",module.size);


for (let key in address) {
    
    address[key] = base.add(address[key]); 
}
send("[+] WeChatAppEx.exe 注入成功!");

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

// 过新版8555检测
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
                // console.log(s)
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




if(address.WechatVersionSwitch){

	Interceptor.attach(address.WechatVersionSwitch, {
		onEnter(args) {
			
			this.context.r8 = this.context.rax
			send("[+] 已还原完整F12")
		}
	})

}else{
	Interceptor.attach(address.WechatAppHtml, {
	    
	    onEnter(args) {
	            const webhtml= "68 74 74 70 73 3A 2F 2F 61 70 70 6C 65 74 2D 64 65 62 75 67 2E 63 6F 6D 2F 64 65 76 74 6F 6F 6C 73 2F 77 65 63 68 61 74 5F 77 65 62 2E 68 74 6D 6C";
	            var  data;
	            Process.enumerateModules({
	                onMatch: function(module){
	                    var ranges = module.enumerateRanges('r--');
	                    for (var i = 0; i < ranges.length; i++) {
	                            
	                        var range = ranges[i];
	                        var scanResults = Memory.scanSync(range.base, range.size, webhtml);
	                        if (scanResults.length > 0){
	                            data = scanResults[0].address
	                            // console.log('Memory.scanSync() result for range ' + range.base + '-' + range.size + ':\n' + JSON.stringify(scanResults));
	                            }
	                        }
	        
	                },
	                onComplete: function(){
	     
	                }
	
	            });
	
	            this.context.rdx = data
	
	
	}
	})
}
