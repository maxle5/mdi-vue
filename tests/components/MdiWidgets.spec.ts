
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWidgets from "../../src/components/MdiWidgets.vue";

test("MdiWidgets snapshot", () => {
  const wrapper = mount(MdiWidgets, {});
  expect(wrapper.html()).toMatchSnapshot();
});
