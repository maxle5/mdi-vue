
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWizardHat from "../../src/components/MdiWizardHat.vue";

test("MdiWizardHat snapshot", () => {
  const wrapper = mount(MdiWizardHat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
