
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardBulletedOff from "../../src/components/MdiCardBulletedOff.vue";

test("MdiCardBulletedOff snapshot", () => {
  const wrapper = mount(MdiCardBulletedOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
