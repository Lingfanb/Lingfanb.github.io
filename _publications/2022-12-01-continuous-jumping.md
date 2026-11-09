---
title: "Continuous Jumping for Legged Robots on Stepping Stones via Trajectory Optimization and Model Predictive Control"
collection: publications
category: selected
permalink: /publication/2022-continuous-jumping
excerpt: ''
date: 2022-12-01
venue: '2022 IEEE 61st Conference on Decision and Control (CDC)'
paperurl: 'https://arxiv.org/pdf/2204.01147'
youtube: 'jBGY1K1UbhM'
venue_short: 'CDC 2022'
highlight: true
authors: 'C. Nguyen*, <b>L. Bao*</b>, Q. Nguyen'
citation: 'C. Nguyen*, <b>L. Bao*</b>, Q. Nguyen. (2022). &quot;Continuous Jumping for Legged Robots on Stepping Stones via Trajectory Optimization and Model Predictive Control.&quot; <i>2022 IEEE 61st Conference on Decision and Control (CDC)</i>. (* Equal contribution)'
bibtex: |
  @inproceedings{nguyen2022continuous,
    title     = {Continuous Jumping for Legged Robots on Stepping Stones via Trajectory Optimization and Model Predictive Control},
    author    = {Nguyen, Chuong and Bao, Lingfan and Nguyen, Quan},
    booktitle = {2022 IEEE 61st Conference on Decision and Control (CDC)},
    pages     = {93--99},
    year      = {2022},
    doi       = {10.1109/cdc51059.2022.9993259}
  }
---

Performing highly agile dynamic motions, such as jumping or running on uneven stepping stones has remained a challenging problem in legged robot locomotion. This paper presents a framework that combines trajectory optimization and model predictive control to perform robust and consecutive jumping on stepping stones. In our approach, we first utilize trajectory optimization based on full-nonlinear dynamics of the robot to generate periodic jumping trajectories for various jumping distances. A jumping controller based on a model predictive control is then designed for realizing smooth jumping transitions, enabling the robot to achieve continuous jumps on stepping stones. Thanks to the incorporation of MPC as a real-time feedback controller, the proposed framework is also validated to be robust to uneven platforms with unknown height perturbations and model uncertainty on the robot dynamics.
