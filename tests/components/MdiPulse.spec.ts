
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPulse from "../../src/components/MdiPulse.vue";

test("MdiPulse snapshot", () => {
  const wrapper = mount(MdiPulse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
