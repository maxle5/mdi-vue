
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageSettingsOutline from "../../src/components/MdiMessageSettingsOutline.vue";

test("MdiMessageSettingsOutline snapshot", () => {
  const wrapper = mount(MdiMessageSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
