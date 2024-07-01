
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagazineRifle from "../../src/components/MdiMagazineRifle.vue";

test("MdiMagazineRifle snapshot", () => {
  const wrapper = mount(MdiMagazineRifle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
