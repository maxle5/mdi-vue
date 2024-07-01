
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowExpandUp from "../../src/components/MdiArrowExpandUp.vue";

test("MdiArrowExpandUp snapshot", () => {
  const wrapper = mount(MdiArrowExpandUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
