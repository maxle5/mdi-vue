
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaNCircle from "../../src/components/MdiAlphaNCircle.vue";

test("MdiAlphaNCircle snapshot", () => {
  const wrapper = mount(MdiAlphaNCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
