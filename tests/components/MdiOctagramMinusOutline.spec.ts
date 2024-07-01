
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagramMinusOutline from "../../src/components/MdiOctagramMinusOutline.vue";

test("MdiOctagramMinusOutline snapshot", () => {
  const wrapper = mount(MdiOctagramMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
