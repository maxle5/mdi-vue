
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneSearch from "../../src/components/MdiAirplaneSearch.vue";

test("MdiAirplaneSearch snapshot", () => {
  const wrapper = mount(MdiAirplaneSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
