
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountArrowUp from "../../src/components/MdiAccountArrowUp.vue";

test("MdiAccountArrowUp snapshot", () => {
  const wrapper = mount(MdiAccountArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
