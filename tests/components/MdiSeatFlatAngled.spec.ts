
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatFlatAngled from "../../src/components/MdiSeatFlatAngled.vue";

test("MdiSeatFlatAngled snapshot", () => {
  const wrapper = mount(MdiSeatFlatAngled, {});
  expect(wrapper.html()).toMatchSnapshot();
});
