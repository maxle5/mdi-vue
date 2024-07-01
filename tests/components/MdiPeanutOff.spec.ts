
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPeanutOff from "../../src/components/MdiPeanutOff.vue";

test("MdiPeanutOff snapshot", () => {
  const wrapper = mount(MdiPeanutOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
