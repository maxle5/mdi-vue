
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotMowerOutline from "../../src/components/MdiRobotMowerOutline.vue";

test("MdiRobotMowerOutline snapshot", () => {
  const wrapper = mount(MdiRobotMowerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
