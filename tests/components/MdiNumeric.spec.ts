
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric from "../../src/components/MdiNumeric.vue";

test("MdiNumeric snapshot", () => {
  const wrapper = mount(MdiNumeric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
