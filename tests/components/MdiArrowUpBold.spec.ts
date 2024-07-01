
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpBold from "../../src/components/MdiArrowUpBold.vue";

test("MdiArrowUpBold snapshot", () => {
  const wrapper = mount(MdiArrowUpBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
