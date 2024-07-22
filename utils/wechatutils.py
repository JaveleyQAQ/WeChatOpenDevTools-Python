import os,re,sys
import psutil,subprocess
from utils.colors import Color

class WechatUtils:
    def __init__(self):
        self.configs_path = self.get_configs_path()
        self.version_list = self.get_version_list()

        # self.pid , self.version =  self.get_wechat_pid_and_version()
        # if self.pid is None and self.version is None:
        #     self.print_process_not_found_message()

    def get_configs_path(self):
        current_path = os.path.abspath(__file__)
        relative_path = '../configs/'
        return os.path.join(os.path.dirname(current_path), relative_path)

    def get_version_list(self):
        configs_path = self.configs_path
        version_list = os.listdir(configs_path)
        versions_list = [int(file.split('_')[1]) for file in version_list if file.startswith('address_')]
        return versions_list

    def is_wechatEx_process(self, cmdline):
        process_name = "WeChatAppEx"
        return cmdline and process_name in cmdline[0] and "--type=" not in ' '.join(cmdline)
    def get_wechat_pids_and_versions(self):
        processes = (proc.info for proc in psutil.process_iter(['pid', 'cmdline'])) 
        wechatEx_processes = (p for p in processes if self.is_wechatEx_process(p['cmdline']))
        wechat_instances = []
        for process in wechatEx_processes:
            pid = process['pid']
            version = self.extract_version_number(process['cmdline'])
            if version in self.version_list:
                wechat_instances.append((pid, version))
        return wechat_instances

    def get_wechat_pid_and_version(self):
        wechat_instances = self.get_wechat_pids_and_versions()
        return wechat_instances[0] if wechat_instances else (None, None)

    def get_wechat_pids_and_versions_mac(self):
        try:
            pid_command = "ps aux | grep 'WeChatAppEx' |  grep -v 'grep' | grep ' --client_version' | grep '-user-agent=' | awk '{print $2}'"
            version_command = "ps aux | grep 'WeChatAppEx' |  grep -v 'grep' | grep ' --client_version' | grep '-user-agent=' | grep -oE 'MacWechat/([0-9]+\.)+[0-9]+\(0x\d+\)' |  grep -oE '(0x\d+)' | sed 's/0x//g'"
            pids = subprocess.run(pid_command, shell=True, check=True, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.split()
            versions = subprocess.run(version_command, shell=True, check=True, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.split()
            return list(zip(map(int, pids), versions))
        except subprocess.CalledProcessError as e:
            print(Color.RED + f"Error getting MacOS WeChat instances: {e.stderr}" + Color.END)
            return []

    def print_process_not_found_message(self):
        print(Color.RED + "[-] 未找到匹配版本的微信进程或微信未运行" + Color.END)
    
    def find_installation_path(self, program_name):
        try:
            import winreg
            reg_path = r"SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall"
            reg_key = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, reg_path)

            for i in range(1024):
                try:
                    sub_key_name = winreg.EnumKey(reg_key, i)
                    sub_key = winreg.OpenKey(reg_key, sub_key_name)
                    display_name = winreg.QueryValueEx(sub_key, "DisplayName")[0]
                    # 排除企业微信 和 适配英文区域安装的WeChat
                    if program_name == display_name or display_name == 'WeChat':
                        install_location = winreg.QueryValueEx(sub_key, "InstallLocation")[0]+"\WeChat.exe"
                        print(Color.GREEN + f"[+] 查找到{program_name}的安装路径是：{install_location}" + Color.END)
                        print(Color.GREEN + f"[+] 正在尝试重启微信..."+ Color.END)
                        return install_location
                except WindowsError:
                    pass

        except Exception as e:
            print(Color.RED + f"[-] 查找安装路径时出错：{e}"+ Color.END)
    

    def extract_version_number(self, cmdline):
        str = ' '.join(cmdline)
        version_match = re.search(r'"version":(\d+)', str)
        return int(version_match.group(1)) if version_match else None
    
    def get_wechat_pid_and_version(self):
        processes = (proc.info for proc in psutil.process_iter(['pid', 'cmdline']))	
        wechatEx_processes = (p for p in processes if self.is_wechatEx_process(p['cmdline']))
        for process in wechatEx_processes:
            pid = process['pid']
            version = self.extract_version_number(process['cmdline'])
            if version in self.version_list:
                return pid, version
        
        return None, None
    
    def print_process_not_found_message(self):
        print(Color.RED + "[-] 未找到匹配版本的微信进程或微信未运行" + Color.END)

    def get_wechat_pid_and_version_mac(self):
        try:
            pid_command="ps aux | grep 'WeChatAppEx' |  grep -v 'grep' | grep ' --client_version' | grep '-user-agent=' | awk '{print $2}' | tail -n 1"
            version_command = "ps aux | grep 'WeChatAppEx' |  grep -v 'grep' | grep ' --client_version' | grep '-user-agent=' | grep -oE 'MacWechat/([0-9]+\.)+[0-9]+\(0x\d+\)' |  grep -oE '(0x\d+)' | sed 's/0x//g' | head -n 1"
            pid  = subprocess.run(pid_command, shell=True, check=True, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.replace("\n","")
            version  = subprocess.run(version_command, shell=True, check=True, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.replace("\n","")
            return int(pid),version
        except subprocess.CalledProcessError as e:
            return e.stderr

