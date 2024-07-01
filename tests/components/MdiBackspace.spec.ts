
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBackspace from "../../src/components/MdiBackspace.vue";

test("MdiBackspace snapshot", () => {
  const wrapper = mount(MdiBackspace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
