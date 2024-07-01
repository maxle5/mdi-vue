
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowExpandLeft from "../../src/components/MdiArrowExpandLeft.vue";

test("MdiArrowExpandLeft snapshot", () => {
  const wrapper = mount(MdiArrowExpandLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
