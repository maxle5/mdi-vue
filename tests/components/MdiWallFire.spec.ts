
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallFire from "../../src/components/MdiWallFire.vue";

test("MdiWallFire snapshot", () => {
  const wrapper = mount(MdiWallFire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
