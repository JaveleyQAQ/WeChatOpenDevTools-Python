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



// 创建一个函数，用于拦截CreateProcessW函数
var cpsPtr = Module.findExportByName("kernel32.dll", "CreateProcessW");
var cps = new NativeFunction(cpsPtr,'bool', ['pointer', 'pointer', 'pointer', 'pointer', 'bool', 'uint32', 'pointer', 'pointer', 'pointer', 'pointer']);

// 拦截CreateProcessW函数，在函数调用前和调用后分别执行onEnter和onLeave函数
Interceptor.attach(cpsPtr, {
    onEnter: function (args) {
        // 获取CreateProcessW函数的参数
        this.pi = args[9];
        this.exepath = args[0];
        this.cmdline = args[1];
        let aaa = this.cmdline.readUtf16String();
        // 替换参数中的--log-level=2为--log-level=0 --xweb-enable-inspect=1
        aaa = aaa.replaceAll("--log-level=2", "--log-level=0 --xweb-enable-inspect=1");
        this.cmdline.writeUtf16String(aaa);
    },
    onLeave: function (retval) {
        // send("[+] 可执行路径："+this.exepath.readUtf16String())
       
        // 打印可执行路径
        // send("[+] 可执行路径："+this.exepath.readUtf16String())
        
        // // 打印命令行参数
        send("[+] 命令行参数："+this.cmdline.readUtf16String());
        //--xweb-enable-inspect
        // 打印进程id
    //    send("[+] 进程id: "+this.cmdline.readUtf16String());
    }
}
);