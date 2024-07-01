
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotOutline from "../../src/components/MdiRobotOutline.vue";

test("MdiRobotOutline snapshot", () => {
  const wrapper = mount(MdiRobotOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
