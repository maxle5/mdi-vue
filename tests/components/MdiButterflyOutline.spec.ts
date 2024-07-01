
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiButterflyOutline from "../../src/components/MdiButterflyOutline.vue";

test("MdiButterflyOutline snapshot", () => {
  const wrapper = mount(MdiButterflyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
