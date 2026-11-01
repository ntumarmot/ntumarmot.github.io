---
title: Organizing Some Technical Notes
date: 2026-09-16
description: Personal notes on Python package and environment management tools.
---

The original Chinese version of this article was not polished with AI.

## Package management tools

### Why I looked into them

This semester I am taking Professor Chien-Chin Chen's course, Introduction to Information Retrieval and Text Mining. The first assignment asks us to implement tokenization ourselves, and one part allows us to use a package implementing Porter's Algorithm. I used this opportunity to take a closer look at several common Python package management tools.

### Conda

First up is Conda, a long-established package management tool. I installed the lighter-weight Miniconda distribution. One advantage of Conda is that it makes choosing a Python version easy. If a package depends on C or C++ libraries underneath, Conda can install those dependencies as well, which is very convenient. The downside is that it is relatively heavy.

The main commands are:

- Create an environment: `conda create -n env_name python=version`, for example `conda create -n my_env python=3.12`
- Activate the environment: `conda activate env_name`
- Install a package: `conda install package_name` or `pip install package_name`
- Leave the environment: `conda deactivate`

One thing to remember is that an environment created with `conda -n` is global. In simple terms, if you create an environment called `hw1`, it does not belong only to the current folder; it can be used anywhere on the computer. This is less convenient for me because I often work in different folders that need different Python versions.

Note: `conda create -p ./.conda python=3.12` solves this problem, but I find the syntax unattractive.

### venv

This one needs little introduction. Anyone who has written Python has probably used `python3 -m venv .venv`. The advantage is that the environment stays with the current folder. The disadvantage is that the command itself cannot choose a Python version.

### A compromise: uv

I first heard about uv in my sophomore year, but at the time I did not understand how it differed from the previous tools, so I did not use it. I now see that it has simple syntax, keeps the environment within a single folder, and can select a Python version. It fits my needs very well. uv is also extremely fast because it is implemented in Rust.

The main commands are:

- Create an environment: `uv venv --python version`, for example `uv venv --python 3.12`
- Activate the environment: `source .venv/bin/activate`
- Install a package: `uv pip install package_name`, or preferably `uv add package_name`, which makes dependencies easier to restore when rebuilding the environment
- Leave the environment: `deactivate`
