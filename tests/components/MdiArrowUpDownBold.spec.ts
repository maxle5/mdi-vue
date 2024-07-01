
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpDownBold from "../../src/components/MdiArrowUpDownBold.vue";

test("MdiArrowUpDownBold snapshot", () => {
  const wrapper = mount(MdiArrowUpDownBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
