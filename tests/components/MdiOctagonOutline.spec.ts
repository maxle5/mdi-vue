
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagonOutline from "../../src/components/MdiOctagonOutline.vue";

test("MdiOctagonOutline snapshot", () => {
  const wrapper = mount(MdiOctagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
