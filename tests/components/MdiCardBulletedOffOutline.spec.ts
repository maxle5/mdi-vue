
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardBulletedOffOutline from "../../src/components/MdiCardBulletedOffOutline.vue";

test("MdiCardBulletedOffOutline snapshot", () => {
  const wrapper = mount(MdiCardBulletedOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
