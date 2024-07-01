
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBullet from "../../src/components/MdiBullet.vue";

test("MdiBullet snapshot", () => {
  const wrapper = mount(MdiBullet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
