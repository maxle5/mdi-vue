
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarDefrostRear from "../../src/components/MdiCarDefrostRear.vue";

test("MdiCarDefrostRear snapshot", () => {
  const wrapper = mount(MdiCarDefrostRear, {});
  expect(wrapper.html()).toMatchSnapshot();
});
