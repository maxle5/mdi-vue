
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCallMissed from "../../src/components/MdiCallMissed.vue";

test("MdiCallMissed snapshot", () => {
  const wrapper = mount(MdiCallMissed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
