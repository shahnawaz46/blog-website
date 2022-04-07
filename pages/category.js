import React from 'react';
import style from '../styles/category.module.scss'

const Category = () => {
    return (
        <div className={style['main-category-div']} >
            <h2>All Blog Categories</h2>
            <div>
                <div className={style['category-content']}>
                    <h4>Javascript</h4>
                    <p>
                        JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries
                    </p>
                    <p>
                        JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.
                    </p>
                </div>

                <div className={style['category-content']}>
                    <h4>C++</h4>
                    <ul>
                        <li>C++ is a cross-platform language that can be used to create high-performance applications.</li>
                        <li>C++ was developed by Bjarne Stroustrup, as an extension to the C language.</li>
                        <li>C++ gives programmers a high level of control over system resources and memory.</li>
                        <li>The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.</li>
                        <li>C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.</li>
                        <li>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.</li>
                        <li>C++ is portable and can be used to develop applications that can be adapted to multiple platforms.</li>
                    </ul>
                </div>

                <div className={style['category-content']}>
                    <h4>Python</h4>
                    <p>
                        Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.
                    </p>
                    <p>
                        Often, programmers fall in love with Python because of the increased productivity it provides. Since there is no compilation step, the edit-test-debug cycle is incredibly fast. Debugging Python programs is easy: a bug or bad input will never cause a segmentation fault. Instead, when the interpreter discovers an error, it raises an exception. When the program doesn't catch the exception, the interpreter prints a stack trace. A source level debugger allows inspection of local and global variables, evaluation of arbitrary expressions, setting breakpoints, stepping through the code a line at a time, and so on. The debugger is written in Python itself, testifying to Python's introspective power. On the other hand, often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Category