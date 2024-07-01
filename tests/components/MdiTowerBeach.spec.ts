
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTowerBeach from "../../src/components/MdiTowerBeach.vue";

test("MdiTowerBeach snapshot", () => {
  const wrapper = mount(MdiTowerBeach, {});
  expect(wrapper.html()).toMatchSnapshot();
});
