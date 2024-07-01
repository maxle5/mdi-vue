
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartHeart from "../../src/components/MdiCartHeart.vue";

test("MdiCartHeart snapshot", () => {
  const wrapper = mount(MdiCartHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
