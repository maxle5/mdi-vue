
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotherHeart from "../../src/components/MdiMotherHeart.vue";

test("MdiMotherHeart snapshot", () => {
  const wrapper = mount(MdiMotherHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
