
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotOff from "../../src/components/MdiRobotOff.vue";

test("MdiRobotOff snapshot", () => {
  const wrapper = mount(MdiRobotOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
