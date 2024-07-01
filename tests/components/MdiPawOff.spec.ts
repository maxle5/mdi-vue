
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPawOff from "../../src/components/MdiPawOff.vue";

test("MdiPawOff snapshot", () => {
  const wrapper = mount(MdiPawOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
