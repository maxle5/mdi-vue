
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerEditOutline from "../../src/components/MdiTimerEditOutline.vue";

test("MdiTimerEditOutline snapshot", () => {
  const wrapper = mount(MdiTimerEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
