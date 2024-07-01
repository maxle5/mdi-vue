
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpBox from "../../src/components/MdiArrowUpBox.vue";

test("MdiArrowUpBox snapshot", () => {
  const wrapper = mount(MdiArrowUpBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
