---
title: "Mastering Agile Jumping Skills from Simple Practices with Iterative Learning Control"
collection: publications
category: selected
permalink: /publication/2025-mastering-agile-jumping
excerpt: ''
date: 2025-05-01
venue: '2025 IEEE International Conference on Robotics and Automation (ICRA)'
paperurl: 'https://arxiv.org/pdf/2408.02619'
youtube: 'zbEB5bMBgY0'
venue_short: 'ICRA 2025'
highlight: true
authors: 'C. Nguyen*, <b>L. Bao*</b>, Q. Nguyen'
citation: 'C. Nguyen*, <b>L. Bao*</b>, Q. Nguyen. (2025). &quot;Mastering Agile Jumping Skills from Simple Practices with Iterative Learning Control.&quot; <i>2025 IEEE International Conference on Robotics and Automation (ICRA)</i>. (* Equal contribution)'
bibtex: |
  @inproceedings{nguyen2025mastering,
    title     = {Mastering Agile Jumping Skills from Simple Practices with Iterative Learning Control},
    author    = {Nguyen, Chuong and Bao, Lingfan and Nguyen, Quan},
    booktitle = {2025 IEEE International Conference on Robotics and Automation (ICRA)},
    pages     = {10237--10244},
    year      = {2025},
    doi       = {10.1109/icra55743.2025.11128629}
  }
---

Achieving precise target jumping with legged robots poses a significant challenge due to the long flight phase and the uncertainties inherent in contact dynamics and hardware. Forcefully attempting these agile motions on hardware could result in severe failures and potential damage. Motivated by these challenging problems, we propose an Iterative Learning Control (ILC) approach that aims to learn and refine jumping skills from easy to difficult, instead of directly learning these challenging tasks. We verify that learning from simplicity can enhance safety and target jumping accuracy over trials. Compared to other ILC approaches for legged locomotion, our method can tackle the problem of a long flight phase where control input is not available. In addition, our approach allows the robot to apply what it learns from a simple jumping task to accomplish more challenging tasks within a few trials directly in hardware, instead of learning from scratch. We validate the method via extensive experiments in the A1 model and hardware for various jumping tasks. Starting from a small jump (e.g., a forward leap of 40cm), our learning approach empowers the robot to accomplish a variety of challenging targets, including jumping onto a 20cm high box, jumping to a greater distance of up to 60cm, as well as performing jumps while carrying an unknown payload of 2kg. Our framework can allow the robot to reach the desired position and orientation targets with approximate errors of 1cm and 1 degree within a few trials.
