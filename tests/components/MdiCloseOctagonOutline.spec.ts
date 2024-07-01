
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseOctagonOutline from "../../src/components/MdiCloseOctagonOutline.vue";

test("MdiCloseOctagonOutline snapshot", () => {
  const wrapper = mount(MdiCloseOctagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
