
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailMinusOutline from "../../src/components/MdiEmailMinusOutline.vue";

test("MdiEmailMinusOutline snapshot", () => {
  const wrapper = mount(MdiEmailMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
