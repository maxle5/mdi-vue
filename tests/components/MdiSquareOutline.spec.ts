
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareOutline from "../../src/components/MdiSquareOutline.vue";

test("MdiSquareOutline snapshot", () => {
  const wrapper = mount(MdiSquareOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
