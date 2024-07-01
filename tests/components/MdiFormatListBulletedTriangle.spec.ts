
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListBulletedTriangle from "../../src/components/MdiFormatListBulletedTriangle.vue";

test("MdiFormatListBulletedTriangle snapshot", () => {
  const wrapper = mount(MdiFormatListBulletedTriangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
