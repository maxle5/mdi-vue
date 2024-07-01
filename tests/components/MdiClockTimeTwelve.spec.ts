
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeTwelve from "../../src/components/MdiClockTimeTwelve.vue";

test("MdiClockTimeTwelve snapshot", () => {
  const wrapper = mount(MdiClockTimeTwelve, {});
  expect(wrapper.html()).toMatchSnapshot();
});
