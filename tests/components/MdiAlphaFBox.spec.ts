
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaFBox from "../../src/components/MdiAlphaFBox.vue";

test("MdiAlphaFBox snapshot", () => {
  const wrapper = mount(MdiAlphaFBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
