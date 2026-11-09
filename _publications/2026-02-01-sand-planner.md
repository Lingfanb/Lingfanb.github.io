---
title: "SanD-Planner: Sample-Efficient Diffusion Planner in B-Spline Space for Robust Local Navigation"
collection: publications
category: conferences
permalink: /publication/2026-sand-planner
excerpt: ''
date: 2026-02-01
venue: 'Robotics: Science and Systems (RSS)'
venue_short: 'RSS 2026'
paperurl: 'https://arxiv.org/abs/2602.00923'
authors: 'J. Wang, <b>L. Bao</b>, T. Yang, D. Martinez Plasencia, J. Jiao, D. Kanoulas'
citation: 'J. Wang, <b>L. Bao</b>, T. Yang, D. Martinez Plasencia, J. Jiao, D. Kanoulas. (2026). &quot;SanD-Planner: Sample-Efficient Diffusion Planner in B-Spline Space for Robust Local Navigation.&quot; <i>Robotics: Science and Systems (RSS)</i>.'
bibtex: |
  @inproceedings{wang2026sand,
    title     = {SanD-Planner: Sample-Efficient Diffusion Planner in B-Spline Space for Robust Local Navigation},
    author    = {Wang, Jincheng and Bao, Lingfan and Yang, Tong and Martinez Plasencia, Diego and Jiao, Jianhao and Kanoulas, Dimitrios},
    booktitle = {Robotics: Science and Systems XXII},
    year      = {2026},
    doi       = {10.15607/rss.2026.xxii.069}
  }
---

The challenge of generating reliable local plans has long hindered practical applications in highly cluttered and dynamic environments. Key fundamental bottlenecks include acquiring large-scale expert demonstrations across diverse scenes and improving learning efficiency with limited data. This paper proposes SanD-Planner, a sample-efficient diffusion-based local planner that conducts depth image-based imitation learning within the clamped B-spline space. By operating within this compact space, the proposed algorithm inherently yields smooth outputs with bounded prediction errors over local supports, naturally aligning with receding-horizon execution. Integration of an ESDF-based safety checker with explicit clearance and time-to-completion metrics further reduces the training burden associated with value-function learning for feasibility assessment. Experiments show that training with 500 episodes (merely 0.25% of the demonstration scale used by the baseline), SanD-Planner achieves state-of-the-art performance on the evaluated open benchmark, attaining success rates of 90.1% in simulated cluttered environments and 72.0% in indoor simulations. The performance is further proven by demonstrating zero-shot transferability to realistic experimentation in both 2D and 3D scenes. The dataset and pre-trained models will also be open-sourced.
