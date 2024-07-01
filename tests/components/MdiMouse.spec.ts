
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouse from "../../src/components/MdiMouse.vue";

test("MdiMouse snapshot", () => {
  const wrapper = mount(MdiMouse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
