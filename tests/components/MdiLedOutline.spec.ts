
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLedOutline from "../../src/components/MdiLedOutline.vue";

test("MdiLedOutline snapshot", () => {
  const wrapper = mount(MdiLedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
