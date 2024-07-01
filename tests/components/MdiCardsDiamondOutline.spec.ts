
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsDiamondOutline from "../../src/components/MdiCardsDiamondOutline.vue";

test("MdiCardsDiamondOutline snapshot", () => {
  const wrapper = mount(MdiCardsDiamondOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
