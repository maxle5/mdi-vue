
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotExcitedOutline from "../../src/components/MdiRobotExcitedOutline.vue";

test("MdiRobotExcitedOutline snapshot", () => {
  const wrapper = mount(MdiRobotExcitedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
