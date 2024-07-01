
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCamcorderOff from "../../src/components/MdiCamcorderOff.vue";

test("MdiCamcorderOff snapshot", () => {
  const wrapper = mount(MdiCamcorderOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
