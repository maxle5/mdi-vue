
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFractionOneHalf from "../../src/components/MdiFractionOneHalf.vue";

test("MdiFractionOneHalf snapshot", () => {
  const wrapper = mount(MdiFractionOneHalf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
