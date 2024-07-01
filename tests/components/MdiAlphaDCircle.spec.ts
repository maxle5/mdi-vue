
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaDCircle from "../../src/components/MdiAlphaDCircle.vue";

test("MdiAlphaDCircle snapshot", () => {
  const wrapper = mount(MdiAlphaDCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
