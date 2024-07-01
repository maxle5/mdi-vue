
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioTower from "../../src/components/MdiRadioTower.vue";

test("MdiRadioTower snapshot", () => {
  const wrapper = mount(MdiRadioTower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
