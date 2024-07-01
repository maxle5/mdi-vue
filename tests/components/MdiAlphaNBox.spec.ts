
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaNBox from "../../src/components/MdiAlphaNBox.vue";

test("MdiAlphaNBox snapshot", () => {
  const wrapper = mount(MdiAlphaNBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
