
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarHearingOff from "../../src/components/MdiEarHearingOff.vue";

test("MdiEarHearingOff snapshot", () => {
  const wrapper = mount(MdiEarHearingOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
