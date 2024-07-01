
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagazinePistol from "../../src/components/MdiMagazinePistol.vue";

test("MdiMagazinePistol snapshot", () => {
  const wrapper = mount(MdiMagazinePistol, {});
  expect(wrapper.html()).toMatchSnapshot();
});
