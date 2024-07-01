
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotConfusedOutline from "../../src/components/MdiRobotConfusedOutline.vue";

test("MdiRobotConfusedOutline snapshot", () => {
  const wrapper = mount(MdiRobotConfusedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
