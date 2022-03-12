---
layout: page
title: Settings
permalink: /settings/
---
<head>
    <style>
        .dark-mode {
            background-color: black;
            color: white;
        }
    </style>
</head>

<body>
    <label>
        <input type="checkbox" onClick="myFunction()">Dark mode
    </label>
    <script>
        function myFunction() 
        {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }
    </script>
</body>