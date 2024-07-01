
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMinusOutline from "../../src/components/MdiFileMinusOutline.vue";

test("MdiFileMinusOutline snapshot", () => {
  const wrapper = mount(MdiFileMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
