
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotDeadOutline from "../../src/components/MdiRobotDeadOutline.vue";

test("MdiRobotDeadOutline snapshot", () => {
  const wrapper = mount(MdiRobotDeadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
