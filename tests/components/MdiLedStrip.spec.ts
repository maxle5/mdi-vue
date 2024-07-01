
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLedStrip from "../../src/components/MdiLedStrip.vue";

test("MdiLedStrip snapshot", () => {
  const wrapper = mount(MdiLedStrip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
