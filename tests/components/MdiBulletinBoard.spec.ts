
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBulletinBoard from "../../src/components/MdiBulletinBoard.vue";

test("MdiBulletinBoard snapshot", () => {
  const wrapper = mount(MdiBulletinBoard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
