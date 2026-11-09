---
title: "A High-Fidelity Digital Twin for Robotic Manipulation Based on 3D Gaussian Splatting"
collection: publications
category: conferences
permalink: /publication/2026-digital-twin-3dgs
excerpt: ''
date: 2026-01-01
venue: 'arXiv preprint arXiv:2601.03200'
paperurl: 'https://arxiv.org/pdf/2601.03200'
authors: 'Z. Sun, <b>L. Bao</b>, T. Peng, J. Sun, C. Zhou'
citation: 'Z. Sun, <b>L. Bao</b>, T. Peng, J. Sun, C. Zhou. (2026). &quot;A High-Fidelity Digital Twin for Robotic Manipulation Based on 3D Gaussian Splatting.&quot; <i>arXiv preprint arXiv:2601.03200</i>.'
bibtex: |
  @misc{sun2026high,
    title         = {A High-Fidelity Digital Twin for Robotic Manipulation Based on 3D Gaussian Splatting},
    author        = {Sun, Ziyang and Bao, Lingfan and Peng, Tianhu and Sun, Jingcheng and Zhou, Chengxu},
    year          = {2026},
    eprint        = {2601.03200},
    archivePrefix = {arXiv},
    primaryClass  = {cs.RO},
    url           = {https://arxiv.org/abs/2601.03200}
  }
---

Developing high-fidelity, interactive digital twins is crucial for enabling closed-loop motion planning and reliable real-world robot execution, which are essential to advancing sim-to-real transfer. However, existing approaches often suffer from slow reconstruction, limited visual fidelity, and difficulties in converting photorealistic models into planning-ready collision geometry. We present a practical framework that constructs high-quality digital twins within minutes from sparse RGB inputs. Our system employs 3D Gaussian Splatting (3DGS) for fast, photorealistic reconstruction as a unified scene representation. We enhance 3DGS with visibility-aware semantic fusion for accurate 3D labelling and introduce an efficient, filter-based geometry conversion method to produce collision-ready models seamlessly integrated with a Unity-ROS2-MoveIt physics engine. In experiments with a Franka Emika Panda robot performing pick-and-place tasks, we demonstrate that this enhanced geometric accuracy effectively supports robust manipulation in real-world trials. These results demonstrate that 3DGS-based digital twins, enriched with semantic and geometric consistency, offer a fast, reliable, and scalable path from perception to manipulation in unstructured environments.
