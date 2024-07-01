
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRocketLaunch from "../../src/components/MdiRocketLaunch.vue";

test("MdiRocketLaunch snapshot", () => {
  const wrapper = mount(MdiRocketLaunch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
