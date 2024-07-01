
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatOutline from "../../src/components/MdiSeatOutline.vue";

test("MdiSeatOutline snapshot", () => {
  const wrapper = mount(MdiSeatOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
