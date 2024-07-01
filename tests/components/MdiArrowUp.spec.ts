
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUp from "../../src/components/MdiArrowUp.vue";

test("MdiArrowUp snapshot", () => {
  const wrapper = mount(MdiArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
