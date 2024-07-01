
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardBulletedOutline from "../../src/components/MdiCardBulletedOutline.vue";

test("MdiCardBulletedOutline snapshot", () => {
  const wrapper = mount(MdiCardBulletedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
