
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoSwitchOutline from "../../src/components/MdiVideoSwitchOutline.vue";

test("MdiVideoSwitchOutline snapshot", () => {
  const wrapper = mount(MdiVideoSwitchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
