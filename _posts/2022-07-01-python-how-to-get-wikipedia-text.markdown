---
layout: post
title:  "How to save Wikipedia document to local text file with Python?"
date:   2022-07-01 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---
Python is a programming language used in many fields such as web crawling.

Getting the Wikipedia document's content is also simple in Python.

All you need is the <a href="https://pypi.org/project/bs4/">bs4</a>, <a href="https://pypi.org/project/urllib3/">urllib3</a> and <a href="https://pypi.org/project/certifi/">certifi</a> packages.

<strong>bs4</strong> is dummy package of <a href="https://pypi.org/project/beautifulsoup4/">beautifulsoup4</a>. beautifulsoup4 is a library that makes it easy to scrape information from web pages. This package is often used for web crawling.

<strong>urllib3</strong> is used for HTTP request. You need "request" if you want to scrape information from web page, and this will handle it.

<strong>certifi</strong> is used for validating the trustworthiness of SSL certificate while verifying the identity of TLS hosts. Simply put, you can't be trusted if you won't install this.

If the above 3 packages do not exist, you must install them. Here's how to install it:

```shell
python -m pip install certifi

python -m pip install urllib3

python -m pip install bs4
```

Write the following code.

```python
import certifi
import urllib3
from bs4 import BeautifulSoup
import re, os

def convertWikiToText(url):
    # check if it is Wikipedia based URL
    m = re.search(r'\.wikipedia\.org', url) 
    if m:
        http = urllib3.PoolManager(ca_certs=certifi.where())
        # request and get the response info
        resp = http.request('GET', url)
        # decode the response data to make it look better
        resp_data = resp.data.decode('utf-8')
        # if success (200 means success, 404 means error as you know)
        if resp.status == 200:
            soup = BeautifulSoup(resp_data, features='lxml')
            # get the title of document.
            title = soup.find('title').text.split(' - ')[0]
            # Tag that has bodyContent as an id contains all the contents in the document, so find the info of the tag.
            content_tag = soup.find(id='bodyContent')
            # get the text of it.
            content = content_tag.text
            filename = title + '.txt'
            # create the text file
            f = open(filename, 'w', encoding='utf-8')
            f.write(content)
            f.close()
            # start the file right away
            os.startfile(filename)
    else:
        raise Exception('This is not the right URL')

convertWikiToText('https://en.m.wikipedia.org/wiki/Chocolatey')
```

You will get the wikipedia document as a text file.

![example](/assets/images/python_how_to_get_wikipedia_text/1.png)

If you see more about this, check my GitHub repo "<a href="https://github.com/yjg30737/wiki-offline.git">wiki-offline</a>".







