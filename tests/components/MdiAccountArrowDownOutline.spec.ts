
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountArrowDownOutline from "../../src/components/MdiAccountArrowDownOutline.vue";

test("MdiAccountArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiAccountArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
