
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerMusicOutline from "../../src/components/MdiTimerMusicOutline.vue";

test("MdiTimerMusicOutline snapshot", () => {
  const wrapper = mount(MdiTimerMusicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
