
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaNBoxOutline from "../../src/components/MdiAlphaNBoxOutline.vue";

test("MdiAlphaNBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaNBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
