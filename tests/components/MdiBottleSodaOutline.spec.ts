
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleSodaOutline from "../../src/components/MdiBottleSodaOutline.vue";

test("MdiBottleSodaOutline snapshot", () => {
  const wrapper = mount(MdiBottleSodaOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
