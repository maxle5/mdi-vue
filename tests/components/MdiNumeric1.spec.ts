
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric1 from "../../src/components/MdiNumeric1.vue";

test("MdiNumeric1 snapshot", () => {
  const wrapper = mount(MdiNumeric1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
