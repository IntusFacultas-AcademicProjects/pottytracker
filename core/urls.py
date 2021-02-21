from .views import RecordViewSet, App
from rest_framework import routers
from django.urls import include, path
app_name = "core"

router = routers.DefaultRouter()
router.register(r"records", RecordViewSet, basename="records")

# urls = []
urlpatterns = [
    path("calendar", App.as_view(), name="app"),
    path("", App.as_view(), name="app"),
    path("", include(router.urls))
]
# urlpatterns = router.urls  # + urls
