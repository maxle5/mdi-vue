
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronDoubleUp from "../../src/components/MdiChevronDoubleUp.vue";

test("MdiChevronDoubleUp snapshot", () => {
  const wrapper = mount(MdiChevronDoubleUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
