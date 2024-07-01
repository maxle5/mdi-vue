
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRocketLaunchOutline from "../../src/components/MdiRocketLaunchOutline.vue";

test("MdiRocketLaunchOutline snapshot", () => {
  const wrapper = mount(MdiRocketLaunchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
