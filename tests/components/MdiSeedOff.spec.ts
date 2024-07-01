
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeedOff from "../../src/components/MdiSeedOff.vue";

test("MdiSeedOff snapshot", () => {
  const wrapper = mount(MdiSeedOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
