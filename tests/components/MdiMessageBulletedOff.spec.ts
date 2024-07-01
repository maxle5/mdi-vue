
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageBulletedOff from "../../src/components/MdiMessageBulletedOff.vue";

test("MdiMessageBulletedOff snapshot", () => {
  const wrapper = mount(MdiMessageBulletedOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
