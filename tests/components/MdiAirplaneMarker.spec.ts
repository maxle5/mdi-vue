
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneMarker from "../../src/components/MdiAirplaneMarker.vue";

test("MdiAirplaneMarker snapshot", () => {
  const wrapper = mount(MdiAirplaneMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
