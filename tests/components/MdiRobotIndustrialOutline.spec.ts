
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotIndustrialOutline from "../../src/components/MdiRobotIndustrialOutline.vue";

test("MdiRobotIndustrialOutline snapshot", () => {
  const wrapper = mount(MdiRobotIndustrialOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
