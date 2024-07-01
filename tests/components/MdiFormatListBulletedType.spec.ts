
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListBulletedType from "../../src/components/MdiFormatListBulletedType.vue";

test("MdiFormatListBulletedType snapshot", () => {
  const wrapper = mount(MdiFormatListBulletedType, {});
  expect(wrapper.html()).toMatchSnapshot();
});
