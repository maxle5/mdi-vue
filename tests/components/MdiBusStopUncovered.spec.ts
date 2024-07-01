
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusStopUncovered from "../../src/components/MdiBusStopUncovered.vue";

test("MdiBusStopUncovered snapshot", () => {
  const wrapper = mount(MdiBusStopUncovered, {});
  expect(wrapper.html()).toMatchSnapshot();
});
