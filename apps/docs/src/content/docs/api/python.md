---
title: Python API
description: Python API reference for minions-oss-features
---

## `create_client(**kwargs)`

Create a new client instance.

```python
from minions_oss_features import create_client

client = create_client(debug=True)
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `**kwargs` | `Any` | — | Configuration options passed as keyword arguments |

### Returns

A dictionary with the `version` key and any provided options.
