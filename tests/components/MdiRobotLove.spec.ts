
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotLove from "../../src/components/MdiRobotLove.vue";

test("MdiRobotLove snapshot", () => {
  const wrapper = mount(MdiRobotLove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
