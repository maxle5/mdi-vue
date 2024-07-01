
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBabyCarriageOff from "../../src/components/MdiBabyCarriageOff.vue";

test("MdiBabyCarriageOff snapshot", () => {
  const wrapper = mount(MdiBabyCarriageOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
