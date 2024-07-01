
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLedOn from "../../src/components/MdiLedOn.vue";

test("MdiLedOn snapshot", () => {
  const wrapper = mount(MdiLedOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
