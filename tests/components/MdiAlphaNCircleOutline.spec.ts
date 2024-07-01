
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaNCircleOutline from "../../src/components/MdiAlphaNCircleOutline.vue";

test("MdiAlphaNCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaNCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
