
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeart from "../../src/components/MdiHeart.vue";

test("MdiHeart snapshot", () => {
  const wrapper = mount(MdiHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
