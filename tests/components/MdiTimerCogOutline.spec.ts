
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerCogOutline from "../../src/components/MdiTimerCogOutline.vue";

test("MdiTimerCogOutline snapshot", () => {
  const wrapper = mount(MdiTimerCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
