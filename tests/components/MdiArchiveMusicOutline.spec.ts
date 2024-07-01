
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveMusicOutline from "../../src/components/MdiArchiveMusicOutline.vue";

test("MdiArchiveMusicOutline snapshot", () => {
  const wrapper = mount(MdiArchiveMusicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
