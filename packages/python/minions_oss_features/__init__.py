"""
Minions Oss-features Python SDK

Feature backlog, daily picks, implementation plans, and acceptance criteria
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Oss-features.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
