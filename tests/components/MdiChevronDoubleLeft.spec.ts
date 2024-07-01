
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronDoubleLeft from "../../src/components/MdiChevronDoubleLeft.vue";

test("MdiChevronDoubleLeft snapshot", () => {
  const wrapper = mount(MdiChevronDoubleLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
