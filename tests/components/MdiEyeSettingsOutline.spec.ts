
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeSettingsOutline from "../../src/components/MdiEyeSettingsOutline.vue";

test("MdiEyeSettingsOutline snapshot", () => {
  const wrapper = mount(MdiEyeSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
