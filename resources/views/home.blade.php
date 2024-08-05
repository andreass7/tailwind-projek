<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="bg-gradient-to-l from-white to-violet-400 ">
    @include('components.nav')
    <div class="flex justify-end my-8 me-5">
        <input type="text"
            class="input-keyword h-[40px] sm:h-[28px] md:h-[32px]  rounded-r-3xl pe-10 ps-3 focus:outline-none hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="search absolute size-10 text-gray-500 cursor-pointer sm:size-7 md:size-8">
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                clip-rule="evenodd" />
        </svg>
    </div>
    <div class="mt-8 px-6 sm:px-3 md:px-2">
        <div class="pokemon grid grid-cols-5 place-items-center sm:grid-cols-2 md:grid-cols-2 ">
        </div>
    </div>
</body>

</html>
