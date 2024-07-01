
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowExpandDown from "../../src/components/MdiArrowExpandDown.vue";

test("MdiArrowExpandDown snapshot", () => {
  const wrapper = mount(MdiArrowExpandDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
