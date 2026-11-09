---
title: "Beyond Kinematic Tracking: Preserving Expressive Characteristics in Humanoid Whole-Body Control"
collection: publications
category: selected
permalink: /publication/2026-beyond-kinematic-tracking
excerpt: ''
date: 2026-10-14
venue: 'arXiv preprint arXiv:2610.19393'
paperurl: 'https://arxiv.org/pdf/2610.19393'
authors: '<b>L. Bao</b>, H. Zhu, Y. Pan, J. Wang, J. Yu, T. Peng, Y. Jia, D. Kanoulas, C. Zhou'
citation: '<b>L. Bao</b>, H. Zhu, Y. Pan, J. Wang, J. Yu, T. Peng, Y. Jia, D. Kanoulas, C. Zhou. (2026). &quot;Beyond Kinematic Tracking: Preserving Expressive Characteristics in Humanoid Whole-Body Control.&quot; <i>arXiv preprint arXiv:2610.19393</i>.'
bibtex: |
  @misc{bao2026beyond,
    title         = {Beyond Kinematic Tracking: Preserving Expressive Characteristics in Humanoid Whole-Body Control},
    author        = {Bao, Lingfan and Zhu, Hanshang and Pan, Yan and Wang, Jincheng and Yu, Jingyang and Peng, Tianhu and Jia, Yiyang and Kanoulas, Dimitrios and Zhou, Chengxu},
    year          = {2026},
    eprint        = {2610.19393},
    archivePrefix = {arXiv},
    primaryClass  = {cs.RO},
    url           = {https://arxiv.org/abs/2610.19393}
  }
---

Whole-body control plays a crucial role in enabling humanoid robots to execute expressive motions. Faithful execution requires preserving both the intended action and its expressive characteristics. Existing whole-body trackers typically balance joint and keypoint tracking with physical stability across diverse motions, but these objectives do not necessarily prioritize the expressive characteristics of each action. Our analysis shows that lower average positional tracking error does not guarantee better preservation of dynamic and postural motion characteristics. To address this gap, we propose a residual learning framework with compensation objectives targeting amplitude, energy, body expansion, body lean, and pelvis height. To concentrate compensation while limiting interference with the underlying tracking behavior, motion-aware gating allocates correction capacity according to body-part activity, preserving larger correction ranges in more active parts and restricting them elsewhere. For each frozen tracker, we train motion-specific residual policies and distill them into a unified policy shared across motion categories. Simulation and physical experiments on the Unitree G1 across eight motion categories demonstrate superior preservation of dynamic and postural motion characteristics compared with the corresponding baselines.
