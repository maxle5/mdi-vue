
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneRemove from "../../src/components/MdiAirplaneRemove.vue";

test("MdiAirplaneRemove snapshot", () => {
  const wrapper = mount(MdiAirplaneRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
