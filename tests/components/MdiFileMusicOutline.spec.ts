
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMusicOutline from "../../src/components/MdiFileMusicOutline.vue";

test("MdiFileMusicOutline snapshot", () => {
  const wrapper = mount(MdiFileMusicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
