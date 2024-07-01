
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotAngryOutline from "../../src/components/MdiRobotAngryOutline.vue";

test("MdiRobotAngryOutline snapshot", () => {
  const wrapper = mount(MdiRobotAngryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
