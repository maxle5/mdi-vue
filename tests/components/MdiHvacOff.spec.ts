
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHvacOff from "../../src/components/MdiHvacOff.vue";

test("MdiHvacOff snapshot", () => {
  const wrapper = mount(MdiHvacOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
