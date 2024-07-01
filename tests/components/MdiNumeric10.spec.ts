
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric10 from "../../src/components/MdiNumeric10.vue";

test("MdiNumeric10 snapshot", () => {
  const wrapper = mount(MdiNumeric10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
