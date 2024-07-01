
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrosshairsOff from "../../src/components/MdiCrosshairsOff.vue";

test("MdiCrosshairsOff snapshot", () => {
  const wrapper = mount(MdiCrosshairsOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
