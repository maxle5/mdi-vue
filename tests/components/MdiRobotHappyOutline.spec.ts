
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotHappyOutline from "../../src/components/MdiRobotHappyOutline.vue";

test("MdiRobotHappyOutline snapshot", () => {
  const wrapper = mount(MdiRobotHappyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
