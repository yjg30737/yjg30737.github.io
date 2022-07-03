---
layout: post
title:  "How to solve CMake error in Flutter"
date:   2022-07-03 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---
Error message generated after Visual Studio upgrade:

```
CMake Error: Error: generator : Visual Studio 17 2022
Does not match the generator used previously: Visual Studio 16 2019
Either remove the CMakeCache.txt file and CMakeFiles directory or choose a different binary directory.
Exception: Unable to generate build files
```

So how can we solve this?

In the project path, enter a command like this:

```
flutter clean
flutter run -d windows
```

That's it!
