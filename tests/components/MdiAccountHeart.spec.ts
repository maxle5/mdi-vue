
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountHeart from "../../src/components/MdiAccountHeart.vue";

test("MdiAccountHeart snapshot", () => {
  const wrapper = mount(MdiAccountHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
