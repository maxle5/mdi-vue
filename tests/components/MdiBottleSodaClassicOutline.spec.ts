
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleSodaClassicOutline from "../../src/components/MdiBottleSodaClassicOutline.vue";

test("MdiBottleSodaClassicOutline snapshot", () => {
  const wrapper = mount(MdiBottleSodaClassicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
