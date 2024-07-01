
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireplaceOff from "../../src/components/MdiFireplaceOff.vue";

test("MdiFireplaceOff snapshot", () => {
  const wrapper = mount(MdiFireplaceOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
