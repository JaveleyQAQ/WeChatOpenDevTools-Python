#commons.py //2024年3月5日23点25分

from utils.colors import Color
from utils.wechatutils import WechatUtils
import frida,sys,time


class Commons:
    def __init__(self):
        self.wechatutils_instance = WechatUtils()
        self.device = frida.get_local_device()
        self.process = self.device.enumerate_processes()
        self.pid = -1
        self.version_list = []
        self.configs_path = ""

    def onMessage(self, message, data):
        if message['type'] == 'send':
            print(Color.GREEN + message['payload'], Color.END)
        elif message['type'] == 'error':
            print(Color.RED + message['stack'], Color.END)

    def inject_wehcatEx(self, pid, code):
        session = frida.attach(pid)
        script = session.create_script(code)
        script.on("message", self.onMessage)
        script.load()
        sys.stdin.read()
        # session.detach()

    def inject_wechatDLL(self, path, code):
        pid = self.device.spawn(path)
        session = frida.attach(pid)
        script = session.create_script(code)
        script.on("message", self.onMessage)
        script.load()
        self.device.resume(pid)
        time.sleep(10)
        session.detach()
        # sys.stdin.read()

    def load_wechatEx_configs(self):
        path = self.wechatutils_instance.get_configs_path()
        pid, version = self.wechatutils_instance.get_wechat_pid_and_version()
        if pid or version is not None:
            wehcatEx_hookcode = open(path + "..\\scripts\\hook.js", "r", encoding="utf-8").read()
            wechatEx_addresses = open(path + "..\\configs\\address_{}_x64.json".format(version)).read()
            wehcatEx_hookcode = "var address=" + wechatEx_addresses + wehcatEx_hookcode
            self.inject_wehcatEx(pid, wehcatEx_hookcode)
        else:
            self.wechatutils_instance.print_process_not_found_message()

    def load_wechatEXE_configs(self):
        pid, version = self.wechatutils_instance.get_wechat_pid_and_version()
        if pid or version is not None:
            print(Color.RED+f"[-] 请退出微信后在执行该命令 "+Color.END)
            return 0
        
        wechatEXEpath = self.wechatutils_instance.find_installation_path("微信")
        path = self.wechatutils_instance.get_configs_path()
        wehcatEXE_hookcode = open(path + "..\\scripts\\WechatWin.dll\\hook.js", "r", encoding="utf-8").read()
        self.inject_wechatDLL(wechatEXEpath, wehcatEXE_hookcode)

    def load_wechatEXE_and_wechatEx(self):
        pid, version = self.wechatutils_instance.get_wechat_pid_and_version()
        if pid or version is not None:
            print(Color.RED+f"[-] 请关闭微信后在执行该命令 "+Color.END)
            return 0
        self.load_wechatEXE_configs()
        self.load_wechatEx_configs()