
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric5 from "../../src/components/MdiNumeric5.vue";

test("MdiNumeric5 snapshot", () => {
  const wrapper = mount(MdiNumeric5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
