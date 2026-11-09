---
title: "Gait-Conditioned Reinforcement Learning with Multi-Phase Curriculum for Humanoid Locomotion"
collection: publications
category: conferences
permalink: /publication/2025-gait-conditioned-rl
excerpt: ''
date: 2025-07-01
venue: '2025 IEEE-RAS 24th International Conference on Humanoid Robots (Humanoids)'
paperurl: 'https://arxiv.org/pdf/2505.20619'
youtube: '9s9dERubIWA'
projecturl: 'https://ihcr.github.io/Gait-conditioned-humanoid-locomotion/'
venue_short: 'Humanoids 2025'
highlight: true
authors: 'T. Peng, <b>L. Bao</b>, C. Zhou'
citation: 'T. Peng, <b>L. Bao</b>, C. Zhou. (2025). &quot;Gait-Conditioned Reinforcement Learning with Multi-Phase Curriculum for Humanoid Locomotion.&quot; <i>2025 IEEE-RAS 24th International Conference on Humanoid Robots (Humanoids)</i>.'
bibtex: |
  @inproceedings{peng2025gait,
    title     = {Gait-Conditioned Reinforcement Learning with Multi-Phase Curriculum for Humanoid Locomotion},
    author    = {Peng, Tianhu and Bao, Lingfan and Zhou, Chengxu},
    booktitle = {2025 IEEE-RAS 24th International Conference on Humanoid Robots (Humanoids)},
    pages     = {1--7},
    year      = {2025},
    doi       = {10.1109/humanoids65713.2025.11203058}
  }
---

We present a unified gait-conditioned reinforcement learning framework that enables humanoid robots to perform standing, walking, running, and smooth transitions within a single recurrent policy. A compact reward routing mechanism dynamically activates gait-specific objectives based on a one-hot gait ID, mitigating reward interference and supporting stable multi-gait learning. Human-inspired reward terms promote biomechanically natural motions, such as straight-knee stance and coordinated arm-leg swing, without requiring motion capture data. A structured curriculum progressively introduces gait complexity and expands command space over multiple phases. In simulation, the policy successfully achieves robust standing, walking, running, and gait transitions. On the real Unitree G1 humanoid, we validate standing, walking, and walk-to-stand transitions, demonstrating stable and coordinated locomotion. This work provides a scalable, reference-free solution toward versatile and naturalistic humanoid control across diverse modes and environments.
