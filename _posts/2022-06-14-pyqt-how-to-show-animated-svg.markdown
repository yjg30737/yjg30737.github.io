---
layout: post
title:  "How to show animated SVG icon in PyQt5"
date:   2022-06-14 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---
So, here we are. The second English post.

How to show animated SVG icon? Quite simple.

But before you start it, download the sample <a href="https://loading.io/asset/579298">SVG icon</a> first.

Make directory name ico and move downloaded SVG icon to directory you made.

Then make the Python script like below.

```python
import sys

from PyQt5.QtSvg import QSvgWidget
from PyQt5.QtWidgets import QApplication


# QSvgWidget is good to use when you want to make SVG-related widget.
class AnimatedSvgExample(QSvgWidget):
    def __init__(self):
        super().__init__()
        self.__initUi()

    def __initUi(self):
        r = self.renderer()
        # set FPS of SVG animation.
        r.setFramesPerSecond(60) 
        ico_filename = 'ico/rolling.svg'
        # set SVG icon to QSvgWidget.
        r.load(ico_filename) 


if __name__ == "__main__":
    app = QApplication(sys.argv)
    r = AnimatedSvgExample()
    r.show()
    sys.exit(app.exec_())
```

Copy and run.

![example](/assets/images/pyqt_how_to_show_animated_svg/1.png)

There is <a href="https://github.com/yjg30737/pyqt-animated-svg-example.git">GitHub repository</a> i made as an example.

Well, that's it.

But i gotta say this method is not perfect.

<b>The problem is PyQt or Python whatever only accept the animateTransform.</b>

So far i can't find how to let them properly handle with other animate-related tag.

So bottom line, this method(which is only method in Qt by the way) works to SVG icon which has animateTransform, not animate/animateMotion.

I will find out how to solve that problem, definitely.

