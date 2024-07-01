
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotOffOutline from "../../src/components/MdiRobotOffOutline.vue";

test("MdiRobotOffOutline snapshot", () => {
  const wrapper = mount(MdiRobotOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
