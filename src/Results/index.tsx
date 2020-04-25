import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";

import { FragmentProps } from "../Fragments/@types";
import { calculate, getMeta, Meta, Output } from "../calculator";
import { saveFile } from "../serializer";

import * as AuthorizationTexts from "./authorization";
import * as DocumentationTexts from "./documentation";
import * as FeaturesTexts from "./features";
import * as MaintenanceTexts from "./maintenance";
import * as PagesTexts from "./pages";
import * as SetupTexts from "./setup";
import * as StyleguideTexts from "./styleguide";
import * as UserFlowsTexts from "./userFlows";

const ConfigContext = React.createContext({
  hideZero: true,
});

type ResultProps = {
  label: string;
  md: number;
  text: string;
};

const Result = ({ label, md, text }: ResultProps) => {
  const { hideZero } = useContext(ConfigContext);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const copyToClipboard = useCallback(() => {
    textFieldRef.current!.select();
    document.execCommand("copy");
  }, [textFieldRef]);

  return hideZero && md === 0 ? null : (
    <Container className="result">
      <Typography variant="h6" component="h3" style={{ display: "flex" }}>
        {`${label} (${md})`}
        <Button
          color="primary"
          onClick={copyToClipboard}
          style={{ marginLeft: "auto" }}
        >
          Copy
        </Button>
      </Typography>
      <TextField
        inputRef={textFieldRef}
        fullWidth
        multiline
        InputProps={{
          readOnly: true,
        }}
        value={text}
      />
    </Container>
  );
};

export const Results = ({ dispatch, state }: FragmentProps) => {
  const [results, setResults] = useState<Output | null>(null);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [hideZero, setHideZero] = useState(true);

  const config = useMemo(
    () => ({
      hideZero,
    }),
    [hideZero]
  );

  useEffect(() => {
    if (state.$step === 3) {
      const calculation = calculate(state);
      const meta = getMeta(state, calculation);
      console.log(calculation);
      console.log(meta);

      setResults(calculation);
      setMeta(meta);
    }
  }, [setMeta, setResults, state]);

  return results ? (
    <ConfigContext.Provider value={config}>
      <Container
        disableGutters
        style={{ display: state.$step === 3 ? "block" : "none" }}
      >
        <Container disableGutters style={{ textAlign: "right" }}>
          <FormControlLabel
            checked={hideZero}
            control={<Checkbox />}
            label="Hide 0 MD"
            onChange={() => setHideZero(!hideZero)}
          />
        </Container>

        <Typography variant="h4" component="h1">
          {`Results (${state.$name})`}
        </Typography>

        {meta ? (
          <>
            <Typography variant="h5" className="result-txt">
              Deadline in days:
              <Typography variant="h4" component="strong">
                {meta.deadlineInDays}
              </Typography>
            </Typography>
            <Typography variant="h5" className="result-txt">
              Developers needed:
              <Typography variant="h4" component="strong">
                {meta.developers}
              </Typography>
            </Typography>
            <Typography variant="h5" className="result-txt">
              Duration in MD:
              <Typography variant="h3" component="strong">
                {meta.durationInMD}
              </Typography>
            </Typography>
          </>
        ) : null}

        <Divider />

        <Container className="result-group" disableGutters>
          <Typography variant="h5" component="h2">
            Bootstrapping
          </Typography>
          <Result
            label="Setup"
            md={results.setup}
            text={SetupTexts.getSetupText()}
          />
          <Result
            label="Documentation"
            md={results.documentation}
            text={DocumentationTexts.getDocumentationText()}
          />
          <Result
            label="Typography"
            md={results.styleguide.typography}
            text={StyleguideTexts.getTypographyText()}
          />
          <Result
            label="Layout"
            md={results.styleguide.layout}
            text={StyleguideTexts.getLayoutText()}
          />
          <Result
            label="Forms"
            md={results.styleguide.forms}
            text={StyleguideTexts.getFormsText()}
          />
        </Container>

        <Container className="result-group" disableGutters>
          <Typography variant="h5" component="h2">
            Authorization
          </Typography>
          <Result
            label="Sign Up"
            md={results.authorization.sign_up}
            text={AuthorizationTexts.getSignUpText()}
          />
          <Result
            label="Sign In"
            md={results.authorization.sign_in}
            text={AuthorizationTexts.getSignInText()}
          />
        </Container>

        <Container className="result-group" disableGutters>
          <Typography variant="h5" component="h2">
            Pages
          </Typography>
          <Result
            label="Profile"
            md={results.pages.profile}
            text={PagesTexts.getProfileText()}
          />
          <Result
            label="Search"
            md={results.pages.search}
            text={PagesTexts.getSearchText()}
          />
          <Result
            label="Billing"
            md={results.pages.billing}
            text={PagesTexts.getBillingText()}
          />
          <Result
            label="About Us"
            md={results.pages.about_us}
            text={PagesTexts.getAboutUsText()}
          />
          <Result
            label="Contact Us"
            md={results.pages.contact_us}
            text={PagesTexts.getContactUsText()}
          />
          <Result
            label="FAQ"
            md={results.pages.faq}
            text={PagesTexts.getFAQText()}
          />
          <Result
            label="Legal"
            md={results.pages.legal}
            text={PagesTexts.getLegalText()}
          />
          {Object.entries(results.pages.pages).map(([label, md]) => (
            <Result
              key={label}
              label={label}
              md={md}
              text={PagesTexts.getPagesText()}
            />
          ))}
        </Container>

        <Container className="result-group" disableGutters>
          <Typography variant="h5" component="h2">
            Features
          </Typography>
          <Result
            label="Search"
            md={results.features.search}
            text={FeaturesTexts.getSearchText()}
          />
          <Result
            label="Billing"
            md={results.features.billing}
            text={FeaturesTexts.getBillingText()}
          />
          <Result
            label="Analytics"
            md={results.features.analytics}
            text={FeaturesTexts.getAnalyticsText()}
          />
          <Result
            label="SEO"
            md={results.features.seo}
            text={FeaturesTexts.getSeoText()}
          />
          <Result
            label="Browser Features"
            md={results.features.browser_features}
            text={FeaturesTexts.getBrowserFeaturesText()}
          />
          {Object.entries(results.features.features).map(([label, md]) => (
            <Result
              key={label}
              label={label}
              md={md}
              text={FeaturesTexts.getFeaturesText()}
            />
          ))}
        </Container>

        <Container className="result-group" disableGutters>
          <Typography variant="h5" component="h2">
            Maintenance
          </Typography>
          <Result
            label="Admin"
            md={results.maintenance.admin}
            text={MaintenanceTexts.getAdminText()}
          />
          <Result
            label="CMS"
            md={results.maintenance.cms}
            text={MaintenanceTexts.getCMSText()}
          />
        </Container>

        <Container className="result-group" disableGutters>
          <Typography variant="h5" component="h2">
            User Flows
          </Typography>
          {Object.entries(results.user_flows.user_flows).map(([label, md]) => (
            <Result
              key={label}
              label={label}
              md={md}
              text={UserFlowsTexts.getUserFlowsText()}
            />
          ))}
        </Container>

        <Container className="row btn-group" disableGutters>
          <Button
            className="btn"
            variant="outlined"
            color="primary"
            onClick={() => dispatch({ type: "$step", payload: 2 })}
          >
            {"< Previous"}
          </Button>
          <Button
            className="btn"
            variant="outlined"
            color="secondary"
            onClick={() => {
              saveFile(
                `prj_${state.$name}_estimator_export`,
                JSON.stringify(state)
              );
            }}
          >
            Export
          </Button>
        </Container>
      </Container>
    </ConfigContext.Provider>
  ) : null;
};
