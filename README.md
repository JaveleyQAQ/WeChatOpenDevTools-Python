
### **注意本库只能作为学习用途, 造成的任何问题与本库开发者无关, 如侵犯到你的权益，请联系删除。**

### **注意本库只能作为学习用途, 造成的任何问题与本库开发者无关, 如侵犯到你的权益，请联系删除。**

### **注意本库只能作为学习用途, 造成的任何问题与本库开发者无关, 如侵犯到你的权益，请联系删除。**

---

## 支持版本
> 感谢志远大佬的WeChatOpenDevTool开源 代码只是把node改用python3重写，简单实现了一些自动化问题，重要代码都是原作者的。


| Windows 微信版本 | 小程序版本 | 是否为最新版 |
| ---------------- | ---------- | ------------ |
| 3.9.9.43_x64     | 8555_x64   | ✅           |
| 3.9.8.25_x64     | 8531_x64   | ❌           |
| 3.9.8.25_x64     | 8529_x64   | ❌           |
| 3.9.8.25_x64     | 8519_x64   | ❌           |
| 3.9.8.25_x64     | 8501_x64   | ❌           |
| 3.9.8.25_x64     | 8461_x64   | ❌           |
| 3.9.8.25_x64     | 8447_x64   | ❌           |

如何查看当前运行版本？

![image](./docs/images/version0.jpg)

![image](./docs/images/version1.jpg)
![image](./docs/images/version2.jpg)

## 目录

[1. 开启小程序F12](#%E9%A3%9F%E7%94%A8%E6%96%B9%E6%B3%95)

[2. 开启微信内置浏览器F12](#%E5%BC%80%E5%90%AF%E5%BE%AE%E4%BF%A1%E5%86%85%E7%BD%AE%E6%B5%8F%E8%A7%88%E5%99%A8F12)

[3. 常见问题](#%E9%A3%9F%E7%94%A8%E6%96%B9%E6%B3%95)


## 食用方法

### 开启小程序F12

> 只支持windows版本微信，运行前先启动微信运行前先启动微信（建议小号,别被封了。。。）

1. 安装python3版本
2. 下载WeChatOpenDevTools-Python或直接下载编译好的exe
   [WeChatOpenDevTools_64.exe](https://github.com/JaveleyQAQ/WeChatOpenDevTools-Python/releases/)

安装依赖

```
pip3  install -r requirements.txt
```

运行✅

```
python main.py -x 
```

![image](./docs/images/run.jpg)
![image](./docs/images/MG38.jpg)

---

### 开启微信内置浏览器F12

```python
python  main.py -c
```

![1709657739316](./docs/images/demo1.png)

![1709657739316](./docs/images/demo2.png)

![image](https://github.com/JaveleyQAQ/WeChatOpenDevTools-Python/assets/132129852/04053f33-3e88-437b-a5c6-48683c984641)

---


### 常见问题
* 无法修改中文 - yes
* 提示找不到版本或不支持 -  请先看支持的微信版本和小程序版本，如果微信版本相同小程序版本不同，就删除小程序版本目录重启微信，直到刷出支持的小程序版本目录，最后回到上级目录，设置文件夹权限为只读，这样就能一直保持小程序版本一致
* 不支持mac

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=javeleyqaq/WeChatOpenDevTools-Python&type=Date)](https://star-history.com/#javeleyqaq/WeChatOpenDevTools-Python&Date)
