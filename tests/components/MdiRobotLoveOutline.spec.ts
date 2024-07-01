
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotLoveOutline from "../../src/components/MdiRobotLoveOutline.vue";

test("MdiRobotLoveOutline snapshot", () => {
  const wrapper = mount(MdiRobotLoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
