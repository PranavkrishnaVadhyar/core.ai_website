from fastapi import APIRouter


projects = APIRouter()


@projects.get("/get-projects")
def get_projects():
    return {"List of projects": []}


