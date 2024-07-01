
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultipleMinusOutline from "../../src/components/MdiAccountMultipleMinusOutline.vue";

test("MdiAccountMultipleMinusOutline snapshot", () => {
  const wrapper = mount(MdiAccountMultipleMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
