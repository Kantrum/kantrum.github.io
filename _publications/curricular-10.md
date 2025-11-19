---
title: "Stopwatch Design using FPGA boards"
collection: publications
permalink: /publication/curricular-10
excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
date: 2023-05-12
---


**Task:**
---
After the learning in Unit 4, I hope you all have got a further understanding of FPGA as well as practical experience in coding the FPGA board. So now, for the Unit 4 assessment, you will be invited to show your learning outcome by designing a Stopwatch based on the MAX10 FPGA architecture that you have been working with this semester. A template Quartus project that forms the foundation of your design is provided. It is up to you to edit and create new modules to achieve as much of the specified function as you can within the assessment time frame. In addition to the practical work, you will also be submitting a design report with which the template has been provided. You should answer all the sessions to the best of your ability, using diagrams and figures where appropriate to illustrate your answers.


<a href="../files/ELEC2665_Unit 4_Project_Brief.pdf" target="_blank">
  <button style="background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;">
    Download the ELEC2665 Unit 4 Project Brief (PDF)
  </button>
</a>



**My Project:**  
---
**1.Introduction of FPGA**  
Field-Programmable Gate Arrays (FPGAs) are semiconductor devices, based around a matrix of configurable logic blocks (CLBs) connected via programmable interconnects. These devices can be reprogrammed to desired application or functionality requirements after manufacturing, hence the name "field-programmable". They are a powerful tool in digital system design because they bridge the gap between expensive custom hardware (ASICs) and flexible but slower software solutions.

**2.Introduction of the project**  
This project's primary objective is to design a digital stopwatch on an FPGA board, specifically the MAX10 FPGA architecture. The stopwatch is intended to be a multifunctional timekeeper, capable of starting, stopping, resetting, and holding time. It is designed to present the elapsed time with a precision of up to one-hundredth of a second, using the seven-segment displays available on the board for visualization.

The project is divided into several main components, each serving a specific purpose in the overall design:  
* **Clock Divider:** This module takes the 50MHz clock signal from the FPGA and divides it down to a more manageable 100Hz signal that can be used by the Stopwatch Logic module. This operation is critical because the human eye can't perceive changes at the rate of the original 50MHz signal.  
* **Stopwatch Logic:** This is the heart of the stopwatch. It is responsible for counting the time and controlling the start, stop, and reset operations. It takes the clock signal from the Clock Divider and the control signals from the user to generate binary outputs representing minutes, seconds, and hundredths of seconds.  
* **Binary to Seven Segment Encoder:** This module takes the binary outputs from the Stopwatch Logic module and converts them into signals that can be displayed on the seven-segment displays.  
* **Stopwatch:** This is the top-level module. It ties all the other modules together, takes inputs from the external world (such as control signals from the user), and outputs the appropriate signals to the seven-segment displays.  

**3.My learning outcome**  
Through the process of designing, coding, and testing each of these modules, and integrating them into a complete system, I have deepened my understanding of digital system design with FPGAs. I have learned how to handle clock signals, develop complex control logic, convert between different data representations, and create hierarchical designs. This project has allowed me to apply theoretical concepts from digital system design in a practical context, and it has demonstrated the power and flexibility of FPGAs for implementing custom digital systems.

