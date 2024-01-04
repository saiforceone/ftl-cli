/**
 * @author SaiForceOne
 * @description functionality related to building details page components for the
 * frontend of a ST🌀RM Stack project
 */

// ST🌀RM Stack Imports
import FrontendOpt = STORMStackCLI.FrontendOpt;
import { LocaleManager } from '../localeManager.js';
import { getStandardImports } from './feHelperUtils.js';
import STORMController = STORMStackCLI.STORMController;

function getDetailsBuilder(
  frontendOpt: FrontendOpt,
  componentName: string,
  componentPath: string,
  controller: STORMController
): () => string {
  const localeData = LocaleManager.getInstance().getLocaleData();
  const execTime = new Date();
  const DETAIL_BUILDERS: Record<FrontendOpt, () => string> = {
    react: () => {
      return `// Generated by the ${
        localeData.misc.STORM_BRANDED
      } ${execTime.toLocaleDateString()}
// Core imports
${getStandardImports(frontendOpt)}
import { SiDiscord, SiGithub } from '@icons-pack/react-simple-icons';

/**
 * Temporary Constant Definitions
 * Developer Note: You should remove these constants since you probably won't really need them
 */
const PAGE_TITLE = 'ST🌀RM Stack';
const TECH_ICON_SIZE = 24;
const COMMON_HEADING_L3 = 'font-heading text-lg font-medium';
const COMMON_DETAILS_STYLE = 'border-slate-400 border-2 rounded p-2 mb-2';
const COMMON_SUMMARY_STYLE = 'font-medium text-slate-600 cursor-pointer';
const COMMON_SPAN_STYLE =
  'px-1 py-0.5 bg-storm-bg-dark rounded italic text-white font-bold';

// - END of Temporary Constant Definitions

/**
 * @function ${componentName}
 * @description Autogenerated page for ${componentName}
 * @constructor
 * @returns {React.ReactElement}
 */
function ${componentName}(): React.ReactElement {
  return (
    <div className="w-full min-h-screen flex flex-col p-2">
      <div className="min-h-full mx-auto w-full md:w-3/5 md:self-center">
        <header className="mb-4 text-center">
          <h1 className="text-4xl font-heading">${componentName} Page</h1>
          <p>Autogenerated by the ST🌀RM Stack</p>
        </header>
        <div className="text-center">
          <h2 className="text-2xl font-bold font-heading">What to do next</h2>
          <p className="text-lg">
            Now that you have generated a new module and have this placeholder
            component, here are things you should do next
          </p>
        </div>
        <section className="mt-4">
          <h3 className={COMMON_HEADING_L3}>Component Details</h3>
          <div className="p-1">
            <details className={COMMON_DETAILS_STYLE}>
              <summary className={COMMON_SUMMARY_STYLE}>
                Component Details
              </summary>
              <div className="table w-full">
                <div className="table-header-group">
                  <div className="table-row">
                    <div className="table-cell text-left">Component</div>
                    <div className="table-cell text-left">Detail</div>
                  </div>
                </div>
                <div className="table-row-group">
                  <div className="table-row">
                    <div className="table-cell text-left italic font-bold">
                      Module Name
                    </div>
                    <div className="table-cell text-left">
                      <span className={COMMON_SPAN_STYLE}>${componentName}</span>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell text-left italic font-bold">
                      API endpoint
                    </div>
                    <div className="table-cell text-left">
                      <span className={COMMON_SPAN_STYLE}>api/${
                        controller.endpointBase
                      }</span>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>
        <section className="mt-4">
          <div className="p-1">
            <h3 className={COMMON_HEADING_L3}>Frontend</h3>
            <details className={COMMON_DETAILS_STYLE}>
              <summary className={COMMON_SUMMARY_STYLE}>
                Edit this component
              </summary>
              <p className="text-lg">
                <span className={COMMON_SPAN_STYLE}>1.</span> Edit this frontend
                component{' '}
                <span className={COMMON_SPAN_STYLE}>
                  storm_fe_react/src/pages/${componentPath}.tsx
                </span>
              </p>
            </details>
          </div>
        </section>
        <section className="mt-4">
          <div className="p-1">
            <h3 className={COMMON_HEADING_L3}>Backend</h3>
            <details className={COMMON_DETAILS_STYLE}>
              <summary className={COMMON_SUMMARY_STYLE}>Edit the model</summary>
              <p className="text-lg">
                <span className={COMMON_SPAN_STYLE}>1.</span> Edit the
                corresponding model file in{' '}
                <span className={COMMON_SPAN_STYLE}>storm_models/${
                  controller.modelName
                }</span>
              </p>
            </details>
            <details className={COMMON_DETAILS_STYLE}>
              <summary className={COMMON_SUMMARY_STYLE}>
                Edit the controller
              </summary>
              <p className="text-lg">
                <span className={COMMON_SPAN_STYLE}>1.</span> Edit the
                corresponding controller file in&nbsp;
                <span className={COMMON_SPAN_STYLE}>
                  storm_controllers/${controller.controllerName}.py
                </span>
              </p>
              <p className="text-lg mt-1">
                <span className={COMMON_SPAN_STYLE}>2.</span> You will want to
                modify the get method of the controller to handle retrieving by
                an id
              </p>
            </details>
          </div>
        </section>
      </div>
      <footer
        className="mt-4 p-4 text-slate-600 flex flex-col items-center absolute bottom-0 left-0 right-0"
        id="storm-footer"
      >
        <p className="text-lg font-bold mb-2">Need help or have questions?</p>
        <div className="w-full md:w-3/5 grid grid-cols-2 gap-2">
          <div className="flex justify-center">
            <a
              className="flex items-center gap-x-1"
              href="https://discord.gg/sY3a5VN3y9"
              title="Link to the Peanut Cart Express Discord"
              target="_blank"
            >
              <SiDiscord size={TECH_ICON_SIZE} />
              P.C.E Discord
            </a>
          </div>
          <div className="flex justify-center">
            <a
              className="flex items-center gap-x-1"
              title="Link to the STORM Stack on Github"
              href="https://github.com/saiforceone/create-storm-stack"
              target="_blank"
            >
              <SiGithub size={TECH_ICON_SIZE} />
              {PAGE_TITLE}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default ${componentName};
`;
    },
    vue: () => {
      return `<script lang="ts">
// Generated by the ST🌀RM Stack ${new Date().toLocaleDateString()}
// core imports
${getStandardImports(frontendOpt)}


export default defineComponent({
  computed: {
    /**
     * Developer Note: you should remove these computed properties since you probably won't really need them
     */
    pageTitle: () => 'ST🌀RM Stack',
    techIconSize: () => 2.25,
    contactIconSize: () => 1.5,
    commonSpanStyle() {
      return "px-1 py-0.5 bg-storm-bg-dark rounded italic text-white font-bold";
    },
    commonSummaryStyle() {
      return "font-medium text-slate-600 cursor-pointer";
    },
    commonDetailStyle() {
      return "border-slate-400 border-2 rounded p-2 mb-2";
    },
    commonHeadingL3() {
      return "font-heading text-lg font-medium";
    }
    // - END of styles to be removed -
  },
  name: 'StormDetail',
});
</script>

<template>
  <div class="w-full min-h-screen flex flex-col p-2">
    <div class="min-h-full mx-auto w-full md:w-3/5 md:self-center">
      <header class="mb-4 text-center">
        <h1 class="text-4xl font-heading text-storm-bg-dark">${componentName} Page</h1>
        <p class="text-lg italic text-slate-700">Autogenerated by the ST🌀RM Stack</p>
      </header>
      <div class="text-center">
        <h2 class="text-2xl font-bold font-heading">What to do next</h2>
        <p class="text-lg">Now that you have generated a new module and have this placeholder component, here are things
          you should do next</p>
      </div>
      <section class="mt-4">
        <h3 :class="commonHeadingL3">Component Details</h3>
        <div class="p-1">
          <details :class="commonDetailStyle">
            <summary :class="commonSummaryStyle">Component Details</summary>
            <div class="table w-full">
              <div class="table-header-group">
                <div class="table-row">
                  <div class="table-cell text-left">Component</div>
                  <div class="table-cell text-left">Detail</div>
                </div>
              </div>
              <div class="table-row-group">
                <div class="table-row">
                  <div class="table-cell">Module Name</div>
                  <div class="table-cell"><span :class="commonSpanStyle">${
                    componentPath.split('/')[0]
                  }</span></div>
                </div>
                <div class="table-row">
                  <div class="table-cell">API endpoint</div>
                  <div class="table-cell"><span :class="commonSpanStyle">api/${
                    controller.endpointBase
                  }</span></div>
              </div>
            </div>
            </div>
          </details>
        </div>
      </section>
      <section class="mt-4">
        <h3 :class="commonHeadingL3">Frontend</h3>
        <div class="p-1">
          <details :class="commonDetailStyle">
            <summary :class="commonSummaryStyle">Edit this component</summary>
            <p>
              <span :class="commonSpanStyle">1.</span> Edit this component's markup in <span :class="commonSpanStyle">storm_fe_vue/src/pages/${componentPath}.vue</span>
            </p>
          </details>
        </div>
      </section>
      <section class="mt-4">
        <h3 :class="commonHeadingL3">Backend</h3>
        <div class="">
          <details :class="commonDetailStyle">
            <summary :class="commonSummaryStyle">Edit the model</summary>
            <p class="text-lg"><span :class="commonSpanStyle">1.</span> Edit the corresponding model file in <span
                :class="commonSpanStyle">storm_models/${
                  controller.modelName
                }</span></p>
          </details>
        </div>
        <div class="">
          <details :class="commonDetailStyle">
            <summary :class="commonSummaryStyle">Edit the Controller</summary>
            <p><span :class="commonSpanStyle">1.</span> Edit the corresponding controller file in <span
                :class="commonSpanStyle">storm_controllers/${
                  controller.controllerName
                }.py</span></p>
            <p class="mt-1"><span :class="commonSpanStyle">2.</span> You will want to modify the get method of the controller to
              handle retrieving by an id</p>
          </details>
        </div>
      </section>
    </div>
    <footer
      class="mt-4 p-2 text-slate-600 flex flex-col items-center absolute bottom-0 left-0 right-0"
      id="storm-footer"
    >
      <p class="text-lg">Need help or have questions?</p>
      <div class="w-full md:w-3/5 grid grid-cols-2 gap-2">
        <div>
          <a
            class="flex items-center gap-x-1"
            href="https://discord.gg/sY3a5VN3y9"
            title="Link to the Peanut Cart Express Discord"
            target="_blank"
          >
            <v-icon name="si-discord" :scale="contactIconSize"/>
            P.C.E Discord
          </a>
        </div>
        <div class="flex">
          <a
            class="flex items-center gap-x-1"
            title="Link to the STORM Stack on Github"
            href="https://github.com/saiforceone/create-storm-stack"
            target="_blank"
          >
            <v-icon name="si-github" :scale="contactIconSize"/>
            {{ pageTitle }} Stack Github
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

`;
    },
  };

  return DETAIL_BUILDERS[frontendOpt];
}

/**
 * @function generateDetailsPage
 * @param {FrontendOpt} frontendOpt
 * @param {string} componentName
 * @param {string} componentPath
 * @param {STORMController} controller
 * @returns {string} contents of the details page that should be written to disk
 */
function generateDetailsPage(
  frontendOpt: FrontendOpt,
  componentName: string,
  componentPath: string,
  controller: STORMController
): string {
  return getDetailsBuilder(
    frontendOpt,
    componentName,
    componentPath,
    controller
  )();
}

export default generateDetailsPage;
