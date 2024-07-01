
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirport from "../../src/components/MdiAirport.vue";

test("MdiAirport snapshot", () => {
  const wrapper = mount(MdiAirport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
