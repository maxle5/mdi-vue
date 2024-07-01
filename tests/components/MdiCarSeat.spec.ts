
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSeat from "../../src/components/MdiCarSeat.vue";

test("MdiCarSeat snapshot", () => {
  const wrapper = mount(MdiCarSeat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
