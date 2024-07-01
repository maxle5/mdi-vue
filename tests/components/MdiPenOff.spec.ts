
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPenOff from "../../src/components/MdiPenOff.vue";

test("MdiPenOff snapshot", () => {
  const wrapper = mount(MdiPenOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
