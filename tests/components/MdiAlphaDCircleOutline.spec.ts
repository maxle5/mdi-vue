
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaDCircleOutline from "../../src/components/MdiAlphaDCircleOutline.vue";

test("MdiAlphaDCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaDCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
