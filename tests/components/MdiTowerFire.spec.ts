
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTowerFire from "../../src/components/MdiTowerFire.vue";

test("MdiTowerFire snapshot", () => {
  const wrapper = mount(MdiTowerFire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
