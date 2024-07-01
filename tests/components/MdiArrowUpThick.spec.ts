
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpThick from "../../src/components/MdiArrowUpThick.vue";

test("MdiArrowUpThick snapshot", () => {
  const wrapper = mount(MdiArrowUpThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
