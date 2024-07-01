
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronDoubleDown from "../../src/components/MdiChevronDoubleDown.vue";

test("MdiChevronDoubleDown snapshot", () => {
  const wrapper = mount(MdiChevronDoubleDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
