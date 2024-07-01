
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareRoundedOutline from "../../src/components/MdiSquareRoundedOutline.vue";

test("MdiSquareRoundedOutline snapshot", () => {
  const wrapper = mount(MdiSquareRoundedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
