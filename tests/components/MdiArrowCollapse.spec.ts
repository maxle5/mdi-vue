
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowCollapse from "../../src/components/MdiArrowCollapse.vue";

test("MdiArrowCollapse snapshot", () => {
  const wrapper = mount(MdiArrowCollapse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
