import  sys,re,os
import psutil,frida
from utils import banner
from colorama import init, Fore, Style


device = frida.get_local_device()
process = device.enumerate_processes()
pid = -1;
version_list = []
configs_path=""


def get_version_list():

    global configs_path 
    current_path = os.path.abspath(__file__)
    relative_path = 'configs'
    configs_path = os.path.join(os.path.dirname(current_path), relative_path)
    version_list = os.listdir(configs_path)
    versions_list = [int(file.split('_')[1]) for file in version_list if file.startswith('address_')]
  
    return versions_list


def onMessage(message, data):

    if message['type'] == 'send':
        print(Fore.GREEN + message['payload'] , Style.RESET_ALL)
    elif message['type'] == 'error':
        print(Fore.RED + message['stack'], Style.RESET_ALL)

def is_wechat_process(cmdline):
    process_name = "WeChatAppEx"
    return cmdline and process_name in cmdline[0] and "--type=" not in ' '.join(cmdline)

def extract_version_number(cmdline):
    str = ' '.join(cmdline)
    version_match = re.search(r'"version":(\d+)', str)
    return int(version_match.group(1)) if version_match else None

def get_wechat_pid_and_version():
    processes = (proc.info for proc in psutil.process_iter(['pid', 'cmdline']))	
    wechat_processes = (p for p in processes if is_wechat_process(p['cmdline']))
    for process in wechat_processes:
        pid = process['pid']
        version = extract_version_number(process['cmdline'])
        if version in version_list:
            return pid, version
    return None, None

def inject_script(pid, address_file_path, script_code):
    with open(address_file_path, 'r', encoding='utf-8') as file:
        address_ = "var address=" + file.read() + script_code
        
        session = frida.attach(pid)
        script = session.create_script(address_)
        script.on("message", onMessage)
        script.load()
        sys.stdin.read()
        session.detach()


def print_process_not_found_message():
    print(Fore.RED + "[-] 未找到匹配版本的微信进程或 微信未运行" + Style.RESET_ALL)

if __name__ == '__main__':
    banner.generate_banner()
    path = os.path.dirname(os.path.abspath(__file__))+str("\\scripts\\hook.js")
    version_list = get_version_list()
    pid, version = get_wechat_pid_and_version()
    script_code = open(path,"r",encoding="utf-8").read()
    
    if pid and version:
        print(Fore.GREEN +"[+] 找到匹配版本号为:", version  , Style.RESET_ALL)
        address_file_path = configs_path+"\\address_{}_x64.json".format(version)
        inject_script(pid, address_file_path,script_code )
    else:
        print_process_not_found_message()
        