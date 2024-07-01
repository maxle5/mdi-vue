
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaXBox from "../../src/components/MdiAlphaXBox.vue";

test("MdiAlphaXBox snapshot", () => {
  const wrapper = mount(MdiAlphaXBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
