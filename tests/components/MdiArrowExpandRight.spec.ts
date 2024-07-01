
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowExpandRight from "../../src/components/MdiArrowExpandRight.vue";

test("MdiArrowExpandRight snapshot", () => {
  const wrapper = mount(MdiArrowExpandRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
