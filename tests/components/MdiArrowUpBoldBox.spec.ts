
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpBoldBox from "../../src/components/MdiArrowUpBoldBox.vue";

test("MdiArrowUpBoldBox snapshot", () => {
  const wrapper = mount(MdiArrowUpBoldBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
