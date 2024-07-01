
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareEditOutline from "../../src/components/MdiSquareEditOutline.vue";

test("MdiSquareEditOutline snapshot", () => {
  const wrapper = mount(MdiSquareEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
