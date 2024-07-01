
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerMarker from "../../src/components/MdiTimerMarker.vue";

test("MdiTimerMarker snapshot", () => {
  const wrapper = mount(MdiTimerMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
