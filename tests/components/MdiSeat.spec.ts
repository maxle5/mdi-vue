
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeat from "../../src/components/MdiSeat.vue";

test("MdiSeat snapshot", () => {
  const wrapper = mount(MdiSeat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
