
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLaunch from "../../src/components/MdiLaunch.vue";

test("MdiLaunch snapshot", () => {
  const wrapper = mount(MdiLaunch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
