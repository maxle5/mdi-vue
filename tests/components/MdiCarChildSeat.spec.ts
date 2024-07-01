
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarChildSeat from "../../src/components/MdiCarChildSeat.vue";

test("MdiCarChildSeat snapshot", () => {
  const wrapper = mount(MdiCarChildSeat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
