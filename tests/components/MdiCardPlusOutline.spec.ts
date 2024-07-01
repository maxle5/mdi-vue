
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardPlusOutline from "../../src/components/MdiCardPlusOutline.vue";

test("MdiCardPlusOutline snapshot", () => {
  const wrapper = mount(MdiCardPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
