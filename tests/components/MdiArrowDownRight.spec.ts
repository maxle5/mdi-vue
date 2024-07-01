
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownRight from "../../src/components/MdiArrowDownRight.vue";

test("MdiArrowDownRight snapshot", () => {
  const wrapper = mount(MdiArrowDownRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
