
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatIndividualSuite from "../../src/components/MdiSeatIndividualSuite.vue";

test("MdiSeatIndividualSuite snapshot", () => {
  const wrapper = mount(MdiSeatIndividualSuite, {});
  expect(wrapper.html()).toMatchSnapshot();
});
