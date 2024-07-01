
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowExpand from "../../src/components/MdiArrowExpand.vue";

test("MdiArrowExpand snapshot", () => {
  const wrapper = mount(MdiArrowExpand, {});
  expect(wrapper.html()).toMatchSnapshot();
});
