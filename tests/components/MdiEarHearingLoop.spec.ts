
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarHearingLoop from "../../src/components/MdiEarHearingLoop.vue";

test("MdiEarHearingLoop snapshot", () => {
  const wrapper = mount(MdiEarHearingLoop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
