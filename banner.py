import pyfiglet
import random

def colored_print(text, color_code):
    print(f"{color_code}{text}\033[0m")

def generate_banner():
    name="""
        公众号: 一位不愿透露姓名的热心网友
        Github：https://github.com/JaveleyQAQ
    """
    selected_fonts = ['standard', 'big', 'slant', 'small', 'shadow']
    selected_font = random.choice(selected_fonts)
    font = pyfiglet.Figlet(font=selected_font)
    ascii_banner = font.renderText("WX DevTools")
    color_codes = ['\033[91m', '\033[92m', '\033[93m', '\033[94m', '\033[95m', '\033[96m']
    selected_color = random.choice(color_codes)
    ascii_banner_with_author = ascii_banner.rstrip('\r\n') + f'\n\n\t'+name+f'\n'
    colored_print(ascii_banner_with_author, selected_color)