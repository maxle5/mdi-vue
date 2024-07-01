
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareOffOutline from "../../src/components/MdiSquareOffOutline.vue";

test("MdiSquareOffOutline snapshot", () => {
  const wrapper = mount(MdiSquareOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
