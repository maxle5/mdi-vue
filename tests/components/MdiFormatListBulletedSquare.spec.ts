
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListBulletedSquare from "../../src/components/MdiFormatListBulletedSquare.vue";

test("MdiFormatListBulletedSquare snapshot", () => {
  const wrapper = mount(MdiFormatListBulletedSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
