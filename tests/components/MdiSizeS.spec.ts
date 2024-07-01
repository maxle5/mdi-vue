
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSizeS from "../../src/components/MdiSizeS.vue";

test("MdiSizeS snapshot", () => {
  const wrapper = mount(MdiSizeS, {});
  expect(wrapper.html()).toMatchSnapshot();
});
