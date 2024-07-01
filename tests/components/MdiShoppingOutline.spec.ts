
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoppingOutline from "../../src/components/MdiShoppingOutline.vue";

test("MdiShoppingOutline snapshot", () => {
  const wrapper = mount(MdiShoppingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
