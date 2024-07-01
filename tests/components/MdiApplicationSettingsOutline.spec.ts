
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationSettingsOutline from "../../src/components/MdiApplicationSettingsOutline.vue";

test("MdiApplicationSettingsOutline snapshot", () => {
  const wrapper = mount(MdiApplicationSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
