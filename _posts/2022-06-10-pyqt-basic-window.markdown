---
layout: post
title:  "How to show basic window in PyQt5"
date:   2022-06-10 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---
Finally, first English post.

I will teach you how to show basic window in PyQt5.

This is very basic post as well.

```python
from PyQt5.QtWidgets import QMainWindow, QLabel, QApplication


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.__initUi()
        
    def __initUi(self):
        lbl = QLabel('Hello World!')
        self.setCentralWidget(lbl)
        

if __name__ == "__main__":
    import sys

    app = QApplication(sys.argv)
    w = MainWindow()
    w.show()
    app.exec_()
```

![example](/assets/images/pyqt_basic_window/1.png)

Super basic. But QLabel is little off from the center. Align it:

```python
# know the drill, right?
//..
    def __initUi(self):
        lbl = QLabel('Hello World!')
        lbl.setAlignment(Qt.AlignCenter)
        self.setCentralWidget(lbl)
//..
```

![example](/assets/images/pyqt_basic_window/2.png)

So basic, only label? I don't think this actually is capable of doing something.

At least he needs some friend to hang around with.

How about QTextEdit?

```python
from PyQt5.QtWidgets import QMainWindow, QLabel, QApplication, QVBoxLayout, QTextEdit, QWidget
from PyQt5.QtCore import Qt


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.__initUi()

    def __initUi(self):
        lbl = QLabel('Hello Text Editor!')
        lbl.setAlignment(Qt.AlignCenter)
        te = QTextEdit() # new friend here!

        lay = QVBoxLayout() # layout (layout is needed for 2 or more widgets)
        lay.addWidget(lbl)
        lay.addWidget(te)

        mainWidget = QWidget() # we need widget to contain the layout
        mainWidget.setLayout(lay)
        self.setCentralWidget(mainWidget)


if __name__ == "__main__":
    import sys

    app = QApplication(sys.argv)
    w = MainWindow()
    w.show()
    app.exec_()
```

![example](/assets/images/pyqt_basic_window/3.png)

Basic. What do you expect to my first English post?

This spent so much time than i expected. Just.. Wow.

How can anybody take the time to write down the post far longer than this?


