---
title: "Washing Machine Panel based on Embedded Systems using STM32NUCLEO-L476RG"
collection: curricular
permalink: /publication/curricular-5
excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
date: 2023-05-20
---

**Task:**  
In this final unit assessment, you are required to design and implement the control panel of a washing machine using your STM32L476RG Nucleo-64 microcontroller development board. You will be expected to configure and make use of the various components that you have been using within the module so far (LEDs, buttons, sensors etc.), along with C++ software development (in either Mbed Studio or Keil Studio), to create a simulated washing machine control panel capable of the following functions: 
* **Power function** *(switch the washing machine on/off).*  
* **Wash cycle selection function** *(switch between a minimum of 2 cycle modes, indicate selected cycle).* 
* **Parameter check function** *(check and make decisions based on a measured input parameter, e.g. water temperature).*  
* **Run function** *(start cycle, complete required selected cycle, notify when cycle complete).* 
* **Status interface function** *(monitor the status of the washing machine via serial).*  

**You can extend the required functions beyond their identified basic requirements, and can also add your own extra functions to enhance your washing machine control panel.**  
 
With any project, it is a good idea to start small and build up step-by-step. The project might seem daunting at first, however, you have plenty of time to plan, implement and refine.  
Key advice: 
* Think carefully before you start your project and try to match your skills/experience to how far you plan to take the project. If you are too ambitious you might not finish the project on time. Conversely, choosing a project that is too simple won't achieve high marks. 
* Start simple and add features incrementally and test them for correct operation before integrating them into the larger program - this will keep the project progressing and ensures that you have known, stable versions of your program to refer to. 
* Keep regular backups of your program. 
* If you go down the wrong path and get stuck developing a feature, do not be afraid to delete the code and tackle the problem in a different way. This is a much better approach than to keep adding more code to fix issues. 
* Keep thinking and experimenting as you go, and you will develop your own style and approach to solving problems. 
* Make sure you insert comments as often as possible in your code, as they help you and other programmers reading your code understand what the various variables, functions and classes etc. do in the program.



**My Project:**  
My project involves the development of a washing machine control panel with two primary control modes: fully automatic and manual adjustment. The panel is designed with various components including buttons, indicators, a timer display window, sensors, a thermistor, and a buzzer. The buttons are for power, start, confirmation, and return, while the indicators show the process status. The panel also includes a pressure sensor, water temperature sensor, and a photoresistor.

In the fully automatic mode, the washing machine operates through a sequence of steps starting from powering on, checking sensor readings, selecting the wash cycle, and executing the wash process. This mode automates the washing process, including water inlet, washing, draining, and spinning, and employs various sensors to ensure safe operation. If the machine detects an overload or high temperature, it pauses and alerts the user with the buzzer. The user can also pause the machine manually during the process.

The manual adjustment mode allows more control over the washing process. After starting up and sensor checks, users can manually select the wash cycle and the specific operation they want the machine to perform, such as water inlet, washing, draining, or spinning. This mode also incorporates safety features similar to the automatic mode and allows for manual pausing of the wash cycle.

The design of the control panel involves programming and microcontroller utilization. Key programming concepts applied include the use of loops, conditional statements, and functions in C++. The project integrates knowledge of digital signal outputs, potentiometer use, and serial outputs to control various components of the washing machine, like LEDs and sensors. A significant part of the design process involved troubleshooting and debugging to ensure smooth operation of the control interface.

The presentation of the project demonstrates the functionality of the washing machine panel, including mode selection, process execution, and sensor operations. It highlights the interaction between different components and the overall user experience. Additionally, the project includes a status interface that communicates parameters and button presses to a computer.

Reflecting on the project, the developer discusses the learning experience, emphasizing the importance of programming skills, especially in C++. The project required a comprehensive understanding of microcontroller inputs and outputs, as well as effective use of programming constructs like loops and conditionals. Challenges faced during development, such as debugging and code optimization, provided valuable lessons in problem-solving and programming proficiency.

Here's my recording!
---

<div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
  <iframe src="//player.bilibili.com/player.html?bvid=BV19i4y1p7e8&page=1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allowfullscreen></iframe>
</div>
