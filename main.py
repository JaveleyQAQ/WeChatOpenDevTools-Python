
from argparse import RawTextHelpFormatter
from utils.commons import Commons
from utils.banner import generate_banner
from utils.colors import Color
import argparse



def print_colored_message(message, color):
    print(color + message + Color.END)

def main():
    HELPALL = """
    请选择要执行的方法：         
                        [+] python  main.py -h  查看帮助
                        [+] python  main.py -x  开启小程序F12              
                        [+] python  main.py -c  开启内置浏览器F12
                        [+] python  main.py -all   开启内置浏览器F12与小程序F12
                        [+] python  main.py -x --cdp-port 62000  指定微信4 DevTools代理端口
                        [+] python  main.py -x --debug-port 9421 指定微信4远程调试端口
                                     
    """
    parser = argparse.ArgumentParser(description=HELPALL, formatter_class=RawTextHelpFormatter)
    parser.add_argument('-x', action='store_true', help='开启小程序F12')
    parser.add_argument('-c', action='store_true', help='开启内置浏览器F12')
    parser.add_argument('-all', action='store_true', help='开启内置浏览器F12与小程序F12')
    parser.add_argument('--debug-port', type=int, default=9421, help='微信4远程调试端口，默认 9421')
    parser.add_argument('--cdp-port', type=int, default=62000, help='微信4 DevTools代理端口，默认 62000')
    parser.add_argument('--wx4-no-scene-patch', action='store_true', help='微信4：禁用 scene 改写，仅保留其他 patch 便于排查闪退')
    parser.add_argument('--wx4-no-cdp-filter', action='store_true', help='微信4：禁用 CDP filter patch 便于排查闪退')
    parser.add_argument('--wx4-no-force-debug-flag', action='store_true', help='微信4：禁用 OnLoadStart 中 dl=1 的强制写入，便于排查闪退')
    parser.add_argument('--wx4-scene-target', type=int, default=1101, help='微信4：scene 改写目标，默认 1101')
    args = parser.parse_args()

    wx4_options = {
        "patch_scene": not args.wx4_no_scene_patch,
        "patch_cdp_filter": not args.wx4_no_cdp_filter,
        "force_debug_flag": not args.wx4_no_force_debug_flag,
        "scene_target": args.wx4_scene_target,
    }

    if args.x:
       commons.load_wechatEx_configs(debug_port=args.debug_port, cdp_port=args.cdp_port, wx4_options=wx4_options)
    elif args.c:
        commons.load_wechatEXE_configs()
    elif args.all:
        commons.load_wechatEXE_and_wechatEx(debug_port=args.debug_port, cdp_port=args.cdp_port, wx4_options=wx4_options)
    else:

        print_colored_message(HELPALL, Color.RED)

if __name__ == "__main__":
    generate_banner()
    commons = Commons()
    main()
    
    
