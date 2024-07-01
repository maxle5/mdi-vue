
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLandPlotsMarker from "../../src/components/MdiLandPlotsMarker.vue";

test("MdiLandPlotsMarker snapshot", () => {
  const wrapper = mount(MdiLandPlotsMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
