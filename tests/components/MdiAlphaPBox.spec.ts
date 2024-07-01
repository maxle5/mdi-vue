
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaPBox from "../../src/components/MdiAlphaPBox.vue";

test("MdiAlphaPBox snapshot", () => {
  const wrapper = mount(MdiAlphaPBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
