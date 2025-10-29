;
//获取WeChatAppEx.exe的基址
var module = Process.findModuleByName("WeChatAppEx.exe") || Process.findModuleByName('WeChatAppEx Framework')
var base = module.base;
// console.log("模块名称:",module.name);
// console.log("模块地址:",module.base);
// console.log("大小:",module.size);


Object.keys(address).forEach(key => {
    key != "Version" ? address[key] = base.add(address[key]) : false
});

send("[+] WeChatAppEx 注入成功!");
send("[+] 当前小程序版本: " + address.Version);
send("[+] 等待小程序加载...");

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
function sendMessage(msg) {
    msg === null || undefined ? send(msg) : send("[+] 已还原完整F12")
    // send("[+] 已还原完整F12")
}


function isValidStdString(ptr) {
    try {
        // 读取 std::string 的标志字节（偏移23）
        var flag = ptr.add(23).readU8();
        
        // 检查标志的有效性
        if (flag == 0x80) {
            // 堆分配：检查大小和容量是否合理
            var size = ptr.add(8).readUInt();
            var capacity = ptr.add(16).readUInt();
            if (size > 0x10000 || capacity > 0x10000 || size > capacity) {
                return false; // 不合理的大小
            }
            // 检查指针是否有效
            var dataPtr = ptr.readPointer();
            if (dataPtr.isNull()) return false;
        } else if (flag > 23) {
            // 栈分配的flag应该 <= 23
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}

function safeReadStdString(ptr) {
    if (!isValidStdString(ptr)) return null;
    
    try {
        var flag = ptr.add(23).readU8();
        if (flag == 0x80) {
            var size = ptr.add(8).readUInt();
            var dataPtr = ptr.readPointer();
            // 限制最大读取大小，防止读取过大内存
            if (size > 4096) return null;
            return dataPtr.readUtf8String(size);
        } else {
            return ptr.readUtf8String(flag);
        }
    } catch (e) {
        return null;
    }
}

function replaceParams() {
    Interceptor.attach(address.LaunchAppletBegin, {
        onEnter(args) {
            send("[+] HOOK到小程序加载! " + readStdString(args[1]))
            
            var foundAndModified = false;

            for (var i = 600; i < 2048 && !foundAndModified; i += 8) {
                try {
                    var ptr = args[2].add(i);
                    
                    // 使用安全的读取函数
                    var s = safeReadStdString(ptr);
                    
                    // 只处理有效的字符串
                    if (!s || s.length < 20) continue;
                    
                    // 检查是否包含目标配置
                    if (s.indexOf('"enable_vconsole":false') === -1) continue;
                    
                    // 确认这是JSON配置字符串（包含多个关键字段）
                    if (s.indexOf('"isAttrSync"') === -1 && s.indexOf('"scene_note"') === -1) continue;
                    
                    console.log("[*] 在偏移 " + i + " 找到目标配置");
                    
                    var s1 = s.replaceAll('"enable_vconsole":false', '"enable_vconsole": true');
                    
                    if (s !== s1) {
                        try {
                            writeStdString(ptr, s1);
                            send("[+] 成功修改 enable_vconsole 配置");
                            foundAndModified = true;
                        } catch (writeErr) {
                            console.log("[-] 写入失败: " + writeErr);
                        }
                    }
                } catch (a) {
                    // 静默处理
                }
            }
            
            if (!foundAndModified) {
                send("[-] 警告：未找到 enable_vconsole 配置");
            }
        }
    })

}



// 过新版8555检测
if (address.MenuItemDevToolsString) {
    var menuItemDevToolsStringCr = new Uint8Array(address.MenuItemDevToolsString.readByteArray(7));
    var intptr_ = (menuItemDevToolsStringCr[3] & 0xFF) | ((menuItemDevToolsStringCr[4] & 0xFF) << 8) | ((menuItemDevToolsStringCr[5] & 0xFF) << 16) | ((menuItemDevToolsStringCr[6] & 0xFF) << 24);
    var menuItemDevToolsStringPtrData = address.MenuItemDevToolsString.add(intptr_ + 7);
    Memory.protect(menuItemDevToolsStringPtrData, 8, 'rw-')
    menuItemDevToolsStringPtrData.writeUtf8String("DevTools");
    replaceParams()
    setupInterceptor()
}


function setupInterceptor() {

    /**
     * 
     */

    switch (address.Version) {

        case 8555:
            Interceptor.attach(address.WechatAppHtml, {
                onEnter(args) {
                    this.context.rdx = address.WechatWebHtml;
                    sendMessage()
                }
            });

            break;


        case 9105:
            Interceptor.attach(address.SwitchVersion, {
                onEnter(args) {
                    this.context.r8 = this.context.rax
                    sendMessage()
                }
            })
            break;

        case 9079:
            Interceptor.attach(address.SwitchVersion, {
                onEnter(args) {
                    this.context.r8 = this.context.rax
                    sendMessage()
                }
            })
            break;

        case 9115:
            Interceptor.attach(address.SwitchVersion, {
                onEnter(args) {
                    this.context.r8 = this.context.rax
                    sendMessage()
                }
            })
            break;

        case 9129:
            Interceptor.attach(address.SwitchVersion, {
                onEnter(args) {
                    this.context.r8 = this.context.rax
                    sendMessage()
                }
            })
            break;
        case 11159:
            Interceptor.attach(address.SwitchVersion, {
                onEnter(args) {
                    this.context.r8 = this.context.rax
                    sendMessage()
                }
            })
            break;          

        case 13080811:
            Interceptor.attach(address.WechatAppHtml, {
                onEnter(args) {
                    this.context.rsi = address.WechatWebHtml
                    sendMessage()
                }
            })
            break;
            
        case 13080812:
            Interceptor.attach(address.WechatAppHtml, {
                onEnter(args) {
                    this.context.rsi = address.WechatWebHtml
                    sendMessage()
                }
            })
            break;
            
        case 9193:
            Interceptor.attach(address.SwitchVersion, {
                onEnter(args) {
                    this.context.r8 = this.context.rax
                    sendMessage()
                }
            })
            break;
        case 11205:
            Interceptor.attach(address.SwitchVersion, {
                onEnter(args) {
                    this.context.r8 = this.context.rax
                    sendMessage()
                }
            })
            break;
        case 11275:
            Interceptor.attach(address.SwitchVersion, {
                onEnter(args) {
                    this.context.r8 = this.context.rax
                    sendMessage()
                }
            })
            break;
        case 11253:
            Interceptor.attach(address.SwitchVersion, {
                onEnter(args) {
                    this.context.r8 = this.context.rax
                    sendMessage()
                }
            })
            break;
        default:
            console.log(address.Version);
            Interceptor.attach(address.WechatAppHtml, {
                onEnter(args) {
                    this.context.rdx = address.WechatWebHtml;
                    sendMessage()
                }
            });
            break;


        // case "null":
        //     Interceptor.attach(address.WechatAppHtml, {
        //         onEnter(args) {
        //                 const webhtml= "68 74 74 70 73 3A 2F 2F 61 70 70 6C 65 74 2D 64 65 62 75 67 2E 63 6F 6D 2F 64 65 76 74 6F 6F 6C 73 2F 77 65 63 68 61 74 5F 77 65 62 2E 68 74 6D 6C";
        //                 var  data;
        //                 Process.enumerateModules({
        //                     onMatch: function(module){
        //                         var ranges = module.enumerateRanges('r--');
        //                         for (var i = 0; i < ranges.length; i++) {
        //                             var range = ranges[i];
        //                             var scanResults = Memory.scanSync(range.base, range.size, webhtml);
        //                             if (scanResults.length > 0){
        //                                 data = scanResults[0].address
        //                                 // console.log('Memory.scanSync() result for range ' + range.base + '-' + range.size + ':\n' + JSON.stringify(scanResults));
        //                                 }
        //                             }

        //                     },
        //                     onComplete: function(){

        //                     }});

        //                 this.context.rdx = data
        //                 sendMessage()

        //     }
        //     })

        //     break;



    }
}
