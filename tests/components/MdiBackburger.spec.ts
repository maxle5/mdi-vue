
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBackburger from "../../src/components/MdiBackburger.vue";

test("MdiBackburger snapshot", () => {
  const wrapper = mount(MdiBackburger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
