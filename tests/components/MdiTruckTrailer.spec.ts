
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckTrailer from "../../src/components/MdiTruckTrailer.vue";

test("MdiTruckTrailer snapshot", () => {
  const wrapper = mount(MdiTruckTrailer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
