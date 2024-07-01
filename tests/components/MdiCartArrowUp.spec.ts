
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartArrowUp from "../../src/components/MdiCartArrowUp.vue";

test("MdiCartArrowUp snapshot", () => {
  const wrapper = mount(MdiCartArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
