
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpThin from "../../src/components/MdiArrowUpThin.vue";

test("MdiArrowUpThin snapshot", () => {
  const wrapper = mount(MdiArrowUpThin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
