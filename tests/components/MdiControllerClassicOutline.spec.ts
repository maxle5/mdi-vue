
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiControllerClassicOutline from "../../src/components/MdiControllerClassicOutline.vue";

test("MdiControllerClassicOutline snapshot", () => {
  const wrapper = mount(MdiControllerClassicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
