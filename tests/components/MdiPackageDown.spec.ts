
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPackageDown from "../../src/components/MdiPackageDown.vue";

test("MdiPackageDown snapshot", () => {
  const wrapper = mount(MdiPackageDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
