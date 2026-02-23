"""
Minions Oss-features SDK — Type Schemas
Custom MinionType schemas for Minions Oss-features.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

feature_type = MinionType(
    id="oss-features-feature",
    name="Feature",
    slug="feature",
    description="A feature in the backlog for an OSS project.",
    icon="🎯",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="acceptanceCriteria", type="string", label="acceptanceCriteria"),
        FieldDefinition(name="complexity", type="select", label="complexity"),
        FieldDefinition(name="priority", type="select", label="priority"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="selectedForDate", type="string", label="selectedForDate"),
        FieldDefinition(name="completedAt", type="string", label="completedAt"),
    ],
)

implementation_plan_type = MinionType(
    id="oss-features-implementation-plan",
    name="Implementation plan",
    slug="implementation-plan",
    description="A step-by-step plan for implementing a feature.",
    icon="📋",
    schema=[
        FieldDefinition(name="featureId", type="string", label="featureId"),
        FieldDefinition(name="steps", type="string", label="steps"),
        FieldDefinition(name="estimatedHours", type="number", label="estimatedHours"),
        FieldDefinition(name="filesAffected", type="string", label="filesAffected"),
        FieldDefinition(name="testsRequired", type="string", label="testsRequired"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

custom_types: list[MinionType] = [
    feature_type,
    implementation_plan_type,
]

