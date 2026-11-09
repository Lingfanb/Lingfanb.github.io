---
title: "Sim-to-Real Transfer in Deep Reinforcement Learning for Bipedal Locomotion"
collection: publications
category: selected
permalink: /publication/2025-sim-to-real-bipedal
excerpt: ''
date: 2025-11-01
venue: 'arXiv preprint arXiv:2511.06465'
paperurl: 'https://arxiv.org/pdf/2511.06465'
authors: '<b>L. Bao</b>, T. Peng, C. Zhou'
citation: '<b>L. Bao</b>, T. Peng, C. Zhou. (2025). &quot;Sim-to-Real Transfer in Deep Reinforcement Learning for Bipedal Locomotion.&quot; <i>arXiv preprint arXiv:2511.06465</i>.'
bibtex: |
  @misc{bao2025sim,
    title         = {Sim-to-Real Transfer in Deep Reinforcement Learning for Bipedal Locomotion},
    author        = {Bao, Lingfan and Peng, Tianhu and Zhou, Chengxu},
    year          = {2025},
    eprint        = {2511.06465},
    archivePrefix = {arXiv},
    primaryClass  = {cs.RO},
    url           = {https://arxiv.org/abs/2511.06465}
  }
---

This chapter addresses the critical challenge of simulation-to-reality (sim-to-real) transfer for deep reinforcement learning (DRL) in bipedal locomotion. After contextualizing the problem within various control architectures, we dissect the "curse of simulation" by analyzing the primary sources of sim-to-real gap: robot dynamics, contact modeling, state estimation, and numerical solvers. Building on this diagnosis, we structure the solutions around two complementary philosophies. The first is to shrink the gap through model-centric strategies that systematically improve the simulator's physical fidelity. The second is to harden the policy, a complementary approach that uses in-simulation robustness training and post-deployment adaptation to make the policy inherently resilient to model inaccuracies. The chapter concludes by synthesizing these philosophies into a strategic framework, providing a clear roadmap for developing and evaluating robust sim-to-real solutions.
