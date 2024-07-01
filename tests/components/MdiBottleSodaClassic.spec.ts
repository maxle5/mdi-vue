
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleSodaClassic from "../../src/components/MdiBottleSodaClassic.vue";

test("MdiBottleSodaClassic snapshot", () => {
  const wrapper = mount(MdiBottleSodaClassic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
