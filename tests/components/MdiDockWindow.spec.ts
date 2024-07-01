
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDockWindow from "../../src/components/MdiDockWindow.vue";

test("MdiDockWindow snapshot", () => {
  const wrapper = mount(MdiDockWindow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
