
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartPulse from "../../src/components/MdiHeartPulse.vue";

test("MdiHeartPulse snapshot", () => {
  const wrapper = mount(MdiHeartPulse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
