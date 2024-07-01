
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatPilcrow from "../../src/components/MdiFormatPilcrow.vue";

test("MdiFormatPilcrow snapshot", () => {
  const wrapper = mount(MdiFormatPilcrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
