
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerMarkerOutline from "../../src/components/MdiTimerMarkerOutline.vue";

test("MdiTimerMarkerOutline snapshot", () => {
  const wrapper = mount(MdiTimerMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
