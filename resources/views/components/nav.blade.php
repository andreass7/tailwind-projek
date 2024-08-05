<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <style>
        .active {
            color: #fff;
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="w-[180px] mx-auto">
        <nav class="border-2 m-5 w-auto rounded-3xl border-white shadow-lg">
            <ol class="flex space-x-6 p-3 font-sans font-semibold">
                <li
                    class="nav-link cursor-pointer hover:text-white hover:underline {{ request()->routeIs('home') ? 'active' : '' }}">
                    <a href="{{ route('home') }}">Home</a>
                </li>
                <li
                    class="nav-link cursor-pointer  hover:text-white hover:underline {{ request()->routeIs('about') ? 'active' : '' }}">
                    <a href="{{ route('about') }}">About</a>
                </li>
            </ol>
        </nav>
    </div>
</body>

</html>
