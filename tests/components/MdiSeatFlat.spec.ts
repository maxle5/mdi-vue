
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatFlat from "../../src/components/MdiSeatFlat.vue";

test("MdiSeatFlat snapshot", () => {
  const wrapper = mount(MdiSeatFlat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
