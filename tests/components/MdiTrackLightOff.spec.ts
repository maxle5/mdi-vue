
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrackLightOff from "../../src/components/MdiTrackLightOff.vue";

test("MdiTrackLightOff snapshot", () => {
  const wrapper = mount(MdiTrackLightOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
