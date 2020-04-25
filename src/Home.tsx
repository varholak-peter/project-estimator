import React, { useCallback, useEffect, useState } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import localForage from "localforage";

import { FragmentProps } from "./Fragments/@types";
import { loadFile } from "./serializer";

const projectMap = localForage.createInstance({
  name: "projectMap",
});

export const title = "Estimate-inator Automator";

export const Home = ({ dispatch, state }: FragmentProps) => {
  const [value, setValue] = useState("");
  const [projects, setProjects] = useState<string[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const storedProjects =
        (await localForage.getItem<string[]>("projects")) || [];
      setProjects(storedProjects);
      window.scrollTo({ top: 0 });
    };
    loadProjects();
  }, [setProjects]);

  const createNewProject = useCallback(async () => {
    await localForage.setItem<string[]>(
      "projects",
      Array.from(new Set([...projects, value]))
    );
    dispatch({ type: "$name", payload: value });
    dispatch({ type: "$step", payload: 1 });
  }, [dispatch, projects, value]);

  return (
    <Container
      disableGutters
      style={{ display: state.$step === 0 ? "block" : "none" }}
    >
      <Typography variant="h4" component="h1">
        {title}
      </Typography>

      {projects.map((projectName) => (
        <Container
          key={projectName}
          className="row confirm-input"
          disableGutters
          style={{ marginBottom: "1em" }}
        >
          <Typography variant="h6">{projectName}</Typography>
          <Button
            className="btn-small"
            style={{ marginRight: "1em" }}
            variant="outlined"
            color="primary"
            onClick={async () => {
              const projectState = await projectMap.getItem<object>(
                projectName
              );
              dispatch({ type: "$$load_project", payload: projectState });
            }}
          >
            Load
          </Button>
          <Button
            className="btn-small"
            variant="outlined"
            color="secondary"
            onClick={async () => {
              const newProjects = projects.filter(
                (project) => project !== projectName
              );
              await localForage.setItem<string[]>("projects", newProjects);
              setProjects(newProjects);
            }}
          >
            Remove
          </Button>
        </Container>
      ))}

      <Container className="confirm-input" disableGutters>
        <TextField
          label="Project Name"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              createNewProject();
            }
          }}
        />
        <Button
          className="btn-small"
          variant="contained"
          color="primary"
          onClick={createNewProject}
          style={{ marginRight: "1em" }}
        >
          New
        </Button>
        <Button
          className="btn-small"
          variant="outlined"
          color="primary"
          component="label"
        >
          Import
          <input
            type="file"
            onChange={async (e) => {
              if (!e.target.files || !e.target.files[0]) {
                return;
              }
              const projectState = await loadFile(e.target.files[0]);

              await localForage.setItem<string[]>(
                "projects",
                Array.from(new Set([...projects, projectState.$name]))
              );

              dispatch({ type: "$$load_project", payload: projectState });
            }}
            style={{ display: "none" }}
          />
        </Button>
      </Container>
    </Container>
  );
};
