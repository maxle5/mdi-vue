
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownBox from "../../src/components/MdiArrowDownBox.vue";

test("MdiArrowDownBox snapshot", () => {
  const wrapper = mount(MdiArrowDownBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
