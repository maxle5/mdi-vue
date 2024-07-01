
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountHardHatOutline from "../../src/components/MdiAccountHardHatOutline.vue";

test("MdiAccountHardHatOutline snapshot", () => {
  const wrapper = mount(MdiAccountHardHatOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
