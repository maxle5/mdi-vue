
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterSettingsOutline from "../../src/components/MdiFilterSettingsOutline.vue";

test("MdiFilterSettingsOutline snapshot", () => {
  const wrapper = mount(MdiFilterSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
