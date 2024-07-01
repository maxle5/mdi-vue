
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronDoubleRight from "../../src/components/MdiChevronDoubleRight.vue";

test("MdiChevronDoubleRight snapshot", () => {
  const wrapper = mount(MdiChevronDoubleRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
