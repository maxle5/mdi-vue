
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCastOff from "../../src/components/MdiCastOff.vue";

test("MdiCastOff snapshot", () => {
  const wrapper = mount(MdiCastOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
