
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteOff from "../../src/components/MdiDeleteOff.vue";

test("MdiDeleteOff snapshot", () => {
  const wrapper = mount(MdiDeleteOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
