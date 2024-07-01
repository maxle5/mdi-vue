
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerPlay from "../../src/components/MdiTimerPlay.vue";

test("MdiTimerPlay snapshot", () => {
  const wrapper = mount(MdiTimerPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
