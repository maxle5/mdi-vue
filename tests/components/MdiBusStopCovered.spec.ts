
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusStopCovered from "../../src/components/MdiBusStopCovered.vue";

test("MdiBusStopCovered snapshot", () => {
  const wrapper = mount(MdiBusStopCovered, {});
  expect(wrapper.html()).toMatchSnapshot();
});
