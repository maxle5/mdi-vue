
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobot from "../../src/components/MdiRobot.vue";

test("MdiRobot snapshot", () => {
  const wrapper = mount(MdiRobot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
