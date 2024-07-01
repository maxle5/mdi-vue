
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMultiplication from "../../src/components/MdiMultiplication.vue";

test("MdiMultiplication snapshot", () => {
  const wrapper = mount(MdiMultiplication, {});
  expect(wrapper.html()).toMatchSnapshot();
});
