
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadphonesOff from "../../src/components/MdiHeadphonesOff.vue";

test("MdiHeadphonesOff snapshot", () => {
  const wrapper = mount(MdiHeadphonesOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
