
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMatrix from "../../src/components/MdiMatrix.vue";

test("MdiMatrix snapshot", () => {
  const wrapper = mount(MdiMatrix, {});
  expect(wrapper.html()).toMatchSnapshot();
});
