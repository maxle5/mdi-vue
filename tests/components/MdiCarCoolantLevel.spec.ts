
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarCoolantLevel from "../../src/components/MdiCarCoolantLevel.vue";

test("MdiCarCoolantLevel snapshot", () => {
  const wrapper = mount(MdiCarCoolantLevel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
